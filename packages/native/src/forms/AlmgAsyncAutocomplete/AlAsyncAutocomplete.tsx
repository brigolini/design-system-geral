import { useState, useEffect, useRef, useCallback } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useCombobox } from 'downshift';
import { useController } from 'react-hook-form';
import type { AlmgAsyncAutocompleteProps } from '@almg/interfaces';
import type { AlmgComboboxOption } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgComboboxClasses } from '../../utils/classMap';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';
import { AlmgSpinner } from '../../feedback/AlmgSpinner';

const labelPositionMap: Record<string, string> = {
  left: almgComboboxClasses.wrapperLabelLeft,
  top: almgComboboxClasses.wrapperLabelTop,
  right: almgComboboxClasses.wrapperLabelRight,
};

export function AlmgAsyncAutocomplete<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  fetchOptions,
  debounceMs = 300,
  minChars = 1,
  label,
  labelPosition = 'top',
  placeholder = 'Search...',
  noResultsText = 'No results found',
  initialDisplayValue,
  errorPosition = 'bottom',
  loading: externalLoading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlmgAsyncAutocompleteProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlmgId(name);
  const { isDisabled } = useAlmgLoading(externalLoading, disabled);
  const errorMessage = fieldState.error?.message;
  const hasError = !!errorMessage;
  const isErrorRight = errorPosition === 'right';

  const [inputValue, setInputValue] = useState(initialDisplayValue ?? '');
  const [options, setOptions] = useState<AlmgComboboxOption[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const isLoading = externalLoading || isFetching;

  const debouncedFetch = useCallback(
    (query: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      if (query.length < minChars) {
        setOptions([]);
        return;
      }
      debounceRef.current = setTimeout(async () => {
        setIsFetching(true);
        try {
          const result = await fetchOptions(query);
          setOptions(result);
        } finally {
          setIsFetching(false);
        }
      }, debounceMs);
    },
    [fetchOptions, debounceMs, minChars],
  );

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const selectedItem = options.find((o) => o.value === field.value) ?? null;

  const {
    isOpen,
    getLabelProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox<AlmgComboboxOption>({
    items: options,
    selectedItem,
    inputValue,
    onInputValueChange: ({ inputValue: val, type }) => {
      if (
        type === useCombobox.stateChangeTypes.InputKeyDownEnter ||
        type === useCombobox.stateChangeTypes.ItemClick
      ) {
        return;
      }
      setInputValue(val ?? '');
      debouncedFetch(val ?? '');
    },
    onSelectedItemChange: ({ selectedItem: item }) => {
      field.onChange(item?.value ?? '');
      setInputValue(item?.label ?? '');
    },
    itemToString: (item) => item?.label ?? '',
    stateReducer: (_state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return {
            ...changes,
            inputValue: changes.selectedItem?.label ?? '',
          };
        default:
          return changes;
      }
    },
  });

  return (
    <div
      className={cn(almgComboboxClasses.wrapper, labelPositionMap[labelPosition])}
      data-testid={testId}
    >
      {label && (
        <AlmgLabel {...getLabelProps()} htmlFor={id} required={required}>
          {label}
        </AlmgLabel>
      )}
      {(() => {
        const errorElement = hasError && errorMessage && (
          <AlmgErrorMessage id={`${id}-error`}>{errorMessage}</AlmgErrorMessage>
        );
        const inputBlock = (
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              {...getInputProps()}
              id={id}
              placeholder={placeholder}
              disabled={isDisabled}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? `${id}-error` : undefined}
              className={cn(
                almgComboboxClasses.input,
                hasError && almgComboboxClasses.inputError,
                isDisabled && almgComboboxClasses.inputDisabled,
                isLoading && almgComboboxClasses.inputLoading,
                className,
              )}
            />
            {isLoading && (
              <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
                <AlmgSpinner size="sm" />
              </span>
            )}
            <ul
              {...getMenuProps()}
              className={cn(
                almgComboboxClasses.menu,
                isOpen && options.length > 0 && almgComboboxClasses.menuOpen,
              )}
            >
              {isOpen &&
                (options.length > 0
                  ? options.map((item, index) => (
                      <li
                        key={item.value}
                        {...getItemProps({ item, index })}
                        className={cn(
                          almgComboboxClasses.item,
                          highlightedIndex === index && almgComboboxClasses.itemHighlighted,
                          selectedItem?.value === item.value && almgComboboxClasses.itemSelected,
                        )}
                      >
                        {item.label}
                      </li>
                    ))
                  : inputValue.length >= minChars &&
                    !isFetching && (
                      <li className={almgComboboxClasses.noResults}>{noResultsText}</li>
                    ))}
            </ul>
          </div>
        );
        return isErrorRight ? (
          <div className="almg-error-right" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            {inputBlock}
            {errorElement}
          </div>
        ) : (
          <>
            {inputBlock}
            {errorElement}
          </>
        );
      })()}
    </div>
  );
}

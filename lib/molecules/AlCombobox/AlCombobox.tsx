import { useState, useMemo } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useCombobox } from 'downshift';
import { useController } from 'react-hook-form';
import type { AlComboboxProps, AlComboboxOption } from './AlCombobox.types';
import { cn } from '../../utils/cn';
import { alComboboxClasses } from '../../utils/classMap';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../../atoms/AlLabel';
import { AlErrorMessage } from '../../atoms/AlErrorMessage';
import { AlSpinner } from '../../atoms/AlSpinner';

const labelPositionMap: Record<string, string> = {
  left: alComboboxClasses.wrapperLabelLeft,
  top: alComboboxClasses.wrapperLabelTop,
  right: alComboboxClasses.wrapperLabelRight,
};

export function AlCombobox<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  options,
  label,
  labelPosition = 'top',
  placeholder = 'Search...',
  noResultsText = 'No results found',
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlComboboxProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);
  const errorMessage = fieldState.error?.message;
  const hasError = !!errorMessage;
  const isErrorRight = errorPosition === 'right';

  const [inputValue, setInputValue] = useState('');

  const filteredOptions = useMemo(() => {
    const lower = inputValue.toLowerCase();
    return options.filter((item) => item.label.toLowerCase().includes(lower));
  }, [options, inputValue]);

  const selectedItem = options.find((o) => o.value === field.value) ?? null;

  const {
    isOpen,
    getLabelProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox<AlComboboxOption>({
    items: filteredOptions,
    selectedItem,
    inputValue,
    onInputValueChange: ({ inputValue: val }) => {
      setInputValue(val ?? '');
    },
    onSelectedItemChange: ({ selectedItem: item }) => {
      field.onChange(item?.value ?? '');
    },
    itemToString: (item) => item?.label ?? '',
  });

  return (
    <div
      className={cn(alComboboxClasses.wrapper, labelPositionMap[labelPosition])}
      data-testid={testId}
    >
      {label && (
        <AlLabel {...getLabelProps()} htmlFor={id} required={required}>
          {label}
        </AlLabel>
      )}
      {(() => {
        const errorElement = hasError && errorMessage && (
          <AlErrorMessage id={`${id}-error`}>{errorMessage}</AlErrorMessage>
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
              aria-required={required || undefined}
              className={cn(
                alComboboxClasses.input,
                hasError && alComboboxClasses.inputError,
                isDisabled && alComboboxClasses.inputDisabled,
                isLoading && alComboboxClasses.inputLoading,
                className,
              )}
            />
            {isLoading && (
              <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
                <AlSpinner size="sm" />
              </span>
            )}
            <ul
              {...getMenuProps()}
              className={cn(
                alComboboxClasses.menu,
                isOpen && filteredOptions.length > 0 && alComboboxClasses.menuOpen,
              )}
            >
              {isOpen &&
                (filteredOptions.length > 0
                  ? filteredOptions.map((item, index) => (
                      <li
                        key={item.value}
                        {...getItemProps({ item, index })}
                        className={cn(
                          alComboboxClasses.item,
                          highlightedIndex === index && alComboboxClasses.itemHighlighted,
                          selectedItem?.value === item.value && alComboboxClasses.itemSelected,
                        )}
                      >
                        {item.label}
                      </li>
                    ))
                  : inputValue && (
                      <li className={alComboboxClasses.noResults}>{noResultsText}</li>
                    ))}
            </ul>
          </div>
        );
        return isErrorRight ? (
          <div className="al-error-right" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
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

import { useState, useMemo, useRef } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useCombobox, useMultipleSelection } from 'downshift';
import { useController } from 'react-hook-form';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { AlmgMultiSelectProps, AlmgMultiSelectOption } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgMultiSelectClasses } from '../../utils/classMap';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';

const labelPositionMap: Record<string, string> = {
  left: almgMultiSelectClasses.wrapperLabelLeft,
  top: almgMultiSelectClasses.wrapperLabelTop,
  right: almgMultiSelectClasses.wrapperLabelRight,
};

export function AlmgMultiSelect<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgMultiSelectProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlmgId(name);
  const { isDisabled } = useAlmgLoading(loading, disabled);
  const errorMessage = fieldState.error?.message;
  const hasError = !!errorMessage;
  const isErrorRight = errorPosition === 'right';
  const menuRef = useRef<HTMLUListElement>(null);

  const [inputValue, setInputValue] = useState('');

  // field.value is expected to be string[]
  const selectedValues: string[] = Array.isArray(field.value) ? field.value : [];
  const selectedItems = options.filter((o) => selectedValues.includes(o.value));

  const filteredOptions = useMemo(() => {
    const lower = inputValue.toLowerCase();
    return options.filter(
      (item) =>
        !selectedValues.includes(item.value) &&
        item.label.toLowerCase().includes(lower),
    );
  }, [options, inputValue, selectedValues]);

  const { getDropdownProps, removeSelectedItem } = useMultipleSelection<AlmgMultiSelectOption>({
    selectedItems,
    onStateChange: ({ selectedItems: newItems, type }) => {
      if (
        type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace ||
        type === useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete ||
        type === useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace ||
        type === useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem
      ) {
        field.onChange(newItems?.map((i) => i.value) ?? []);
      }
    },
  });

  const {
    isOpen,
    getLabelProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox<AlmgMultiSelectOption>({
    items: filteredOptions,
    inputValue,
    selectedItem: null,
    onInputValueChange: ({ inputValue: val }) => {
      setInputValue(val ?? '');
    },
    onSelectedItemChange: ({ selectedItem: item }) => {
      if (item) {
        field.onChange([...selectedValues, item.value]);
        setInputValue('');
      }
    },
    itemToString: (item) => item?.label ?? '',
    stateReducer: (_state, actionAndChanges) => {
      const { changes, type } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          return { ...changes, isOpen: true, inputValue: '' };
        default:
          return changes;
      }
    },
  });

  const virtualizer = useVirtualizer({
    count: filteredOptions.length,
    getScrollElement: () => menuRef.current,
    estimateSize: () => 36,
    overscan: 5,
  });

  return (
    <div
      className={cn(almgMultiSelectClasses.wrapper, labelPositionMap[labelPosition])}
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
            <div
              className={cn(
                almgMultiSelectClasses.inputArea,
                hasError && almgMultiSelectClasses.inputAreaError,
                isDisabled && almgMultiSelectClasses.inputAreaDisabled,
                className,
              )}
            >
              {selectedItems.map((item) => (
                <span key={item.value} className={almgMultiSelectClasses.chip}>
                  {item.label}
                  <button
                    type="button"
                    className={almgMultiSelectClasses.chipRemove}
                    onClick={() => removeSelectedItem(item)}
                    disabled={isDisabled}
                    aria-label={`Remove ${item.label}`}
                  >
                    ×
                  </button>
                </span>
              ))}
              <input
                {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
                id={id}
                placeholder={selectedItems.length === 0 ? placeholder : ''}
                disabled={isDisabled}
                aria-invalid={hasError || undefined}
                aria-describedby={hasError ? `${id}-error` : undefined}
                className={almgMultiSelectClasses.input}
              />
            </div>
            <ul
              {...getMenuProps({ ref: menuRef })}
              className={cn(
                almgMultiSelectClasses.menu,
                isOpen && filteredOptions.length > 0 && almgMultiSelectClasses.menuOpen,
              )}
            >
              {isOpen && filteredOptions.length > 0 && (
                <div
                  style={{
                    height: virtualizer.getTotalSize(),
                    position: 'relative',
                  }}
                >
                  {virtualizer.getVirtualItems().map((virtualItem) => {
                    const item = filteredOptions[virtualItem.index];
                    return (
                      <li
                        key={item.value}
                        {...getItemProps({ item, index: virtualItem.index })}
                        className={cn(
                          almgMultiSelectClasses.item,
                          highlightedIndex === virtualItem.index &&
                            almgMultiSelectClasses.itemHighlighted,
                        )}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          transform: `translateY(${virtualItem.start}px)`,
                        }}
                      >
                        {item.label}
                      </li>
                    );
                  })}
                </div>
              )}
              {isOpen && filteredOptions.length === 0 && inputValue && (
                <li className={almgMultiSelectClasses.item} style={{ color: 'var(--color-almg-brand-font-secondary)' }}>
                  {noResultsText}
                </li>
              )}
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

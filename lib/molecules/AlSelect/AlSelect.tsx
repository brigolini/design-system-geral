import type { FieldValues } from 'react-hook-form';
import { useSelect } from 'downshift';
import { useController } from 'react-hook-form';
import type { AlSelectProps, AlSelectOption } from './AlSelect.types';
import { cn } from '../../utils/cn';
import { alSelectClasses } from '../../utils/classMap';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../../atoms/AlLabel';
import { AlErrorMessage } from '../../atoms/AlErrorMessage';
import { AlSpinner } from '../../atoms/AlSpinner';

const labelPositionMap: Record<string, string> = {
  left: alSelectClasses.wrapperLabelLeft,
  top: alSelectClasses.wrapperLabelTop,
  right: alSelectClasses.wrapperLabelRight,
};

export function AlSelect<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  options,
  label,
  labelPosition = 'top',
  placeholder = 'Select...',
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlSelectProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);
  const errorMessage = fieldState.error?.message;
  const hasError = !!errorMessage;
  const isErrorRight = errorPosition === 'right';

  const selectedItem = options.find((o) => o.value === field.value) ?? null;

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useSelect<AlSelectOption>({
    items: options,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: item }) => {
      field.onChange(item?.value ?? '');
    },
    itemToString: (item) => item?.label ?? '',
  });

  return (
    <div
      className={cn(alSelectClasses.wrapper, labelPositionMap[labelPosition])}
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
            <button
              type="button"
              {...getToggleButtonProps()}
              id={id}
              disabled={isDisabled}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? `${id}-error` : undefined}
              aria-required={required || undefined}
              className={cn(
                alSelectClasses.trigger,
                isOpen && alSelectClasses.triggerOpen,
                hasError && alSelectClasses.triggerError,
                isDisabled && alSelectClasses.triggerDisabled,
                isLoading && alSelectClasses.triggerLoading,
                className,
              )}
            >
              <span className={!selectedItem ? alSelectClasses.placeholder : undefined}>
                {selectedItem ? selectedItem.label : placeholder}
              </span>
              {isLoading ? (
                <AlSpinner size="sm" />
              ) : (
                <svg
                  className={alSelectClasses.arrow}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <ul
              {...getMenuProps()}
              className={cn(
                alSelectClasses.menu,
                isOpen && alSelectClasses.menuOpen,
              )}
            >
              {isOpen &&
                options.map((item, index) => (
                  <li
                    key={item.value}
                    {...getItemProps({ item, index })}
                    className={cn(
                      alSelectClasses.item,
                      highlightedIndex === index && alSelectClasses.itemHighlighted,
                      selectedItem?.value === item.value && alSelectClasses.itemSelected,
                    )}
                  >
                    {item.label}
                  </li>
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

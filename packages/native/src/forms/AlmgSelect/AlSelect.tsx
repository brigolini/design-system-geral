import type { FieldValues } from 'react-hook-form';
import { useSelect } from 'downshift';
import { useController } from 'react-hook-form';
import type { AlmgSelectProps, AlmgSelectOption } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgSelectClasses } from '../../utils/classMap';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';
import { AlmgSpinner } from '../../feedback/AlmgSpinner';

const labelPositionMap: Record<string, string> = {
  left: almgSelectClasses.wrapperLabelLeft,
  top: almgSelectClasses.wrapperLabelTop,
  right: almgSelectClasses.wrapperLabelRight,
};

export function AlmgSelect<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgSelectProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlmgId(name);
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);
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
  } = useSelect<AlmgSelectOption>({
    items: options,
    selectedItem,
    onSelectedItemChange: ({ selectedItem: item }) => {
      field.onChange(item?.value ?? '');
    },
    itemToString: (item) => item?.label ?? '',
  });

  return (
    <div
      className={cn(almgSelectClasses.wrapper, labelPositionMap[labelPosition])}
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
            <button
              type="button"
              {...getToggleButtonProps()}
              id={id}
              disabled={isDisabled}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? `${id}-error` : undefined}
              aria-required={required || undefined}
              className={cn(
                almgSelectClasses.trigger,
                isOpen && almgSelectClasses.triggerOpen,
                hasError && almgSelectClasses.triggerError,
                isDisabled && almgSelectClasses.triggerDisabled,
                isLoading && almgSelectClasses.triggerLoading,
                className,
              )}
            >
              <span className={!selectedItem ? almgSelectClasses.placeholder : undefined}>
                {selectedItem ? selectedItem.label : placeholder}
              </span>
              {isLoading ? (
                <AlmgSpinner size="sm" />
              ) : (
                <svg
                  className={almgSelectClasses.arrow}
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
                almgSelectClasses.menu,
                isOpen && almgSelectClasses.menuOpen,
              )}
            >
              {isOpen &&
                options.map((item, index) => (
                  <li
                    key={item.value}
                    {...getItemProps({ item, index })}
                    className={cn(
                      almgSelectClasses.item,
                      highlightedIndex === index && almgSelectClasses.itemHighlighted,
                      selectedItem?.value === item.value && almgSelectClasses.itemSelected,
                    )}
                  >
                    {item.label}
                  </li>
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

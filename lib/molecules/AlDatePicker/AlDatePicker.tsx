import type { FieldValues } from 'react-hook-form';
import type { AlDatePickerProps } from './AlDatePicker.types';
import { cn } from '../../utils/cn';
import { alDatePickerClasses } from '../../utils/classMap';
import { useAlFormField } from '../../hooks/useAlFormField';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../../atoms/AlLabel';
import { AlErrorMessage } from '../../atoms/AlErrorMessage';

const labelPositionMap: Record<string, string> = {
  left: alDatePickerClasses.wrapperLabelLeft,
  top: alDatePickerClasses.wrapperLabelTop,
  right: alDatePickerClasses.wrapperLabelRight,
};

export function AlDatePicker<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  label,
  labelPosition = 'top',
  min,
  max,
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlDatePickerProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlFormField(form, name);
  const id = useAlId(name);
  const { isDisabled } = useAlLoading(loading, disabled);
  const isErrorRight = errorPosition === 'right';

  return (
    <div
      className={cn(alDatePickerClasses.wrapper, labelPositionMap[labelPosition])}
      data-testid={testId}
    >
      {label && (
        <AlLabel htmlFor={id} required={required}>
          {label}
        </AlLabel>
      )}
      {(() => {
        const errorElement = hasError && errorMessage && (
          <AlErrorMessage id={`${id}-error`}>{errorMessage}</AlErrorMessage>
        );
        const inputBlock = (
          <input
            id={id}
            type="date"
            min={min}
            max={max}
            {...registration}
            disabled={isDisabled}
            aria-invalid={hasError || undefined}
            aria-describedby={hasError ? `${id}-error` : undefined}
            aria-required={required || undefined}
            className={cn(
              alDatePickerClasses.input,
              hasError && alDatePickerClasses.inputError,
              isDisabled && alDatePickerClasses.inputDisabled,
              className,
            )}
          />
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

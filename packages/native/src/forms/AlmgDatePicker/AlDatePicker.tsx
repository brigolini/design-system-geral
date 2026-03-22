import type { FieldValues } from 'react-hook-form';
import type { AlmgDatePickerProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgDatePickerClasses } from '../../utils/classMap';
import { useAlmgFormField } from '../../hooks/useAlmgFormField';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';

const labelPositionMap: Record<string, string> = {
  left: almgDatePickerClasses.wrapperLabelLeft,
  top: almgDatePickerClasses.wrapperLabelTop,
  right: almgDatePickerClasses.wrapperLabelRight,
};

export function AlmgDatePicker<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgDatePickerProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlmgFormField(form, name);
  const id = useAlmgId(name);
  const { isDisabled } = useAlmgLoading(loading, disabled);
  const isErrorRight = errorPosition === 'right';

  return (
    <div
      className={cn(almgDatePickerClasses.wrapper, labelPositionMap[labelPosition])}
      data-testid={testId}
    >
      {label && (
        <AlmgLabel htmlFor={id} required={required}>
          {label}
        </AlmgLabel>
      )}
      {(() => {
        const errorElement = hasError && errorMessage && (
          <AlmgErrorMessage id={`${id}-error`}>{errorMessage}</AlmgErrorMessage>
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
              almgDatePickerClasses.input,
              hasError && almgDatePickerClasses.inputError,
              isDisabled && almgDatePickerClasses.inputDisabled,
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

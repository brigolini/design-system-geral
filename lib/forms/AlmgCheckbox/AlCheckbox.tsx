import type { FieldValues } from 'react-hook-form';
import type { AlmgCheckboxProps } from './AlCheckbox.types';
import { cn } from '../../utils/cn';
import { almgCheckboxClasses } from '../../utils/classMap';
import { useAlmgFormField } from '../../hooks/useAlmgFormField';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';

const labelPositionMap: Record<string, string> = {
  left: almgCheckboxClasses.wrapperLabelLeft,
  top: almgCheckboxClasses.wrapperLabelTop,
  right: almgCheckboxClasses.wrapperLabelRight,
};

export function AlmgCheckbox<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  label,
  labelPosition = 'right',
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  value,
  className,
  'data-testid': testId,
}: AlmgCheckboxProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlmgFormField(form, name);
  const id = useAlmgId(name);
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);

  const isErrorRight = errorPosition === 'right';

  const checkboxElement = (
    <>
      <input
        id={id}
        type="checkbox"
        value={value}
        {...registration}
        disabled={isDisabled}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${id}-error` : undefined}
        aria-required={required || undefined}
        className={cn(
          almgCheckboxClasses.checkbox,
          hasError && almgCheckboxClasses.error,
          isDisabled && almgCheckboxClasses.disabled,
          isLoading && almgCheckboxClasses.loading,
          className,
        )}
      />
      {label && (
        <AlmgLabel htmlFor={id} required={required}>
          {label}
        </AlmgLabel>
      )}
    </>
  );

  const errorElement = hasError && errorMessage && (
    <AlmgErrorMessage id={`${id}-error`}>{errorMessage}</AlmgErrorMessage>
  );

  return (
    <div data-testid={testId}>
      {isErrorRight ? (
        <div className="almg-error-right" style={{ display: 'flex', alignItems: 'center' }}>
          <div className={cn(almgCheckboxClasses.wrapper, labelPositionMap[labelPosition])}>
            {checkboxElement}
          </div>
          {errorElement}
        </div>
      ) : (
        <div className={cn(almgCheckboxClasses.wrapper, labelPositionMap[labelPosition])}>
          {checkboxElement}
          {errorElement}
        </div>
      )}
    </div>
  );
}

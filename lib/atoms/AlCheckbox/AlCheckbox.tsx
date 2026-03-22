import type { FieldValues } from 'react-hook-form';
import type { AlCheckboxProps } from './AlCheckbox.types';
import { cn } from '../../utils/cn';
import { alCheckboxClasses } from '../../utils/classMap';
import { useAlFormField } from '../../hooks/useAlFormField';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../AlLabel';
import { AlErrorMessage } from '../AlErrorMessage';

const labelPositionMap: Record<string, string> = {
  left: alCheckboxClasses.wrapperLabelLeft,
  top: alCheckboxClasses.wrapperLabelTop,
  right: alCheckboxClasses.wrapperLabelRight,
};

export function AlCheckbox<TFieldValues extends FieldValues = FieldValues>({
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
}: AlCheckboxProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlFormField(form, name);
  const id = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);

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
          alCheckboxClasses.checkbox,
          hasError && alCheckboxClasses.error,
          isDisabled && alCheckboxClasses.disabled,
          isLoading && alCheckboxClasses.loading,
          className,
        )}
      />
      {label && (
        <AlLabel htmlFor={id} required={required}>
          {label}
        </AlLabel>
      )}
    </>
  );

  const errorElement = hasError && errorMessage && (
    <AlErrorMessage id={`${id}-error`}>{errorMessage}</AlErrorMessage>
  );

  return (
    <div data-testid={testId}>
      {isErrorRight ? (
        <div className="al-error-right" style={{ display: 'flex', alignItems: 'center' }}>
          <div className={cn(alCheckboxClasses.wrapper, labelPositionMap[labelPosition])}>
            {checkboxElement}
          </div>
          {errorElement}
        </div>
      ) : (
        <div className={cn(alCheckboxClasses.wrapper, labelPositionMap[labelPosition])}>
          {checkboxElement}
          {errorElement}
        </div>
      )}
    </div>
  );
}

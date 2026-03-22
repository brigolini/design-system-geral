import type { FieldValues } from 'react-hook-form';
import type { AlInputProps } from './AlInput.types';
import { cn } from '../../utils/cn';
import { alInputClasses } from '../../utils/classMap';
import { useAlFormField } from '../../hooks/useAlFormField';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../AlLabel';
import { AlErrorMessage } from '../AlErrorMessage';
import { AlSpinner } from '../AlSpinner';

const labelPositionMap: Record<string, string> = {
  left: alInputClasses.wrapperLabelLeft,
  top: alInputClasses.wrapperLabelTop,
  right: alInputClasses.wrapperLabelRight,
};

export function AlInput<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  label,
  labelPosition = 'top',
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  helpText,
  type = 'text',
  className,
  'data-testid': testId,
  ...inputProps
}: AlInputProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlFormField(form, name);
  const id = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);
  const isErrorRight = errorPosition === 'right';

  const inputElement = (
    <div style={{ position: 'relative', flex: 1 }}>
      <input
        id={id}
        type={type}
        {...registration}
        {...inputProps}
        disabled={isDisabled}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${id}-error` : undefined}
        aria-required={required || undefined}
        className={cn(
          alInputClasses.input,
          hasError && alInputClasses.error,
          isDisabled && alInputClasses.disabled,
          isLoading && alInputClasses.loading,
          className,
        )}
      />
      {isLoading && (
        <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
          <AlSpinner size="sm" />
        </span>
      )}
    </div>
  );

  const errorElement = hasError && errorMessage && (
    <AlErrorMessage id={`${id}-error`}>{errorMessage}</AlErrorMessage>
  );

  return (
    <div
      className={cn(alInputClasses.wrapper, labelPositionMap[labelPosition])}
      data-testid={testId}
    >
      {label && (
        <AlLabel htmlFor={id} required={required}>
          {label}
        </AlLabel>
      )}
      {isErrorRight ? (
        <div className="almg-error-right" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {inputElement}
          {errorElement}
        </div>
      ) : (
        <>
          {inputElement}
          {helpText && !hasError && (
            <span style={{ fontSize: 'var(--font-size-almg-xs)', color: 'var(--color-almg-brand-font-secondary)' }}>
              {helpText}
            </span>
          )}
          {errorElement}
        </>
      )}
    </div>
  );
}

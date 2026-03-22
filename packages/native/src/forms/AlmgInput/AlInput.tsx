import type { FieldValues } from 'react-hook-form';
import type { AlmgInputProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgInputClasses } from '../../utils/classMap';
import { useAlmgFormField } from '../../hooks/useAlmgFormField';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';
import { AlmgSpinner } from '../../feedback/AlmgSpinner';

const labelPositionMap: Record<string, string> = {
  left: almgInputClasses.wrapperLabelLeft,
  top: almgInputClasses.wrapperLabelTop,
  right: almgInputClasses.wrapperLabelRight,
};

export function AlmgInput<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgInputProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlmgFormField(form, name);
  const id = useAlmgId(name);
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);
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
          almgInputClasses.input,
          hasError && almgInputClasses.error,
          isDisabled && almgInputClasses.disabled,
          isLoading && almgInputClasses.loading,
          className,
        )}
      />
      {isLoading && (
        <span style={{ position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)' }}>
          <AlmgSpinner size="sm" />
        </span>
      )}
    </div>
  );

  const errorElement = hasError && errorMessage && (
    <AlmgErrorMessage id={`${id}-error`}>{errorMessage}</AlmgErrorMessage>
  );

  return (
    <div
      className={cn(almgInputClasses.wrapper, labelPositionMap[labelPosition])}
      data-testid={testId}
    >
      {label && (
        <AlmgLabel htmlFor={id} required={required}>
          {label}
        </AlmgLabel>
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

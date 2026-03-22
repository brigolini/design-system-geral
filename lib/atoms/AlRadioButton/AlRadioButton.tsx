import type { FieldValues } from 'react-hook-form';
import type { AlRadioButtonProps } from './AlRadioButton.types';
import { cn } from '../../utils/cn';
import { alRadioButtonClasses } from '../../utils/classMap';
import { useAlFormField } from '../../hooks/useAlFormField';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../AlLabel';
import { AlErrorMessage } from '../AlErrorMessage';

export function AlRadioButton<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  label,
  options,
  direction = 'vertical',
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlRadioButtonProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlFormField(form, name);
  const groupId = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);
  const isErrorRight = errorPosition === 'right';

  const radioGroup = (
    <fieldset
      aria-describedby={hasError ? `${groupId}-error` : undefined}
      className={className}
      style={{ border: 'none', padding: 0, margin: 0 }}
    >
      {label && (
        <legend>
          <AlLabel required={required}>{label}</AlLabel>
        </legend>
      )}
      <div
        role="radiogroup"
        aria-required={required || undefined}
        style={{
          display: 'flex',
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
          gap: '8px',
          marginTop: label ? '8px' : undefined,
        }}
      >
        {options.map((option) => {
          const optionId = `${groupId}-${option.value}`;
          return (
            <div key={option.value} className={alRadioButtonClasses.wrapper}>
              <input
                id={optionId}
                type="radio"
                value={option.value}
                {...registration}
                disabled={isDisabled}
                aria-invalid={hasError || undefined}
                className={cn(
                  alRadioButtonClasses.radio,
                  hasError && alRadioButtonClasses.error,
                  isDisabled && alRadioButtonClasses.disabled,
                  isLoading && alRadioButtonClasses.loading,
                )}
              />
              <AlLabel htmlFor={optionId}>{option.label}</AlLabel>
            </div>
          );
        })}
      </div>
    </fieldset>
  );

  const errorElement = hasError && errorMessage && (
    <AlErrorMessage id={`${groupId}-error`}>{errorMessage}</AlErrorMessage>
  );

  return (
    <div data-testid={testId}>
      {isErrorRight ? (
        <div className="almg-error-right" style={{ display: 'flex', alignItems: 'flex-start' }}>
          {radioGroup}
          {errorElement}
        </div>
      ) : (
        <>
          {radioGroup}
          {errorElement}
        </>
      )}
    </div>
  );
}

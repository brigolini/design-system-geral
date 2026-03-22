import type { FieldValues } from 'react-hook-form';
import type { AlmgRadioButtonProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgRadioButtonClasses } from '../../utils/classMap';
import { useAlmgFormField } from '../../hooks/useAlmgFormField';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';

export function AlmgRadioButton<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgRadioButtonProps<TFieldValues>) {
  const { registration, errorMessage, hasError } = useAlmgFormField(form, name);
  const groupId = useAlmgId(name);
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);
  const isErrorRight = errorPosition === 'right';

  const radioGroup = (
    <fieldset
      aria-describedby={hasError ? `${groupId}-error` : undefined}
      className={className}
      style={{ border: 'none', padding: 0, margin: 0 }}
    >
      {label && (
        <legend>
          <AlmgLabel required={required}>{label}</AlmgLabel>
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
            <div key={option.value} className={almgRadioButtonClasses.wrapper}>
              <input
                id={optionId}
                type="radio"
                value={option.value}
                {...registration}
                disabled={isDisabled}
                aria-invalid={hasError || undefined}
                className={cn(
                  almgRadioButtonClasses.radio,
                  hasError && almgRadioButtonClasses.error,
                  isDisabled && almgRadioButtonClasses.disabled,
                  isLoading && almgRadioButtonClasses.loading,
                )}
              />
              <AlmgLabel htmlFor={optionId}>{option.label}</AlmgLabel>
            </div>
          );
        })}
      </div>
    </fieldset>
  );

  const errorElement = hasError && errorMessage && (
    <AlmgErrorMessage id={`${groupId}-error`}>{errorMessage}</AlmgErrorMessage>
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

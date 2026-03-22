import { useCallback } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { AlCurrencyInputProps } from './AlCurrencyInput.types';
import { cn } from '../../utils/cn';
import { alCurrencyInputClasses } from '../../utils/classMap';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../../atoms/AlLabel';
import { AlErrorMessage } from '../../atoms/AlErrorMessage';
import { AlSpinner } from '../../atoms/AlSpinner';

const labelPositionMap: Record<string, string> = {
  left: alCurrencyInputClasses.wrapperLabelLeft,
  top: alCurrencyInputClasses.wrapperLabelTop,
  right: alCurrencyInputClasses.wrapperLabelRight,
};

function formatCurrency(
  value: string,
  thousandsSeparator: string,
  decimalSeparator: string,
  decimalPlaces: number,
): string {
  // Strip everything except digits and decimal
  const stripped = value.replace(/[^\d]/g, '');
  if (!stripped) return '';

  // Treat as cents
  const cents = stripped.padStart(decimalPlaces + 1, '0');
  const intPart = cents.slice(0, -decimalPlaces) || '0';
  const decPart = cents.slice(-decimalPlaces);

  // Add thousands separator
  const intFormatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);

  return decimalPlaces > 0
    ? `${intFormatted}${decimalSeparator}${decPart}`
    : intFormatted;
}

export function AlCurrencyInput<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  currencySymbol = '$',
  decimalSeparator = '.',
  thousandsSeparator = ',',
  decimalPlaces = 2,
  label,
  labelPosition = 'top',
  placeholder = '0.00',
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlCurrencyInputProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);
  const errorMessage = fieldState.error?.message;
  const hasError = !!errorMessage;
  const isErrorRight = errorPosition === 'right';

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatCurrency(
        e.target.value,
        thousandsSeparator,
        decimalSeparator,
        decimalPlaces,
      );
      field.onChange(formatted);
    },
    [field, thousandsSeparator, decimalSeparator, decimalPlaces],
  );

  return (
    <div
      className={cn(alCurrencyInputClasses.wrapper, labelPositionMap[labelPosition])}
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
          <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
            <span className={alCurrencyInputClasses.prefix}>{currencySymbol}</span>
            <input
              id={id}
              type="text"
              inputMode="decimal"
              value={(field.value as string) ?? ''}
              onChange={handleChange}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder={placeholder}
              disabled={isDisabled}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? `${id}-error` : undefined}
              aria-required={required || undefined}
              className={cn(
                alCurrencyInputClasses.input,
                hasError && alCurrencyInputClasses.inputError,
                isDisabled && alCurrencyInputClasses.inputDisabled,
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

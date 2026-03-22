import { useCallback } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { AlmgCurrencyInputProps } from './AlCurrencyInput.types';
import { cn } from '../../utils/cn';
import { almgCurrencyInputClasses } from '../../utils/classMap';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';
import { AlmgSpinner } from '../../feedback/AlmgSpinner';

const labelPositionMap: Record<string, string> = {
  left: almgCurrencyInputClasses.wrapperLabelLeft,
  top: almgCurrencyInputClasses.wrapperLabelTop,
  right: almgCurrencyInputClasses.wrapperLabelRight,
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

export function AlmgCurrencyInput<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgCurrencyInputProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlmgId(name);
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);
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
      className={cn(almgCurrencyInputClasses.wrapper, labelPositionMap[labelPosition])}
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
          <div style={{ display: 'flex', flex: 1, position: 'relative' }}>
            <span className={almgCurrencyInputClasses.prefix}>{currencySymbol}</span>
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
                almgCurrencyInputClasses.input,
                hasError && almgCurrencyInputClasses.inputError,
                isDisabled && almgCurrencyInputClasses.inputDisabled,
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

import { useCallback } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { AlMaskInputProps } from './AlMaskInput.types';
import { cn } from '../../utils/cn';
import { alMaskInputClasses } from '../../utils/classMap';
import { useAlId } from '../../hooks/useAlId';
import { useAlLoading } from '../../hooks/useAlLoading';
import { AlLabel } from '../../atoms/AlLabel';
import { AlErrorMessage } from '../../atoms/AlErrorMessage';
import { AlSpinner } from '../../atoms/AlSpinner';

const labelPositionMap: Record<string, string> = {
  left: alMaskInputClasses.wrapperLabelLeft,
  top: alMaskInputClasses.wrapperLabelTop,
  right: alMaskInputClasses.wrapperLabelRight,
};

function isMaskChar(c: string): boolean {
  return c === '9' || c === 'a' || c === '*';
}

function matchesMask(char: string, maskChar: string): boolean {
  if (maskChar === '9') return /\d/.test(char);
  if (maskChar === 'a') return /[a-zA-Z]/.test(char);
  if (maskChar === '*') return /[a-zA-Z0-9]/.test(char);
  return false;
}

function applyMask(value: string, mask: string): string {
  let result = '';
  let valueIdx = 0;

  for (let maskIdx = 0; maskIdx < mask.length && valueIdx < value.length; maskIdx++) {
    const m = mask[maskIdx];
    if (isMaskChar(m)) {
      // Skip input chars that don't match
      while (valueIdx < value.length && !matchesMask(value[valueIdx], m)) {
        valueIdx++;
      }
      if (valueIdx < value.length) {
        result += value[valueIdx];
        valueIdx++;
      }
    } else {
      result += m;
    }
  }
  return result;
}

export function AlMaskInput<TFieldValues extends FieldValues = FieldValues>({
  name,
  form,
  mask,
  label,
  labelPosition = 'top',
  placeholder,
  errorPosition = 'bottom',
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlMaskInputProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlId(name);
  const { isDisabled, isLoading } = useAlLoading(loading, disabled);
  const errorMessage = fieldState.error?.message;
  const hasError = !!errorMessage;
  const isErrorRight = errorPosition === 'right';

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const masked = applyMask(raw, mask);
      field.onChange(masked);
    },
    [field, mask],
  );

  const defaultPlaceholder = placeholder ?? mask.replace(/9/g, '_').replace(/a/g, '_').replace(/\*/g, '_');

  return (
    <div
      className={cn(alMaskInputClasses.wrapper, labelPositionMap[labelPosition])}
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
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              id={id}
              type="text"
              value={(field.value as string) ?? ''}
              onChange={handleChange}
              onBlur={field.onBlur}
              ref={field.ref}
              placeholder={defaultPlaceholder}
              disabled={isDisabled}
              aria-invalid={hasError || undefined}
              aria-describedby={hasError ? `${id}-error` : undefined}
              aria-required={required || undefined}
              className={cn(
                alMaskInputClasses.input,
                hasError && alMaskInputClasses.inputError,
                isDisabled && alMaskInputClasses.inputDisabled,
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

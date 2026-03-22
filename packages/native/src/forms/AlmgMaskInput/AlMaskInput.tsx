import { useCallback } from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { AlmgMaskInputProps } from '@almg/interfaces';
import { cn } from '../../utils/cn';
import { almgMaskInputClasses } from '../../utils/classMap';
import { useAlmgId } from '../../hooks/useAlmgId';
import { useAlmgLoading } from '../../hooks/useAlmgLoading';
import { AlmgLabel } from '../../primitives/AlmgLabel';
import { AlmgErrorMessage } from '../../feedback/AlmgErrorMessage';
import { AlmgSpinner } from '../../feedback/AlmgSpinner';

const labelPositionMap: Record<string, string> = {
  left: almgMaskInputClasses.wrapperLabelLeft,
  top: almgMaskInputClasses.wrapperLabelTop,
  right: almgMaskInputClasses.wrapperLabelRight,
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

export function AlmgMaskInput<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgMaskInputProps<TFieldValues>) {
  const { field, fieldState } = useController({ name, control: form.control });
  const id = useAlmgId(name);
  const { isDisabled, isLoading } = useAlmgLoading(loading, disabled);
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
      className={cn(almgMaskInputClasses.wrapper, labelPositionMap[labelPosition])}
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
                almgMaskInputClasses.input,
                hasError && almgMaskInputClasses.inputError,
                isDisabled && almgMaskInputClasses.inputDisabled,
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

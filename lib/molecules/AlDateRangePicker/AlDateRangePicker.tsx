import type { FieldValues } from 'react-hook-form';
import type { AlDateRangePickerProps } from './AlDateRangePicker.types';
import { cn } from '../../utils/cn';
import { alDateRangePickerClasses } from '../../utils/classMap';
import { AlDatePicker } from '../AlDatePicker';
import { AlLabel } from '../../atoms/AlLabel';

export function AlDateRangePicker<TFieldValues extends FieldValues = FieldValues>({
  startName,
  endName,
  form,
  label,
  startLabel = 'Start',
  endLabel = 'End',
  min,
  max,
  loading,
  disabled,
  required,
  className,
  'data-testid': testId,
}: AlDateRangePickerProps<TFieldValues>) {
  return (
    <div className={cn(alDateRangePickerClasses.wrapper, className)} data-testid={testId}>
      {label && <AlLabel required={required}>{label}</AlLabel>}
      <div className={alDateRangePickerClasses.group}>
        <AlDatePicker<TFieldValues>
          name={startName}
          form={form}
          label={startLabel}
          min={min}
          max={max}
          loading={loading}
          disabled={disabled}
        />
        <span className={alDateRangePickerClasses.separator}>to</span>
        <AlDatePicker<TFieldValues>
          name={endName}
          form={form}
          label={endLabel}
          min={min}
          max={max}
          loading={loading}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

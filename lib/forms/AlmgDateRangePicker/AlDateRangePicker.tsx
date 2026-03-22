import type { FieldValues } from 'react-hook-form';
import type { AlmgDateRangePickerProps } from './AlDateRangePicker.types';
import { cn } from '../../utils/cn';
import { almgDateRangePickerClasses } from '../../utils/classMap';
import { AlmgDatePicker } from '../AlmgDatePicker';
import { AlmgLabel } from '../../primitives/AlmgLabel';

export function AlmgDateRangePicker<TFieldValues extends FieldValues = FieldValues>({
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
}: AlmgDateRangePickerProps<TFieldValues>) {
  return (
    <div className={cn(almgDateRangePickerClasses.wrapper, className)} data-testid={testId}>
      {label && <AlmgLabel required={required}>{label}</AlmgLabel>}
      <div className={almgDateRangePickerClasses.group}>
        <AlmgDatePicker<TFieldValues>
          name={startName}
          form={form}
          label={startLabel}
          min={min}
          max={max}
          loading={loading}
          disabled={disabled}
        />
        <span className={almgDateRangePickerClasses.separator}>to</span>
        <AlmgDatePicker<TFieldValues>
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

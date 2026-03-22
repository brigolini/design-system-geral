// Types
export type {
  AlmgIntent,
  AlmgLabelPosition,
  AlmgErrorPosition,
  AlmgBaseProps,
  AlmgInteractiveProps,
  AlmgIntentProps,
  AlmgFormFieldWrapperProps,
  AlmgFormFieldProps,
  UseAlmgTableOptions,
} from './types';

// Hooks
export { useAlmgFormField } from './hooks/useAlmgFormField';
export { useAlmgId } from './hooks/useAlmgId';
export { useAlmgLoading } from './hooks/useAlmgLoading';
export { useAlmgIntent } from './hooks/useAlmgIntent';

// Utils
export { cn } from './utils/cn';

// Primitives
export {
  AlmgLabel,
  AlmgButton,
} from './primitives';

export type {
  AlmgLabelProps,
  AlmgButtonProps,
} from './primitives';

// Feedback
export {
  AlmgErrorMessage,
  AlmgSpinner,
  AlmgToastContainer,
  AlmgToastProvider,
  useAlmgToast,
} from './feedback';

export type {
  AlmgErrorMessageProps,
  AlmgSpinnerProps,
  AlmgSpinnerSize,
  AlmgToastData,
  AlmgToastProviderProps,
} from './feedback';

// Forms
export {
  AlmgInput,
  AlmgCheckbox,
  AlmgRadioButton,
  AlmgSelect,
  AlmgCombobox,
  AlmgMultiSelect,
  AlmgAsyncAutocomplete,
  AlmgMaskInput,
  AlmgCurrencyInput,
  AlmgDatePicker,
  AlmgDateRangePicker,
  AlmgStepper,
} from './forms';

export type {
  AlmgInputProps,
  AlmgCheckboxProps,
  AlmgRadioButtonProps,
  AlmgRadioOption,
  AlmgSelectProps,
  AlmgSelectOption,
  AlmgComboboxProps,
  AlmgComboboxOption,
  AlmgMultiSelectProps,
  AlmgMultiSelectOption,
  AlmgAsyncAutocompleteProps,
  AlmgMaskInputProps,
  AlmgCurrencyInputProps,
  AlmgDatePickerProps,
  AlmgDateRangePickerProps,
  AlmgStepperProps,
  AlmgStepperStep,
} from './forms';

// Data Display
export {
  AlmgTable,
  useAlmgTable,
  AlmgAccordion,
  AlmgCarousel,
} from './data-display';

export type {
  AlmgTableProps,
  AlmgAccordionProps,
  AlmgAccordionItem,
  AlmgCarouselProps,
} from './data-display';

// Navigation
export {
  AlmgBreadcrumbs,
} from './navigation';

export type {
  AlmgBreadcrumbsProps,
  AlmgBreadcrumbItem,
} from './navigation';

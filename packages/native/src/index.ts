// Re-exportar todos os tipos de @almg/interfaces para conveniência
export type * from '@almg/interfaces';

// Hooks
export { useAlmgFormField } from './hooks/useAlmgFormField';
export { useAlmgId } from './hooks/useAlmgId';
export { useAlmgLoading } from './hooks/useAlmgLoading';
export { useAlmgIntent } from './hooks/useAlmgIntent';

// Utils
export { cn } from './utils/cn';

// Primitives
export { AlmgLabel } from './primitives';
export { AlmgButton } from './primitives';

// Feedback
export { AlmgErrorMessage, AlmgSpinner, AlmgToastContainer, AlmgToastProvider, useAlmgToast } from './feedback';

// Forms
export {
  AlmgInput, AlmgCheckbox, AlmgRadioButton, AlmgSelect, AlmgCombobox,
  AlmgMultiSelect, AlmgAsyncAutocomplete, AlmgMaskInput, AlmgCurrencyInput,
  AlmgDatePicker, AlmgDateRangePicker, AlmgStepper,
} from './forms';

// Data Display
export { AlmgTable, useAlmgTable, AlmgAccordion, AlmgCarousel } from './data-display';

// Navigation
export { AlmgBreadcrumbs } from './navigation';

/** Mapeamentos de classes CSS para classes de componentes com namespace al-*.
 *  Estas constantes são a ponte entre componentes JS e arquivos CSS.
 *  Cada componente referencia estas em vez de strings de classe hardcoded. */

export const alLabelClasses = {
  label: 'al-label',
  required: 'al-label--required',
} as const;

export const alErrorMessageClasses = {
  message: 'al-error-message',
} as const;

export const alSpinnerClasses = {
  spinner: 'al-spinner',
  small: 'al-spinner--sm',
  medium: 'al-spinner--md',
  large: 'al-spinner--lg',
} as const;

export const alButtonClasses = {
  button: 'al-button',
  disabled: 'al-button--disabled',
  loading: 'al-button--loading',
  primary: 'al-button--primary',
  secondary: 'al-button--secondary',
  danger: 'al-button--danger',
  warning: 'al-button--warning',
} as const;

export const alInputClasses = {
  wrapper: 'al-input-wrapper',
  wrapperLabelLeft: 'al-input-wrapper--label-left',
  wrapperLabelTop: 'al-input-wrapper--label-top',
  wrapperLabelRight: 'al-input-wrapper--label-right',
  input: 'al-input',
  error: 'al-input--error',
  disabled: 'al-input--disabled',
  loading: 'al-input--loading',
} as const;

export const alCheckboxClasses = {
  wrapper: 'al-checkbox-wrapper',
  wrapperLabelLeft: 'al-checkbox-wrapper--label-left',
  wrapperLabelTop: 'al-checkbox-wrapper--label-top',
  wrapperLabelRight: 'al-checkbox-wrapper--label-right',
  checkbox: 'al-checkbox',
  checked: 'al-checkbox--checked',
  error: 'al-checkbox--error',
  disabled: 'al-checkbox--disabled',
  loading: 'al-checkbox--loading',
} as const;

export const alRadioButtonClasses = {
  wrapper: 'al-radio-wrapper',
  wrapperLabelLeft: 'al-radio-wrapper--label-left',
  wrapperLabelTop: 'al-radio-wrapper--label-top',
  wrapperLabelRight: 'al-radio-wrapper--label-right',
  radio: 'al-radio',
  error: 'al-radio--error',
  disabled: 'al-radio--disabled',
  loading: 'al-radio--loading',
} as const;

export const alSelectClasses = {
  wrapper: 'al-select-wrapper',
  wrapperLabelLeft: 'al-select-wrapper--label-left',
  wrapperLabelTop: 'al-select-wrapper--label-top',
  wrapperLabelRight: 'al-select-wrapper--label-right',
  trigger: 'al-select-trigger',
  triggerOpen: 'al-select-trigger--open',
  triggerError: 'al-select-trigger--error',
  triggerDisabled: 'al-select-trigger--disabled',
  triggerLoading: 'al-select-trigger--loading',
  menu: 'al-select-menu',
  menuOpen: 'al-select-menu--open',
  item: 'al-select-item',
  itemHighlighted: 'al-select-item--highlighted',
  itemSelected: 'al-select-item--selected',
  placeholder: 'al-select-placeholder',
  arrow: 'al-select-arrow',
} as const;

export const alComboboxClasses = {
  wrapper: 'al-combobox-wrapper',
  wrapperLabelLeft: 'al-combobox-wrapper--label-left',
  wrapperLabelTop: 'al-combobox-wrapper--label-top',
  wrapperLabelRight: 'al-combobox-wrapper--label-right',
  input: 'al-combobox-input',
  inputError: 'al-combobox-input--error',
  inputDisabled: 'al-combobox-input--disabled',
  inputLoading: 'al-combobox-input--loading',
  menu: 'al-combobox-menu',
  menuOpen: 'al-combobox-menu--open',
  item: 'al-combobox-item',
  itemHighlighted: 'al-combobox-item--highlighted',
  itemSelected: 'al-combobox-item--selected',
  noResults: 'al-combobox-no-results',
} as const;

export const alMultiSelectClasses = {
  wrapper: 'al-multi-select-wrapper',
  wrapperLabelLeft: 'al-multi-select-wrapper--label-left',
  wrapperLabelTop: 'al-multi-select-wrapper--label-top',
  wrapperLabelRight: 'al-multi-select-wrapper--label-right',
  inputArea: 'al-multi-select-input-area',
  inputAreaError: 'al-multi-select-input-area--error',
  inputAreaDisabled: 'al-multi-select-input-area--disabled',
  input: 'al-multi-select-input',
  chip: 'al-multi-select-chip',
  chipRemove: 'al-multi-select-chip-remove',
  menu: 'al-multi-select-menu',
  menuOpen: 'al-multi-select-menu--open',
  item: 'al-multi-select-item',
  itemHighlighted: 'al-multi-select-item--highlighted',
  itemSelected: 'al-multi-select-item--selected',
} as const;

export const alTableClasses = {
  container: 'al-table-container',
  toolbar: 'al-table-toolbar',
  table: 'al-table',
  head: 'al-table-head',
  headerRow: 'al-table-header-row',
  headerCell: 'al-table-header-cell',
  headerCellSortable: 'al-table-header-cell--sortable',
  headerCellSorted: 'al-table-header-cell--sorted',
  body: 'al-table-body',
  row: 'al-table-row',
  cell: 'al-table-cell',
  cellEditing: 'al-table-cell--editing',
  sortIcon: 'al-table-sort-icon',
  sortIconAsc: 'al-table-sort-icon--asc',
  sortIconDesc: 'al-table-sort-icon--desc',
  pagination: 'al-table-pagination',
  paginationButton: 'al-table-pagination-button',
  paginationButtonActive: 'al-table-pagination-button--active',
  paginationInfo: 'al-table-pagination-info',
  emptyState: 'al-table-empty-state',
} as const;

export const alStepperClasses = {
  stepper: 'al-stepper',
  step: 'al-stepper-step',
  stepActive: 'al-stepper-step--active',
  stepCompleted: 'al-stepper-step--completed',
  stepDisabled: 'al-stepper-step--disabled',
  stepClickable: 'al-stepper-step--clickable',
  stepNumber: 'al-stepper-step-number',
  stepLabel: 'al-stepper-step-label',
  stepConnector: 'al-stepper-step-connector',
  content: 'al-stepper-content',
} as const;

export const alAccordionClasses = {
  accordion: 'al-accordion',
  accordionHorizontal: 'al-accordion--horizontal',
  item: 'al-accordion-item',
  itemOpen: 'al-accordion-item--open',
  trigger: 'al-accordion-trigger',
  content: 'al-accordion-content',
  icon: 'al-accordion-icon',
} as const;

export const alBreadcrumbsClasses = {
  nav: 'al-breadcrumbs',
  list: 'al-breadcrumbs-list',
  item: 'al-breadcrumbs-item',
  link: 'al-breadcrumbs-link',
  separator: 'al-breadcrumbs-separator',
  current: 'al-breadcrumbs-current',
} as const;

export const alToastClasses = {
  container: 'al-toast-container',
  toast: 'al-toast',
  primary: 'al-toast--primary',
  secondary: 'al-toast--secondary',
  danger: 'al-toast--danger',
  warning: 'al-toast--warning',
  title: 'al-toast-title',
  message: 'al-toast-message',
  close: 'al-toast-close',
} as const;

export const alDatePickerClasses = {
  wrapper: 'al-date-picker-wrapper',
  wrapperLabelLeft: 'al-date-picker-wrapper--label-left',
  wrapperLabelTop: 'al-date-picker-wrapper--label-top',
  wrapperLabelRight: 'al-date-picker-wrapper--label-right',
  input: 'al-date-picker-input',
  inputError: 'al-date-picker-input--error',
  inputDisabled: 'al-date-picker-input--disabled',
} as const;

export const alDateRangePickerClasses = {
  wrapper: 'al-date-range-picker-wrapper',
  group: 'al-date-range-picker-group',
  separator: 'al-date-range-picker-separator',
} as const;

export const alCurrencyInputClasses = {
  wrapper: 'al-currency-input-wrapper',
  wrapperLabelLeft: 'al-currency-input-wrapper--label-left',
  wrapperLabelTop: 'al-currency-input-wrapper--label-top',
  wrapperLabelRight: 'al-currency-input-wrapper--label-right',
  input: 'al-currency-input',
  inputError: 'al-currency-input--error',
  inputDisabled: 'al-currency-input--disabled',
  prefix: 'al-currency-input-prefix',
} as const;

export const alMaskInputClasses = {
  wrapper: 'al-mask-input-wrapper',
  wrapperLabelLeft: 'al-mask-input-wrapper--label-left',
  wrapperLabelTop: 'al-mask-input-wrapper--label-top',
  wrapperLabelRight: 'al-mask-input-wrapper--label-right',
  input: 'al-mask-input',
  inputError: 'al-mask-input--error',
  inputDisabled: 'al-mask-input--disabled',
} as const;

export const alCarouselClasses = {
  carousel: 'al-carousel',
  primary: 'al-carousel--primary',
  secondary: 'al-carousel--secondary',
  danger: 'al-carousel--danger',
  warning: 'al-carousel--warning',
  track: 'al-carousel-track',
  slide: 'al-carousel-slide',
  slideActive: 'al-carousel-slide--active',
  prevButton: 'al-carousel-prev',
  nextButton: 'al-carousel-next',
  dots: 'al-carousel-dots',
  dot: 'al-carousel-dot',
  dotActive: 'al-carousel-dot--active',
} as const;

/** Utilitário de mapeamento de intenção para classe CSS */
export const intentClassMap = {
  primary: 'al-intent-primary',
  secondary: 'al-intent-secondary',
  danger: 'al-intent-danger',
  warning: 'al-intent-warning',
} as const;

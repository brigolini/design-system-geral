/** Mapeamentos de classes CSS para classes de componentes com namespace al-*.
 *  Estas constantes são a ponte entre componentes JS e arquivos CSS.
 *  Cada componente referencia estas em vez de strings de classe hardcoded. */

export const almgLabelClasses = {
  label: 'almg-label',
  required: 'almg-label--required',
} as const;

export const almgErrorMessageClasses = {
  message: 'almg-error-message',
} as const;

export const almgSpinnerClasses = {
  spinner: 'almg-spinner',
  small: 'almg-spinner--sm',
  medium: 'almg-spinner--md',
  large: 'almg-spinner--lg',
} as const;

export const almgButtonClasses = {
  button: 'almg-button',
  disabled: 'almg-button--disabled',
  loading: 'almg-button--loading',
  primary: 'almg-button--primary',
  secondary: 'almg-button--secondary',
  danger: 'almg-button--danger',
  warning: 'almg-button--warning',
} as const;

export const almgInputClasses = {
  wrapper: 'almg-input-wrapper',
  wrapperLabelLeft: 'almg-input-wrapper--label-left',
  wrapperLabelTop: 'almg-input-wrapper--label-top',
  wrapperLabelRight: 'almg-input-wrapper--label-right',
  input: 'almg-input',
  error: 'almg-input--error',
  disabled: 'almg-input--disabled',
  loading: 'almg-input--loading',
} as const;

export const almgCheckboxClasses = {
  wrapper: 'almg-checkbox-wrapper',
  wrapperLabelLeft: 'almg-checkbox-wrapper--label-left',
  wrapperLabelTop: 'almg-checkbox-wrapper--label-top',
  wrapperLabelRight: 'almg-checkbox-wrapper--label-right',
  checkbox: 'almg-checkbox',
  checked: 'almg-checkbox--checked',
  error: 'almg-checkbox--error',
  disabled: 'almg-checkbox--disabled',
  loading: 'almg-checkbox--loading',
} as const;

export const almgRadioButtonClasses = {
  wrapper: 'almg-radio-wrapper',
  wrapperLabelLeft: 'almg-radio-wrapper--label-left',
  wrapperLabelTop: 'almg-radio-wrapper--label-top',
  wrapperLabelRight: 'almg-radio-wrapper--label-right',
  radio: 'almg-radio',
  error: 'almg-radio--error',
  disabled: 'almg-radio--disabled',
  loading: 'almg-radio--loading',
} as const;

export const almgSelectClasses = {
  wrapper: 'almg-select-wrapper',
  wrapperLabelLeft: 'almg-select-wrapper--label-left',
  wrapperLabelTop: 'almg-select-wrapper--label-top',
  wrapperLabelRight: 'almg-select-wrapper--label-right',
  trigger: 'almg-select-trigger',
  triggerOpen: 'almg-select-trigger--open',
  triggerError: 'almg-select-trigger--error',
  triggerDisabled: 'almg-select-trigger--disabled',
  triggerLoading: 'almg-select-trigger--loading',
  menu: 'almg-select-menu',
  menuOpen: 'almg-select-menu--open',
  item: 'almg-select-item',
  itemHighlighted: 'almg-select-item--highlighted',
  itemSelected: 'almg-select-item--selected',
  placeholder: 'almg-select-placeholder',
  arrow: 'almg-select-arrow',
} as const;

export const almgComboboxClasses = {
  wrapper: 'almg-combobox-wrapper',
  wrapperLabelLeft: 'almg-combobox-wrapper--label-left',
  wrapperLabelTop: 'almg-combobox-wrapper--label-top',
  wrapperLabelRight: 'almg-combobox-wrapper--label-right',
  input: 'almg-combobox-input',
  inputError: 'almg-combobox-input--error',
  inputDisabled: 'almg-combobox-input--disabled',
  inputLoading: 'almg-combobox-input--loading',
  menu: 'almg-combobox-menu',
  menuOpen: 'almg-combobox-menu--open',
  item: 'almg-combobox-item',
  itemHighlighted: 'almg-combobox-item--highlighted',
  itemSelected: 'almg-combobox-item--selected',
  noResults: 'almg-combobox-no-results',
} as const;

export const almgMultiSelectClasses = {
  wrapper: 'almg-multi-select-wrapper',
  wrapperLabelLeft: 'almg-multi-select-wrapper--label-left',
  wrapperLabelTop: 'almg-multi-select-wrapper--label-top',
  wrapperLabelRight: 'almg-multi-select-wrapper--label-right',
  inputArea: 'almg-multi-select-input-area',
  inputAreaError: 'almg-multi-select-input-area--error',
  inputAreaDisabled: 'almg-multi-select-input-area--disabled',
  input: 'almg-multi-select-input',
  chip: 'almg-multi-select-chip',
  chipRemove: 'almg-multi-select-chip-remove',
  menu: 'almg-multi-select-menu',
  menuOpen: 'almg-multi-select-menu--open',
  item: 'almg-multi-select-item',
  itemHighlighted: 'almg-multi-select-item--highlighted',
  itemSelected: 'almg-multi-select-item--selected',
} as const;

export const almgTableClasses = {
  container: 'almg-table-container',
  toolbar: 'almg-table-toolbar',
  table: 'almg-table',
  head: 'almg-table-head',
  headerRow: 'almg-table-header-row',
  headerCell: 'almg-table-header-cell',
  headerCellSortable: 'almg-table-header-cell--sortable',
  headerCellSorted: 'almg-table-header-cell--sorted',
  body: 'almg-table-body',
  row: 'almg-table-row',
  cell: 'almg-table-cell',
  cellEditing: 'almg-table-cell--editing',
  sortIcon: 'almg-table-sort-icon',
  sortIconAsc: 'almg-table-sort-icon--asc',
  sortIconDesc: 'almg-table-sort-icon--desc',
  pagination: 'almg-table-pagination',
  paginationButton: 'almg-table-pagination-button',
  paginationButtonActive: 'almg-table-pagination-button--active',
  paginationInfo: 'almg-table-pagination-info',
  emptyState: 'almg-table-empty-state',
} as const;

export const almgStepperClasses = {
  stepper: 'almg-stepper',
  step: 'almg-stepper-step',
  stepActive: 'almg-stepper-step--active',
  stepCompleted: 'almg-stepper-step--completed',
  stepDisabled: 'almg-stepper-step--disabled',
  stepClickable: 'almg-stepper-step--clickable',
  stepNumber: 'almg-stepper-step-number',
  stepLabel: 'almg-stepper-step-label',
  stepConnector: 'almg-stepper-step-connector',
  content: 'almg-stepper-content',
} as const;

export const almgAccordionClasses = {
  accordion: 'almg-accordion',
  accordionHorizontal: 'almg-accordion--horizontal',
  item: 'almg-accordion-item',
  itemOpen: 'almg-accordion-item--open',
  trigger: 'almg-accordion-trigger',
  content: 'almg-accordion-content',
  icon: 'almg-accordion-icon',
} as const;

export const almgBreadcrumbsClasses = {
  nav: 'almg-breadcrumbs',
  list: 'almg-breadcrumbs-list',
  item: 'almg-breadcrumbs-item',
  link: 'almg-breadcrumbs-link',
  separator: 'almg-breadcrumbs-separator',
  current: 'almg-breadcrumbs-current',
} as const;

export const almgToastClasses = {
  container: 'almg-toast-container',
  toast: 'almg-toast',
  primary: 'almg-toast--primary',
  secondary: 'almg-toast--secondary',
  danger: 'almg-toast--danger',
  warning: 'almg-toast--warning',
  title: 'almg-toast-title',
  message: 'almg-toast-message',
  close: 'almg-toast-close',
} as const;

export const almgDatePickerClasses = {
  wrapper: 'almg-date-picker-wrapper',
  wrapperLabelLeft: 'almg-date-picker-wrapper--label-left',
  wrapperLabelTop: 'almg-date-picker-wrapper--label-top',
  wrapperLabelRight: 'almg-date-picker-wrapper--label-right',
  input: 'almg-date-picker-input',
  inputError: 'almg-date-picker-input--error',
  inputDisabled: 'almg-date-picker-input--disabled',
} as const;

export const almgDateRangePickerClasses = {
  wrapper: 'almg-date-range-picker-wrapper',
  group: 'almg-date-range-picker-group',
  separator: 'almg-date-range-picker-separator',
} as const;

export const almgCurrencyInputClasses = {
  wrapper: 'almg-currency-input-wrapper',
  wrapperLabelLeft: 'almg-currency-input-wrapper--label-left',
  wrapperLabelTop: 'almg-currency-input-wrapper--label-top',
  wrapperLabelRight: 'almg-currency-input-wrapper--label-right',
  input: 'almg-currency-input',
  inputError: 'almg-currency-input--error',
  inputDisabled: 'almg-currency-input--disabled',
  prefix: 'almg-currency-input-prefix',
} as const;

export const almgMaskInputClasses = {
  wrapper: 'almg-mask-input-wrapper',
  wrapperLabelLeft: 'almg-mask-input-wrapper--label-left',
  wrapperLabelTop: 'almg-mask-input-wrapper--label-top',
  wrapperLabelRight: 'almg-mask-input-wrapper--label-right',
  input: 'almg-mask-input',
  inputError: 'almg-mask-input--error',
  inputDisabled: 'almg-mask-input--disabled',
} as const;

export const almgCarouselClasses = {
  carousel: 'almg-carousel',
  primary: 'almg-carousel--primary',
  secondary: 'almg-carousel--secondary',
  danger: 'almg-carousel--danger',
  warning: 'almg-carousel--warning',
  track: 'almg-carousel-track',
  slide: 'almg-carousel-slide',
  slideActive: 'almg-carousel-slide--active',
  prevButton: 'almg-carousel-prev',
  nextButton: 'almg-carousel-next',
  dots: 'almg-carousel-dots',
  dot: 'almg-carousel-dot',
  dotActive: 'almg-carousel-dot--active',
} as const;

export const almgCardClasses = {
  card: 'almg-card',
  header: 'almg-card-header',
  title: 'almg-card-title',
  body: 'almg-card-body',
} as const;

export const almgGridClasses = {
  grid: 'almg-grid',
  cols1: 'almg-grid--cols-1',
  cols2: 'almg-grid--cols-2',
  cols3: 'almg-grid--cols-3',
  cols8: 'almg-grid--cols-8',
  cols12: 'almg-grid--cols-12',
  gapSm: 'almg-grid--gap-sm',
  gapMd: 'almg-grid--gap-md',
  gapLg: 'almg-grid--gap-lg',
  spanPrefix: 'almg-grid-item--span-',
} as const;

/** Utilitário de mapeamento de intenção para classe CSS */
export const intentClassMap = {
  primary: 'almg-intent-primary',
  secondary: 'almg-intent-secondary',
  danger: 'almg-intent-danger',
  warning: 'almg-intent-warning',
} as const;

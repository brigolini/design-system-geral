# ALMG Example App — AI Reference Guide

This is a reference application demonstrating how to build apps with the `@almg/native` design system. Use this file and the patterns in this project to create new applications.

## Tech Stack

- **React 19** + **React Router 7** (SSR enabled)
- **@almg/native** — component library (imports from `@almg/interfaces` for types)
- **@almg/styles** — CSS design tokens and component styles
- **React Hook Form** + **Zod** — form state and validation
- **TanStack React Table** — data tables with sorting/pagination
- **TanStack React Query** — server state (configured in root)

## Project Structure

```
app/
├── root.tsx                          # Root layout: providers, nav, <Outlet />
├── routes.ts                         # Route definitions (React Router 7)
├── entry.client.tsx                  # Client hydration
├── entry.server.tsx                  # SSR handler
├── database/
│   ├── db.ts                         # JSON file read/write helpers
│   ├── *.repository.ts               # Data access (findAll, findById, create, update, remove)
│   └── data/*.json                   # JSON data files
├── services/
│   ├── *.schema.ts                   # Zod schemas + inferred types
│   └── *.service.ts                  # Business logic (list, getById, search, create, update, remove)
└── routes/
    ├── pages/
    │   ├── home.tsx                   # Landing page
    │   └── {entity}/
    │       ├── list.tsx              # Table listing with loader + delete action
    │       ├── new.tsx               # Create form with action
    │       └── edit.tsx              # Edit form with loader + action
    └── api/
        └── {entity}.search.tsx       # Search endpoint for autocomplete
```

## Route Configuration

Routes are defined in `app/routes.ts` using React Router 7's programmatic API:

```tsx
import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  index('routes/pages/home.tsx'),
  route('entity', 'routes/pages/entity/list.tsx'),
  route('entity/novo', 'routes/pages/entity/new.tsx'),
  route('entity/:id', 'routes/pages/entity/edit.tsx'),
  route('api/entity/search', 'routes/api/entity.search.tsx'),
] satisfies RouteConfig;
```

## Root Layout Pattern

`app/root.tsx` wraps the app with providers and a nav bar:

```tsx
import { Outlet, Link, Scripts, ScrollRestoration } from 'react-router';
import { AlmgToastProvider, AlmgToastContainer } from '@almg/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../../styles/src/al-ui.css';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>App Title</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <AlmgToastProvider>
            <nav>...</nav>
            <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
              <Outlet />
            </main>
            <AlmgToastContainer />
          </AlmgToastProvider>
        </QueryClientProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

---

## CRUD Patterns

### 1. Zod Schema (`services/{entity}.schema.ts`)

Define validation and export the inferred type:

```tsx
import { z } from 'zod';

export const entitySchema = z.object({
  name: z.string({ error: 'Name is required' }).min(2, 'At least 2 chars'),
  code: z.string({ error: 'Code is required' }).length(2, 'Exactly 2 chars').toUpperCase(),
});

export type EntityInput = z.infer<typeof entitySchema>;
```

For nested objects (e.g., addresses inside a person):

```tsx
export const addressSchema = z.object({
  street: z.string({ error: 'Required' }).min(1, 'Required'),
  cityId: z.string({ error: 'Required' }).min(1, 'Select a city'),
});

export const personSchema = z.object({
  name: z.string({ error: 'Required' }).min(2, 'At least 2 chars'),
  addresses: z.array(addressSchema).min(1, 'At least one address'),
});
```

### 2. Service Layer (`services/{entity}.service.ts`)

Wraps repository with schema validation:

```tsx
import * as entityRepo from '../database/entity.repository';
import { entitySchema, type EntityInput } from './entity.schema';

export function list() { return entityRepo.findAll(); }
export function getById(id: string) {
  const item = entityRepo.findById(id);
  if (!item) throw new Error(`Not found: ${id}`);
  return item;
}
export function search(query: string) { return entityRepo.search(query); }
export function create(input: EntityInput) {
  return entityRepo.create(entitySchema.parse(input));
}
export function update(id: string, input: EntityInput) {
  return entityRepo.update(id, entitySchema.parse(input));
}
export function remove(id: string) { return entityRepo.remove(id); }
```

### 3. Repository (`database/{entity}.repository.ts`)

JSON-file data access:

```tsx
import { readJson, writeJson, nextId } from './db';

export interface EntityRecord { id: string; name: string; code: string; }
const FILE = 'entities.json';

export function findAll(): EntityRecord[] { return readJson<EntityRecord>(FILE); }
export function findById(id: string) { return findAll().find(e => e.id === id); }
export function search(query: string) {
  const q = query.toLowerCase();
  return findAll().filter(e => e.name.toLowerCase().includes(q));
}
export function create(data: Omit<EntityRecord, 'id'>) {
  const items = findAll();
  const item: EntityRecord = { id: nextId(items), ...data };
  items.push(item);
  writeJson(FILE, items);
  return item;
}
export function update(id: string, data: Omit<EntityRecord, 'id'>) {
  const items = findAll();
  const i = items.findIndex(e => e.id === id);
  if (i === -1) throw new Error('Not found');
  items[i] = { id, ...data };
  writeJson(FILE, items);
  return items[i];
}
export function remove(id: string) {
  writeJson(FILE, findAll().filter(e => e.id !== id));
}
```

### 4. List Page (`routes/pages/{entity}/list.tsx`)

Table with sorting, pagination, and delete:

```tsx
import { useLoaderData, Link, useFetcher } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { createColumnHelper } from '@tanstack/react-table';
import { AlmgTable, useAlmgTable, AlmgButton, AlmgBreadcrumbs } from '@almg/native';

export async function loader() {
  const service = await import('../../../services/entity.service');
  return Response.json({ items: service.list() });
}

export async function action({ request }: ActionFunctionArgs) {
  const service = await import('../../../services/entity.service');
  const formData = await request.formData();
  if (formData.get('_action') === 'delete') {
    service.remove(formData.get('id') as string);
    return Response.json({ success: true });
  }
  return Response.json({ success: false });
}

export default function EntityList() {
  const { items } = useLoaderData() as { items: Array<{ id: string; name: string }> };
  const fetcher = useFetcher();
  const columnHelper = createColumnHelper<typeof items[0]>();

  const columns = [
    columnHelper.accessor('name', { header: 'Name' }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => (
        <div style={{ display: 'flex', gap: '8px' }}>
          <Link to={`/entities/${row.original.id}`}>
            <AlmgButton intent="secondary">Edit</AlmgButton>
          </Link>
          <fetcher.Form method="post">
            <input type="hidden" name="_action" value="delete" />
            <input type="hidden" name="id" value={row.original.id} />
            <AlmgButton intent="danger" type="submit">Delete</AlmgButton>
          </fetcher.Form>
        </div>
      ),
    }),
  ];

  const table = useAlmgTable({
    data: items,
    columns,
    enableSorting: true,
    enablePagination: true,
    pageSize: 5,
  });

  return (
    <div>
      <AlmgBreadcrumbs items={[{ text: 'Home', link: '/' }, { text: 'Entities' }]} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '24px 0 16px' }}>
        <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)' }}>Entities</h1>
        <Link to="/entities/new">
          <AlmgButton intent="primary">New Entity</AlmgButton>
        </Link>
      </div>
      <AlmgTable table={table} emptyMessage="No items found" />
    </div>
  );
}
```

### 5. Create Page (`routes/pages/{entity}/new.tsx`)

Form with RHF + Zod:

```tsx
import { useNavigate, redirect } from 'react-router';
import type { ActionFunctionArgs } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlmgInput, AlmgButton, AlmgBreadcrumbs } from '@almg/native';
import { entitySchema, type EntityInput } from '../../../services/entity.schema';

export async function action({ request }: ActionFunctionArgs) {
  const service = await import('../../../services/entity.service');
  const formData = await request.formData();
  const input = JSON.parse(formData.get('data') as string);
  try {
    service.create(input);
    return redirect('/entities');
  } catch {
    return Response.json({ error: 'Create failed' }, { status: 400 });
  }
}

export default function EntityNew() {
  const navigate = useNavigate();
  const form = useForm<EntityInput>({
    resolver: zodResolver(entitySchema),
    mode: 'onBlur',
  });

  const handleSubmit = form.handleSubmit((data) => {
    const formEl = document.createElement('form');
    formEl.method = 'post';
    formEl.style.display = 'none';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify(data);
    formEl.appendChild(input);
    document.body.appendChild(formEl);
    formEl.submit();
  });

  return (
    <div>
      <AlmgBreadcrumbs items={[
        { text: 'Home', link: '/' },
        { text: 'Entities', link: '/entities' },
        { text: 'New' },
      ]} />
      <h1 style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)', margin: '24px 0 16px' }}>
        New Entity
      </h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <AlmgInput<EntityInput> name="name" form={form} label="Name" required />
        <div style={{ display: 'flex', gap: '12px' }}>
          <AlmgButton intent="primary" type="submit">Save</AlmgButton>
          <AlmgButton intent="secondary" type="button" onClick={() => navigate('/entities')}>Cancel</AlmgButton>
        </div>
      </form>
    </div>
  );
}
```

### 6. Edit Page (`routes/pages/{entity}/edit.tsx`)

Same as create but with loader for defaults:

```tsx
export async function loader({ params }: LoaderFunctionArgs) {
  const service = await import('../../../services/entity.service');
  return Response.json({ entity: service.getById(params.id!) });
}

// action is identical to new.tsx but calls service.update(params.id!, input)

export default function EntityEdit() {
  const { entity } = useLoaderData() as { entity: { id: string; name: string } };
  const form = useForm<EntityInput>({
    resolver: zodResolver(entitySchema),
    mode: 'onBlur',
    defaultValues: { name: entity.name },  // <-- pre-populate
  });
  // ... rest identical to new.tsx
}
```

### 7. Search API (`routes/api/{entity}.search.tsx`)

Endpoint for AlmgAsyncAutocomplete:

```tsx
import type { LoaderFunctionArgs } from 'react-router';

export async function loader({ request }: LoaderFunctionArgs) {
  const service = await import('../../services/entity.service');
  const q = new URL(request.url).searchParams.get('q') || '';
  const results = service.search(q);
  return Response.json(
    results.map(e => ({ value: e.id, label: e.name }))
  );
}
```

---

## Component Reference

All components are imported from `@almg/native`. Types are in `@almg/interfaces`.

### Layout

| Component | Props | Description |
|-----------|-------|-------------|
| `AlmgGrid` | `columns: 1\|2\|3\|8\|12`, `gap?: 'sm'\|'md'\|'lg'`, `children` | CSS grid container |
| `AlmgGridItem` | `span?: number`, `children` | Grid child, `span` sets `grid-column: span N` |
| `AlmgCard` | `title: string`, `headingLevel?: 2\|3\|4`, `children` | Card with header and body |

```tsx
<AlmgGrid columns={12} gap="md">
  <AlmgGridItem span={4}><AlmgCard title="Sidebar">...</AlmgCard></AlmgGridItem>
  <AlmgGridItem span={8}><AlmgCard title="Main">...</AlmgCard></AlmgGridItem>
</AlmgGrid>
```

### Primitives

| Component | Props | Description |
|-----------|-------|-------------|
| `AlmgButton` | `intent?: 'primary'\|'secondary'\|'danger'\|'warning'`, `loading?`, `disabled?`, `type?`, `onClick?`, `children` | Button with intent variants |
| `AlmgLabel` | `htmlFor?`, `required?`, `children` | Form label |

### Form Components

All form components share these generic props (via `AlmgFormFieldProps<TFieldValues>`):
- `name: Path<TFieldValues>` — type-safe field name from Zod schema
- `form: UseFormReturn<TFieldValues>` — RHF form instance from `useForm()`
- `label?`, `labelPosition?: 'left'\|'top'\|'right'`, `errorPosition?: 'bottom'\|'right'`
- `loading?`, `disabled?`, `required?`, `helpText?`

| Component | Extra Props | Description |
|-----------|-------------|-------------|
| `AlmgInput` | `type?: 'text'\|'email'\|'password'\|'number'\|'tel'\|'url'`, `placeholder?`, `maxLength?` | Text input |
| `AlmgCheckbox` | `value?` | Checkbox |
| `AlmgRadioButton` | `options: {value, label}[]` | Radio group |
| `AlmgSelect` | `options: {value, label}[]`, `placeholder?` | Dropdown select (uses Downshift) |
| `AlmgCombobox` | `options: {value, label}[]`, `placeholder?`, `noResultsText?` | Searchable dropdown |
| `AlmgMultiSelect` | `options: {value, label}[]`, `placeholder?` | Multi-select with chips |
| `AlmgAsyncAutocomplete` | `fetchOptions: (query) => Promise<{value,label}[]>`, `debounceMs?`, `placeholder?`, `minChars?`, `initialDisplayValue?` | Async search dropdown |
| `AlmgMaskInput` | `mask: string` (e.g. `"999.999.999-99"`) | Masked text input |
| `AlmgCurrencyInput` | `prefix?`, `decimalSeparator?`, `thousandSeparator?` | Currency formatted input |
| `AlmgDatePicker` | _(none extra)_ | Native date input |
| `AlmgDateRangePicker` | `startName`, `endName` (instead of `name`) | Two date pickers for a range |

Usage with RHF + Zod:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlmgInput, AlmgSelect, AlmgMaskInput } from '@almg/native';
import { mySchema, type MyInput } from '../services/my.schema';

const form = useForm<MyInput>({ resolver: zodResolver(mySchema), mode: 'onBlur' });

<AlmgInput<MyInput> name="email" form={form} label="Email" type="email" required />
<AlmgSelect<MyInput> name="role" form={form} label="Role" options={[{value:'admin',label:'Admin'}]} />
<AlmgMaskInput<MyInput> name="cpf" form={form} mask="999.999.999-99" label="CPF" />
```

### Data Display

| Component | Props | Description |
|-----------|-------|-------------|
| `AlmgTable` | `table: Table<TData>` (from `useAlmgTable`), `emptyMessage?` | Data table |
| `useAlmgTable` | `{ data, columns, enableSorting?, enablePagination?, pageSize?, enableGrouping?, initialSorting? }` | Hook that creates table instance |
| `AlmgAccordion` | `items: {id, title, content}[]`, `allowMultiple?`, `direction?`, `defaultOpen?` | Collapsible sections |
| `AlmgCarousel` | `children: ReactNode[]`, `autoPlay?`, `showDots?`, `showArrows?`, `intent?` | Image/content carousel |

### Feedback

| Component | Props | Description |
|-----------|-------|-------------|
| `AlmgSpinner` | `size?: 'sm'\|'md'\|'lg'` | Loading spinner |
| `AlmgErrorMessage` | `id?`, `children` | Error text |
| `AlmgToastProvider` | `children` | Wrap app root |
| `AlmgToastContainer` | _(none)_ | Renders toast notifications |
| `useAlmgToast()` | Returns `{ addToast }` | `addToast({ message, intent?, title?, duration? })` |

### Navigation

| Component | Props | Description |
|-----------|-------|-------------|
| `AlmgBreadcrumbs` | `items: {text, link?}[]`, `separator?` | Breadcrumb trail |
| `AlmgStepper` | `steps: {label, content}[]`, `activeStep`, `onStepChange` | Multi-step wizard |

---

## Multi-Step Form Pattern

For complex forms with multiple sections, use `AlmgStepper`:

```tsx
const [activeStep, setActiveStep] = useState(0);
const form = useForm<MyInput>({ resolver: zodResolver(mySchema), mode: 'onBlur', defaultValues: {...} });
const { fields, append, remove } = useFieldArray({ control: form.control, name: 'items' });

const steps = [
  { label: 'Basic Info', content: <div>...form fields...</div> },
  { label: 'Details', content: <div>...more fields with dynamic field arrays...</div> },
];

<AlmgStepper steps={steps} activeStep={activeStep} onStepChange={setActiveStep} />
<div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
  {activeStep > 0 && <AlmgButton intent="secondary" onClick={() => setActiveStep(s => s - 1)}>Back</AlmgButton>}
  {activeStep < steps.length - 1
    ? <AlmgButton intent="primary" onClick={() => setActiveStep(s => s + 1)}>Next</AlmgButton>
    : <AlmgButton intent="primary" onClick={handleSubmit}>Save</AlmgButton>}
</div>
```

## Dynamic Field Arrays

For repeatable nested forms (e.g., addresses):

```tsx
const { fields, append, remove } = useFieldArray({ control: form.control, name: 'addresses' });

{fields.map((field, i) => (
  <AlmgCard key={field.id} title={`Address ${i + 1}`}>
    <AlmgGrid columns={12} gap="md">
      <AlmgGridItem span={9}>
        <AlmgInput name={`addresses.${i}.street`} form={form} label="Street" required />
      </AlmgGridItem>
      <AlmgGridItem span={3}>
        <AlmgInput name={`addresses.${i}.number`} form={form} label="Number" required />
      </AlmgGridItem>
    </AlmgGrid>
    {fields.length > 1 && <AlmgButton intent="danger" onClick={() => remove(i)}>Remove</AlmgButton>}
  </AlmgCard>
))}
<AlmgButton intent="secondary" onClick={() => append({ street: '', number: '' })}>+ Add Address</AlmgButton>
```

## CSS Design Tokens

Typography and spacing use CSS custom properties from `@almg/styles`:

```
--font-size-almg-xs (0.75rem) / sm (0.875rem) / base (1rem) / lg (1.125rem) / xl (1.25rem) / 2xl (1.5rem)
--font-weight-almg-light (300) / normal (400) / medium (500) / semibold (600) / bold (700)
--font-almg-sans: "Inter", "Roboto", ui-sans-serif, system-ui, sans-serif
--spacing-almg-{0,1,2,3,4,5,6,8,10,12,16,20} (0 to 80px in 4px increments)
--border-radius-almg-sm (0.25rem) / md (0.375rem) / lg (0.5rem) / full (9999px)
--shadow-almg-sm / md / lg
--color-almg-brand-primary: #CF4D56
--color-almg-brand-secondary: #DEDEDE
--color-almg-brand-font-primary / font-secondary
```

Inline styles use these tokens for consistency:

```tsx
style={{ fontSize: 'var(--font-size-almg-xl)', fontWeight: 'var(--font-weight-almg-bold)' }}
```

## Vite Config for Monorepo

When consuming `@almg/*` packages from source in a monorepo, configure aliases to avoid duplicate dependencies:

```ts
// vite.config.ts
resolve: {
  alias: {
    '@almg/native': path.resolve(__dirname, '../native/src/index.ts'),
    '@almg/interfaces': path.resolve(__dirname, '../interfaces/src/index.ts'),
    'react-hook-form': dep('react-hook-form'),  // deduplicate shared deps
  },
  dedupe: ['react', 'react-dom'],
},
ssr: { noExternal: [/^@almg\//, 'clsx', 'tailwind-merge'] },
```

## Form Submission Pattern

This project uses a pattern to bridge RHF validation with React Router actions:

```tsx
const handleSubmit = form.handleSubmit((data) => {
  const formEl = document.createElement('form');
  formEl.method = 'post';
  formEl.style.display = 'none';
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = 'data';
  input.value = JSON.stringify(data);
  formEl.appendChild(input);
  document.body.appendChild(formEl);
  formEl.submit();
});
```

This validates with Zod via RHF first, then submits to the React Router action as serialized JSON.

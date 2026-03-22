import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlCheckbox } from './AlCheckbox';

const schema = z.object({
  terms: z.boolean().refine((v) => v === true, 'You must accept'),
});

type FormData = z.infer<typeof schema>;

function TestCheckbox(props: { disabled?: boolean; loading?: boolean }) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form>
      <AlCheckbox<FormData>
        name="terms"
        form={form}
        label="Accept terms"
        disabled={props.disabled}
        loading={props.loading}
      />
      <button type="button" onClick={() => form.trigger()}>
        Validate
      </button>
    </form>
  );
}

describe('AlCheckbox', () => {
  it('renders with label', () => {
    render(<TestCheckbox />);
    expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
  });

  it('renders as a checkbox', () => {
    render(<TestCheckbox />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<TestCheckbox disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('shows error after validation', async () => {
    render(<TestCheckbox />);
    await userEvent.click(screen.getByText('Validate'));
    expect(await screen.findByRole('alert')).toHaveTextContent('You must accept');
  });
});

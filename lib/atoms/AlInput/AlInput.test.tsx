import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlInput } from './AlInput';

const schema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
});

type FormData = z.infer<typeof schema>;

function TestInput(props: {
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
  helpText?: string;
}) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form>
      <AlInput<FormData>
        name="email"
        form={form}
        label={props.label ?? 'Email'}
        disabled={props.disabled}
        loading={props.loading}
        required={props.required}
        helpText={props.helpText}
      />
      <button type="button" onClick={() => form.trigger()}>
        Validate
      </button>
    </form>
  );
}

describe('AlInput', () => {
  it('renders with label', () => {
    render(<TestInput />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders without label when not provided', () => {
    function NoLabelInput() {
      const f = useForm<FormData>({ resolver: zodResolver(schema), mode: 'onBlur' });
      return <AlInput<FormData> name="email" form={f} placeholder="No label" />;
    }
    render(<NoLabelInput />);
    expect(screen.queryByText('Email')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('shows error message after validation', async () => {
    render(<TestInput />);
    const input = screen.getByLabelText('Email');
    await userEvent.click(input);
    await userEvent.tab(); // blur to trigger validation
    expect(await screen.findByRole('alert')).toHaveTextContent('Required');
  });

  it('shows invalid email error', async () => {
    render(<TestInput />);
    const input = screen.getByLabelText('Email');
    await userEvent.type(input, 'notanemail');
    await userEvent.tab();
    expect(await screen.findByRole('alert')).toHaveTextContent('Invalid email');
  });

  it('is disabled when disabled prop is true', () => {
    render(<TestInput disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(<TestInput loading />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('has aria-required when required', () => {
    render(<TestInput required />);
    expect(screen.getByLabelText(/Email/)).toHaveAttribute('aria-required', 'true');
  });

  it('shows help text', () => {
    render(<TestInput helpText="We never share your email" />);
    expect(screen.getByText('We never share your email')).toBeInTheDocument();
  });
});

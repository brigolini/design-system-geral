import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AlmgRadioButton } from './AlRadioButton';

const schema = z.object({
  color: z.string({ error: 'Obrigatório' }).min(1, 'Obrigatório'),
});

type FormData = z.infer<typeof schema>;

const options = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
];

function TestRadio(props: { disabled?: boolean; loading?: boolean }) {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  return (
    <form>
      <AlmgRadioButton<FormData>
        name="color"
        form={form}
        label="Color"
        options={options}
        disabled={props.disabled}
        loading={props.loading}
      />
      <button type="button" onClick={() => form.trigger()}>
        Validate
      </button>
    </form>
  );
}

describe('AlmgRadioButton', () => {
  it('renders all radio options', () => {
    render(<TestRadio />);
    expect(screen.getAllByRole('radio')).toHaveLength(3);
  });

  it('renders label', () => {
    render(<TestRadio />);
    expect(screen.getByText('Color')).toBeInTheDocument();
  });

  it('renders option labels', () => {
    render(<TestRadio />);
    expect(screen.getByLabelText('Red')).toBeInTheDocument();
    expect(screen.getByLabelText('Green')).toBeInTheDocument();
    expect(screen.getByLabelText('Blue')).toBeInTheDocument();
  });

  it('allows selecting a radio option', async () => {
    render(<TestRadio />);
    const redRadio = screen.getByLabelText('Red');
    await userEvent.click(redRadio);
    expect(redRadio).toBeChecked();
  });

  it('disables all radios when disabled', () => {
    render(<TestRadio disabled />);
    screen.getAllByRole('radio').forEach((radio) => {
      expect(radio).toBeDisabled();
    });
  });
});

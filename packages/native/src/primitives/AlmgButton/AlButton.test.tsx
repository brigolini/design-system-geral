import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { AlmgButton } from './AlButton';

describe('AlmgButton', () => {
  it('renders children', () => {
    render(<AlmgButton>Click me</AlmgButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<AlmgButton onClick={onClick}>Click</AlmgButton>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is true', () => {
    render(<AlmgButton disabled>Click</AlmgButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(<AlmgButton loading>Click</AlmgButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    render(<AlmgButton disabled onClick={onClick}>Click</AlmgButton>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies intent class', () => {
    render(<AlmgButton intent="danger">Delete</AlmgButton>);
    expect(screen.getByRole('button')).toHaveClass('almg-button--danger');
  });

  it('defaults to type="button"', () => {
    render(<AlmgButton>Click</AlmgButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { AlButton } from './AlButton';

describe('AlButton', () => {
  it('renders children', () => {
    render(<AlButton>Click me</AlButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<AlButton onClick={onClick}>Click</AlButton>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('is disabled when disabled prop is true', () => {
    render(<AlButton disabled>Click</AlButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(<AlButton loading>Click</AlButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    render(<AlButton disabled onClick={onClick}>Click</AlButton>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('applies intent class', () => {
    render(<AlButton intent="danger">Delete</AlButton>);
    expect(screen.getByRole('button')).toHaveClass('almg-button--danger');
  });

  it('defaults to type="button"', () => {
    render(<AlButton>Click</AlButton>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});

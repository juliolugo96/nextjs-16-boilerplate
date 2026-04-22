import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Button from '@/components/atoms/Button/Button';

describe('Button', () => {
  it('renders children and forwards click handlers', () => {
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Filter</Button>);
    fireEvent.click(screen.getByRole('button', { name: 'Filter' }));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('marks selected buttons with an accessible pressed state', () => {
    render(<Button isSelected>React</Button>);

    expect(screen.getByRole('button', { name: 'React' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });
});

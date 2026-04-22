import { describe, expect, it, vi } from 'vitest';

import {
  createNotification,
  createObservable,
  createProfileProxy,
  iconFlyweightFactory,
} from '@/lib/patterns/javascript';

describe('JavaScript pattern examples', () => {
  it('creates notifications through the factory pattern', () => {
    expect(createNotification('success', 'Saved')).toEqual({
      kind: 'success',
      message: 'Saved',
      tone: 'positive',
    });
  });

  it('notifies subscribers through the observer pattern', () => {
    const observable = createObservable<string>();
    const subscriber = vi.fn();

    const unsubscribe = observable.subscribe(subscriber);
    observable.notify('pattern-updated');
    unsubscribe();
    observable.notify('ignored');

    expect(subscriber).toHaveBeenCalledTimes(1);
    expect(subscriber).toHaveBeenCalledWith('pattern-updated');
  });

  it('validates writes through the proxy pattern', () => {
    const profile = createProfileProxy({
      email: 'ada@example.com',
      name: 'Ada',
    });

    profile.email = 'ada@patterns.dev';

    expect(profile.email).toBe('ada@patterns.dev');
    expect(() => {
      profile.email = 'invalid';
    }).toThrow('Email must be valid.');
  });

  it('reuses equivalent objects through the flyweight pattern', () => {
    const firstIcon = iconFlyweightFactory.get('check', 'M1 1');
    const secondIcon = iconFlyweightFactory.get('check', 'M1 1');

    expect(firstIcon).toBe(secondIcon);
  });
});

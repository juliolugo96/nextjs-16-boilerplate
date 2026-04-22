// TypeScript requires mixin constructors to accept an any[] rest parameter.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<TValue = object> = new (...args: any[]) => TValue;

export const withTimestamp = <TBase extends Constructor>(Base: TBase) =>
  class Timestamped extends Base {
    createdAt = new Date();
  };

type Subscriber<TPayload> = (payload: TPayload) => void;

export const createObservable = <TPayload>() => {
  const subscribers = new Set<Subscriber<TPayload>>();

  return {
    subscribe(subscriber: Subscriber<TPayload>) {
      subscribers.add(subscriber);

      return () => subscribers.delete(subscriber);
    },
    notify(payload: TPayload) {
      subscribers.forEach((subscriber) => subscriber(payload));
    },
  };
};

type Middleware<TContext> = (
  context: TContext,
  next: (context: TContext) => TContext,
) => TContext;

export const createMiddlewarePipeline = <TContext>() => {
  const middleware: Middleware<TContext>[] = [];

  return {
    use(fn: Middleware<TContext>) {
      middleware.push(fn);
    },
    run(initialContext: TContext) {
      const dispatch = (index: number, context: TContext): TContext => {
        const layer = middleware[index];

        if (!layer) {
          return context;
        }

        return layer(context, (nextContext) => dispatch(index + 1, nextContext));
      };

      return dispatch(0, initialContext);
    },
  };
};

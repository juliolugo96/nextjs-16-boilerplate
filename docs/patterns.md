# Patterns.dev Implementation Map

This boilerplate maps the current Patterns.dev JavaScript, React, Next.js, and performance pattern catalog into source locations.

## JavaScript Design Patterns

| Pattern | Location |
| --- | --- |
| Singleton | `src/lib/patterns/javascript/singleton.ts` |
| Proxy | `src/lib/patterns/javascript/proxy.ts` |
| Prototype | `src/lib/patterns/javascript/prototype.ts` |
| Observer | `src/lib/patterns/javascript/observer.ts` |
| Module | `src/lib/patterns/javascript/module.ts` |
| Mixin | `src/lib/patterns/javascript/mixin.ts` |
| Mediator/Middleware | `src/lib/patterns/javascript/mediatorMiddleware.ts` |
| Flyweight | `src/lib/patterns/javascript/flyweight.ts` |
| Factory | `src/lib/patterns/javascript/factory.ts` |

## JavaScript Loading and Performance Patterns

| Pattern | Boilerplate Approach |
| --- | --- |
| Animating View Transitions | Keep browser-only usage guarded behind feature detection. |
| Optimize Loading Sequence | Server-render first-screen UI and lazy-load non-critical regions. |
| Static Import | Use normal ES module imports for critical code. |
| Dynamic Import | Use `next/dynamic` in `src/lib/patterns/react/rendering.ts`. |
| Import On Visibility | Use `src/features/patterns/hooks/useIntersection.ts`. |
| Import On Interaction | Trigger `import()` from event handlers for optional workflows. |
| Route Based Splitting | Use App Router segments as bundle boundaries. |
| Bundle Splitting | Prefer route boundaries, feature modules, and dynamic imports. |
| PRPL | Combine Next prefetching, route splitting, and lazy client islands. |
| Tree Shaking | Keep utility modules side-effect-light with named exports. |
| Preload | Use metadata or explicit preload links for critical assets. |
| Prefetch | Use `next/link` prefetching for likely routes. |
| Optimize Third Parties | Use `next/script` loading strategies. |
| List Virtualization | Add a virtualization library when large lists justify it. |
| Compressing JavaScript | Rely on CDN or platform compression in production. |

## React and Next.js Patterns

| Pattern | Location |
| --- | --- |
| Container/Presentational | `src/features/patterns/containers/PatternExplorerContainer.tsx` and `src/components/organisms/PatternExplorer/PatternExplorer.tsx` |
| HOC | `src/lib/patterns/react/withPatternTelemetry.tsx` |
| Render Props | `src/lib/patterns/react/RenderPropData.tsx` |
| Hooks | `src/features/patterns/hooks/usePatternFilter.ts` |
| Compound Components | `src/lib/patterns/react/CompoundTabs.tsx` |
| Client-side Rendering | Client components use `"use client"` only where browser state/events are required. |
| Server-side Rendering | App routes and templates are server components by default. |
| Static Rendering | Static routes are left cacheable unless dynamic data is introduced. |
| Incremental Static Generation | Use `revalidate` or fetch revalidation when adding remote data. |
| Progressive Hydration | Keep most UI server-rendered and isolate interactive client islands. |
| Streaming SSR | Add Suspense and `loading.tsx` around slow route segments. |
| React Server Components | Default to server components until interactivity is needed. |
| Core Web Vitals Optimization | Prefer Next primitives such as `next/image`, `next/font`, and `next/script`. |
| React Stack Patterns | The stack uses App Router, TypeScript, Redux Toolkit, and feature folders. |

Source: https://www.patterns.dev/

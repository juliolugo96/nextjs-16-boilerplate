'use client';

import React from 'react';

interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error('CompoundTabs components must be rendered within CompoundTabs.Root.');
  }

  return context;
};

interface RootProps {
  defaultValue: string;
  children: React.ReactNode;
}

const Root: React.FC<RootProps> = (props) => {
  const { defaultValue, children } = props;
  const [activeValue, setActiveValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue }}>
      {children}
    </TabsContext.Provider>
  );
};

interface TriggerProps {
  value: string;
  children: React.ReactNode;
}

const Trigger: React.FC<TriggerProps> = (props) => {
  const { value, children } = props;
  const { activeValue, setActiveValue } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <button
      aria-pressed={isActive}
      onClick={() => setActiveValue(value)}
      type="button"
    >
      {children}
    </button>
  );
};

interface PanelProps {
  value: string;
  children: React.ReactNode;
}

const Panel: React.FC<PanelProps> = (props) => {
  const { value, children } = props;
  const { activeValue } = useTabsContext();

  if (activeValue !== value) {
    return null;
  }

  return <div>{children}</div>;
};

export const CompoundTabs = {
  Root,
  Trigger,
  Panel,
};

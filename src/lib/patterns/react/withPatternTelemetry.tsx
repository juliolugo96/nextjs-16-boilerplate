import React from 'react';

interface TelemetryProps {
  patternId: string;
}

export const withPatternTelemetry = <TProps extends object>(
  Component: React.ComponentType<TProps>,
) => {
  const ComponentWithPatternTelemetry: React.FC<TProps & TelemetryProps> = (props) => {
    const { patternId, ...componentProps } = props;

    React.useEffect(() => {
      console.info(`Viewed pattern: ${patternId}`);
    }, [patternId]);

    return <Component {...(componentProps as TProps)} />;
  };

  return ComponentWithPatternTelemetry;
};

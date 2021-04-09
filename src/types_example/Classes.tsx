import React, { Component, ReactNode } from 'react';

type ComponentState = {
  count: number;
};

type ComponentProps = {
  readonly title?: string;
};

class ClassesTypes extends Component<ComponentState, ComponentProps> {
  state: {} = {
    count: 0,
  };

  static defaultProps: ComponentProps = {
    title: 'Default title',
  };

  static getDerivedStateFromProps(
    props: ComponentProps,
    state: ComponentState,
  ): ComponentState | null {
    return true ? { count: 2 } : null;
  }

  componentDidMount(): void {}

  // shouldComponentUpdate(
  //   nextProps: ComponentProps,
  //   nextState: ComponentState,
  // ): boolean {
  //   return true;
  // }

  render(): React.ReactElement<{ children: ReactNode }> {
    return <></>;
  }
}

export default ClassesTypes;

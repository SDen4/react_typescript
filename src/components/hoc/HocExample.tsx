import React from 'react';

function HocExample(Component: any) {
  // console.log(Component().props.children.props.children.length);
  return class HocExample extends React.Component {
    render() {
      return <Component {...this.props}></Component>;
    }
  };
}

export default HocExample;

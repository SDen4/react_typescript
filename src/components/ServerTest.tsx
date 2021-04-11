import React from 'react';
import axios from 'axios';

export default class ServerTest extends React.Component {
  componentDidMount() {
    axios
      .get('https://react-ts-2c869-default-rtdb.firebaseio.com/test.json')
      .then((response) => console.log(response));
  }

  render() {
    return <h1>Server Test</h1>;
  }
}

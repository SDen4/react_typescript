import React from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';

export default class ServerTest extends React.Component {
  state = {
    dataFromServer: [],
    loading: true,
  };

  async componentDidMount() {
    try {
      await axios
        .get('https://react-ts-2c869-default-rtdb.firebaseio.com/todos.json')
        .then((response) => {
          this.setState(() => ({
            dataFromServer: Object.values(response.data),
            loading: false,
          }));
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const data = this.state.dataFromServer;
    return (
      <>
        <h1>Server Test</h1>
        {this.state.loading ? (
          <Loader />
        ) : (
          data.map((item) => {
            const { id, title, completed } = item;
            return (
              <div key={id}>
                <h5>{title}</h5>
                <span>Completed: {completed ? 'true' : 'false'}</span>
              </div>
            );
          })
        )}
      </>
    );
  }
}

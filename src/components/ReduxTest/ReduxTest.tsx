import React from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions/todos';

import Loader from '../ui/Loader/Loader';

interface IProps {
  todos: any;
  loading: boolean;
  fetchTodos(): void;
}

class ServerTest extends React.Component<IProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const data = this.props.todos;
    return (
      <>
        <h1>Redux+Server+Saga Test</h1>
        {this.props.loading ? (
          <Loader />
        ) : (
          data.map((item: any) => {
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

function mapStateToProps(state: any) {
  return {
    todos: state.todos.todos,
    loading: state.todos.loading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerTest);

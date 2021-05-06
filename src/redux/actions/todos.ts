// import axios from '../../axios/axios';
import {
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  REQUEST_TODOS,
} from './actionsType';

export function fetchTodos() {
  return {
    type: REQUEST_TODOS,
  };
  // return async (dispatch: any) => {
  //   dispatch(fetchTodosStart());
  //   try {
  //     let dataFromServer: any;
  //     let response: any = await axios.get('/todos.json');
  //     dataFromServer = Object.values(response.data);
  //     dispatch(fetchTodosSuccess(dataFromServer));
  //   } catch (error) {
  //     dispatch(fetchTodosError(error));
  //   }
  // };
}

export function fetchTodosStart() {
  return {
    type: FETCH_TODOS_START,
  };
}
export function fetchTodosSuccess(dataFromServer: any) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos: dataFromServer,
  };
}
export function fetchTodosError(error: any) {
  return {
    type: FETCH_TODOS_ERROR,
    error,
  };
}

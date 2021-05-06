import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_TODOS } from './actions/actionsType';
import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
} from '../redux/actions/todos';
import axios from '../axios/axios';

interface Response {
  payload: any;
}

function* sagaWatcher() {
  yield takeEvery(REQUEST_TODOS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(fetchTodosStart());
    const payload: Response = yield call(fetchTodos);
    yield put(fetchTodosSuccess(payload));
  } catch (error) {
    yield put(fetchTodosError(error));
  }
}

async function fetchTodos() {
  let response: any = await axios.get('/todos.json');
  return await Object.values(response.data);
}

export default sagaWatcher;

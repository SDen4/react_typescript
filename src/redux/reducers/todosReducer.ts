import {
  FETCH_TODOS_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
} from '../actions/actionsType';

const initialState: any = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      };

    case FETCH_TODOS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default todoReducer;

// check the existence of one TodoForm and one TodoList in TodosPage //
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TodosPage from './TodosPage';
import { TodoForm } from '../../components/TodoForm';
import TodoList from '../../components/TodoList';

configure({ adapter: new Adapter() });
const wrapper = shallow(<TodosPage />);

describe('TodosPage', () => {
  it('TodosPage should contain one TodoForm component', () => {
    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });

  it('TodosPage should contain one TodoList component', () => {
    expect(wrapper.find(TodoList)).toHaveLength(1);
  });
});

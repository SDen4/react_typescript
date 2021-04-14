// check the existence of one input in TodosPage //
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Todos from './TodosPage';
import { TodoForm } from '../../components/TodoForm';

configure({ adapter: new Adapter() });

describe('Todos', () => {
  it('Todos should contain one input component', () => {
    const wrapper = shallow(<Todos />);

    expect(wrapper.find(TodoForm)).toHaveLength(1);
  });
});

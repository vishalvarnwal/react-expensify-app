import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render the expense list item correctly', () => {
    const wrapper = shallow(<ExpenseListItem { ...expenses[1] }/>);
    expect(wrapper).toMatchSnapshot();
})
import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
// this function belongs to jest, beforeEach is called when we want to particular line of codes run for all
//  the test cases at the beginning
beforeEach(() => {
    addExpense =jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
});

test('should render the AddExpesne Page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
})
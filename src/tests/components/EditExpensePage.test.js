import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, history, startRemoveExpense, wrapper;

beforeAll(() => {
    startEditExpense = jest.fn();
    history = {push: jest.fn()};
    startRemoveExpense = jest.fn();
    wrapper = shallow(
        <EditExpensePage 
            startEditExpense={startEditExpense} 
            history={history} 
            startRemoveExpense={startRemoveExpense}
            expense={expenses[2]}
        />
    )
})

test('should render the edit expense page correctly', () => { 
    expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});
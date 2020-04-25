import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, history, removeExpense, wrapper;

beforeAll(() => {
    editExpense = jest.fn();
    history = {push: jest.fn()};
    removeExpense = jest.fn();
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            history={history} 
            removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
});

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[2].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
});
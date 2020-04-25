import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default expense values', () => {
    const result = expenseReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual([]);
})

test('should add expense an expense', () => {
    const action ={
        type: 'ADD_EXPENSE',
        expense: {
            id: '4',
            description: 'WaterBill',
            note: '',
            amount: 200,
            createdAt: 0
        }
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([...expenses, action.expense])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual([expenses[0],expenses[2]])

})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '5'
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses)
})

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Rent1'
        }
    }
    const result = expenseReducer(expenses, action);
    expect(result[0].description).toBe("Rent1");
})

test('should not edit expense if expense id is not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'LPG_BILL'
        }
    }
    const result = expenseReducer(expenses, action);
    expect(result).toEqual(expenses);
})
import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const result = removeExpense({id: '123_abc'})
    expect(result).toMatchObject  ({
        type: 'REMOVE_EXPENSE',
        id: '123_abc'
    })
})

test('should setup edit expense action object', () => {
    const result = editExpense('123_abc', { note:'new note value' })
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123_abc',
        updates: {note: 'new note value'}
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 650000,
        createdAt: 1500,
        note: 'This is last month rent'
    }
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',        
        expense: {
            ...expenseData,
            id: expect.any(String)            
        }
    })
})

test('should ssetup add expense action object with default values', () => {
    const result = addExpense();
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})
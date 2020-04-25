import uuid from 'uuid'; 

//Add Expenses
export const addExpense = (
    { 
        description = '',
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
    ) =>({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
});

//Remove Expenses
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id  
})

//Edit Expenses
export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
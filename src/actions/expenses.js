import uuid from 'uuid'; 
import database from '../firebase/firebase';

/*
    --action generator work--
    component call action generator
    action generator returns object
    component dispatches object
    redux store changes
    -------------------------------------
    --action generator work with firebase--
    components calls action generator 
    action generators return function
    component dispatched function (?)
    function runs (has the ability to dispatch other actions and do whatever it wants)

*/
//Add Expenses
export const addExpense = (expense) =>({
        type: 'ADD_EXPENSE',
        expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt}

        //why return used below, => for chaining the promises in testing
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=> {
            dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }
            ));
        })

    };
}

//Remove Expenses
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id  
})

export const startRemoveExpense = ({ id } = {}) => {
    //const ids = { id };
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${ id }`).remove().then(()=>{
            dispatch(removeExpense({ id }));
        });
    };
};

//Edit Expenses
export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };    
};

//SET_EXPENSES 
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

export const setStartExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then((snapshot)=> {
            
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        });
    };
};
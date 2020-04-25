import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
console.log('reducers is running!');

//Add Expenses
const addExpense = (
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
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id  
})

//Edit Expenses
const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//Set Text Filter
const setTextFilter = (text='') =>({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort By Date
const sortByDate = () =>({
    type: 'SORT_BY_DATE',
});

//Sort By Amount
const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
});

//Set Start Date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate

})

//Set End Date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//Expense Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state, action.expense
            ]

        case 'REMOVE_EXPENSE':
            //return state.filter((item)=>{return item.id !== action.id })   //without destructuring
            return state.filter(         //destructuring
                ({id})=>(
                id !== action.id
            )) 

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })

        default:
            return state;
    }
}

//Filter Reducer
const filtersReducerDefaultState = {
    text: '', 
    sortBy: 'date',
    startDate: undefined, 
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text};

        case 'SORT_BY_DATE':
            return {
                ...state, sortBy: 'date'
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state, sortBy: 'amount'
            }

        case 'SET_START_DATE':
            return {
                ...state, startDate: action.startDate
            } 

        case 'SET_END_DATE':
            return {...state, endDate: action.endDate} 

        default:
            return state;
    }
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {

    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

//store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: 500 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 570 }));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('date'));
//store.dispatch(setTextFilter());

//store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

 //store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
 //store.dispatch(setEndDate(999));


const demoState = {
    expenses:
    [{
        id: 'xyz',
        description: 'january rent',
        note: 'this is my final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',  //amount or date
        startDate: undefined,
        endDate: undefined
    }
}

// const user = {
//     name: 'vishal',
//     age: 21,
    
// } 
// const x = {
//     age: "M",
// }

// console.log({...user,...x});
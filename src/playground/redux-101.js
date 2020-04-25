import { createStore } from 'redux';

//Reducres
//1. Reducers are pure function means output is only detemined by input passed as argument
//2. Never change state or action  that's why in the below function we did not cange the state, we just reading or returning the value

const countReducer = (state = {count: 0}, action)=> { 
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }

        case 'RESET':
            return {
                count: 0
            }

        case 'SET':
            //const set = action.set;
            return {
                count: action.set
            }

        default:
            return state;
    }  
}

//createStore takes first argument as a function, in the function we are passing the state having default value as 0
const store = createStore(countReducer);

//console.log(store.getState());  // fetching the current state using "store.getState"


/**
TASK:
I would like to increment the count
I would like to decrement the count
I would like to reset the count to zero
**/


const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',   //It's an convention to use type in capital letter.multiple word than separated by underscore.
        incrementBy: incrementBy
    };
};

const decrementCount = ({decrementBy = 1} = {}) =>({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () =>({type: 'RESET'});

const setCount = ({set=0} = {}) => {
    return{
        type: 'SET',
        set
    }
}

//store.subscribe can pass a sigle function to it and this function gets called every single time when store gets changed
// unsubscribe: this function is called to stop next action type execution
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//dispatch allows us to sent the action type
store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 10}));

//unsubscribe();       //if here we call unsubscribe function then it will allow to execute next action code 

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 6}));

store.dispatch(resetCount());

store.dispatch(setCount({set: 25}));


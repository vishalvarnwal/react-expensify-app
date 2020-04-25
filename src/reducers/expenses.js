//Expense Reducer
const expenseReducerDefaultState = [];
export default (state = expenseReducerDefaultState, action)=>{
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

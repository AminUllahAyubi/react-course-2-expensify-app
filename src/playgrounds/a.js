
import { createStore,combineReducers } from "redux";
import uuid from "uuid";

const addExpense=(items=undefined)=>{
    return{
        type:"ADD_EXPENSE",
        items
    }
}
const removeExpenese=(item)=>{
    return{
        type:'REMOVE_EXPENSE',
        item
    }
}

const expensesDefault=[]
const expenseReducer=(state=expensesDefault,action)=>{
    switch(action.type){
        case"ADD_EXPENSE":
            // return[...state,action.items]
            return state.concat(action.items)
        case"REMOVE_EXPENSE":
            return(
                state.filter((items,index)=>{
                   return items!==action.item
                })            
            )
        default:
            return state
    }
}

const filtersReducerDefault={
    name:'anonymous',
    age:undefined,
    salary:undefined
}
const filtersReducer=(state=filtersReducerDefault,action)=>{
    switch(action.type){
        default:
            return state
    }
}
const store=createStore(
    combineReducers(
        {
            expenses:expenseReducer,
            filters:filtersReducer
        }
    )
);
store.subscribe(()=>{
    console.log(store.getState())
});
store.dispatch(addExpense());
store.dispatch(addExpense([24,23,234,123,345]));
store.dispatch(removeExpenese(23));



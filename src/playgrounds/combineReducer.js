import { createStore,combineReducers } from "redux";
import uuid from "uuid";


// ADD_EXPENSE
const addExpense=(
    {
        id=uuid(),
        description='',
        note='',
        amount=0,
        createAt=0
    
    }={})=>{
    return{
        type:"ADD_EXPENSE",
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createAt
        }
    }
}

// REMVOE_EXPENSE
const removeExpense=({id})=>{
    return{
        type:'REMOVE_EXPENSE',
        id
    }
}
// EDITE_EXPENSE
const editeExpense=(id,update)=>{
    return{
        type:'EDITE_EXPENSE',
        id,
        update
    }
}
// SET_TEXT_FILTER
const setTextFilter=({text=''}={})=>{
    return{
        type:'SET_TEXT_FILTER',
        text
    }
}
// FILTER_BY_DATE
const sortByAmount=()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}
// FILTER_BY_AMOUNT
const sortByDate=()=>{
    return{
        type:'SORT_BY_DATE'
    }
}

// SET_START_DATE
const setStartDate=(startDate=undefined)=>{
    return{
        type:"SET_START_DATE",
        startDate

    }
}
// SET_END_DATE
const setEndDate=(endDate=undefined)=>({
    type:'SET_END_DATE',
    endDate
})
// expense_reducer
const expensesReducerDefaultState=[]
const expenseReducer=(state=expensesReducerDefaultState,action)=>{
    switch(action.type){
        case'ADD_EXPENSE':
            return [...state,action.expense]
        case'REMOVE_EXPENSE':
            return (
                state.filter((expense)=>{
                    return expense?expense.id!=action.id:expense
                })
            )
        case'EDITE_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                   return {...expense,...action.update}
                }
                else{
                    return expense
                }
            })
        default:
            return state; 
    }
}
// filter_reducer

const filterReducerDefaultState={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterReducerDefaultState,action)=>{
    switch(action.type){
        case'SET_TEXT_FILTER':
            return{
                ...state,
                text:action.text
            }
        case'SORT_BY_DATE':
            return{
                ...state,
                sortBy:'date'
            }
        case'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy:'amount'
            }
        case'SET_START_DATE':
            return{
                ...state,
                startDate:action.startDate
            }
        case'SET_END_DATE':
            return{
                ...state,
                endDate:action.endDate

            }
        default:
            return state
    }
}

const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number'||expense.createAt>=startDate;
        const endDateMatch=typeof endDate!=='number'||expense.createAt<=startDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(sortBy=='date'){
            return a.createAt<b.createAt?1:-1
        }
        else if(sortBy=='amount'){
            return a.amount<b.amount?1:-1
        }
        
    })
}

const store=createStore(combineReducers({
    expenses:expenseReducer,
    filter:filterReducer
}));


store.subscribe(()=>{
    const state=store.getState();
    const visibleExpense=getVisibleExpenses(state.expenses,state.filter)
    console.log(visibleExpense);
    
})
const expenseOne=store.dispatch(addExpense({description:'text',amount:-9}));
const expenseTwo=store.dispatch(addExpense({amount:1}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editeExpense(expenseOne.expense.id,{description:'it\'horible'}))
// store.dispatch(setTextFilter({text:'text'}));

// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(234));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(239993));
const demoState={
    expenses:[{
        id:'a90bx',
        description:'rent',
        note:'this is date of your death',
        amount:2323,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}



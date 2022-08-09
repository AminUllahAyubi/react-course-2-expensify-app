import { createStore,combineReducers } from "redux";
import uuid from 'uuid';


// ADD_EXPENSE
const addExpense=(
    {
        description='',
        note='',
        amount=0,
        createAt=0
    }={}
)=>{
    return{
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
             createAt
        }
    }
}
// REMOVE_EXPENSE
const removeExpense=({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
        id
    }
}
// EDIT_EXPENSE
const editExpense=(id,U)=>{
    return{
        type:'EDIT_EXPENSE',
        id,
        U
    }
}
// ADD_TEXT_FILTER
const addTextFilter=({text='no text',sortBy='',startDate='',endDate=''}={})=>{
    return{
        type:'ADD_TEXT_FILTER',
        text,
        sortBy,
        startDate,
        endDate
    }
}

// SORT_BY_AMOUNT
const sortByAmount=()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}
// SET_START_DATE
const setStartDate=(startDate)=>{
    return{
        type:'SET_START_DATE',
        startDate
    }
}
// SET_END_DATE
const setEndDate=(endDate)=>{
    return{
        type:'SET_END_DATE',
        endDate
    }
}

const expenseReducerDefaultValue=[];
export default  expenseReducer=(state=expenseReducerDefaultValue,action)=>{
    switch(action.type){
        case'ADD_EXPENSE':
        return [...state,action.expense]
        case'REMOVE_EXPENSE':
        return(
            state.filter(({id})=>{
                return id!==action.id
            })            
        )
        case'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        ...expense,...action.U
                    }
                }else{
                    return expense
                }
            });
        case"SORT_BY_AMOUNT":
        return state.sort(function(a,b){return a.amount-b.amount}) 
        default:
            return state;
    }
}

const filtersReducerDefault={
    id:uuid(),
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filtersReducer=(state=filtersReducerDefault,action)=>{
    switch(action.type){
        case"ADD_TEXT_FILTER":
        return{
            ...state,...action
        }
        case"ADD_T":
        return{
            ...state,"text":action.text
        }
        case'SET_START_DATE':
        return{
            ...state,startDate:action.startDate
        }
        case'SET_END_DATE':
        return{
            ...state,endDate:action.endDate
        }
        default:
            return state;
    }
}

const visibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number'||expense.startDate>=startDate;
        const endDateMatch=typeof endDate!=='number'||expense.endDate<=endDate;
        const textMatch=true;

        return startDateMatch && endDateMatch && textMatch
    });
}

const store=createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filtersReducer
    })
);
const unsubscribe=store.subscribe(()=>{
    const state=store.getState();
    console.log(visibleExpenses(state.expenses,state.filters));
});

const expenseOne=store.dispatch(addExpense({description:'we',note:'lcome',amount:0,createAt:31234}));
const expenseTwo=store.dispatch(addExpense({description:'we',note:'lcome',amount:0,createAt:334}));
store.dispatch(setStartDate(-4234))
// const expenseTwo=store.dispatch(addExpense({description:'bye',note:'removeThat',amount:2312,date:'2022-3-12'}));
// store.dispatch(addExpense({description:"aaa",note:'abbbbb',amount:12121212,date:'2022-2-3'}));
// store.dispatch(addExpense({description:"aaa",note:'abbbbb',amount:12,date:'2022-2-3'}));
// store.dispatch(sortByAmount());

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:9000}));

// store.dispatch(addTextFilter({
//     text:"Redux is really complex topic of react",
//     sortBy:'endDate',
//     startDate:'2022-3-30',
//     endDate:'2022-5-2'    
// }));
// store.dispatch(addTextFilter());
// store.dispatch(addT('this is string which is passed to the filter object'));
// store.dispatch(addT());

// store.dispatch(setStartDate(233));
// store.dispatch(setEndDate(234));
const demoState={
    expenses:[{
        id:'aasd',
        description:'january rent',
        note:'this was the final payment for that address',
        amount:2323,
        createAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
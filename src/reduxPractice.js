import { createStore } from 'redux';

const incrementCount=({incrementBy=1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
}
const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})
const set=({count=1}={})=>{
    return{
        type:'SET',
        count
    }
}
const reset=()=>({
    type:"RESET"
})

const reducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+action.incrementBy
            }
        case 'DECREMENT':
            return{
                count:state.count-action.decrementBy
            }
        case "SET":
            return{
                count:action.count
            }
        case 'RESET':
            return{
                count:0
            }
        default :
            return state
    }
}

const store=createStore(reducer);
store.subscribe(()=>{
        console.log(store.getState())
    }
)
store.dispatch(incrementCount({incrementBy:23}));
store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:2}));
store.dispatch(decrementCount());

store.dispatch(set({count:34}));

store.dispatch(reset());


import {createStore} from 'redux';
const incrementCount=({incrementBy=1}={})=>{
    return{
        type:'INCREMENT',
        incrementBy
    }
}
const decrementCount=({decrementBy=1}={})=>{
    return{
        type:'DECREMENT',
        decrementBy
    }
}
const resetCount=()=>({
    type:'RESET',
})
const createReducer=(state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count:state.count+action.incrementBy
            }
        case'DECREMENT':
            return{
                count:state.count-action.decrementBy
            }
        case'RESET':
            return{
                count:0
            }
        default:
            return state;
    }
}

const store=createStore(createReducer);
store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:15}));
store.dispatch(resetCount());

import filter from "../../reducers/filter";
import filterReducers from "../../reducers/filter";

test('set the filter reducer with default state',()=>{
    const state=filterReducers(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:"date",
        startDate:undefined,
        endDate:undefined
    })
})
test('should set sortBy to amount',()=>{
    // const state={text:'',sortBy:"amount",startDate:undefined,endDate:undefined}
    // const action=filterReducers(state,{
    //     type:'SORT_BY_AMOUNT',
    //     ...state
    // })
    // expect(action).toEqual({
    //     // type:'SORT_BY_AMOUNT',
    //     ...state
    // })
    const state=filterReducers(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount')
})
test('should set sortBy To date',()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const state=filterReducers(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')
})

test('should set text filter',()=>{
    const text="asd";
    const state=filterReducers(undefined,{type:'SET_TEXT_FILTER',text})
    expect(state.text).toBe(text)
})

test('should set startDate',()=>{
    const startDate=123;
    const state=filterReducers(undefined,{type:'SET_START_DATE',startDate})
    expect(state.startDate).toBe(startDate)
})

test('should set endDate',()=>{
    const endDate=123;
    const action={
        type:'SET_END_DATE',
        endDate
    }
    const state=filterReducers(undefined,action)
    expect(state.endDate).toBe(endDate)
})



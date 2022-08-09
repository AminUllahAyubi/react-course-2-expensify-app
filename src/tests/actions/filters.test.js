
import { setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate } from "../../actions/filters";

test('should set setTextFilter action object with passing value',()=>{
    const action=setTextFilter({text:'text'});
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'text'
    })
})
test('should set setTextFilter action object with default value',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
})

test('should set start date action object ',()=>{
    const action=setStartDate('2311');
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:'2311'
    })
})
test('should set end date action object',()=>{
    const action=setEndDate('211');
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:'211'
    })
})
test('should set sortByDate action object',()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})
test('should set sortByAmount action object',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})


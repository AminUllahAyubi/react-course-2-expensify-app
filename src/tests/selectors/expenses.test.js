import selectExpense from "../../selectors/expenses";
import expenses from '../fixtures/expenses'
test('should filter by text filter value', () => {
    const filter = {
        text: 'bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2]])
})
test('should filter by startDate', () => {
    const filter = {
        text: '',
        sortBy: 'date',
        startDate: 2,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2]])
})
// test('should filter by endDate', () => {
//     const filter = {
//         text: '',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate:0
//     }
//     const result = selectExpense(expenses, filter);
//     expect(result).toEqual([expenses[0], expenses[ 1]])
// })
test('should filter by Amount', () => {
    const filter = {
        text: '',
        sortBy: 'Amount',
        startDate: 2,
        endDate: undefined
    }
    const result = selectExpense(expenses, filter);
    expect(result).toEqual([expenses[1], expenses[2]])
})
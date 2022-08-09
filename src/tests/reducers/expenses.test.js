
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
test('should add expense with default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([])
});

test('should add expense to expenses array', () => {
    const expense = [{
        description: 'ab',
        note: 'a',
        amount: 0,
        createAt: 23
    }]
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove any index', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '23'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
});
test('should edit expense', () => {
    const updateExpense = {
        id: expenses[0].id,
        description: 'Wwerwerater',
        note: 'srwerwer',
        amount: 9230,
        createAt: 23420
    }
    const action = {
        type: 'EDITE_EXPENSE',
        id: expenses[0].id,
        updateExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state[1]).toEqual(expenses[1])
});
test('should not edit expense', () => {
    const updateExpense = {
        id: expenses[0].id,
        description: 'Wwerwerater',
        note: 'srwerwer',
        amount: 9230,
        createAt: 23420
    }
    const action = {
        type: 'EDITE_EXPENSE',
        id:'23',
        updateExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});
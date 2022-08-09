import { addExpense, editeExpense, removeExpense } from "../../actions/expenses";
test('should remove the expense', () => {
    const action = removeExpense({ id: '32s' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '32s'
    })
});
test('should edit the expense', () => {
    const editExpenseData = {
        description: 'a',
        note: 'b',
        amount: '23',
        createAt: '233'
    }
    const action = editeExpense('32s', editExpenseData);
    expect(action).toEqual({
        type: 'EDITE_EXPENSE',
        id: "32s",
        update: {
            ...editExpenseData
        }
    })
})
test('should add new Expense with data passing', () => {
    const expenseData = {
        description: 'a',
        note: 'b',
        amount: '12',
        createAt: '1212'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})
test('should add new expense with no data passing(default data)', () => {
    const expenseDefaultData = {
        description: '',
        createAt: 0,
        amount: 0,
        note: ''
    }

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefaultData,
            id: expect.any(String)
        }
    })
})
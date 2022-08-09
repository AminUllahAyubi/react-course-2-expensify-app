import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItems from './ExpenseListItems';
import selectExpense from '../selectors/expenses'
export const ExpenseList = (props) => (
    <p>
        {
            props.expenses.length=== 0 ? (
                <p>No Expenses Exsists</p>
            ) : (
                props.expenses.map((expense) => {
                    return (
                        <ExpenseListItems
                            {...expense}
                            key={expense.id}
                        />
                    )
                })
            )
        }
    </p>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
    }
}
const ConnectExpenseList = connect(mapStateToProps)(ExpenseList);
export default ConnectExpenseList
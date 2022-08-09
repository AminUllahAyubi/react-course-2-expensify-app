import React from "react";
// import expenses from "../reducers/expenses";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense  } from "../actions/expenses";
const addExpensePage = (props) => {
    return (
      <div>
        <h2>Add Expense</h2>
        <ExpenseForm
          onSubmit={(expense)=>{
            props.dispatch(addExpense(expense))
            props.history.push('/')
          }}
        />
      </div>
    );
  };
export default connect()(addExpensePage);

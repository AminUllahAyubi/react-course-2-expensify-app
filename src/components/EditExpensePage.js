import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editeExpense } from "../actions/expenses";
import { removeExpense } from "../actions/expenses";
const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editeExpense(props.location.hash.slice(1), expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.location.hash.slice(1) }))
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id == props.location.hash.slice(1)
    })
  };
}
export default connect(mapStateToProps)(EditExpensePage);

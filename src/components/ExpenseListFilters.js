import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'
const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter({ text: e.target.value }))
       }}></input>
        <select
            value={props.filters.sortBy}
            
            onChange={(e) => {
                if (e.target.value === 'date') {
                    props.dispatch(sortByDate());
                }
                else if (e.target.value === 'amount') {
                    props.dispatch(sortByAmount())
                }
            }}>
            <option value="date">date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);
const mapPropsToState = (state) => {
    return {
        filters: state.filters
    }
}

const ConnectExpenseListFilters = connect(mapPropsToState)(ExpenseListFilters)

export default ConnectExpenseListFilters;
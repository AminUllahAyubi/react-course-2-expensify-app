import React, { createElement } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export default ({ id, description, note, amount, createAt}) => {
    return (
        <div>
            <h3>
                <Link to={`/edit#${id}`}>{description}</Link></h3>
            <p>{amount} - {createAt}</p>
        </div>
    )
}
// const mapStateToState = (state) => {
//     return {
//         expenses: state.expenses
//     }
// }
// export default connect(mapStateToState)(ExpenseListItems);
// export default ExpenseListItems;


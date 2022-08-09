
import React from "react";
import { connect, ReactReduxContext } from "react-redux";
import { SingleDatePicker } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
const now = moment();
console.log(now.format('MMM Do YYYY'))
class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            // createAt:moment(),
            createAt: props.expense ? props.expense.createAt : new Date(),
            error: '',
            // calenderFocused:false
        }
    }
    onDescriptionChange = (e) => {
        let description = e.target.value;
        this.setState(() => {
            return {
                description
            }
        })
    }
    onNoteChange = (e) => {
        let note = e.target.value;
        e.persist()
        this.setState(() => {
            return {
                note
            }
        })
    }
    onAmountChange = (e) => {
        let amount = e.target.value;
        e.persist();
        const reg = /^\d{1,}(\.\d{0,2})?$/;
        if (!amount || amount.match(reg)) {
            this.setState(() => {
                return {
                    amount
                }
            })
        }
    }
    onDateChange = (e) => {
        let createAt = e.target.value;
        e.persist();
        this.setState(() => {
            return {
                createAt
            }
        })
    }
    // onDateChange=(createAt)=>{
    //     this.setState(()=>({createAt}))
    // }
    // onFocusChange=({focused})=>({calenderFocused:focused})

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return { error: 'Please fill the description and amount' }
            })
        }
        else {
            this.setState(() => {
                return { error: '' }
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={(e) => {
                            this.onDescriptionChange(e)
                        }}
                    >
                    </input>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={(e) => {
                            this.onAmountChange(e)
                        }}
                    >
                    </input>
                    {/* css and sass is not completly configure when it done use the bellow component */}
                    {/* <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                    /> */}
                    <input type='date'
                        onClick={(e) => { e.target.type = 'date' }}
                        value={this.state.createAt}
                        onChange={(e) => { this.onDateChange(e) }}
                    >
                    </input>
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={(e) => {
                            this.onNoteChange(e);
                        }}
                    >
                    </textarea>
                    <button >Add Expense</button>
                </form>
            </div>
        )
    }
}
export default ExpenseForm
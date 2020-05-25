import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//const date = new date();
//const now = moment();
//console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? parseFloat(props.expense.amount/100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt
                ) : moment(),
            calendarFocused: false,
            error: undefined
        }
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;       //if directly used e.target.value in this.setState function, it
        this.setState(() =>({ description }));    //will not work for that we need to use e.persist();
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState (() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            const error = 'Please provide description and amount.'
            this.setState(() => ({ error }))
        }else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: (this.state.createdAt).valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input 
                    className="text-inputs"
                    type = 'text'
                    placeholder = 'description'
                    autoFocus
                    value = {this.state.description}
                    onChange = {this.onDescriptionChange}
                />
                <input
                    className="text-inputs"
                    type = 'number'
                    placeholder = 'amount'
                    autoFocus
                    value = {this.state.amount}
                    onChange = {this.onAmountChange}
                />
                <SingleDatePicker
                    date = {this.state.createdAt}
                    onDateChange = {this.onDateChange}
                    focused = {this.state.calendarFocused}
                    onFocusChange = {this.onFocusChange}
                    numberOfMonths = {1}
                    isOutsideRange = {() => false}
                />
                <textarea 
                    className="textarea"
                    placeholder = 'Add a note for your expense (optional)'
                    value = {this.state.note}
                    onChange = {this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className="button">Save Expense</button> 
                </div>
                   
            </form>
            
        )
    }
}
import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { removeExpense} from '../actions/expenses';
import { Link } from 'react-router-dom';
 

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount/100).format('$0,0.00')}
             - 
            {moment(createdAt).format("MMM Mo, YYYY")}
        </p>
    </div>
);



export default ExpenseListItem;
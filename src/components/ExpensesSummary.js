import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenses-total';

export const ExpesnesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = (expenseCount === 1|| expenseCount === 0) ? 'expense' : 'expenses';
    const formattedTotalAmount = numeral(expensesTotal/100).format('$0,0.00')

    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedTotalAmount}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStoreToProps = (state) => {
    const visibeExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibeExpenses.length,
        expensesTotal: expenseTotal(visibeExpenses)
    }
};
export default connect(mapStoreToProps)(ExpesnesSummary);
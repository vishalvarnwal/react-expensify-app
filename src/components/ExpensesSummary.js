import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenses-total';

export const ExpesnesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotalAmount = numeral(expensesTotal/100).format('$0,0.00')

    return(
        <div>
            <h1>
                viewing {expenseCount} {expenseWord} totalling {formattedTotalAmount}
            </h1>
        </div>
    )
}

const mapStoreToProps = (state) => {
    const visibeExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibeExpenses.length,
        expensesTotal: expenseTotal(visibeExpenses)
    }
};
export default connect(mapStoreToProps)(ExpesnesSummary);
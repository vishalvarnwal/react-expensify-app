import expenses from '../tests/fixtures/expenses';

export default (expenses) => {
    return expenses
        .map(expense => expense.amount)
        .reduce((total, sum) => total+sum, 0)
}
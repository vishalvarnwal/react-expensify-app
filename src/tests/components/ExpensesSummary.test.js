import React from 'react';
import { shallow } from 'enzyme';
import { ExpesnesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow (<ExpesnesSummary expenseCount={1} expensesTotal={20} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow (<ExpesnesSummary expenseCount={25} expensesTotal={235353540} />);
    expect(wrapper).toMatchSnapshot();
});

import moment from 'moment';
import expense from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test ('should filter by text value', () => {
    const filter = {text: 'e', startDate: undefined, endDate: undefined, sortBy: 'date'}
    const result = expense(expenses,filter);
    expect(result).toEqual([expenses[2],expenses[0]])
})

test ('should filter by startDate', () => {
    const filter = {text: '', startDate: moment(0), endDate: undefined, sortBy: 'date'}
    const result = expense(expenses,filter);
    expect(result).toEqual([expenses[2],expenses[0]])
})

test ('should filter by endDate', () => {
    const filter = {text: '', startDate: undefined, endDate: moment(0), sortBy: 'date'}
    const result = expense(expenses, filter);
    expect(result).toEqual([expenses[0],expenses[1]])
})

test ('should sort by Date', () => {
    const filter = {text: '', startDate: undefined, endDate: undefined, sortBy: 'date'}
    const result = expense(expenses, filter);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
})

test ('should sort by Amount', () => {
    const filter = {text: '', startDate: undefined, endDate: undefined, sortBy: 'amount'}
    const result = expense(expenses, filter);
    expect(result).toEqual([expenses[1],expenses[2],expenses[0]])
})
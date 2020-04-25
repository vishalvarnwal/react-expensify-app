import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const result = filterReducer(undefined, {type: '@@INIT'});
    expect(result).toEqual({
        text: '', 
        sortBy: 'date',
        startDate: moment().startOf('month'), 
        endDate: moment().endOf('month')
    })
})

test('should sort by to amount', () => {
    const result = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(result.sortBy).toBe('amount');
})

test('should sort by to date', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };
    const action = {type: 'SORT_BY_DATE'};
    const result = filterReducer(currentState, action);
    expect(result.sortBy).toBe('date');
})

test('should set text filter', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };
    const action = {type: 'SET_TEXT_FILTER', text: 'Ravli'};
    const result = filterReducer(currentState, action);
    expect(result.text).toBe('Ravli')
})

test('should set startDate filter', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };
    const startDate = moment();
    const action = {type: 'SET_START_DATE', startDate};
    const result = filterReducer(currentState, action)
    expect(result.startDate).toBe(startDate)
})

test('should set endDate filter', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate: undefined, 
        endDate: undefined
    };
    const endDate = moment();
    const action = {type: 'SET_END_DATE', endDate};
    const result = filterReducer(currentState, action)
    expect(result.endDate).toBe(endDate)
})
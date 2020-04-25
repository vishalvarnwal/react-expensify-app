import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should setup SET START DATE in filter action object', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should setup SET END DATE in filter action object', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should setup SHORT BY AMOUNT in filter action object', () => {
    const result = sortByAmount();
    expect(result).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should setup SHORT BY DATE in filter action object', () => {
    const result = sortByDate();
    expect(result).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should setup SET TEXT FILTER in filter action object with text', () => {
    const text = 'Ravli'
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should setup SET TEXT FILTER in filter action object without text', () => {
    const result = setTextFilter();
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

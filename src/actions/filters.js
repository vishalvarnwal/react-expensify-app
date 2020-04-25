//Set Text Filter
export const setTextFilter = (text='') =>({
    type: 'SET_TEXT_FILTER',
    text
});

//Sort By Date
export const sortByDate = () =>({
    type: 'SORT_BY_DATE',
});

//Sort By Amount
export const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT',
});

//Set Start Date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//Set End Date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
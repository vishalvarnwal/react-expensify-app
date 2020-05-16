import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setStartExpenses, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

//provider is used to provide the store value to all the components
const jsx = (
    <Provider store={store}>      
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>LOADING......</p>, document.getElementById('app'));

store.dispatch(setStartExpenses()).then(()=> {
    ReactDOM.render(jsx, document.getElementById('app'));
});





import { 
    addExpense,
    startAddExpense, 
    removeExpense,
    startRemoveExpense, 
    editExpense, 
    startEditExpense,
    setExpenses, 
    setStartExpenses, 
    
 } from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const uid = 'myuid';
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
})

test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '123_abc' })
    expect(result).toMatchObject({
        type: 'REMOVE_EXPENSE',
        id: '123_abc'
    })
})

test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        }).catch((e) => {
            done(e);
        });
    });
});

test('should setup edit expense action object', () => {
    const result = editExpense('123_abc', { note: 'new note value' })
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123_abc',
        updates: { note: 'new note value' }
    });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {
        amount: 55,
        description: 'Test bill',
        createdAt: 5500
    };
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(updates);
        done();
    }).catch((e) => {
        done(e);
    });
});

test('should setup add expense action object with provided values', () => {
    const result = addExpense(expenses[2]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 30,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();;
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();;
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(setStartExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});










// test('should setup add expense action object with default values', () => {
//     const result = addExpense();
//     expect(result).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// })
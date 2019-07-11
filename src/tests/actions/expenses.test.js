import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// Testing Remove Expense
test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

// Testing Edit Expense
test('should set up edit expense action object', () => {
  const action = editExpense('1a2b3c', { note: 'new note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1a2b3c',
    updates: {
      note: 'new note value'
    }
  });
});

// Testing Add Expense
test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'this was last months rent',
    amount: 109500,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test('should set up add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});

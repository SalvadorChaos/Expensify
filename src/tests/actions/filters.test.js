import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount
} from '../../actions/filters';

// Testing if Set Start Date gets Generated
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// Testing if Set End Date gets Generated
test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

// Testing if Set Text Filter gets Generated
test('should generate set text filter object with text values', () => {
  const text = 'Something in'
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Something in'
  });
});

test('should generate set text filter object with default vals', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

// Testing if Sort By Date gets Generated
test('should generate a sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

// Testing if Sort By Amount gets Generated
test('should generate a sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

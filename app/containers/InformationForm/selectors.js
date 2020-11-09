import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the customer state domain
 */

const selectInfomation = state => state.infomationSearch || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Customer
 */

const makeSelectInfomation = () =>
  createSelector(
    selectInfomation,
    MenuState => MenuState.requestForm,
  );

export { selectInfomation, makeSelectInfomation };

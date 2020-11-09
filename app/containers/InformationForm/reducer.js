/*
 *
 * Customer reducer
 *
 */
import produce from 'immer';
import { REQUEST_FORM_SUSSCESS, REQUEST_FORM, VALUE_SELECT } from './constants';

export const initialState = {
  requestForm: [],
  value: 0,
};

/* eslint-disable default-case, no-param-reassign */
const customerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case REQUEST_FORM:
        break;
      case REQUEST_FORM_SUSSCESS:
        draft.requestForm = action.data;
        break;
    }
  });

export default customerReducer;

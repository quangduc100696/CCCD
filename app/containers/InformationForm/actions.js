/*
 *
 * Customer actions
 *
 */

import { REQUEST_FORM, REQUEST_FORM_SUSSCESS, VALUE_SELECT } from './constants';

export function getInfomation() {
  return {
    type: REQUEST_FORM,
  };
}

export function getInfomationSuccess(data) {
  return {
    type: REQUEST_FORM_SUSSCESS,
    data,
  };
}

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { getInfomationSuccess } from './actions';
import { REQUEST_FORM } from './constants';
// Individual exports for testing
function* getApi() {
  const requestURL =
    'https://5f7de626834b5c0016b06c1c.mockapi.io/api/customer/product';

  try {
    const repos = yield call(request, requestURL);
    yield put(getInfomationSuccess(repos));
  } catch (e) {
    throw e;
  }
}

export default function* getListMenu() {
  yield takeLatest(REQUEST_FORM, getApi);
}

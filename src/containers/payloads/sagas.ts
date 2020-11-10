import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { Action } from 'redux';
import { PayloadActionTypes } from "./types";
import { spaceXPayloadError, spaceXPayloadSuccess } from "./actions";

type SagaAction<T> = Action & { payload: T };

function* spaceXPayload({ payload: params }: SagaAction<{limit:number,offset:number}>) {
  try {
    const res = yield call(Api.getPayload,params);
    if (res.error) {
      yield put(spaceXPayloadError(res.error));
    } else {
      yield put(spaceXPayloadSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(spaceXPayloadError(err));
    } else {
      yield put(spaceXPayloadError(unknownError("An unknown error occurred")));
    }
  }
}

// function* pagination({ payload: params }: SagaAction<{limit:number,offset:number}>) {
//   try {
//     const res = yield call(Api.pagination,params);
//     if (res.error) {
//       yield put(payloadPaginationError(res.error));
//     } else {
//       yield put(payloadPaginationSuccess(res.data));
//     }
//   } catch (err) {
//     if (err instanceof Error) {
//       yield put(payloadPaginationError(err));
//     } else {
//       yield put(payloadPaginationError(unknownError("An unknown error occurred")));
//     }
//   }
// }



function* watchFetchRequest() {
  yield takeLatest(PayloadActionTypes.SPACE_X_PAYLOAD_REQUEST, spaceXPayload);
  // yield takeLatest(PayloadActionTypes.PAYLOAD_PAGINATION_REQUEST,pagination);
}

export function* PayloadSaga() {
  yield all([fork(watchFetchRequest)]);
}

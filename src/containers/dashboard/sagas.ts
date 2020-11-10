import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { Action } from 'redux';
import { spaceXHistoryError, spaceXHistorySuccess } from "./actions";
import { HistoryActionTypes } from "./types";

type SagaAction<T> = Action & { payload: T };

function* spaceXHistory({ payload: params }: SagaAction<{limit:number,offset:number}>) {
  try {
    const res = yield call(Api.getHistory,params);
    if (res.error) {
      yield put(spaceXHistoryError(res.error));
    } else {
      yield put(spaceXHistorySuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(spaceXHistoryError(err));
    } else {
      yield put(spaceXHistoryError(unknownError("An unknown error occurred")));
    }
  }
}

// function* pagination({ payload: params }: SagaAction<{limit:number,offset:number}>) {
//   try {
//     const res = yield call(Api.pagination,params);
//     if (res.error) {
//       yield put(historyPaginationError(res.error));
//     } else {
//       yield put(historyPaginationSuccess(res.data));
//     }
//   } catch (err) {
//     if (err instanceof Error) {
//       yield put(historyPaginationError(err));
//     } else {
//       yield put(historyPaginationError(unknownError("An unknown error occurred")));
//     }
//   }
// }



function* watchFetchRequest() {
  yield takeLatest(HistoryActionTypes.SPACE_X_HISTORY_REQUEST, spaceXHistory);
  // yield takeLatest(HistoryActionTypes.HISTORY_PAGINATION_REQUEST,pagination);
}

export function* HistorySaga() {
  yield all([fork(watchFetchRequest)]);
}

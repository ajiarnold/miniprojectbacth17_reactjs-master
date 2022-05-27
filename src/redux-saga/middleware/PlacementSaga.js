import apiPlacement from "../../api/api-placement";
import { call, put } from "redux-saga/effects";
import { doDeletePlacementFailed, doDeletePlacementSucceed, doGetPlacementFailed, doGetPlacementSucceed, doUpdatePlacementFailed, doUpdatePlacementSucceed } from "../actions/Placement";

function* handleGetPlacementSaga() {
  try {
    const result = yield call(apiPlacement.List);
    yield put(doGetPlacementSucceed(result));
  } catch (error) {
    yield put(doGetPlacementFailed(error));
  }
}

function* handleDeletePlacementSaga(action) {
  const { payload } = action;
  try {
    const result = yield call(apiPlacement.Delete, payload);
    yield put(doDeletePlacementSucceed(payload));
  } catch (error) {
    yield put(doDeletePlacementFailed(error));
  }
}

function* handleEditPlacement(action) {
  const {payload} = action;
  try {
      yield call(apiPlacement.Edit, payload);
      const result = yield call(apiPlacement.Edit, payload);
      yield put(doUpdatePlacementSucceed(result));
  } catch (error) {
      yield put(doUpdatePlacementFailed(error));
  }
}

export { handleGetPlacementSaga, handleDeletePlacementSaga, handleEditPlacement };

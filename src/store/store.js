import { all, fork, takeEvery } from "redux-saga/effects";

import createSagaMiddleware from "redux-saga";

import { combineReducers, createStore, applyMiddleware } from "redux";

import {
  fetchUsersWorker,
  addUserWorker,
  removeUserWorker,
} from "../sagas/saga";
import { userReducer } from "../reducers/userReducer";
import { FETCH_USERS, ADD_USER, DELETE_USER } from "../sagas/sagaActionTypes";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({ users: userReducer }),
  applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
  yield takeEvery(ADD_USER, addUserWorker);
  yield takeEvery(DELETE_USER, removeUserWorker);
}
sagaMiddleware.run(rootSaga);

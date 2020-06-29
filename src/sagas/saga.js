import { call, put } from "redux-saga/effects";
import { fetchUsers, addUser, removeUser } from "../services/usersServices";
import { SET_USERS, UPDATE_USER, SHOW_MODAL, REMOVE_USER } from "../reducers/actionTypes";

export function* fetchUsersWorker(action) {
  try {
    const response = yield call(fetchUsers);
    yield put({ type: SET_USERS, users: response });
  } catch (err) {
    console.log(err);
  }
}

export function* addUserWorker(action) {
  const user = yield call(addUser, action.user);
  yield put({ type: UPDATE_USER, user: user });
  yield put({ type: SHOW_MODAL, showModal: false });
}

export function* removeUserWorker(action) {
  const id = yield call(removeUser, action.id);
  yield put({ type: REMOVE_USER, id: id });
}

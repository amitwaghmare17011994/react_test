import { SET_USERS, SHOW_MODAL, UPDATE_USER, REMOVE_USER } from "./actionTypes";

const INITIAL_STATE = {
  users: null,
  showAddModal: false,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SHOW_MODAL:
      return { ...state, showModal: action.showModal };
    case UPDATE_USER:
      return { ...state, users: [action.user, ...state.users] };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((userItem) => userItem.id !== action.id),
      };
    default:
      return { ...state };
  }
};

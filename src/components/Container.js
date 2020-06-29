import React from "react";
import { SearchBar } from "./SearchBar";
import { List } from "./List";
import { connect } from "react-redux";
import store from "../store/store";
import { FETCH_USERS, ADD_USER, DELETE_USER } from "../sagas/sagaActionTypes";
import { NotFoundMessage } from "./NotFoundMessage";
import { AddUserModal } from "./AddUserModal";
import { SHOW_MODAL } from "../reducers/actionTypes";

export class ContainerImpl extends React.Component {
  state = { searchedTerm: "" };
  componentDidMount() {
    store.dispatch({ type: FETCH_USERS });
  }
  getFilteredItems = (users) =>
    users
      ? users.filter((userItem) =>
          userItem.name
            .trim()
            .toLowerCase()
            .includes(this.state.searchedTerm.trim().toLowerCase())
        )
      : null;
  onSearch = (e) => this.setState({ searchedTerm: e.target.value });
  render() {
    const users = this.getFilteredItems(this.props.users);
    const { showModal, onAddUser, onRemove } = this.props;
    return (
      <div className="container">
        {showModal && (
          <AddUserModal
            onAddUser={onAddUser}
            onToggle={() => this.props.showAddModal(false)}
          />
        )}

        <div style={{ display: "flex" }}>
          <div style={{ flex: 0.5 }}>
            <SearchBar onSearch={this.onSearch} />
          </div>
          <button
            onClick={() => this.props.showAddModal(true)}
            className="btn btn-primary ml-5"
          >
            Add New User
          </button>
        </div>

        <div style={{ marginTop: 50 }}>
          {users && users.length ? (
            <List users={users} onRemove={onRemove} />
          ) : users && users.length == 0 ? (
            <NotFoundMessage />
          ) : (
            "Loading"
          )}
        </div>
      </div>
    );
  }
}

export const Container = connect(
  (state) => {
    const { users, showModal } = state.users;

    return { users, showModal };
  },
  (dispatch) => ({
    showAddModal: (flag) => dispatch({ type: SHOW_MODAL, showModal: flag }),
    onAddUser: (user) => dispatch({ type: ADD_USER, user: user }),
    onRemove: (id) => dispatch({ type: DELETE_USER, id: id }),
  })
)(ContainerImpl);

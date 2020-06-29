import React from "react";

export class AddUserModal extends React.Component {
  state = { user: {} };
  updateUser = (e) => {
    const user = { ...this.state.user,[e.target.id]: e.target.value };
    this.setState({ user: { ...user } });

};

  render() {
    const { onToggle,onAddUser } = this.props;
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add User</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={onToggle}
              >
                &times;
              </button>
            </div>

            <div className="modal-body" style={{ display: "grid" }}>
              <input
                placeholder="Enter Name"
                id="name"
                className="form-control"
                onChange={this.updateUser}
              />

              <input
                placeholder="Enter User Name"
                className="form-control mt-10"
                onChange={this.updateUser}
                id="username"
              />
              <input
                placeholder="Enter Email"
                id="email"
                className="form-control mt-10"
                onChange={this.updateUser}
              />

              <input
                placeholder="Enter Website"
                className="form-control mt-10"
                id="website"
                onChange={this.updateUser}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={onToggle}
              >
                Close
              </button>
              <button className="btn btn-primary" onClick={()=>onAddUser(this.state.user)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

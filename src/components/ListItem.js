import React from "react";

export const ListItem = ({
  user: { id, name, username, email, website },
  onRemove,
}) => (
  <div className="item-body col-lg-12 col-sm-12 col-xs-12 ">
    <div className="list-item  ">
      <img
        className="mr-3 card-img "
        src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
        alt="Generic placeholder "
      />

      <div className="list-item-body">
        <div className="item">
          <span className="mt-0 mb-1 item_mem">{name}</span>
          <span className="font-12 item_mem">{username}</span>
          <span className="font-12 item_mem">{email}</span>
          <a className="item_mem" href={website}>
            {website}
          </a>
          <button className="btn btn-sm btn-danger" onClick={() => onRemove(id)}>Delete</button>
        </div>
      </div>
    </div>
  </div>
);

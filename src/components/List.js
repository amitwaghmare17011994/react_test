import React from "react";
import { ListItem } from "./ListItem";

export const List = ({ users = [], onRemove }) => (
         <div>
           <div>
             {users &&
               users.map((user) => (
                 <div className="row media mt-10 list-item" key={user.id}>
                   <ListItem onRemove={onRemove} user={user} />
                 </div>
               ))}
           </div>
         </div>
       );

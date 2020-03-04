import React from "react";
import UserItem from '../UserItem'

const UserListView = ({users, onRemove, onToggle}) => {
    return (
        <div>
            {users && users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
                ))}
        </div>
    );

};

export default UserListView;
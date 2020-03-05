import React from "react";
import UserItem from '../UserItem'

const UserListView = ({users}) => {
    return (
        <div>
            {users && users.map(user => (
                <UserItem
                    key={user.id}
                    user={user}
                />
                ))}
        </div>
    );

};

export default UserListView;
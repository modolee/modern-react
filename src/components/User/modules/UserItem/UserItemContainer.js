import React from "react";
import UserItemView from './UserItemView'

const UserItemContainer = ({ user, onRemove, onToggle }) => {
    return (
        <UserItemView
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
        />
    );
};

export default UserItemContainer;
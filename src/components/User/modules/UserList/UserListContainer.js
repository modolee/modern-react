import React from 'react';
import UserListView from './UserListView';

const UserListContainer = ({users, onRemove, onToggle}) => {
    return (
        <UserListView
            users={users}
            onRemove={onRemove}
            onToggle={onToggle}
        />
    );
};

export default UserListContainer;

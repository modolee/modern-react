import React from "react";
import UserList from './modules/UserList';
import CreateUser from './modules/CreateUser';

const UserView = ({users, username, email, onChange, onCreate, onRemove, onToggle}) => {
    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onRemove={onRemove}
                onToggle={onToggle}
            />
        </>
    );
};

export default UserView;
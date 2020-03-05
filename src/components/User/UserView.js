import React from "react";
import UserList from './modules/UserList';
import CreateUser from './modules/CreateUser';
import ActiveUserCount from './modules/ActiveUserCount';

const UserView = () => {
    return (
        <>
            <CreateUser />
            <UserList />
            <ActiveUserCount />
        </>
    );
};

export default React.memo(UserView);
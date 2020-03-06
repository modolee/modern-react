import React from "react";
import UserList from './modules/UserList';
import CreateUser from './modules/CreateUser';
import ActiveUserCount from './modules/ActiveUserCount';

const UserView = () => {
    return (
        <React.Fragment>
            <CreateUser />
            <UserList />
            <ActiveUserCount />
        </React.Fragment>
    );
};

export default React.memo(UserView);
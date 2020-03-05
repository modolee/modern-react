import React, {useContext} from 'react';
import UserListView from './UserListView';
import { UserStateContext } from "../../../../contexts/UserContextProvider";

const UserListContainer = () => {

    const { users } = useContext(UserStateContext);

    return (
        <UserListView
            users={users}
        />
    );
};

export default UserListContainer;

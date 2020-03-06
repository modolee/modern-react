import React, {useContext} from 'react';
import UserListView from './UserListView';
import { UserContext } from '../../../../contexts/UserContextProvider'

const UserListContainer = () => {

    const { state: { users } } = useContext(UserContext);

    return (
        <UserListView
            users={users}
        />
    );
};

export default UserListContainer;

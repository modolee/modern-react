import React, {useCallback, useContext} from "react";
import UserItemView from './UserItemView'
import { UserDispatchContext } from "../../../../contexts/UserContextProvider";

const UserItemContainer = ({ user }) => {

    const dispatch = useContext(UserDispatchContext);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, [dispatch]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, [dispatch]);

    return (
        <UserItemView
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
        />
    );
};

export default UserItemContainer;
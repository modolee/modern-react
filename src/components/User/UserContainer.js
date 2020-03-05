import React, {useCallback, useMemo, useReducer, useRef} from "react";
import userData from '../../data/users';
import UserView from "./UserView";
import useInputs from "../../hooks/useInputs";

const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
};

const initialState = {
    users: userData
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return {
                users: [
                    ...state.users,
                    action.user
                ]
            };
        case 'REMOVE_USER':
            return {
                users: state.users.filter(user => user.id !== action.id)
            };
        case 'TOGGLE_USER':
            return {
                users: state.users.map(
                    user => user.id === action.id
                        ? {...user, active: !user.active} : user)
            };
        default:
            return state;
    }
};

const UserContainer = () => {
    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });
    const [state, dispatch]  = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();

        nextId.current += 1;
    }, [username, email, reset]);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, []);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []);

    const count = useMemo( () => countActiveUsers(users), [users]);

    return (
        <UserView
            users={users}
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
            onRemove={onRemove}
            onToggle={onToggle}
            count={count}
        />
    );
};

export default UserContainer;
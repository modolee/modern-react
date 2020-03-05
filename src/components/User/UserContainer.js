import React, {useCallback, useEffect, useMemo, useReducer, useRef, useState} from "react";
import userData from '../../data/users';
import UserView from "./UserView";

const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
};

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: userData,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
            return {
                ...state,
                inputs: initialState.inputs,
                users: [
                    ...state.users,
                    action.user
                ]
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(
                    user => user.id === action.id
                        ? {...user, active: !user.active} : user)
            };
        default:
            return state;
    }
};

const UserContainer = () => {
    const [state, dispatch]  = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const {
        users,
        inputs : {
            username,
            email
        }
    } = state;

    const onChange = useCallback(e => {
        const {name, value} = e.target;

        console.log(name, value);

        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        });

    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });

        nextId.current += 1;
    }, [username, email]);

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
import React, {useRef, useState} from "react";
import userData from '../../data/users';
import UserView from "./UserView";

const UserContainer = () => {

    const [users, setUsers] = useState(userData);

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email } = inputs;

    const nextId = useRef(4);

    const onChange = e => {
        const {name, value} = e.target;

        setInputs({
            ...inputs,
            [name]: value
        })
    };

    const onCreate = () => {
        const newUser = {
            id: nextId.current,
            username,
            email
        };

        setUsers([...users, newUser]);

        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    };

    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };

    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id !== id ? user : {...user, active: !user.active}
                )
        );
    };

    return (
        <UserView
            users={users}
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
            onRemove={onRemove}
            onToggle={onToggle}
        />
    );
};

export default UserContainer;
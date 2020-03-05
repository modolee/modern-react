import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import userData from '../../data/users';
import UserView from "./UserView";

const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
};

const UserContainer = () => {

    const [users, setUsers] = useState(userData);

    const [inputs, setInputs] = useState({
        username: '',
        email: ''
    });

    const { username, email } = inputs;

    const nextId = useRef(4);

    // useEffect(() => {
    //     console.log('user 값이 설정됨');
    //     console.log(users);
    //     return () => {
    //         console.log('user 가 바뀌기 전..');
    //         console.log(users);
    //     }
    // }, [users]);

    const onChange = useCallback(e => {
        const {name, value} = e.target;

        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    }, []);

    const onCreate = useCallback(() => {
        const newUser = {
            id: nextId.current,
            username,
            email
        };

        setUsers(users => [...users, newUser]);

        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback(id => {
        setUsers(users => users.filter(user => user.id !== id));
    }, []);

    const onToggle = useCallback(id => {
        setUsers(users =>
            users.map(user =>
                user.id !== id ? user : {...user, active: !user.active}
                )
        );
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

export default React.memo(UserContainer);
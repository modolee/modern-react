import React, {useCallback, useContext, useRef} from "react";
import CreateUserView from "./CreateUserView";
import { UserContext } from '../../../../contexts/UserContextProvider'
import useInputs from "../../../../hooks/useInputs";

const CreateUserContainer = () => {
    const { dispatch } = useContext(UserContext);
    const nextId = useRef(4);

    const [{ username, email }, onChange, reset] = useInputs({
        username: '',
        email: ''
    });

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
    }, [dispatch, username, email, reset]);

    return (
        <CreateUserView
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
    );
};

export default CreateUserContainer;
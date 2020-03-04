import React from "react";
import CreateUserView from "./CreateUserView";

const CreateUserContainer = ({username, email, onChange, onCreate}) => {

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
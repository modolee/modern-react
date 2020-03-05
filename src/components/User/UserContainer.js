import React from "react";
import UserView from "./UserView";
import UserContextProvider from "../../contexts/UserContextProvider";

const UserContainer = () => {

    return (
        <UserContextProvider>
            <UserView />
        </UserContextProvider>
    );
};

export default UserContainer;
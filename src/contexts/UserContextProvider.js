import userData from "../data/users";
import React, {useReducer} from "react";
import produce from "immer";

const initialState = {
    users: userData
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return produce(state, draft => {
                draft.users.push(action.user);
            });
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index, 1);
            });
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            });
        default:
            return state;
    }
};

export const UserContext = React.createContext(null);

const UserContextProvider = ({children}) => {
    const [state, dispatch]  = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
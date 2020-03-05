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

export const UserStateContext = React.createContext(null);
export const UserDispatchContext = React.createContext(null);

const UserContextProvider = ({children}) => {
    const [state, dispatch]  = useReducer(reducer, initialState);

    return (
        <UserStateContext.Provider value={state}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    );
};

export default UserContextProvider;
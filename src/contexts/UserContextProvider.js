import userData from "../data/users";
import React, {useReducer} from "react";

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
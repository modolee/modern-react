import React, {useContext, useMemo} from "react";
import ActiveUserCountView from "./ActiveUserCountView";
import { UserStateContext } from "../../../../contexts/UserContextProvider";

const countActiveUsers = users => {
    console.log('활성 사용자 수를 세는 중...');
    return users.filter(user => user.active).length;
};

const ActiveUserCountContainer = () => {
    const { users } = useContext(UserStateContext);

    const count = useMemo( () => countActiveUsers(users), [users]);

    return (
        <ActiveUserCountView
            count={count}
        />
    );
};

export default ActiveUserCountContainer;
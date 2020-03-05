import React from "react";

const ActiveUserCountView = ({count}) => {
    return (
        <div>
            활성 사용자 수 : {count}
        </div>
    );
};

export default React.memo(ActiveUserCountView);
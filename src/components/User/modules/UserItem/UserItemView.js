import React from "react";

const UserItemView = ({ user, onRemove, onToggle }) => {
    const { id, username, email, active } = user;
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: active ? 'green' : 'black'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
};

export default UserItemView;
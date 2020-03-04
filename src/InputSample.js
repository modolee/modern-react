import React, {useState, useRef} from "react";

const InputSample = () => {
    const [inputs, setInputs] = useState({
        userName: '',
        nickname: ''
    });

    const { userName, nickname } = inputs;

    const userNameInput = useRef();

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = (e) => {
        setInputs({
            userName: '',
            nickname: ''
        });

        userNameInput.current.focus();
    };

    return (
        <div>
            <input placeholder="이름" name='userName' value={userName} onChange={onChange} ref={userNameInput}/>
            <input placeholder="닉네임" name='nickname' value={nickname} onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {userName} ({nickname})
            </div>
        </div>
    );
};

export default InputSample
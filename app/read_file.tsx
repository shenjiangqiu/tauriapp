'use client'
import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api';

const InputView = () => {
    const [text, setText] = useState<string>('');
    const [file_text, setFileText] = useState<string>('');
    const handleClick = () => {
        invoke<string>('read_file', { path: `${text}` }).then((tauriResponse) => {
            setFileText(tauriResponse);
        }
        ).catch((error) => {
            setFileText('Error');
        }
        );


    };

    return (
        <div>
            <input

                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
            <p>{file_text}</p>
        </div>
    );
};

export default InputView;
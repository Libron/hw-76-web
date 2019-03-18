import React from 'react';
import Message from "../Message/Message";
import './ChatBox.css';

const ChatBox = props => {
    return (
        <ol className="chatBox">
            {props.messages.map((msg) =>(
                <Message
                    key={msg.id}
                    message={msg.message}
                    author={msg.author}
                    datetime={msg.datetime}
                />
            ))}
        </ol>
    );
};

export default ChatBox;
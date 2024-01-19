import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

function ChatWindow({ messages, onSendMessage }) {
    return (
        <div className="chat-window">
            <div className="messages">
                {messages.map((m, index) => (
                    <ChatMessage key={index} text={m.text} isOwnMessage={m.isOwnMessage} />
                ))}
            </div>
            <ChatInput onSendMessage={onSendMessage} />
        </div>
    );
}

export default ChatWindow;

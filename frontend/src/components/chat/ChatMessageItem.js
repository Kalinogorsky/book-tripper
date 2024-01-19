import React from 'react';

function ChatMessage({ text, isOwnMessage }) {
  const messageClass = isOwnMessage ? 'own-message' : 'other-message';
  return <div className={messageClass}>{text}</div>;
}

export default ChatMessage;

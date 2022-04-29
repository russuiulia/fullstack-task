import React from 'react';
import AddMessageForm from './AddMessageForm';
import Message from './Message';
import classes from './Messages.module.css'
const Messages = () => {

  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    fetch("/api-messages")
      .then((res) => res.json())
      .then((messages) => setMessages(messages.messages.map((message) =>
        <Message
          key={message.id}
          message={message.message}
          author={message.author} />)));
  }, []);

  return (
    <div>
      <ul className={classes.messages}>
        {messages}
      </ul>
      <AddMessageForm currentMessages={messages} messageStateChanger={setMessages} />
    </div>
  );
}

export default Messages;
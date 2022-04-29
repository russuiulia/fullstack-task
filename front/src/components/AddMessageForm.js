import React, { useRef, useState } from 'react';
import Message from './Message';
import Card from './UI/Card';
import Input from './UI/Input';
import classes from './AddMessageForm.module.css';
const AddMessageForm = (props) => {

  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(true);

  const messageInputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    const enteredMessage = messageInputRef.current.value;
    if (enteredMessage.trim().length === 0) {
      setEnteredMessageIsValid(false)
      return;
    }
    const authorExample = { name: 'Ricky', icon: "https://batelle.com/wp-content/uploads/2021/07/cropped-batelle-fav-1-270x270.png", id: 1 };
    const newMessage = (
      <Message
        key={Math.random()}
        message={enteredMessage}
        author={authorExample} />)

    props.messageStateChanger([...props.currentMessages, newMessage]);
    messageInputRef.current.value = '';
  }

  return (
    <Card className={classes}>
      <form onSubmit={submitHandler}>
        <Input
          ref={messageInputRef}
          label="Add message:"
          input={{
            id: 'addMessage',
            type: 'text',
            placeholder: 'Message goes here',

          }} />
        <button>Add</button>
        {!enteredMessageIsValid && <p>Please type something</p>}
      </form>
    </Card>
  )
}

export default AddMessageForm;
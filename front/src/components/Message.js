
import React from 'react';
import classes from './Message.module.css'
import Card from './UI/Card';
const Message = (props) => {

  return (
    <Card>
      <li className={classes.message}>
        <div>
          <img src={props.author.icon} alt="icon" />
          <h3>{props.author.name}</h3>
          <p>{props.message}</p>
        </div>
      </li>
    </Card>
  )
}

export default Message;
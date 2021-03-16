import React from 'react';
import { render } from 'react-dom';

const Message = (props)=>{
    return(
        <div className={render} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Message;
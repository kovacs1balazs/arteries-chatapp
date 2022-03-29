import React from 'react'
import { useState } from 'react'
import Header from './Header';

const Chat = () => {

    const [text, setText] = useState("");
    const [messageList, setMessageList] = useState([]);

    const post = () => {
        messageList.push(text);
        setMessageList([...messageList])
        setText("");
    }


    return (
        <>
            <Header name={window.sessionStorage.getItem("name")} />
            <div className="textInput">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={post}>Send</button>
            </div>
            <section>
                {messageList.map((message, index) => <p key={index}>{message}</p>)}
            </section>
        </>
    )
}

export default Chat
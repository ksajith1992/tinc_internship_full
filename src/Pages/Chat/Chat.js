import React, {Component,useState} from 'react';
import {Launcher} from 'react-chat-window';
import '../MainCss.css';
function Chat() {
    const token=localStorage.getItem('token');
	const URL = 'ws://157.245.97.13/ws/ws_group_chat_main/?token='+token;
	const api = 'common_chat/messages/';
	const [inputStr, setInputStr] = useState([]);
	const [MsgBody, setMsgBody] = useState([]);
	const [showPicker, setShowPicker] = useState(false);
  	const [messages, setMessages] = useState([]);  
	// const onEmojiClick = (event, emojiObject) => {
	//   setInputStr(prevInput => prevInput + emojiObject.emoji);
	// };
    const [messageList, setmessageList] = useState([])
     
      const onMessageWasSent=(e)=> {
          console.log(e.data.text?e.data.text:e.data.emoji?e.data.emoji:'')
          const ws = new WebSocket(URL);
		ws.onopen = () => {
			console.log('WebSocket Connected');
			const message = { message: e.data.text?e.data.text:e.data.emoji?e.data.emoji:'' }
			ws.send(JSON.stringify(message))
			setMessages([message, ...messages]);
           
		  }
          
		  ws.onmessage = (e) => {
			const message = JSON.parse(e.data);
			setMessages([message, ...messages]);
		  }
  
		  return () => {
			ws.onclose = () => {
			  console.log('WebSocket Disconnected');
			  new WebSocket(URL);
			}
		  }
        
      }
      function submitMessage(){
        console.log(inputStr,'klkl')
        
      }
  return (
    <div > 
     <Launcher
        agentProfile={{
          teamName: 'Chat with Mentor',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={onMessageWasSent}
        messageList={messageList}
        showEmoji
      /></div>

      
  )
}

export default Chat
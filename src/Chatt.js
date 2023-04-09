import React, { useEffect, useState } from 'react'
import './Chatt.css';
import ChattHeader from './ChattHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Messagel from './Messagel';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';
import Picker from 'emoji-picker-react';

function Chatt() {
    const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);


    useEffect(()=>{
        if(channelId){
            db.collection('channels')
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) => doc.data()))
        );
        }
        
    },[channelId]);
    const sendMessagel = e =>{
        e.preventDefault();
        db.collection("channels").doc(channelId).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user,
        });
        setInput("")
    };
    return (
        <div className='chatt'>
            <ChattHeader channelName={channelName}/>
            <div className='chatt__messages'>
                
                {messages.map((message)=>(
                    <Messagel 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    
                    
                    
                    />
                    
                ))}
                
                

            </div>
            <div className='chatt__input'>
                <AddCircleIcon fontSize='small'/>
                <form>
                    <input 
                    value={input}
                    disabled={!channelId}
                    onChange={(e) => setInput(e.target.value)}
                    
                    placeholder={`CLICK THE CHANNEL:::::::::::::::::::::::--${channelName}`} />
                    <button
                    disabled={!channelId}
                    className='chat__inputButton'
                    type="submit"
                    onClick={sendMessagel}></button>
                    
                
                    
                    
                </form>


                <div className='chatt__inputIcons'>
                    
                    <EmojiEmotionsIcon  onClick={onEmojiClick}/>
          
                </div>


            </div>
            
        </div>
    )
}

export default Chatt

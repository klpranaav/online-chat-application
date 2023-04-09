import { Avatar } from '@mui/material';
import React,{useEffect,useState} from 'react';
import "./Messagel.css"

function Messagel({timestamp, user, message}) {
    return (
        <div className='messagel'>
            <Avatar src={user.photo} />
            <div className='messagel__info'>
                <h4>
                    {user.displayName}
                    <span className='messagel__timestamp'>
                        {new Date(timestamp?.toDate()).toUTCString()}
                        
                    </span>
                </h4>
                <p>{message}</p>
            </div>
            
        </div>
    )
}

export default Messagel

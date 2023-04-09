import React from 'react';
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import "./SidebarChannel.css";


function SidebarChannel({id, channelName }) {
    const dispatch = useDispatch();
    return (
    <div className='sidebarChannel' 
    onClick={()=>
        dispatch(
            setChannelInfo({
                channelId: id,
                channelName: channelName,
            })
        )
    }>
        <h4>
            <span className='sidebarChannel__hash'><ArrowRightRoundedIcon/></span>{channelName}
        </h4>

    </div>
       
    )
}

export default SidebarChannel

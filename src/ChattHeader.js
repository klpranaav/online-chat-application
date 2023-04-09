import React from 'react';
import "./ChattHeader.css";
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
function ChattHeader({channelName}) {
    return (
        <div className='chattHeader'>
            <div className='chattHeader__left'>
                <h3><span className='chattHeader__hash'></span>
                {channelName}
                </h3>

            </div>
            <div className='chattHeader__right'>
               

            </div>
            
        </div>
    )
}

export default ChattHeader

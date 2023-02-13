import { RssFeed } from '@mui/icons-material'
import React from 'react';
import './CloseFriends.css';

const CloseFriends = ({user}) => {
    return (
        <>
            <li className="sidebarFriend">
                <img src={user.profilePicture} className='sidebarFriendImg' alt="" />
                <span className="sidebarFriendName">{user.username}</span>
            </li>
        </>
    )
}

export default CloseFriends
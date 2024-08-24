import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils'

function Notifications() {
    return (
        <>
        <div className='Notifications'>
            <button style={{
                display: 'inline',
                color: '#3a3a3a',
                float:'right',
                border:'none'}}
                aria-label='close'
                onClick={console.log('Close button has been clicked')}
            >
                <img src='close-icon.png' alt='closeIcon' width='10px'/>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification() }}></li>
            </ul>
        </div>
        </>
    );
};


export default Notifications;
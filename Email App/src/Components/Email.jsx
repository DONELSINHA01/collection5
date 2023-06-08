import React from 'react';
import '../Styles/Email.css';
import image1 from '../Images/noEmail.png'
import { useSelector } from 'react-redux';
import OpenMail from './OpenMail';

function Email(props) {
    const {message} = useSelector(state=>state);
    
    return (
        <div className='email'>
            <div className='main-content'>
            {
                message.mId===''?<img src={image1} width={'90%'} />:<OpenMail senderName = {message.senderName} subject = {message.subject} content = {message.content}/>
            }
            
            </div>
            
        </div>
    );
}

export default Email;
import React from 'react';
import '../Styles/OpenMail.css';
function OpenMail(props) {
    return (
        <div className='openMail'>
            <div className="openMail-card">
                <div className="openMail-image">
                <img src="https://asa-groundhandling.com/wp-content/uploads/2019/10/placeholder-person-square.png" alt="" width={"150px"} height={'150px'} style={{ borderRadius: '50px' }} />
                </div>
                <div className="openMail-details">
                <h5><b>{props.senderName}</b></h5>
                <small>22nd July 2023</small>
                <h5>{props.subject}</h5>
                </div>
            </div>

            <div className="openMail-content">
                <p><b>Hi Donel!</b></p>
                <p className='o-content'>{props.content}</p>
                <p>Best regards,</p>
                <p><b>{props.senderName}</b></p>

            </div>

            <div className="openMail-buttons">
            <button type="button" class="btn btn-outline-primary" >Reply</button>
            <button type="button" class="btn btn-outline-secondary">Forward</button>


            </div>
            
            
        </div>
    );
}

export default OpenMail;
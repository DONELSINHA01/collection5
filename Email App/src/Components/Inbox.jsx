import React from 'react';
import '../Styles/Inbox.css';
import Card from './Card';
import { useSelector } from 'react-redux';
import myStore from '../Store';
import { useDispatch } from 'react-redux';
function Inbox(props) {

    const {emails} =useSelector(state=>state);
    console.log("this is "+emails);
    const dispatch=useDispatch();

    return (
        <div className="inbox">
            <div className="box1">
                <div className="inputBox">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: 'gainsboro' }}></i>
                    <input type="text" placeholder="Search an Email.." />
                </div>
            </div>
            <div className="box2">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <div id="navbarNavDropdown">
                        <ul className="navbar-nav boot-inbox">

                            <li className="nav-item">
                                <a className="nav-link" href="#"  >Received</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"  onClick={()=>{dispatch({type:'sent',payload:'sent'})}} >Sent</a>
                            </li>
                            <div className="drop">
                                <li className="nav-item dropdown">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            All
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="box3">
            <div className='collection'>
            {
                
                emails.map((e)=>{
                    console.log(e);
                    return (<Card name={e.senderName} content={e.content} subject  ={e.subject} read={e.unread} types={e.types} mId={e.mId}/>)
                })
            }
            </div>
         
            </div>
        </div>
    );
}

export default Inbox;
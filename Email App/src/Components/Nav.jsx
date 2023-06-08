import React from 'react';
import '../Styles/Nav.css';
import Add from './Add';
import { useDispatch } from 'react-redux';


function Nav(props) {

   const dispatch = useDispatch();
    return (
        <div className='nav'>
            <div className="primaryNav">
            <div className='nav1'>
            <Add/>
            {/* <i className="fa-solid fa-plus fa-xl"  style={{color: "#ffffff"}} ></i> */}
            <i className="fa-solid fa-inbox fa-xl" onClick={()=>{dispatch({type:'sidebarAction',payload:'inbox'})}} style={{color: "#ffffff"}}></i>
            <i className="fa-solid fa-trash-can fa-xl" onClick={()=>{dispatch({type:'sidebarAction',payload:'trash'})}} style={{color: "#ffffff"}}></i>
            <i className="fa-solid fa-user fa-xl"  style={{color: "#ffffff"}}></i>
            <i className="fa-solid fa-circle-exclamation fa-xl" onClick={()=>{dispatch({type:'sidebarAction',payload:'spam'})}} style={{color: "#ffffff"}}></i>
            </div>
            <div className="nav2">
            <i className="fa-solid fa-gear fa-xl" style={{color: "#ffffff"}}></i>
            </div>
            
            
            
            </div>
            
        </div>
    );
}

export default Nav;
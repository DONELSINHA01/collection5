import '../Styles/Card.css';
import { useDispatch } from 'react-redux';

export default function Card({ name, content, subject, types, mId }) {
  const dispatch = useDispatch();

  return (
    <div className="card" >
      <div className="image">
        <img src="https://asa-groundhandling.com/wp-content/uploads/2019/10/placeholder-person-square.png" alt="" width="50px" height="50px" style={{ borderRadius: '50px' }} />
      </div>

      <div className='person-details' onClick={() => { dispatch({ type: "show", payload: { type: types, id: mId } }) }}>
        <h6><b>{name}</b></h6>
        <p>{subject}</p>
        <p className='truncate-text' >{content}</p>
      </div>
      
      <div className="logos">
        <i className="fa-solid fa-flag" style={{ color: "#6491dd" }}></i>
        <i className="fa-solid fa-paperclip" style={{ color: "#6491dd" }}></i>
        <i className="fa-solid fa-trash" onClick={() => { dispatch({ type: 'delete', payload: { type: types, id: mId } }) }} style={{ color: "#ea430b" }}></i>
      </div>
    </div>
  );
}

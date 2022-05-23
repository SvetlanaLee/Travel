import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';

export default function Item({ comment }) {
const user = useSelector(store => store.user);


return (
  <>
  <div>{comment.text}
   {/* {comment.User.name} */}
   </div>


<div className='avatar'>
          {
            comment.User.photo
            ? 
            <p><img src={`http://localhost:3001${ comment.User.photo }`} width="25" height="20" alt=""/></p>
         
            : <p><img src={`${logo}`} width="25" height="20" alt='avatar'/></p>
        
          }
             

        </div>
        </>
      
)
}









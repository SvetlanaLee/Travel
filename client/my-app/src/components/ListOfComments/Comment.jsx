import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

export default function Item({ comment }) {
const user = useSelector(store => store.user);
const { id } = useParams();

return (
  <>
  <div>{comment.text}
   {/* {comment.User.name} */}

   <Button size="small" color="primary" component={Link} to={`/users/${comment.User.id}`}>
   {comment.User.name}
   </Button>

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
       
      










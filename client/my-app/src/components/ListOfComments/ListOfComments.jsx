import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Comment from '../ListOfComments/Comment'
import { useParams } from "react-router-dom";

export default function ListOfComments() {
  const comments = useSelector(store => store.allComments);
  //console.log('comments', comments);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/roads/${id}/comment`)
    .then((commentsFromServer) => {
    // console.log('commentsFromServer', commentsFromServer.data.allComments);
    dispatch({type: 'GET_COMMENTS', payload: commentsFromServer.data.allComments})
  
  })
    
  }, [dispatch, id]);

  return (
    <div className='commentContain'>
      <div className='listComment'>
        {
        (comments.map((comment) => <Comment comment={ comment } key={comment.id}/> ) )
        }
      </div>
    </div>
  )
}

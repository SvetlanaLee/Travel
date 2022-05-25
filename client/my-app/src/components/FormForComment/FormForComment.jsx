import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';


const useStyles = styled(theme => ({
  root: {
    height: '100vh',
    width: '100%',
    maxWidth: '100ch',
  },
  form: {
    width: '50%', 
    marginTop: theme.spacing(1),
    // position: 'absolute', 
    // left: '10%', 
    // top: '10%',
    // transform: 'translate(-10%, -10%)'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function FormForComment() {
  const classes = useStyles();
  const inputs = useSelector(store => store.comment);
  const user = useSelector(store => store.user);
  const road = useSelector(store => store.road);
  const dispatch = useDispatch();
  const { id } = useParams();
  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(inputs)
    const newComment = { roadId: road.id, userId: user.userId, text: inputs.comment }
   // console.log('newComment====', newComment)
    const addComment = await fetch(`http://localhost:3001/roads/${id}/comment`, {
     
      method: 'POST',
      credentials: 'include',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newComment)
    });
    //console.log(newComment)
    const commentFromBack = await addComment.json();
    // console.log('commentFromBack', commentFromBack);
    if (commentFromBack) {
      dispatch({type: 'GET_COMMENTS', payload: commentFromBack.allComments});
      // dispatch({type: 'ADD_COMMENTS', payload: commentFromBack});
      dispatch({type: 'CLEAR_INPUTS', payload: {}})
    } else {
      dispatch({type: 'SET_ERROR', payload: commentFromBack});
      
      }
      
    }
   
  return (
    <>
   
        
     <form className={classes.form} onSubmit={submitHandler}>
   
              
    <TextField 

     margin="normal"
      required
      fullWidth
      autoFocus
       
     id="outlined-basic1"
     label="Enter your comment"
     variant="outlined"
     type="text" 
     name="comment"
     value={inputs.comment ?? ''}
     onChange={(e) => dispatch({ type: 'USER_TYPING_COM', payload: { [e.target.name]: e.target.value } })}/>
     {/* <Button
     fullWidth
     variant="contained"
     color="primary"
     type="submit">Send comment</Button>   */}
    </form>
  </>
)}       
    
     
           
      
  
        
 



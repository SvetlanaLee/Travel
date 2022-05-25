import React from 'react'
import logo from './logo.svg';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import dayjs from 'dayjs';


const useStyles = styled ((theme) => ({
  root: {
    width: '100%',
    maxWidth: '90ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


export default function Item({ comment }) {

const classes = useStyles();
const user = useSelector(store => store.user);
const { id } = useParams();

return (

  <List className={classes.root}>
   <ListItem alignItems="flex-start">
   <ListItemAvatar>
   <Avatar     
         
           src={`http://localhost:3001${ comment.User.photo }`} alt=""/>
              
   </ListItemAvatar>

   <ListItemText
          primary={comment.text}
       
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
                
              >   
              </Typography>
              
             { dayjs(comment.createdAt).format("DD-MM-YYYY") }
        <Button size="small" color="primary" component={Link} to={`/users/${comment.User.id}`}>
   {comment.User.name}
   </Button>

    </React.Fragment>
   }
  />

   </ListItem>
   <Divider variant="inset" component="li" />
   </List>

  );
}

// {
//   comment.User.photo
//   ? 
//   <p><img src={`http://localhost:3001${ comment.User.photo }`} width="25" height="20" alt=""/></p>
//   : <p><img src={`${logo}`} width="25" height="20" alt='avatar'/></p>
// }/>
      










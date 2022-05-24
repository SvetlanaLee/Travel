import React from 'react'
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import dayjs from 'dayjs';


const useStyles = makeStyles((theme) => ({
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
      










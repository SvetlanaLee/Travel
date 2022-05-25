import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Road.css';
import { Link } from 'react-router-dom';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, IconButton} from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minWidth: 300,
  },
  media: {
    height: 240,
  },
});

export default function Road({ road }) {
  const classes = useStyles();

  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const addLike = async () => {
    const dataLike = { roadId: road.id, userId: user.userId }
    if(user.userId) {
      console.log(dataLike);
      const response = await fetch('http://localhost:3001/like', {
        method: 'POST',
        headers:{
        'Content-type': 'application/json'
        },
        body: JSON.stringify(dataLike)
        });
        
        const allRoads = await response.json(); 
        console.log(allRoads.roads);
        dispatch({type: 'GET_ROADS', payload: allRoads.roads})
    } return
  }



  

  return (
    <Card className={classes.root} style={{margin: '15px 30px'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://localhost:3001/${ road.mapImg }`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           { road.from } - { road.destination }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
           { road.discription }
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='footerCard'>
          <div>        
          <IconButton type='submit' onClick={ addLike }> 
            <FavoriteIcon />
          </IconButton> 
            {road.Likes.length}
          </div>
          <div className='ourBtn'>
            <CardActions>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                Расстояние : { road.distance }
                </Typography> */}
              <Button size="small" color="primary" component={Link} to={`/roads/${road.id}`}>
                Подробнее
              </Button>
            </CardActions>
          </div>
      </div>
    </Card>
  );
}

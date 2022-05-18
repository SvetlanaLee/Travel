import React from 'react';
import './Road.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 240,
  },
});

export default function Road({ road }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{margin: '15px'}}>
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
      <div className='ourBtn'>
        <CardActions>
            <Typography variant="body2" color="textSecondary" component="p">
            Расстояние : { road.distance }
            </Typography>
          <Button size="small" color="primary" component={Link} to={`/roads/${road.id}`}>
            Подробнее
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

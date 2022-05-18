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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Road({ road }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`http://localhost:3001/${ road.mapImg }`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           { road.from } - { road.destination }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           { road.discription }
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className='ourBtn'>
        <CardActions>
            <Typography variant="body2" color="textSecondary" component="p">
            Расстояние : { road.distance }
            </Typography>
          <Button size="small" color="primary">
            Подробнее
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

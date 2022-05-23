import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function CompanionCard({comp}) {
  
  const title = `${comp.cityFrom} - ${comp.cityWhere}`;

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardHeader
        avatar={
          <Avatar alt={comp.User.name} src={`http://localhost:3001/${ comp.User.photo }`} />
        }
        title={title}
        subheader={comp.createdAt}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p>Даты поездки с {comp.start} по {comp.end}</p>
          <p>{comp.info}</p>
          Связаться: <Link to={`/users/${comp.User.id}`}>{comp.User.name}</Link>
        </Typography>
      </CardContent>
    
    </Card>
  );
}

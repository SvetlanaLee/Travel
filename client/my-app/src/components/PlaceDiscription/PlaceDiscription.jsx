// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';


// export default function PlaceDiscription() {
//   return (
//    <div className='myRoadBtn'>
//       <Button variant="outlined" type='submit' onClick={ handlerShow }
//      >Свой маршрут</Button>
//       </div>
//       {show && 
//       <div>
//         <div  style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>
//           <div>{error.error}</div>
//         </div>
//         <Box
//           component="form"
//           sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="off"
//           style={{ display: 'flex', justifyContent: 'center' }}
//           >
//           <TextField 
//           id="outlined-basic" 
//           label="Город отправления" 
//           variant="outlined" 
//           name='from' 
//           onChange={handleInputs} 
//           value={inputs.from?? ''}
//           required
//           />
//           <TextField 
//           id="outlined-basic" 
//           label="Город прибытия" 
//           variant="outlined" 
//           name='destination' 
//           onChange={handleInputs} 
//           value={inputs.destination?? ''}
//           required
//           />
//           <TextField 
//           id="outlined-basic" 
//           label="Описание" 
//           variant="outlined" 
//           name='discription' 
//           onChange={handleInputs} 
//           value={inputs.discription?? ''}
//           required
//           />
//           <TextField 
//           id="outlined-basic" 
//           label="Расстояние (км)" 
//           variant="outlined" 
//           name='distance' 
//           onChange={handleInputs} 
//           value={inputs.distance?? ''}
//           required
//           />
//           <Button variant="outlined" sx={{height: '40px'}} onClick={createNewRoad}>Создать</Button>
//         </Box> 
//       </div>}
//   );
// }

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function Navigation() {
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = async () => {
    const response = await fetch('http://localhost:3001/logout', { credentials: 'include' });
    console.log('user', user)
    console.log(response);
    if (response.status === 200) {
      dispatch({type: 'USER_LOGOUT', payload: {}})
    }
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      {user.userId ? (
        <Menu 
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
              backgroundColor: '#ffffff45',
              
            },
          }}
        >
          <MenuItem key={'pHome'} onClick={handleClose}>
            <Typography component={Link} to={'/'} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Главная
            </Typography>
          </MenuItem>
          <MenuItem key={'pRoads'} onClick={handleClose}>
            <Typography component={Link} to={`/roads`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Маршруты
            </Typography>
          </MenuItem>
          <MenuItem key={'pCompanions'} onClick={handleClose}>
            <Typography component={Link} to={`/companions`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Поиск попутчиков
            </Typography>
          </MenuItem>
          <MenuItem key={'pPerson'} onClick={handleClose}>
            <Typography component={Link} to={`/profile`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Личный кабинет
            </Typography>
          </MenuItem>
          <MenuItem key={'pLogout'} onClick={handleClose}>
            <IconButton type='submit' onClick={logout} component={Link} to={`/login`}>
              <LogoutIcon  />
            </IconButton>
          </MenuItem>
        </Menu>
        ) : (
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
              backgroundColor: '#ffffff45',
            },
          }}
        >
          <MenuItem key={'pHome'} onClick={handleClose}>
            <Typography component={Link} to={'/'} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Главная
            </Typography>
          </MenuItem>
          <MenuItem key={'pRoads'} onClick={handleClose}>
            <Typography component={Link} to={`/roads`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Маршруты
            </Typography>
          </MenuItem>
          <MenuItem key={'pCompanions'} onClick={handleClose}>
            <Typography component={Link} to={`/companions`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Поиск попутчиков
            </Typography>
          </MenuItem>
          <MenuItem key={'pRegistration'} onClick={handleClose}>
            <Typography component={Link} to={`/reg`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Регистрация
            </Typography>
            </MenuItem>
          <MenuItem key={'pLogin'} onClick={handleClose}>
            <Typography component={Link} to={`/login`} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
              Авторизация
            </Typography>
          </MenuItem>
        </Menu>
        )}
    </div>
  )
}

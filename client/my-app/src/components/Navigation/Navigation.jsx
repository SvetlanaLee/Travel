import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom';

const options = [
  'Главная',
  'Маршруты',
  'Личный кабинет',
  'Регистрация',
  'Авторизация',
  'Выйти',
];

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

  let setPagePath = (option) => {
    let pagePath = '/';

    switch (option) {
      
      case 'Главная':
        pagePath = '/'
        break;
      case 'Маршруты':
        pagePath = '/roads'
        break;
      case 'Личный кабинет':
        pagePath = `/users/id`
        break;
      case 'Регистрация':
        pagePath = '/reg'
        break;
      case 'Авторизация':
        pagePath = '/login'
        break;
    
      default:
        break;
    }

    return pagePath;
  }

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
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option === 'Выйти' ? (
                <IconButton type='submit' onClick={logout}>
                  <LogoutIcon />
                </IconButton>
            ): (
                <Typography component={Link} to={setPagePath(option)} sx={{ color: 'rgb(88, 82, 82)', textDecoration: 'none' }}>
                  {option}
                </Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

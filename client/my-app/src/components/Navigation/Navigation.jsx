import React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout'
import Button from '@mui/material/Button';
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
      // case 'Главная':
        // pagePath = '/'
        // break;
      case 'Главная':
        <Link to="/" className="btn btn-light">Home</Link>
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
                <IconButton>
                  <LogoutIcon />
                </IconButton>
            ): (
                <Link to={setPagePath(option)}>
                  {option}
                </Link>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

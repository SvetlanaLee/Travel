const express = require('express');
const sha256 = require('sha256');
const router = express.Router();
const { User } = require('../db/models');
const fileMiddleware = require('../middleware/file');

router.post('/reg', async (req, res) => {
  const { email } = req.body;
  const userSearch = await User.findOne({ where: { email } });
  if (userSearch) {
    res.send({ error: 'Пользователь с таким e-mail уже существует' });
  } else {
    const { name } = req.body;
    const newUser = await User.create({ name, email, password: sha256(req.body.password) });
    req.session.user = {
      userId: newUser.id,
      userEmail: newUser.email,
      userName: newUser.name,
      userPhoto: newUser.photo,
      userAboutMe: newUser.aboutMe,
      userCity: newUser.city,
      userDateOfBirth: newUser.dateOfBirth, 
      userVK: newUser.vk, 
      userTelegram: newUser.telegram, 
    };
    // console.log('req.session.user================registr', req.session.user);
    res.json(req.session.user);
  }
});

router.post('/login', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    if (user.password === sha256(req.body.password)) {
      req.session.user = {
        userId: user.id,
        userEmail: user.email,
        userName: user.name,
        userPhoto: user.photo,
        userAboutMe: user.aboutMe,
        userCity: user.city,
        userDateOfBirth: user.dateOfBirth,
        userVK: user.vk, 
        userTelegram: user.telegram, 
      };
      // console.log('req.session.user================login', req.session.user);
      res.json(req.session.user);
    } else {
      res.send({ error: 'Неверный пароль' });
    }
  } else {
    res.send({ error: 'Неверный e-mail или пароль' });
  }
});

// router.get('/users', async (req, res) => { // TODO: req.params.id
//   const me = await User.findByPk(req.session.user.userId);
//   res.json(me);
// });

router.post('/profile', fileMiddleware.single('avatar'), async (req, res) => {
  const { path } = req.file;

  await User.update({
    photo: path.slice(6),
  }, {
    where: {
      id: req.session.user.userId,
    },
  });
  const user = await User.findByPk(req.session.user.userId);


  req.session.user = {
    userId: user.id,
    userEmail: user.email,
    userName: user.name,
    userPhoto: user.photo,
    userAboutMe: user.aboutMe,
    userCity: user.city,
    userDateOfBirth: user.dateOfBirth,
    userVK: user.vk, 
    userTelegram: user.telegram, 
  };

  res.json(req.session.user);
});

router.post('/person', async (req, res) => {
  const { aboutMe, city, dateOfBirth, vk, telegram } = req.body;
  // console.log('dateOfBirth==========', dateOfBirth)
  await User.update({
    aboutMe,
    city,
    dateOfBirth,
    vk, 
    telegram, 
  }, {
    where: {
      id: req.session.user.userId,
    },
  });
  const user = await User.findByPk(req.session.user.userId);
  // console.log('user========', user)

  req.session.user = {
    userId: user.id,
    userEmail: user.email,
    userName: user.name,
    userPhoto: user.photo,
    userAboutMe: user.aboutMe,
    userCity: user.city,
    userDateOfBirth: user.dateOfBirth,
    userVK: user.vk, 
    userTelegram: user.telegram, 
  };
  // console.log('req.session.user========', req.session.user)
  res.json(req.session.user);
});


router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('authorisation');
  res.status(200).end();
});

router.get('/session', (req, res) => {
  if (!req.session.user) {
    req.session.user = {};
  }
  res.json(req.session.user);
});


router.get('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  // console.log('user===================', user)
  res.json({ user });
});


///${user.id}




module.exports = router;

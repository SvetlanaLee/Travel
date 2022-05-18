const express = require('express');
const sha256 = require('sha256');

const router = express.Router();

const { User } = require('../db/models');

router.post('/reg', async (req, res) => {

  console.log('req.body=====================', req.body);

  const { email } = req.body;
  const userSearch = await User.findOne({ where: { email } });
  if (userSearch) {
    console.log('===========================email double');
    res.send({ error: 'Пользователь с таким e-mail уже существует' });
  } else {
    console.log('===========================email OK');
    const { name } = req.body;
    const newUser = await User.create({ name, email, password: sha256(req.body.password) });
    req.session.user = {
      userId: newUser.id,
      userEmail: newUser.email,
      userName: newUser.name,
    };
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
      };
      res.json(req.session.user);
    } else {
      res.send({ error: 'Неверный пароль' });
    }
  } else {
    res.send({ error: 'Неверный e-mail или пароль' });
  }
});

// router.get('/users/:id ', async (req, res) => { // TODO: req.params.id
//   const me = await User.findByPk(req.session.user.userId);
//   res.json(me);
// });

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

module.exports = router;

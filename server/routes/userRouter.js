const express = require('express');
const sha256 = require('sha256');

const router = express.Router();

const { User } = require('../db/models');

router.post('/reg', async (req, res) => {
  const { name, email } = req.body;
  const newUser = await User.create({ name, email, password: sha256(req.body.password) });
  req.session.user = {
    userId: newUser.id,
    userEmail: newUser.email,
    userName: newUser.name,
  };
  res.json(req.session.user);
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
      res.send({ error: `invalid pass, valid is ${user.password}`}); 
    }
  } else {
    res.send({ error: 'no way' });
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

// router.get('/session', (req, res) => {
//   // console.log(req.session.user);
//   if (!req.session.user) {
//     req.session.user = {};
//   }
//   res.json(req.session.user);
// });

module.exports = router;

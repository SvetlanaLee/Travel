const express = require('express');

const router = express.Router();
const { Place } = require('../db/models');

router.get('/', async (req, res) => {
  const places = await Place.findAll();
  // console.log(placeMark)
  res.json({ places })
});

module.exports = router;

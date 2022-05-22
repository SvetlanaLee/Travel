const express = require('express');

const router = express.Router();
const { Place } = require('../db/models');

router.get('/:id', async (req, res) => {
  const places = await Place.findAll({
    where: {
      roadId: req.params.id
    }
  });
  // console.log(placeMark)
  res.json({ places })
});

module.exports = router;

const express = require('express');

const router = express.Router();
const { Like, Road } = require('../db/models');

router.post('/', async(req, res) => {
  console.log(req.body);
  const { roadId, userId  } = req.body;
  const like = await Like.findOne({ where: { roadId, userId }});
  if(like) {
    await like.destroy()
  } else {
    await Like.create({
      roadId,
      userId,
    });
  }
  const roads = await Road.findAll({
    include: {
      model: Like,
    },
    order: [
      ['id', 'DESC'],
    ],
  });
  res.json({ roads })
});



module.exports = router;

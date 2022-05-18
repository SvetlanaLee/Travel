const express = require('express');

const router = express.Router();
const { Road } = require('../db/models');

router.get('/', async (req, res) => {
  const roads = await Road.findAll();
  console.log(roads);
  res.json({ roads });
});

router.post('/roads', async (req, res) => {
  const road = await Road.create({
    from: req.body.from,
    destination: req.body.destination,
    mapImg: req.body.mapImg,
    discription: req.body.discription,
    transportType: req.body.transportType,
    distance: req.body.distance,
    createdAt: req.body.createdAt,
    updatedAt: req.body.updatedAt,
  });
  res.json({ road });
});

module.exports = router;

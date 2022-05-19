const express = require('express');

const router = express.Router();
const { Road } = require('../db/models');

router.get('/', async (req, res) => {
  const roads = await Road.findAll();
  res.json({ roads });
});

router.post('/', async (req, res) => {
  const road = await Road.create({
    from: req.body.from,
    destination: req.body.destination,
    mapImg: req.body.mapImg,
    discription: req.body.discription,
    transportType: req.body.transportType,
    distance: req.body.distance,
  });
  res.json({ road });
});

router.get('/:id', async (req, res) => {
  const road = await Road.findByPk(req.params.id);
  res.json({ road });
});

module.exports = router;

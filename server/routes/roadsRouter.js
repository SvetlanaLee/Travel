const express = require('express');

const router = express.Router();
const { Road } = require('../db/models');

router.get('/', async (req, res) => {
  const roads = await Road.findAll();
  res.json({ roads });
});

router.post('/', async (req, res) => {
  const { from, destination, discription, distance, userId } = req.body;

  const distanceRes = `${distance.match(/\d/g).join('')} км`;

  function cityRes(city) {
    const lowerCase = city.toLowerCase();
    const result = lowerCase.replace(/([а-я])/, (match, p1) => p1.toUpperCase());
    const result2 = result.replace(/ ([а-я])/g, (match, p1) => ` ${p1.toUpperCase()}`);
    const result3 = result2.replace(/( ?)-( ?)([а-я])/g, (match, p1, p2, p3) => `-${p3.toUpperCase()}`).replace(/( ?)-( ?)/g, '-');
    return result3;
  }

  const img = `/imgRoads/${Math.floor((Math.random() * 11) + 1)}.jpeg`;

  const road = await Road.create({
    from: cityRes(from),
    destination: cityRes(destination),
    mapImg: img,
    discription,
    transportType: 'авто',
    distance: distanceRes,
    userId,
  });

  res.json({ road });
});

router.get('/:id', async (req, res) => {
  const road = await Road.findByPk(req.params.id);
  res.json({ road });
});

module.exports = router;

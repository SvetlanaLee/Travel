const express = require('express');

const router = express.Router();
const { Road, Like } = require('../db/models');

// роут для получения всех маршрутов из базы
router.get('/', async (req, res) => {
  const roads = await Road.findAll({
    include: {
        model: Like,
        },
  });
  // console.log(roads);
  res.json({ roads });
});




// добавление нового маршрута в базу
router.post('/', async (req, res) => {
  try {
    const {
      from, destination, discription, distance, userId,
    } = req.body;

    if (!from || !destination || !discription || !distance) {
      res.send({ error: 'Пожалуйста, заполните все поля' });
    } else if (!userId) {
      res.send({ error: 'Необходимо зарегистрироваться/авторизоваться' });
    } else if (!/[0-9]/.test(distance)) {
      res.send({ error: 'Расстояние необходимо указывать в цифровом формате' });
    } else {
      const distanceRes = `${distance.match(/\d/g).join('')} км`;
      const cityRes = (city) => {
        const lowerCase = city.toLowerCase();
        const result = lowerCase.replace(/([а-яa-z])/, (match, p1) => p1.toUpperCase());
        const result2 = result.replace(/ ([а-яa-z])/g, (match, p1) => ` ${p1.toUpperCase()}`);
        const result3 = result2.replace(/( ?)-( ?)([а-яa-z])/g, (match, p1, p2, p3) => `-${p3.toUpperCase()}`).replace(/( ?)-( ?)/g, '-');
        return result3;
      };

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
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    res.send({ error });
  }
});

// получение маршрута по id
router.get('/:id', async (req, res) => {
  const road = await Road.findByPk(req.params.id);
  res.json({ road });
});



module.exports = router;

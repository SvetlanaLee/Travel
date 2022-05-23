const express = require('express');

const router = express.Router();
const { Road, Like } = require('../db/models');
const { Comment, User } = require('../db/models');
// роут для получения всех маршрутов из базы
router.get('/', async (req, res) => {
  const roads = await Road.findAll({
    include: {
        model: Like,
        },
    order: [
      ['id', 'DESC'],
    ],
  });
  res.json({ roads });
});




// добавление нового маршрута в базу
router.post('/', async (req, res) => {
  try {
    const {
      from, destination, discription, userId,
    } = req.body;

    const cityRes = (city) => {
      const lowerCase = city.toLowerCase();
      const result = lowerCase.replace(/([а-яa-z])/, (match, p1) => p1.toUpperCase());
      const result2 = result.replace(/ ([а-яa-z])/g, (match, p1) => ` ${p1.toUpperCase()}`);
      const result3 = result2.replace(/( ?)-( ?)([а-яa-z])/g, (match, p1, p2, p3) => `-${p3.toUpperCase()}`).replace(/( ?)-( ?)/g, '-');
      return result3;
    };

    const repeatRoad = await Road.findOne({
      where: {
        from: cityRes(from),
        destination: cityRes(destination),
      },
    });

    if (!from || !destination || !discription ) {
      res.send({ error: 'Пожалуйста, заполните все поля' });
    } else if (!userId) {
      res.send({ error: 'Необходимо зарегистрироваться/авторизоваться' });
    } else if (repeatRoad) {
      res.send({ error: 'Данный маршрут уже существует' });
    } else {
      const img = `/imgRoads/${Math.floor((Math.random() * 23) + 1)}.jpeg`;

      const road = await Road.create({
        from: cityRes(from),
        destination: cityRes(destination),
        mapImg: img,
        discription,
        transportType: 'авто',
        userId,
        createdAt: new Date().toLocaleDateString(),
      });

      res.json({ road });
    }
  } catch (error) {    
    console.log(error);
    res.send({ error });
  }
});

// получение маршрута по id
router.get('/:id', async (req, res) => {
  const road = await Road.findByPk(req.params.id);
  res.json({ road });
});


router.post('/:id/comment', async(req, res) => {
 // console.log(req.body);
  const { roadId, userId, text } = req.body;
  await Comment.create({
      roadId,
      userId,
      text
    });
  
    const allComments = await Comment.findAll(
      {
        include: {
          model: User,
        },
        where: {
          roadId,
        },
      }
    )
    console.log('allComments======', allComments)
  res.json({ allComments })
});


router.get('/:id/comment', async (req, res) => {
const road = await Road.findByPk(req.params.id);
const allComments = await Comment.findAll(
  {
    include: {
      model: User,
    },
    where: {
      roadId: road.id,
    },
  }
)

res.json({ allComments })
});

module.exports = router;









const express = require('express');
const router = express.Router();
const { Companion } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    // console.log('tut');
    const { cityFrom, cityWhere, info, start, end, userId} = req.body;
    // console.log(req.body);
    const cityRes = (city) => {
      const lowerCase = city.toLowerCase();
      const result = lowerCase.replace(/([а-яa-z])/, (match, p1) => p1.toUpperCase());
      const result2 = result.replace(/ ([а-яa-z])/g, (match, p1) => ` ${p1.toUpperCase()}`);
      const result3 = result2.replace(/( ?)-( ?)([а-яa-z])/g, (match, p1, p2, p3) => `-${p3.toUpperCase()}`).replace(/( ?)-( ?)/g, '-');
      return result3;
    };
  
    if( !cityFrom || !cityWhere || !info || !start || !end ) {
      res.send({ error: 'Пожалуйста, заполните все данные' });
    } else if(!userId) {
      res.send({ error: 'Необходимо авторизоваться' });
    } else if(end < start) {
      res.send({ error: 'Проверьте введенные даты' });
    } else {
      await Companion.create({
        cityFrom: cityRes(cityFrom),
        cityWhere: cityRes(cityWhere),
        info,
        start,
        end,
        userId,
        open: true
      });
      const allComps = await Companion.findAll({
        where: {
          open: true
        },
      });
      res.json({allComps});
    }

  } catch (error) {
    console.log(error);
    res.send({ error: 'Упс, что-то пошло не по плану. Проверьте введенные данные' });
  }
})
module.exports = router;

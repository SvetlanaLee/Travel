const express = require('express');
const axios = require('axios');

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

router.post('/', async (req, res) => {
  try {
    const { roadId, title, info, categoria, city, street, dom} = req.body;
    const apiAdress = `https://geocode-maps.yandex.ru/1.x/?apikey=29cee40b-728e-42bd-ba3e-cc89d4ae9a46&format=json&geocode=${encodeURIComponent(city)}+${encodeURIComponent(street)}+${encodeURIComponent(dom)}`;
    const resp = await axios.get(apiAdress);
    const pos = resp.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(pos => parseFloat(pos));
    const geometry = pos.reverse();
    let preset = 'islands#blueIcon';
  
    switch (categoria) {
      case 'еда':
        preset = 'islands#blueFoodIcon';
      case 'заправки':
        preset = 'islands#blueFuelStationIcon';
      case 'гостиница':
        preset = 'islands#blueHotelIcon';
      case 'отдых':
        preset = 'islands#blueStarIcon';
      case 'аптека':
          preset = 'islands#blueMedicalIcon';
      case 'магазин':
          preset = 'islands#blueShoppingIcon';
      default:
        break;
    }
  
    await Place.create({
      roadId,
      title,
      info,
      geometry,
      categoria,
      adress: `${city}, ${street}, ${dom}`,
      preset
    })

    const places = await Place.findAll({
      where: { roadId }
    });

    res.json({ places })
  } catch (error) {
    console.log(error);
    res.send({error: error.message})
  }
})
module.exports = router;

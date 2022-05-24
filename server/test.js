const axios = require('axios');

const city = 'Щербинка';
const street = '40 лет октября';
const str = street.replaceAll(' ', '%20');
// console.log(str);
const dom = '3';

const apiAdress = `https://geocode-maps.yandex.ru/1.x/?apikey=29cee40b-728e-42bd-ba3e-cc89d4ae9a46&format=json&geocode=${encodeURIComponent(city)}+${encodeURIComponent(street)}+${encodeURIComponent(dom)}`;
// console.log(apiAdress)

async function getCoord() {
  // const url = 'https://geocode-maps.yandex.ru/1.x/?apikey=29cee40b-728e-42bd-ba3e-cc89d4ae9a46&format=json&geocode=%D1%89%D0%B5%D1%80%D0%B1%D0%B8%D0%BD%D0%BA%D0%B0+40%20%D0%BB%D0%B5%D1%82%20%D0%BE%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8F+3'
  const resp = await axios.get(apiAdress);
  const pos = resp.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').map(pos => parseFloat(pos));
  const coord = pos.reverse();
  console.log(coord)
}

getCoord();


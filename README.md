# Travel


import { YMaps, Map, Placemark } from “react-yandex-maps”;
const mapData = {
  center: [55.751574, 37.573856],
  zoom: 5,
};
const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521]
];
const App = () => (
  <YMaps>
    <Map defaultState={mapData}>
      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
    </Map>
  </YMaps>
);

Placemark(geometry[, properties[, options]])

const placeMark = [
  {
    geometry: [55.840427, 49.244449],
    balloonContentBody: 'Тут мой дом',
    preset: 'islands#redIcon',
  },
  {
    geometry: [55.802292, 49.104409],
    balloonContentBody: 'Кремлевская набережная',
    preset: 'islands#redIcon',
  },
  {
    geometry: [55.861289, 49.217559],
    balloonContentBody: 'Прикольная шавуха в свое время была',
    preset: 'islands#redIcon',
  },
  {
    geometry: [55.907161, 49.157366],
    balloonContentBody: 'Голубые озера. Очень крутое место',
    preset: 'islands#redIcon',
  },
]


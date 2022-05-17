module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Roads', [
      {
        userId: 1,
        from: 'Москва',
        where: 'Санкт-Петербург',
        mapImg: '/img/mospit.png',
        discription: 'Путешествие в северную столицу',
        transportType: 'авто',
        distance: '712 км',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        from: 'Санкт-Петербург',
        where: 'Кижи',
        mapImg: '/img/piters.png',
        discription: 'Прекрасная Карелия',
        transportType: 'авто',
        distance: '438 км',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        from: 'Казань',
        where: 'Сочи',
        mapImg: '/img/kazan-sochi.png',
        discription: 'Сбылась моя мечта - поездка на автомобиле на юга. Итак в наличии автомобиль ЛАДА ХРЕЙ выпуск декабрь 2017 г., три взбалмошные девушки  и огромный запас положительных эмоций.',
        transportType: 'авто',
        distance: '2 112 км',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        from: 'Санкт-петербург',
        where: 'Хельсинки',
        mapImg: '/img/St.Petersburg-Helsinki.png',
        discription: 'Трасса М10 "Скандинавия" Санкт-Петербург-Финляндия - Дорога в хорошем состоянии, а вот соседи по трассе попадаются разные.',
        transportType: 'авто',
        distance: '389 км',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roads');
  },
};

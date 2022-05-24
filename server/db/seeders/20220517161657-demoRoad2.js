module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Roads', [
      {
        userId: 1,
        from: 'Москва',
        destination: 'Санкт-Петербург',
        mapImg: '/imgRoads/1.jpeg',
        discription: 'Путешествие в северную столицу. 6-7 часов в дороге. Платная трасса хорошая, по дороге постоянно встречаются заправки.',
        transportType: 'авто',
        distance: '712 км',
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        from: 'Санкт-Петербург',
        destination: 'Кижи',
        mapImg: '/imgRoads/8.jpeg',
        discription: 'Прекрасная Карелия. Идеальная поездка на выходные. Природа, хорошая компания - что еще нужно для счатья?',
        transportType: 'авто',
        distance: '438 км',
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        from: 'Казань',
        destination: 'Сочи',
        mapImg: '/imgRoads/20.jpeg',
        discription: 'Сбылась моя мечта - поездка на автомобиле на юга. Итак в наличии автомобиль ЛАДА ХРЕЙ выпуск декабрь 2017 г., три взбалмошные девушки  и огромный запас положительных эмоций.',
        transportType: 'авто',
        distance: '2 112 км',
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        from: 'Санкт-петербург',
        destination: 'Хельсинки',
        mapImg: '/imgRoads/17.jpeg',
        discription: 'Трасса М10 "Скандинавия" Санкт-Петербург-Финляндия - Дорога в хорошем состоянии, а вот соседи по трассе попадаются разные.',
        transportType: 'авто',
        distance: '389 км',
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roads');
  },
};

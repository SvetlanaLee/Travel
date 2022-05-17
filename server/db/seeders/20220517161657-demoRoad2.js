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
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roads');
  },
};

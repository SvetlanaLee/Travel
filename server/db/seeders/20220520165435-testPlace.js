'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Places', [
      {
        title: 'Пит Стоп кафе',
        info: 'Кафе расположено за Тверью перед Медное, от мкад 170 км. Широкий выбор меню: супы - солянка, борщ, лапша. второе - мясо по-французски/боярски, котлеты по-киевски, семга куском, котлеты... гарниры - картошка с грибами, жареные баклажаны, ну и простые.',
        categoria: 'еда',
        img: '/img/XXXL.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'E105, 31, Поддубки, Тверская обл., 170520',
        geometry: [56.916334502732845,35.57775256079102],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Лукойл №53267 Окуловка-2',
        info: 'Так же есть небольшое кафе',
        categoria: 'заправки',
        img: '/img/luk.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: 'M-11, Новгородская обл., 174350',
        geometry: [58.34764,33.281908],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Мини-отель "Золотой ключик"',
        info: 'хорошее расположение - как раз посередине пути',
        categoria: 'гостиница',
        img: '/img/koridor_2.jpeg',
        preset: 'islands#blueHotelIcon',
        adress: 'ул. Советская, д. 5 ЗАТО, Озёрный, Тверская обл., 171090',
        geometry: [57.869867,33.68994],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Будь здоров',
        info: 'аптека',
        categoria: 'аптека',
        img: '/img/.jpeg',
        preset: 'islands#blueMedicalIcon',
        adress: 'ул. Ленина, д. 36а, Окуловка, Новгородская обл., 174350',
        geometry: [58.373054,33.300682],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Riversurf Zavidovo',
        info: 'Можно полюбоваться видами, а еще это лучшее места для катания на вэйксёрфинге!!!',
        categoria: 'отдых',
        img: '/img/zav.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Лазурная, Тверская обл., 171270',
        geometry: [56.580114,36.454021],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Places');
  }
};

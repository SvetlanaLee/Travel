'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Companions', [
      {
        userId: 6,
        open: true,
        info: 'Ищу попутчицу на машине',
        cityFrom: 'Москва',
        cityWhere: 'Нижний Новгород',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      },
      {
        userId: 7,
        open: true,
        info: 'Требуется армия для завоевания Железного Трона.',
        cityFrom: 'Миэрин',
        cityWhere: 'Вестерос',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      },
      {
        userId: 3,
        open: true,
        info: 'Нужно успеть на выпускной к Енотам',
        cityFrom: 'Батуми',
        cityWhere: 'Москва',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      },
      {
        userId: 1,
        open: true,
        info: 'Деловая поездка. Нужен попутчик на машине/мотоцикле',
        cityFrom: 'Самара',
        cityWhere: 'Екатеринбург',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      },
      {
        userId: 4,
        open: true,
        info: 'Давайте соберемся большой компанией',
        cityFrom: 'Москва',
        cityWhere: 'Питер',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      },
      {
        userId: 5,
        open: true,
        info: 'Едем к морю, можем взять двух попутчиков',
        cityFrom: 'Воронеж',
        cityWhere: 'Анапа',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      },
      {
        userId: 2,
        open: true,
        info: 'Ищу маршрут уже четвёртый месяц',
        cityFrom: 'Питер',
        cityWhere: 'Сердечко Олега',
        start: new Date(2022, 6, 30),
        end: new Date(2022, 7, 30),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Companions');
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        text: 'Планируем поехать с друзьями этим летом. Спасибо на рекомендации',
        roadId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 4,
        text: 'Ездием каждый год на машине. Дорога недолгая, зато куча положительных эмоций',
        roadId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        text: 'Урааааааааа',
        roadId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        text: 'Дорога хорошая, так что рекомендую!',
        roadId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        text: 'Обязательно поделимся своими находками после путешествия',
        roadId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        text: 'Кто-нибудь собирается ехать в июле?',
        roadId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        text: 'Обожаю Карелию!',
        roadId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        text: 'идеальный вариант для длинных выходных',
        roadId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 4
      {
        userId: 8,
        text: 'люблю Хельсинки',
        roadId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 6,
        text: 'Если вы из Питера - то нужно обязательно съездить хотя бы раз',
        roadId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        text: 'Отличный маршрут. Положительные эмоции вам обеспечены',
        roadId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        text: 'В каком состоятии дороги?',
        roadId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // 3
      {
        userId: 5,
        text: 'В каком состоятии дороги?',
        roadId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 8,
        text: 'Морееее...',
        roadId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 7,
        text: 'Дорога не близкая, но в хорошей компании вполне терпимо',
        roadId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        text: 'Затестим данный маршрут этим летом',
        roadId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments');
  }
};

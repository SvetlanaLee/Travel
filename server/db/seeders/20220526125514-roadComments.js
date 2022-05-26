'use strict';

module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Roads', [
      {
        text: '1 день долгая дорога (выезд в 1 час ночи, приезд в Элисту в 15,30).Идеальным как и запланировано вышел только 1 день . Мы просто доехали до Элисты, по дороге тормознув в полях тюльпанов',
        userId: 4,
        roadId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'И в Волгограде, и в Элисте машина очень легко срывалась в занос. Не как по снегу, но даже легче, чем по мокрому в Москве. Очевидно, причина тому — тёплый асфальт и тёплые шины.',
        userId: 5,
        roadId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'Автозаправок и мест покушать по пути достаточно, голодными точно не останетесь, однако, при приближении к Тверской области, таких мест все меньше. Сам лично заправлялся на 51 АЗС на Новорижском шоссе, там же посетил кафе "24 Часа"',
        userId: 6,
        roadId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        text: 'в темное время суток на дорогу может выбегать дикий рогатый скот, сама такого видела ночью, поэтому осторожнее',
        userId: 7,
        roadId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Roads')
  }
};

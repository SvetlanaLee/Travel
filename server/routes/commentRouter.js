// const express = require('express');

// const router = express.Router();
// const { Comment, Road, User } = require('../db/models');

// router.post('/', async(req, res) => {
//   console.log(req.body);
//   const { roadId, userId, text } = req.body;
//   const comment = await Comment.create({
//       roadId,
//       userId,
//       text
//     });
      
//   res.json({ comment })
// });


// router.get('/', async (req, res) => {
// const allComments = await Comment.findAll(
//   {
//     include: {
//       model: User,
//       //model: Road,
//     },
//   }
// )
// console.log(allComments)
//   // where: {
//   //   userId: req.session.user.userId,
//   // },

//   res.json({ allComments })
// });

// module.exports = router;


const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
}
    res.render('homepage');
});

// router.get('/post/:id', withAuth, async (req, res) => {
//   try {
//     // const postData = await Post.findByPk(req.params.id, {
//     //   include: [
//     //     {
//     //       model: User,
//     //       attributes: ['name'],
//     //     },
//     //   ],
//     // });

//     // const post = postData.get({ plain: true });

//     res.render('post', {
//       ...post,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// // router.get('/post', withAuth, async (req, res) => {
// //   try {
// //     // Find the logged in user based on the session ID
// //     const postData = await Post.findByPk(req.session.user_id, {
// //       include: [{ model: Post }],
// //     });

// //     const user = postData.get({ plain: true });

// //     res.render('post', {
// //       ...user,
// //       logged_in: true
// //     });
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/post');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;

const router = require('express').Router();

const UserRoute = require('../../user/user.route');
const postRoute = require('../../post/post.route');
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Welcome to  API V1',
    });
});

router.use('/user', UserRoute);
router.use('/post', postRoute);
module.exports = router;
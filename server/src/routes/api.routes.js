const router = require('express').Router();

const authRouter = require('./auth.route');
const userRouter = require('./user.routes');

router.use('/auth', authRouter);
router.use('/users', userRouter);

module.exports = router;

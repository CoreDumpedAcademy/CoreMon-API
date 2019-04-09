const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.userGetList);
router.get('/:userId', userController.userGet);
router.get('/:element&:string', userController.userFind);

router.post('/authenticate', userController.userAuthenticate);

router.post('/', userController.userCreate);
router.put('/:userId', userController.userUpdate);
router.delete('/:userId', userController.userDelete);

module.exports = router;
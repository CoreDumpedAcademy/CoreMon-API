const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.userGetList);
//router.get('/:userId', userController.userGet);              //not used right now, but may be useful later
router.get('/list/:element&:string', userController.userFindList);
router.get('/:element&:string', userController.userFindOne);

router.post('/authenticate', userController.userAuthenticate);

router.post('/', userController.userCreate);
//router.put('/:userId', userController.userUpdate);
router.put('/:element&:string', userController.userUpdate);
router.delete('/:userId', userController.userDelete);

module.exports = router;
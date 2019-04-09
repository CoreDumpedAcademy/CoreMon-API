const router = require('express').Router();
const monController = require('../controllers/monController');

router.get('/', monController.monGetList);
router.get('/:monId', monController.monGet);

router.post('/', monController.monCreate);
router.put('/:monId', monController.monUpdate);
router.delete('/:monId', monController.monDelete);

module.exports = router;
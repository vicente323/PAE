const router = require('express').Router();

const controller = require('./controller');
const auth = require('../../middlewares/tokenValidator')
router.get('/',auth.validateToken, controller.getAll);
router.post('/',controller.createNew);
router.delete('/',controller.delete)
// router.get('/:id', controller.getOne);


module.exports = router;
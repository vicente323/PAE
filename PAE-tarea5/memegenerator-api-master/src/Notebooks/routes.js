const router = require('express').Router();

const controller = require('./controller');

router.get('/', controller.getAll);
router.post('/',controller.createNew);
router.delete('/',controller.delete)
// router.get('/:id', controller.getOne);


module.exports = router;
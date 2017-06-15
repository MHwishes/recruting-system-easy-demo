const {Router} = require('express');
const PaperController = require('../../controller/paper-controller');

const router = Router();
const paperCtrl = new PaperController();

 router.get('/', paperCtrl.getAll);
// router.get('/:itemId', paperCtrl.getOne);
// router.delete('/:itemId', paperCtrl.delete);
router.post('/', paperCtrl.create);
// router.put('/:itemId', paperCtrl.update);

module.exports = router;
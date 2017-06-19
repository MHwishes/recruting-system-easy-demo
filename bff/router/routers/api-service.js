const {Router} = require('express');
const ApiService=require('../../controller/api-service');

const router = Router();
const apiService = new ApiService();

router.get('/', apiService.getAllPapers);
router.delete('/:id',apiService.deletePaper);
router.post('/',apiService.savePaper);
router.get('/:id',apiService.getOnePaper);
router.put('/:id',apiService.updateOnePaper);


module.exports = router;
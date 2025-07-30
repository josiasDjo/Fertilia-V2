const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');

router.post('/nouveau-champ', isAuthenticated, champController.createChamp);
router.get('/terrain/getAll', champController.getAllChamps);
// router.get('terrain/:id', isAuthenticated, champController.getChampById);
router.put('terrain/modifier/:id', isAuthenticated, champController.updateChamp);
router.delete('terrain/delete/:id', isAuthenticated, champController.deleteChamp);

module.exports = router;

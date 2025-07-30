const express = require('express');
const router = express.Router();
const champController = require('../controllers/champController');
const { isAuthenticated } = require('../middlewares/isAuthenticated');
const { authenticateToken } = require('../middlewares/authenticateToken')

router.post('/nouveau-champ', authenticateToken, isAuthenticated, champController.createChamp);
router.get('/terrain/getAll', authenticateToken, champController.getAllChamps);
// router.get('terrain/:id', isAuthenticated, champController.getChampById);
router.put('terrain/modifier/:id', authenticateToken, isAuthenticated, champController.updateChamp);
router.delete('terrain/delete/:id', authenticateToken, isAuthenticated, champController.deleteChamp);

module.exports = router;

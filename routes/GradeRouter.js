const router = require('express').Router();
const controller = require('../controllers/GradeController');
const middleware = require('../middleware');

// Get all grades
router.get('/', middleware.stripToken, middleware.verifyToken, controller.getAll);

// Get grade by ID
router.get('/:id', middleware.stripToken, middleware.verifyToken, controller.getById);

// Create a new grade
router.post('/', middleware.stripToken, middleware.verifyToken, controller.add);

// Update grade by ID
router.put('/:id', middleware.stripToken, middleware.verifyToken, controller.update);

// Delete grade by ID
router.delete('/:id', middleware.stripToken, middleware.verifyToken, controller.delete);

module.exports = router; 
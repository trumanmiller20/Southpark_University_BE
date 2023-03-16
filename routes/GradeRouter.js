const router = require('express').Router();
const controller = require('../controllers/GradeController');
const middleware = require('../middleware');

// Get all grades
router.get('/', middleware.stripToken, middleware.verifyToken, controller.getAllGrades);

// Get grade by ID
router.get('/:id', middleware.stripToken, middleware.verifyToken, controller.getGradeById);

// Create a new grade
router.post('/', middleware.stripToken, middleware.verifyToken, controller.createGrade);

// Update grade by ID
router.put('/:id', middleware.stripToken, middleware.verifyToken, controller.updateGradeById);

// Delete grade by ID
router.delete('/:id', middleware.stripToken, middleware.verifyToken, controller.deleteGradeById);

module.exports = router; 
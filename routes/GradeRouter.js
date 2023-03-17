const router = require('express').Router();
const controller = require('../controllers/GradeController');
const middleware = require('../middleware');

// Get all grades
router.get('/', middleware.stripToken, middleware.verifyToken, controller.GetAll);

// Add Student to a course
router.post('/assign', middleware.stripToken, middleware.verifyToken, controller.EnrollStudentInCourse);

// Get Courses by Student Id
router.get('/:id', middleware.stripToken, middleware.verifyToken, controller.FetchCoursesByStudentId);

// Update score by ID
router.put('/score', middleware.stripToken, middleware.verifyToken, controller.EditStudentCourseScore);

// Delete grade by ID
router.delete('/:studentId/:courseId', middleware.stripToken, middleware.verifyToken, controller.DeleteScore);

module.exports = router; 
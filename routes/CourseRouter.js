const router = require('express').Router();
const controller = require('../controllers/CourseController');

router.get('/', controller.GetAllCourses);
router.get('/:id', controller.GetCourseById);
router.post('/create', controller.CreateCourse);
router.put('/:id', controller.UpdateCourseById);
router.delete('/:id', controller.DeleteCourseById);

module.exports = router; 
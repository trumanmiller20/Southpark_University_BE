const router = require('express').Router();
const controller = require('../controllers/StudentController');
const middleware = require('../middleware');

router.get(
    '/', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllStudents);

router.get(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetStudentById);

router.post(
    '/register', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateStudent);

router.put(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateStudentById);

router.delete(
    '/:id', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteStudentById);

module.exports = router; 
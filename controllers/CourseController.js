const { Course, Student, Grade } = require('../models');

//this code was working if no courses are assigned to a student.
// const GetAllCourses = async (req, res) => {
// 	try {
// 		const courses = await Course.findAll({
// 			//Marked out because of 202 error. Works without include
// 			include: Student [
// 				{
// 					model: Student,
// 					as: 'student_list',
// 					through: { attibutes: ['models.Grade'] }
// 			}]
// 		});
// 		res.send(courses);
// 	} catch (err) {
// 		throw err;
// 	}
// };

// this code get the courses assigned to students.
const GetAllCourses = async (req, res) => {
	try {
	  const courses = await Course.findAll({
		include: [
		  {
			model: Student,
			as: 'students',
			through: { attributes: ['grade'] }
		  }
		]
	  });
	  res.send(courses);
	} catch (err) {
	  throw err;
	}
  };
  
const GetCourseById = async (req, res) => {
	try {
		const courseId = parseInt(req.params.id);
		const course = await Course.findByPk(courseId, {
			include: Grade [
				{
					model: Student,
					as: 'student_list',
					through: { attributes: ['models.Grade'] }
				}
			]
		});
		res.send(course);
	} catch (err) {
		throw err;
	}
};

const CreateCourse = async (req, res) => {
	try {
		const { name } = req.body;
		const course = await Course.create({
			name
		});
		return res.status(200).send({
			msg: `Course was created`,
			payload: course
		});
	} catch (err) {
		throw err;
	}
};

const UpdateCourseById = async (req, res) => {
	try {
		const courseId = parseInt(req.params.id);
		const updatedCourse = await Course.update(req.body, {
			where: { id: courseId },
			returning: true
		});
		return res.status(200).send({
			msg: `Course with id ${courseId} was updated`,
			payload: updatedCourse
		});
	} catch (err) {
		throw err;
	}
};

const DeleteCourseById = async (req, res) => {
	try {
		const { id } = req.params;
		const course = await Course.findByPk(id);
		await Course.destroy({
			where: { id }
		});
		return res.status(200).send({
			msg: `Course with id ${course.id} was deleted`,
			payload: course
		});
	} catch (err) {
		throw err;
	}
};

module.exports = {
	GetAllCourses,
	GetCourseById,
	CreateCourse,
	UpdateCourseById,
	DeleteCourseById
};

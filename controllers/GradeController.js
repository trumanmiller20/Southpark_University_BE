const { Grade } = require('../models');

const GetAll = async (req, res) => {
	try {
    const grades = await Grade.findAll({
      attributes: ['id', 'score', 'studentId', 'courseId', 'createdAt', 'updatedAt'],
      raw: true
  });
  res.json(grades);
} catch (err) {
  throw err;
}
};

const EnrollStudentInCourse = async (req, res) => {
	try {
    const { score, studentId, courseId } = req.body;
		const grade = await Grade.create({
			studentId: parseInt(studentId),
			courseId: parseInt(courseId),
			score: parseInt(score)
		});
		res.send(grade);
	} catch (err) {
		throw err;
	}
};

const FetchCoursesByStudentId = async (req, res) => {
	try {
    const studentId = parseInt(req.params.id);
    console.log(req.params.id)
		const courses = await Grade.findAll({
			where: { studentId: studentId }
		});
		res.send(courses);
	} catch (err) {
		throw err;
	}
};

const EditStudentCourseScore = async (req, res) => {
	try {
		const { studentId, courseId } = req.body;
		const updatedGrade = await Grade.update(req.body, {
			where: { studentId: parseInt(studentId), courseId: parseInt(courseId) },
			returning: true
		});
		res.send(updatedGrade);
	} catch (err) {
		throw err;
	}
};

const DeleteScore = async (req, res) => {
    try {
      const { studentId, courseId } = req.params;
      const deletedGrade = await Grade.destroy({
        where: { studentId: parseInt(studentId), courseId: parseInt(courseId) }
      });
      res.send(deletedGrade);
    } catch (err) {
      throw err;
    }
  };

module.exports = {
	GetAll,
	EnrollStudentInCourse,
	FetchCoursesByStudentId,
	EditStudentCourseScore,
    DeleteScore
};
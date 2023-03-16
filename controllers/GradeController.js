const { Grade, Student, Course } = require('../models');

const GradeController = {
  // Get all grades
  async getAll(req, res) {
    try {
      const grades = await Grade.findAll({
        include: [{ model: Student }, { model: Course }],
      });
      res.status(200).json(grades);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error retrieving grades' });
    }
  },

  // Get grade by ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const grade = await Grade.findByPk(id, {
        include: [{ model: Student }, { model: Course }],
      });
      if (grade === null) {
        res.status(404).json({ message: `Grade with ID ${id} not found` });
      } else {
        res.status(200).json(grade);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: `Error retrieving grade with ID ${id}` });
    }
  },

  // Add new grade
  async add(req, res) {
    const { score, studentId, courseId } = req.body;
    try {
      const grade = await Grade.create({
        score,
        StudentId: studentId,
        CourseId: courseId,
      });
      res.status(201).json(grade);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Error creating grade' });
    }
  },

  // Update grade
  async update(req, res) {
    const { id } = req.params;
    const { score } = req.body;
    try {
      const grade = await Grade.findByPk(id);
      if (grade === null) {
        res.status(404).json({ message: `Grade with ID ${id} not found` });
      } else {
        grade.score = score;
        await grade.save();
        res.status(200).json(grade);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: `Error updating grade with ID ${id}` });
    }
  },

  // Delete grade
  async delete(req, res) {
    const { id } = req.params;
    try {
      const grade = await Grade.findByPk(id);
      if (grade === null) {
        res.status(404).json({ message: `Grade with ID ${id} not found` });
      } else {
        await grade.destroy();
        res.status(200).json({ message: `Grade with ID ${id} deleted` });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: `Error deleting grade with ID ${id}` });
    }
  },
};

module.exports = GradeController;


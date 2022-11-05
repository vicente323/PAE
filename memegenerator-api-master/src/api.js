const router = require('express').Router();

const userRoutes = require('./users/routes');
const coursesRoutes = require('./Courses/routes');
const notebooksRoutes = require('./Notebooks/routes')
const tasksRoutes = require('./Tasks/routes')
router.use('/users', userRoutes);
router.use('/courses',coursesRoutes);
router.use('/tasks',tasksRoutes)
router.use('/notebooks',notebooksRoutes)

module.exports = router;
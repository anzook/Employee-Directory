const empController = require('../controllers/userController');

module.exports = function (app) {

    app.route("/api/employee")
    .post(empController.create)
    .get(empController.findAll);

    app.route("/api/employee/:id")
    .get(empController.findById)
    .put(empController.update)
    .delete(empController.delete);

    app.route("/api/")
}


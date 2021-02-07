module.exports = app => {
    const userController = app.controllers.userController;

    app.route('/api/v1/user/createUser')
        .post(userController.createUser);

    app.route('/api/v1/user/findAllUser')
        .get(userController.findAllUser);

    app.route('/api/v1/user/updateUser/:id')
        .post(userController.updateUser);

    app.route('/api/v1/user/deleteUser/:id')
        .delete(userController.deleteUser);

}
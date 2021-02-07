module.exports = app => {
    const secretaryController = app.controllers.secretaryController;

    app.route('/api/v1/secretary/createSecretary')
        .post(secretaryController.createSecretary);

    app.route('/api/v1/secretary/findAllSecretary')
        .get(secretaryController.findAllSecretary);

    app.route('/api/v1/secretary/updateSecretary/:id')
        .post(secretaryController.updateSecretary);

    app.route('/api/v1/secretary/deleteSecretary/:id')
        .delete(secretaryController.deleteSecretary);

}
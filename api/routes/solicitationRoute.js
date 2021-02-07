module.exports = app => {
    const solicitationController = app.controllers.solicitationController;

    app.route('/api/v1/solicitation/createSolicitation')
        .post(solicitationController.createSolicitation);

    app.route('/api/v1/solicitation/findAllSolicitation')
        .get(solicitationController.findAllSolicitation);

    app.route('/api/v1/solicitation/updateSolicitation/:id')
        .post(solicitationController.updateSolicitation);

    app.route('/api/v1/solicitation/deleteSolicitation/:id')
        .delete(solicitationController.deleteSolicitation);

}
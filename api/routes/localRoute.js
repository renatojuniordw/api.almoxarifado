module.exports = app => {
    const localController = app.controllers.localController;

    app.route('/api/v1/local/createLocal')
        .post(localController.createLocal);

    app.route('/api/v1/local/findAllLocal')
        .get(localController.findAllLocal);

    app.route('/api/v1/local/updateLocal/:id')
        .post(localController.updateLocal);

    app.route('/api/v1/local/deleteLocal/:id')
        .delete(localController.deleteLocal);

}
module.exports = app => {
    const controller = app.controllers.mySqlController;

    app.route('/api/v1/createProduto')
        .post(controller.createProduto);

    app.route('/api/v1/findAllProduto')
        .get(controller.findAll);

    app.route('/api/v1/updateProduto/:id')
        .post(controller.update);

    app.route('/api/v1/deleteProduto/:id')
        .delete(controller.delete);

}
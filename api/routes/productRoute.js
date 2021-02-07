module.exports = app => {
    const productController = app.controllers.productController;

    app.route('/api/v1/product/createProduct')
        .post(productController.createProduct);

    app.route('/api/v1/product/findAllProduct')
        .get(productController.findAllProduct);

    app.route('/api/v1/product/updateProduct/:id')
        .post(productController.updateProduct);

    app.route('/api/v1/product/deleteProduct/:id')
        .delete(productController.deleteProduct);

}
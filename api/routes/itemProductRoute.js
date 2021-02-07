module.exports = app => {
    const itemProductController = app.controllers.itemProductController;

    app.route('/api/v1/item-product/createItemProduct')
        .post(itemProductController.createItemProduct);

    app.route('/api/v1/item-product/findAllItemProduct')
        .get(itemProductController.findAllItemProduct);

    app.route('/api/v1/item-product/updateItemProduct/:id')
        .post(itemProductController.updateItemProduct);

    app.route('/api/v1/item-product/deleteItemProduct/:id')
        .delete(itemProductController.deleteItemProduct);

}
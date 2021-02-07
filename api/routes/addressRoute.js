module.exports = app => {
    const addressController = app.controllers.addressController;

    app.route('/api/v1/address/createAddress')
        .post(addressController.createAddress);

    app.route('/api/v1/address/findAllAddress')
        .get(addressController.findAllAddress);

    app.route('/api/v1/address/updateAddress/:id')
        .post(addressController.updateAddress);

    app.route('/api/v1/address/deleteAddress/:id')
        .delete(addressController.deleteAddress);

}
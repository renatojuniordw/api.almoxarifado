module.exports = app => {
    const controller = app.controllers.customerWalletsController;

    app.route('/api/v1/customer-wallets').get(controller.listCustomerWallets);
}
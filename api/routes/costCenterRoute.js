module.exports = app => {
    const cosCenterController = app.controllers.costCenterController;

    app.route('/api/v1/costCenter/createCostCenter')
        .post(cosCenterController.createCostCenter);

    app.route('/api/v1/costCenter/findAllCostCenter')
        .get(cosCenterController.findAllCostCenter);

    app.route('/api/v1/costCenter/updateCostCenter/:id')
        .post(cosCenterController.updateCostCenter);

    app.route('/api/v1/costCenter/deleteCostCenter/:id')
        .delete(cosCenterController.deleteCostCenter);

}
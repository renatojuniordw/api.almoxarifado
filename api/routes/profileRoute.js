module.exports = app => {
    const profileController = app.controllers.profileController;

    app.route('/api/v1/profile/createProfile')
        .post(profileController.createProfile);

    app.route('/api/v1/profile/findAllProfile')
        .get(profileController.findAllProfile);

    app.route('/api/v1/profile/updateProfile/:id')
        .post(profileController.updateProfile);

    app.route('/api/v1/profile/deleteProfile/:id')
        .delete(profileController.deleteProfile);

}
module.exports = app => {
    const controller = app.controllers.nodemailerController;
    
    app.route('/api/v1/send-email')
        .post(controller.sendEmail);

}
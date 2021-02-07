const app = require('./config/express')();
const port = app.get('port');

(async () => {
    const database = require('./config/db');
 
    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

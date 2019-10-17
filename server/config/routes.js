// require controllers
let records = require('./../controllers/records');

module.exports = function(app){

    app.get('/records', records.index);
    app.post('/records', records.create);
    app.get('/records/:_id', records.findById);
    app.put('/records/:_id', records.update);
    app.delete('/records/:_id', records.delete);


};
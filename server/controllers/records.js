let mongoose = require('mongoose');
let Record = mongoose.model('Record');

module.exports = {
    index: function(req, res){
        Record.find()
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: function(req, res){
        Record.create(req.body)
            .then(data => res.json({message: 'success', data: data}))
            .catch(err => res.json({message: 'fail', err: err}))
    },
    findById: function(req, res){
        Record.findOne({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    update: function(req, res){
        Record.findOneAndUpdate({_id: req.params._id}, req.body, {useValidators: true, new: true})
            .then(data => res.json({message: 'success', data: data}))
            .catch(err => res.json({message: 'fail', data: data}))
    },
    delete: function(req, res){
        Record.remove({_id: req.params._id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}
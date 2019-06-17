const mongoose = require('mongoose');

module.exports = class categoryRepository {
    constructor(model) {
        this._model = mongoose.model(model);
    }
    async create(date) {
        let model =  this._model(date);
        let result = await model.save();
        return result;
    }

    async update(id, data) {
        await this._model.findByIdAndUpdate(id, { $set: data });
        let result = await this._model.findById(id);
        return result;
    }
    async getAll() {
        return this._model.find();
    }
    async getById(id) {
        return this._model.findById(id);
    }
    async delete(id) {
        return this._model.findByIdAndRemove(id);
    }
}
require('../models/user-model');

const base = require('../bin/base/repository-base');

const md5 = require('md5');

module.exports = class userRepository {

    constructor() {
        this._base = new base('User');
    }

    async authenticate(Email, Password) {
        let _hashPassword = md5(Password);
        return this._base._model.findOne({ email: Email, password: _hashPassword }, 'name email _id');
    }

    async create(data) {
        return await this._base.create(data);
    }

    async update(id, data) {
        return await this._base.update(id, data);
    }

    async getAll() {
        return await this._base.getAll();
    }

    async getById(id) {
        return await this.getById(id);
    }

    async delete(id) {
        return await this.delete();
    }
}

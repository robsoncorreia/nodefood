require('../models/category-model');

const base = require('../bin/base/repository-base');

module.exports = class categoryRepository {

    constructor() {
        this._base = new base('Category');
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


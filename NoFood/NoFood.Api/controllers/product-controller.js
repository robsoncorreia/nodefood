'use strict'

require('../models/product-model');

const repository = require('../repositories/product-repository');

module.exports = class productController {

    constructor() {
    }

    async get(req, res) {
        let response = await new repository().getAll();
        res.status(200).send(response);
    }

    async getById(req, res) {
        let response = await new repository.getById(req.params.id);
        res.status(200).send(response);
    }

    async post(req, res) {
        let result = await new repository().create(req.body);
        res.status(200).send(result);
    }

    async put(req, res) {
        let result = await new repository().update(req.params.id, req.body);
        res.status(202).send(result);
    }

    async delete(req, res) {
        let result = await new repository().delete(req.params.id);
        res.status(204).send(result);
    }
}
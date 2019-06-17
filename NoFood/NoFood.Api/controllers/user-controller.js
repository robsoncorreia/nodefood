'use strict'

require('../models/user-model');

const repository = require('../repositories/user-repository');

module.exports = class userController {

    constructor() {
        this._repo = new repository();
    }

    async get(req, res) {
        let response = await _repo.getAll();
        res.status(200).send(response);
    }

    async getById(req, res) {
        let response = await _repo.getById(req.params.id);
        res.status(200).send(response);
    }

    async post(req, res) {
        let result = await _repo.create(req.body);
        res.status(200).send(result);
    }

    async put(req, res) {
        let result = await _repo.update(req.params.id, req.body);
        res.status(202).send(result);
    }

    async delete(req, res) {
        let result = await _repo.delete(req.params.id);
        res.status(204).send(result);
    }
}
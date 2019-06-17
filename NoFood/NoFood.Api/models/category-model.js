'use strict'

const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const categoryModel = new scheme({
    title: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    photo: { type: String, required: true },
    isEnable: { type: Boolean, required: true },
    creationDate: { type: Date, default: Date.now }
}, { versionKey: false });

categoryModel.pre('save', next => {
    let now = Date();
    if (!this.creationDate) {
        this.creationDate = now;
    }
    next();
});

module.exports = mongoose.model('Category', categoryModel);
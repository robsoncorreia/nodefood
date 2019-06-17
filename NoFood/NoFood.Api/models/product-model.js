'use strict'

const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const productModel = new scheme({
    name: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    price: {type: Number, required: true},
    photo: { type: String, required: true },
    isEnable: { type: Boolean, required: true },
    creationDate: { type: Date, default: Date.now }
}, { versionKey: false });

productModel.pre('save', next => {
    let now = Date();
    if (!this.creationDate) {
        this.creationDate = now;
    }
    next();
});

module.exports = mongoose.model('Product',productModel);
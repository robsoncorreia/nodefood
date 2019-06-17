'use strict'

const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const userModel = new scheme({
    name: { trim: true, index: true, required: true, type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String },
    isEnable: { type: Boolean, required: true },
    creationDate: { type: Date, default: Date.now }
}, { versionKey: false });

userModel.pre('save', next => {
    let now = Date();
    if (!this.creationDate) {
        this.creationDate = now;
    }
    next();
});

module.exports = mongoose.model('User', userModel);
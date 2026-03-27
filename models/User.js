const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    store: { type: String, required: true },
    role: { type: String, enum: ['admin', 'client'], default: 'client' },
    plan: { type: String, default: 'Básico' },
    loginAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
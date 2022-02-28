const mongoose = require('mongoose');
const username = encodeURIComponent("root");
const password = encodeURIComponent("root");

module.exports.connect = () => mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.qr0ma.mongodb.net/codebuddy-interview-node?retryWrites=true&w=majority`);

module.exports.disconnect = () => mongoose.disconnect();
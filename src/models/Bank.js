const { Schema, model } = require('mongoose');

const bankSchema = new Schema(
  {
    name: { type: String, required: true, min: 5, max: 100 },
    code: { type: String, required: true, unique: true, min: 5, max: 100 },
    imgBank: { type: String, min: 5, max: 200 },
    urlapp: { type: String, min: 5, max: 200 },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Bank', bankSchema);

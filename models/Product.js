const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  availableSizes: {
    type: [String],
    required: true
  },
}, { timestamps: true });

module.exports = Product = mongoose.model('Product', ProductSchema);
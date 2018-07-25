const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sku: {
    type: String,
    default: 'AAA000'
  },
  name: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: 'General'
  },
  description: {
    type: String,
    default: ''
  },
  cost: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
  qty_on_hand: {
    type: Number,
    default: 0
  },
  is_active: {
    type: Boolean
  },
  image_data: {
    type: String
  }

});

module.exports = mongoose.model('Product', ProductSchema);

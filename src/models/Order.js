import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  menu: {
    hot_dog: {
      type: Number,
      default: 0
    },
    bake: {
      type: Number,
      default: 0
    },
    pizza: {
      type: Number,
      default: 0
    },
  },
  intraID: {
    type: String,
    default: "tempIntra",
    required: true
  },
  orderer: {
    type: String,
    default: "tempUser",
    required: true
  },
  phone_number: {
    type: String,
    default: "01012345678",
    required: true
  },
  comments: {
    type: String,
  },
  orderAt: {
    type: Date,
    default: Date.now
  }
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;

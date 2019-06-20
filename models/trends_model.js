const mongoose = require("mongoose");
const { Schema } = mongoose;

const trendSchema = new Schema({
  imageUrl: String,
  eventName: String,
  eventCategory: String,
  channel: String,
  isSubscribed: Boolean,
  rating: { type: Number, default: 0, min: 0, max: 5 }
});

mongoose.model("trends", trendSchema);

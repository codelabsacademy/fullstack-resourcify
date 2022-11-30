const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const ResourceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    tags: {
      type: Array,
      required: true,
    },
    postedBy: {
      type: Object,
      required: true,
    },
    likes: {
      type: Array,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", ResourceSchema);

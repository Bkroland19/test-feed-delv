const mongoose = require("mongoose");

const JsonSchema = new mongoose.Schema({
	name: {
		type: String,
	},
});

module.exports = mongoose.model("JsonSchema", JsonSchema);

const mongoose = require("mongoose");

const JsonSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
	link: {
		type: String,
	},
});

module.exports = mongoose.model("JsonSchema", JsonSchema);

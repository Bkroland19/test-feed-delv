const mongoose = require("mongoose");
require("dotenv").config();
const { parse } = require("rss-to-json");
const Schema = require("./models/JsonSchema");
const JsonSchema = mongoose.model("JsonSchema");

//mongoose connection
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection
	.on("open", () => {
		console.log("Mongoose connection open");
	})
	.on("error", (err) => {
		console.log(`Connection error: ${err.message}`);
	});

// async await
(async () => {
	var rss = await parse("https://blog.ethereum.org/feed.xml");

	// console.log(JSON.stringify(rss, null, 3));
})();
// Promise

parse("https://blog.ethereum.org/feed.xml").then((rss) => {
	// console.log(JSON.stringify(rss, null, 3));
	var jsonSchema = new JsonSchema(JSON.stringify(rss, null, 3));

	JsonSchema.insert()
		.then(() => {
			res.send("Json records saved to Database");
		})
		.catch((err) => {
			console.log(err);
			res.send("Sorry! Something went wrong records not saved.");
		});
});

const mongoose = require("mongoose");
require("dotenv").config();
const { parse } = require("rss-to-json");
const Schema = require("./models/JsonSchema");
const JsonSchema = mongoose.model("JsonSchema");

//mongoose connection
mongoose.connect(process.env.DATABASE, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

mongoose.connection
	.on("open", () => {
		console.log("Mongoose connection open");
	})
	.on("error", (err) => {
		console.log(`Connection error: ${err.message}`);
	});

//

// async await
(async () => {
	// var rss = await parse("https://blog.ethereum.org/feed.xml");
})();
// Promise
const links = [
	"https://blog.ethereum.org/feed.xml",
	"https://careeralley.com/feed/",
];

links.map((link) => {
	parse(link).then(async (rss) => {
		// console.log(JSON.stringify(link, null, 3));
		var rss = await parse(link);
		console.log(rss);
		// link.items?.map((object) => {
		// 	var jsonSchema = new JsonSchema(object);
		// 	jsonSchema.save();
		// 	return "data sent to the db";
		// });
		//console.log(link.items);
		// // JsonSchema.insert()
		// jsonSchema.save().then(() => {
		// 	res.send("Json records saved to Database");
		// });
	});
});

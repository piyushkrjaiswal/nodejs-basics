var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
	var dbo = db.db("mydb");
	dbo.collection("customers").find({}).toArray(function (err, result) {
		if (err) return err;
		console.log(result);
		db.close();
	});
});
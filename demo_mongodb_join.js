var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function (err, db) {
	if (err) throw err;
	var dbo = db.db("mydb");
	dbo.createCollection("orders", function(err, res) {
	    if (err) throw err;
	    console.log("Collection created!");
	    db.close();
    });

	var myobj = { _id: 3, product_id: 157, status: 1 };
	  dbo.collection("orders").insertOne(myobj, function(err, res) {
	    if (err) throw err;
	    console.log("1 document inserted");
	    db.close();
	  });

	  dbo.createCollection("products", function(err, res) {
	    if (err) throw err;
	    console.log("Collection created!");
	    db.close();
      });

	  var myobj1= [
	  { _id: 157, name: 'Tasty Lemons1' },
	  { _id: 158, name: 'Vanilla Dreams1' }
	  ];
	  dbo.collection("products").insertMany(myobj1, function(err, res1) {
	    if (err) throw err;
	    console.log("Number of documents inserted: " + res1.insertedCount);
	    db.close();
	  });
	dbo.collection("orders").aggregate([
		{ $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
		]).toArray(function (err, res) {
			if(err) throw err;
			console.log(Json.stringify(res));
			db.close();
		});
	
});
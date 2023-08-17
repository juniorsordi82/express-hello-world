const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://juniorsordi:8uOBu6yEtgEDwtfl@cluster0.kbxdten.mongodb.net?retryWrites=true&w=majority";
const uri2 = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client;

/*
LX562715142US
http://mailviewshipper.fedex.com/shipper_package_summary.aspx?txtPostalIDNumber=LX562715142US
*/
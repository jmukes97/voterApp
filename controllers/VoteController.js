// Import the functions from the DBQuery Library
const db = require('../helpers/DBQuery');

// Stores the election data into MongoDB Atlas
exports.storeElectionData = async function (request, response) {
  db.createCollection("Election1");
  db.createCollection("Election2");
  db.createCollection("Election3");

  let collection = await db.getCollectionData("Election1", { "name": "Joe" });

  if (collection[0]['name'] === "Joe") {
    let updatedTotal = collection[0]['totalVotes'] + 1;
    db.updateCollectionData("Election1", { "name": collection[0]['name'] }, { $set: { "totalVotes": updatedTotal } })
  }

  // db.addObjectToCollection("Election1", { "name": "Jon", "party": "Democrat", "totalVotes": 1 });
  // db.addObjectToCollection("Election1", { "name": "Joe", "party": "Green Party", "totalVotes": 1 });
  // db.addObjectToCollection("Election1", { "name": "Nessa", "party": "Republican", "totalVotes": 1 });
  // db.addObjectToCollection("Election1", { "name": "Margret", "party": "Democrat", "totalVotes": 1 });

  // db.addObjectToCollection("Election2", { "name": "Jasmine", "party": "Republican", "totalVotes": 1 });
  // db.addObjectToCollection("Election2", { "name": "Althea", "party": "Democrat", "totalVotes": 1 });
  // db.addObjectToCollection("Election2", { "name": "Gabriel", "party": "Green Party", "totalVotes": 1 });

  // db.addObjectToCollection("Election3", { "name": "David", "party": "Green Party", "totalVotes": 1 });
  // db.addObjectToCollection("Election3", { "name": "Sandy", "party": "Republican", "totalVotes": 1 });
  // db.addObjectToCollection("Election3", { "name": "Robert", "party": "Democrat", "totalVotes": 1 });
  // db.addObjectToCollection("Election3", { "name": "Nathan", "party": "Tree Hugging Pacifist", "totalVotes": 1 });

  // let collection = await db.getCollectionData("Election1");

  collection = await db.getCollectionData("Election2");

  console.log(collection);
  return response.send(collection)
}

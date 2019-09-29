// Import the functions from the DBQuery Library
const db = require('../helpers/DBQuery');

// Elections
// Candidates: belong to an election
// Office: Elections have an office
// Candidates have a specific number of votes;

exports.storeElectionData = async function (request, response) {
  // db.createCollection("Election1");
  // db.createCollection("Election2");
  // db.createCollection("Election3");

  let collection = await db.getCollectionData(request.body.election, { "name": request.body.name });

  if (collection[0]['name'] === request.body.name) {
    let updatedTotal = collection[0]['totalVotes'] + 1;
    db.updateCollectionData("Election1", { "name": collection[0]['name'] }, { $set: { "totalVotes": updatedTotal } })
  }

  return response.send(collection)
}

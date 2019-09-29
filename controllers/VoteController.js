// Import the functions from the DBQuery Library
const db = require('../helpers/DBQuery');

// Elections
// Candidates: belong to an election
// Office: Elections have an office
// Candidates have a specific number of votes;

exports.storeElectionData = async function (request, response) {
//    db.createCollection("testElection");

    //db.addObjectToCollection("testElection", { "election1": { "name": "Jon", "party": "Democrat" } });
    //db.addObjectToCollection("testElection", { "election1": { "name": "Joe", "party": "Green Party" } });
//     db.addObjectToCollection("testElection", { "election1": { "name": "Nessa", "party": "Republican" } });
  //   db.addObjectToCollection("testElection", { "election1": { "name": "Margret", "party": "Democrat" } });

    //db.addObjectToCollection("testElection", { "election2": { "name": "Jasmine", "party": "Republican" } });
    // db.addObjectToCollection("testElection", { "election2": { "name": "Althea", "party": "Democrat" } });
     //db.addObjectToCollection("testElection", { "election2": { "name": "Gabriel", "party": "Green Party" } });

    //db.addObjectToCollection("testElection", { "election3": { "name": "David", "party": "Green Party" } });
    // db.addObjectToCollection("testElection", { "election3": { "name": "Sandy", "party": "Republican" } });
    // db.addObjectToCollection("testElection", { "election3": { "name": "Robert", "party": "Democrat" } });
    // db.addObjectToCollection("testElection", { "election3": { "name": "Nathan", "party": "Tree Hugging Pacifist" } });

    let collection = await db.getCollectionData("testElection");
    console.log(collection);
    return collection 
}

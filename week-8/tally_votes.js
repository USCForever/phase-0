// Tally Votes in JavaScript Pairing Challenge.

// I worked on this challenge with: James Boyd
// This challenge took me hours.

// These are the votes cast by each student. Do not alter these objects here.
var votes = {
  "Alex": { president: "Bob", vicePresident: "Devin", secretary: "Gail", treasurer: "Kerry" },
  "Bob": { president: "Mary", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Cindy": { president: "Cindy", vicePresident: "Hermann", secretary: "Bob", treasurer: "Bob" },
  "Devin": { president: "Louise", vicePresident: "John", secretary: "Bob", treasurer: "Fred" },
  "Ernest": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Fred": { president: "Louise", vicePresident: "Alex", secretary: "Ivy", treasurer: "Ivy" },
  "Gail": { president: "Fred", vicePresident: "Alex", secretary: "Ivy", treasurer: "Bob" },
  "Hermann": { president: "Ivy", vicePresident: "Kerry", secretary: "Fred", treasurer: "Ivy" },
  "Ivy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Gail" },
  "John": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Kerry" },
  "Kerry": { president: "Fred", vicePresident: "Mary", secretary: "Fred", treasurer: "Ivy" },
  "Louise": { president: "Nate", vicePresident: "Alex", secretary: "Mary", treasurer: "Ivy" },
  "Mary": { president: "Louise", vicePresident: "Oscar", secretary: "Nate", treasurer: "Ivy" },
  "Nate": { president: "Oscar", vicePresident: "Hermann", secretary: "Fred", treasurer: "Tracy" },
  "Oscar": { president: "Paulina", vicePresident: "Nate", secretary: "Fred", treasurer: "Ivy" },
  "Paulina": { president: "Louise", vicePresident: "Bob", secretary: "Devin", treasurer: "Ivy" },
  "Quintin": { president: "Fred", vicePresident: "Hermann", secretary: "Fred", treasurer: "Bob" },
  "Romanda": { president: "Louise", vicePresident: "Steve", secretary: "Fred", treasurer: "Ivy" },
  "Steve": { president: "Tracy", vicePresident: "Kerry", secretary: "Oscar", treasurer: "Xavier" },
  "Tracy": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Ullyses": { president: "Louise", vicePresident: "Hermann", secretary: "Ivy", treasurer: "Bob" },
  "Valorie": { president: "Wesley", vicePresident: "Bob", secretary: "Alex", treasurer: "Ivy" },
  "Wesley": { president: "Bob", vicePresident: "Yvonne", secretary: "Valorie", treasurer: "Ivy" },
  "Xavier": { president: "Steve", vicePresident: "Hermann", secretary: "Fred", treasurer: "Ivy" },
  "Yvonne": { president: "Bob", vicePresident: "Zane", secretary: "Fred", treasurer: "Hermann" },
  "Zane": { president: "Louise", vicePresident: "Hermann", secretary: "Fred", treasurer: "Mary" }
}

// Tally the votes in voteCount.
var voteCount = {
  president: {},
  vicePresident: {},
  secretary: {},
  treasurer: {}
}

/* The name of each student receiving a vote for an office should become a property
of the respective office in voteCount.  After Alex's votes have been tallied,
voteCount would be ...

  var voteCount = {
    president: { Bob: 1 },
    vicePresident: { Devin: 1 },
    secretary: { Gail: 1 },
    treasurer: { Kerry: 1 }
  }

*/


/* Once the votes have been tallied, assign each officer position the name of the
student who received the most votes. */
var officers = {
  president: undefined,
  vicePresident: undefined,
  secretary: undefined,
  treasurer: undefined
}

/* Pseudocode
// Input: an object full of votes (which are objects themselves),
// Output: edit the voteCount object and the officers object
// Steps:
1. Iterate over votes, adding properties and values to the voteCount object
    a. Use a FOR loop to add properties to voteCount properties and increment the
       votes for that candidate as necessary.
        i. check to see if voteCount properties already contain the name of the
           candidate
           - IF it does, increment the value by one (the votes for that candidate)
           - ELSE add the candidate as a property and give it a value of 1.
2. tally up the votes in voteCount, then edit the officers object.
    a. edit officers
    b. iterate through voteCount using a FOR..IN.. loop and IF a number is higher than the number in that is in the variable, it replaces, ELSE, it goes over.  And it writes it IF its value is undefined.
    c. The FOR..IN.. loop goes over voteCount

*/
// __________________________________________
// Initial Solution

/*for (var v in votes) {
  var presVote = votes[v]["president"];
  var vicePVote = votes[v]["vicePresident"];
  var secVote = votes[v]["secretary"];
  var tresVote = votes[v]["treasurer"];

  if (voteCount["president"].hasOwnProperty(presVote)) {
    voteCount["president"][presVote] += 1;
  } else {
    voteCount["president"][presVote] = 1;// add the name and give it a vote
  }

  if (voteCount["vicePresident"].hasOwnProperty(vicePVote)) {
    voteCount["vicePresident"][vicePVote] += 1;
  } else {
    voteCount["vicePresident"][vicePVote] = 1;// add the name and give it a vote
  }

  if (voteCount["secretary"].hasOwnProperty(secVote)) {
    voteCount["secretary"][secVote] += 1;
  } else {
    voteCount["secretary"][secVote] = 1;// add the name and give it a vote
  }

  if (voteCount["treasurer"].hasOwnProperty(tresVote)) {
    voteCount["treasurer"][tresVote] += 1;
  } else {
    voteCount["treasurer"][tresVote] = 1;// add the name and give it a vote
  }

}

for (var candidate in voteCount.president) {
  if (officers.president === undefined) {
    officers.president = candidate; //candidate?
  }
  else if (voteCount["president"][candidate] > voteCount.president[officers["president"]]) {
    officers.president = candidate;
  }
}

for (var candidate in voteCount.vicePresident) {
  if (officers.vicePresident === undefined) {
    officers.vicePresident = candidate; //candidate?
  }
  else if (voteCount["vicePresident"][candidate] > voteCount.vicePresident[officers["vicePresident"]]) {
    officers.vicePresident = candidate;
  }
}

for (var candidate in voteCount.secretary) {
  if (officers.secretary === undefined) {
    officers.secretary = candidate; //candidate?
  }
  else if (voteCount["secretary"][candidate] > voteCount.secretary[officers["secretary"]]) {
    officers.secretary = candidate;
  }
}

for (var candidate in voteCount.treasurer) {
  if (officers.treasurer === undefined) {
    officers.treasurer = candidate; //candidate?
  }
  else if (voteCount["treasurer"][candidate] > voteCount.treasurer[officers["treasurer"]]) {
    officers.treasurer = candidate;
  }
}
*/



// __________________________________________
// Refactored Solution


for (var v in votes) {
  var presVote = votes[v]["president"];
  var vicePVote = votes[v]["vicePresident"];
  var secVote = votes[v]["secretary"];
  var tresVote = votes[v]["treasurer"];
  var candidates_array = [presVote, vicePVote, secVote, tresVote];
  var candidate_positions = ["president", "vicePresident", "secretary", "treasurer"]
  for (var i = 0; i < candidates_array.length; i++) {
    if (voteCount[candidate_positions[i]].hasOwnProperty(candidates_array[i])) {
    voteCount[candidate_positions[i]][candidates_array[i]] += 1;
    }
    else {
    voteCount[candidate_positions[i]][candidates_array[i]] = 1;// add the name and give it a vote
    }
  }
}

for (var candidate in voteCount.president) {
  if (officers.president === undefined) {
    officers.president = candidate; //candidate?
  }
  else if (voteCount["president"][candidate] > voteCount.president[officers["president"]]) {
    officers.president = candidate;
  }
}

for (var candidate in voteCount.vicePresident) {
  if (officers.vicePresident === undefined) {
    officers.vicePresident = candidate; //candidate?
  }
  else if (voteCount["vicePresident"][candidate] > voteCount.vicePresident[officers["vicePresident"]]) {
    officers.vicePresident = candidate;
  }
}

for (var candidate in voteCount.secretary) {
  if (officers.secretary === undefined) {
    officers.secretary = candidate; //candidate?
  }
  else if (voteCount["secretary"][candidate] > voteCount.secretary[officers["secretary"]]) {
    officers.secretary = candidate;
  }
}

for (var candidate in voteCount.treasurer) {
  if (officers.treasurer === undefined) {
    officers.treasurer = candidate; //candidate?
  }
  else if (voteCount["treasurer"][candidate] > voteCount.treasurer[officers["treasurer"]]) {
    officers.treasurer = candidate;
  }
}




// __________________________________________
// Reflection
/*

What did you learn about iterating over nested objects in JavaScript?

I think the biggest thing I learned was the importance of using bracket notation.  It was especially important to figure out which objects were arrays and which were js objects because that was something that tripped us up for a while.

Were you able to find useful methods to help you with this?

I was not able to find any useful methods to help me.  Ruby docs are a lot easier to navigate through than js, and it also seems like js does not have as many easy one line solutions.

What concepts were solidified in the process of working through this challenge?

I think that I solidified my understanding of js a bit more.  I also got a bit more experience using assert statements and learned more about bracket notation.  This is the first time that I used for..in.. loops, and I find them to be very useful.

*/

// __________________________________________
// Test Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (voteCount.president["Bob"] === 3),
  "Bob should receive three votes for President.",
  "1. "
)

assert(
  (voteCount.vicePresident["Bob"] === 2),
  "Bob should receive two votes for Vice President.",
  "2. "
)

assert(
  (voteCount.secretary["Bob"] === 2),
  "Bob should receive two votes for Secretary.",
  "3. "
)

assert(
  (voteCount.treasurer["Bob"] === 4),
  "Bob should receive four votes for Treasurer.",
  "4. "
)

assert(
  (officers.president === "Louise"),
  "Louise should be elected President.",
  "5. "
)

assert(
  (officers.vicePresident === "Hermann"),
  "Hermann should be elected Vice President.",
  "6. "
)

assert(
  (officers.secretary === "Fred"),
  "Fred should be elected Secretary.",
  "7. "
)

assert(
  (officers.treasurer === "Ivy"),
  "Ivy should be elected Treasurer.",
  "8. "
)
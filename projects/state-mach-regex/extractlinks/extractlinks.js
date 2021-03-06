const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];
const htmlData = null;
// !!!! IMPLEMENT ME

// Set up regex
const searchExpression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
const regex = new RegExp(searchExpression);

// Read file
console.log("\n\x1b[31mExtracting URL from:\x1b[0m", filename, "\n");
fs.readFile(filename, "utf8", function(err, data) {
  // return error if error
  if (err) {
    return console.log(err);
  }
  // Find matches and print them out
  if (data.match(regex)) {
    data.match(regex).forEach(foundURL => console.log(foundURL));
  }
});

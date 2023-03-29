const { url } = require("inspector");
const { basename } = require("path");

const graphData = (req, res) => {
  const fs = require("fs");
  const csv = require("csv-parser");

  const results = [];

  fs.createReadStream("AAPL.csv")
    .pipe(csv())
    .on("data", (data) => {
      results.push(data);
    })
    .on("end", () => {
      res.status(200).send(results);
    });
};

module.exports = { graphData };

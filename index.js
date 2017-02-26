const express = require("express");
const minimist = require("minimist");

const app = express();

app.get("/api/", (request, response) => {
    response.json({
        backend: "fourth version",
    });
});

const argv = minimist(process.argv.slice(2));
const port = argv["p"] || 9001;

app.listen(port, "0.0.0.0", () => {
    console.log(`server is listening: ${port}`);
});

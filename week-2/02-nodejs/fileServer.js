/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const app = express();
//const port = 3000;
const fs = require("fs");
const path = require("path");
//app.listen(3000);

app.get("/files", function(req, res){
  fs.readdir(__dirname, "./files", (err, files) => {
    if(err){
      return res.status(500).json({error: "file not found"})
    }
    res.json({files})
  })
})

app.get("files/:filename", function(req, res){
  fs.readFile(__filename, "./files/", "utf-8", function(err, data) {
    if(err){
      return res.status(404).send("contant not found")
    }
    res.send(data);
  })
})

app.all("*", function(req, res){
  res.status(404).send("route not founds")
})

 module.exports = app;





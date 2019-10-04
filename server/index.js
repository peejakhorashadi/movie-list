//import express framework
const express = require('express');
const path = require('path');
const dbMethods = require('../database/dbMethods.js')
//Set PORT# to listen on
const PORT = 5555;
//create server
const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
//serve static files
app.get('/movies', (req,res) => {
  dbMethods.getAllMovies(req,res);
})
//start server
app.listen(PORT, () => console.log(`Express server started on ${PORT}`));
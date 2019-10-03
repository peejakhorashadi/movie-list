//import express framework
const express = require('express');
const path = require('path');
//Set PORT# to listen on
const PORT = 5555;
//create server
const app = express();
//serve static files
// app.get('/', (req,res) => {
  
// })
app.use(express.static(path.join(__dirname, '../client/dist')));
//start server
app.listen(PORT, () => console.log(`Express server started on ${PORT}`));
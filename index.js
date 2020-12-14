const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

//Mongoose here
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/familyTree')

const db = mongoose.connection;

// shortcut to the mongoose connection 
db.once('open', () => {
    // printing to see what host and port Mongodb is on
    console.log(`connected to mongodb on ${db.host}:${db.port}`);
})

// log any database errors
db.on('error', (err)=> {
    console.error(`Database error: ${err}`)
})

app.get("/", (req, res) => {
    res.send ('Mongooses')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
})
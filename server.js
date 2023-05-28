const app = require('./app')
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://IhorC:RmeGb5rN2D5DTf2z@cluster-hw-03.mlamxmg.mongodb.net/contacts-editor')
.then((data) => {
  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000")
  })
})
.catch(error => {
  console.log(error);
  process.exit(1);
})
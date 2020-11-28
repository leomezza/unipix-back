// const mongoose = require('mongoose');
import mongoose from 'mongoose';


class MongoConnection {
  constructor(dbURL) {
    this.mongoose = mongoose;
    this.dbURL = dbURL;
  }

  startDbConnection() {
    this.mongoose.connect(
      this.dbURL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
      .then(() => console.log(`Database ${this.dbURL} connected`))
      .catch();
  }
}

// module.exports = MongoConnection;
export default MongoConnection;
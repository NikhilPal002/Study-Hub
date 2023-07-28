const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/studyMaterial?readPreference=primary&directConnection=true&tls=false";
// const mongoURI = "mongodb+srv://nikhilpal2017:QXdbK3DQn1EJMjRV@cluster0.atrg7np.mongodb.net/";
mongoose.set('strictQuery', false);

const connectToMongo = () => {        // using async and await function so that promises can resolve
  mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

}
module.exports = connectToMongo;
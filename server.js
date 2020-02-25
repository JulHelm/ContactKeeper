const express = require('express');

const app = express();

//adding an endpoint for requests: res.sendFile, json, or just send and more possible. as we
// do a json API we will set it to json
app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the Contact Keeper API!' })
);

//define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

//process.env looks for an environment variable PORT first then takes 5000 here if not set
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// to start: npm run server that uses nodemon!

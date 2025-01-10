const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Important: Parse JSON request bodies

app.get('/', (req, res) => {
  //Check if req.body exists before accessing it
  const data = req.body?.someData || 'No data received'; //Optional chaining and default value
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
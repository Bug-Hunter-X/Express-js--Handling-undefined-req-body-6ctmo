const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if there is no data sent from the client
  const data = req.body.someData; // Error happens here if req.body is undefined
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
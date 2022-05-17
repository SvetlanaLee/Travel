const express = require('express');

const app = express();

const PORT = process.env.PORT ?? 3001;

app.post('/',  (req, res) => {
  
});

app.listen(PORT, () => {
  console.log(`Server started ${PORT}`);
})

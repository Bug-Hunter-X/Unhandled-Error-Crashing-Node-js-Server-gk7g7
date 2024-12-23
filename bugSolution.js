const express = require('express');
const app = express();
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Success!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      next(error); // Pass the error to the error handler
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));
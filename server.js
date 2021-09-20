const express = require('express');
const app = express();
const path = require('path');

const { connectToDb } = require('./utils/connectToDb');

let { log } = console;

require('dotenv/config');

app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({ extended: !true }));
app.use(
  express.static(
    path.join(__dirname, 'front-end', 'dist', 'front-end')
  )
);
connectToDb();

app.use('/api/posts', require('./routes/posts'));
app.use('/api/user', require('./routes/user'));

app.get('*', (req, res) => {
  let file = path.join(__dirname, 'front-end', 'dist', 'front-end', 'index.html');
  res.status(200).sendFile(file);
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running at port ${PORT}`)
})

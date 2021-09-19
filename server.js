let express = require('express');
let app = express();
const { connectToDb } = require('./utils/connectToDb');

let { log } = console;

require('dotenv/config');
app.use(require('cors')());
app.use(express.json());
app.use(express.urlencoded({ extended: !true }));

connectToDb();

app.use('/api/posts', require('./routes/posts'));
app.use('/api/user', require('./routes/user'));

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  log(`Server is running at port ${PORT}`)
})

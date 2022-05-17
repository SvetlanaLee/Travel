require('dotenv').config();
const express = require('express');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const userRouter = require('./routes/userRouter');
const { cookieLogger } = require('./middleware/allMiddle');

const app = express();
// app.use(cors());

// app.set('view engine', 'hbs');
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(cookieLogger);
const PORT = process.env.PORT ?? 3001;
app.use((req, res, next) => {
  const accessList = [
    'http://localhost:3000',
    'http://localhost:3001',
  ];
  const origin = req.get('origin');
  if (accessList.includes(origin)) {
  // если в списке есть адрес того, кто обращается к серверу, то делаем для него заголовок
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Content-type');
    res.header('Access-Control-Allow-Credentials', true);
  }
  next();
});

app.use(session({
  store: new FileStore(),
  secret: 'rtyujnku7i8yjiuhrgfg',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
  name: 'authorisation',
}));

app.use('/', userRouter);

app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => {
  console.log(`Server started ${PORT} port`);
});

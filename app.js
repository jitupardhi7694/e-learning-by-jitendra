

const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// design file

app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout/main_layout');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ limit: '60mb', extended: false }));
// routers
app.use('/', require('./routes/indexRoute'));

// app.use((req, res) => {
//   res.render('/errCode/404err', { path: req.url });
// });

// // error handler, this has to be last middleware
// app.use((err, req, res) => {
//   console.error("err ===========> ", err);
//   return res.render('/errCode/404err', { err: err.message });
// });
// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});


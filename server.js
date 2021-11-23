const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/users', require('./routes/users'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.json({ msg: 'hello' });
});
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

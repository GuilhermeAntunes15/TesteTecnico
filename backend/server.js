const express = require('express');
const cors    = require('cors');
const dotenv  = require('dotenv');
const { sequelize } = require('./models');
const usersRouter   = require('./routes/users');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('✔️  Database connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });

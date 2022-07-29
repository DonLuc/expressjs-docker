const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';
const logger = require('./middleware/logger');
const footballRoutes = require('./routes/api/football_routes');

app.use(logger);
app.use(bodyParser.json());
app.use('/api/football', footballRoutes);

app.listen(PORT, HOST, () => {
  console.log(`Football API is listening on PORT: ${PORT}`);
});

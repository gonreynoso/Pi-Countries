const PORT = process.env.PORT || 3001
const server = require('./src/app.js');

const { conn } = require('./src/db.js');


// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
    
    server.listen(PORT, () => {
      console.log('INDEX listening at 3001'); // eslint-disable-line no-console
    });
  });
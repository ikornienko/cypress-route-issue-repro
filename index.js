const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('App to reproduce Cypress route matching issue.'));

app.get('/api/issue', (req, res) => res.json({ param: req.query.param }));
app.use('/issue', express.static('index.html'))

app.listen(port, () => console.log(`Open the app at http://localhost:${port}`));
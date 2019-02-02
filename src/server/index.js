import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import renderer from './renderer';
import apiRouter from './routes';

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose Connection (messages is our database)
mongoose.connect('mongodb://localhost/messages');

// API ROUTES
app.use('/api', apiRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
  fs.readFile('./src/server/index.html', 'utf8', (err, data) => {
    const routeContext = {};
    renderer(data, req.path, routeContext).then((html) => {
      if (routeContext.notFound) {
        res.status(404);
      }
      res.send(html);
    });
  });
});

app.listen(PORT);

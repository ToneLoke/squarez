import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import renderer from './renderer';
import apiRouter from './routes';

const PORT = 3000;

// initialize the application and create the routes
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
    const context = {};
    renderer(data, req.path, context).then((html) => {
      if (context.notFound) {
        res.status(404);
      }
      res.send(html);
    });
  });
});

app.listen(PORT);

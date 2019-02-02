import { Router } from 'express';
import data from '../common/superbowl';

const apiRouter = Router();

apiRouter.route('/matches').get((req, res) => {
  res.status(200).json(data);
});

export default apiRouter;

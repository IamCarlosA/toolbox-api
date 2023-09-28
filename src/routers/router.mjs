import express from 'express';
import { getFiles, getFilesList } from '../controllers/file.mjs';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello Toolbox!' });
});

router.get('/files/data', getFiles);

router.get('/files/list', getFilesList);

export default router;

import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { analyze } from './analyzer';
const app = express();
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });
app.post('/analyze', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file');
  res.json(analyze(req.file.buffer));
});
app.listen(3001, () => console.log('Server on 3001'));

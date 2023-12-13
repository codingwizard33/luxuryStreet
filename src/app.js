import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import auth from './routes/auth.js';
import api from './routes/api.js';
import admin from './routes/admin.js';
import { authMiddleware } from './middlewares/authMiddleware.js';
import db from './config/mongodb.js';

db();

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors({ origin: '*' }));

app.use('/auth', auth);
app.use('/api', authMiddleware, api);
app.use('/admin', authMiddleware, admin);

app.listen(process.env.PORT, () => {
  console.log(`The server started on http://localhost:${process.env.PORT}`);
});

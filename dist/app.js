import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import marketRoutes from './routes/marketRoutes.js';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.use('/api', marketRoutes);
export default app;

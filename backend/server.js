import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.config.js';
import contactRoutes from './routes/contact.routes.js';
import contentRoutes from './routes/content.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173';

connectDB();

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/content', contentRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'Lotlite backend is running.' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found.' });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

import mongoose from 'mongoose';

const DEFAULT_LOCAL_URI = process.env.MONGO_URI_LOCAL || 'mongodb://127.0.0.1:27017/lotlite';

const createUri = () => {
  const uri = process.env.MONGO_URI?.trim();

  if (!uri || uri.includes('<username>') || uri.includes('<password>')) {
    console.warn('MONGO_URI is missing or contains placeholder values. Falling back to local MongoDB.');
    return DEFAULT_LOCAL_URI;
  }

  return uri;
};

const connectDB = async () => {
  const uri = createUri();

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    if (process.env.NODE_ENV === 'production') {
      process.exit(1);
    }
    console.warn('Continuing without MongoDB connection in development mode.');
  }
};

export const isDBConnected = () => mongoose.connection.readyState === 1;
export default connectDB;

import Joi from 'joi';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(80).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().min(7).max(25).required(),
  experience: Joi.string().trim().required(),
  message: Joi.string().trim().allow('').max(1000),
});

const isDatabaseAvailable = () => mongoose.connection.readyState === 1;

export async function submitContact(req, res, next) {
  if (!isDatabaseAvailable()) {
    return res.status(503).json({ message: 'Database unavailable. Please start MongoDB or configure MONGO_URI.' });
  }

  try {
    const { error, value } = contactSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({ message: 'Validation failed.', details: error.details.map((item) => item.message) });
    }

    const contact = new Contact(value);
    await contact.save();

    return res.status(201).json({ message: 'Contact form submitted successfully.' });
  } catch (err) {
    next(err);
  }
}

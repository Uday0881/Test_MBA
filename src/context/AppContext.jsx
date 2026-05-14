import { createContext, useEffect, useMemo, useState } from 'react';
import { submitContact as sendContact } from '../services/api';

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
  });
  const [contactStatus, setContactStatus] = useState({ status: 'idle', message: '' });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  const resetForm = () => {
    setFormData({ name: '', email: '', phone: '', experience: '', message: '' });
    setContactStatus({ status: 'idle', message: '' });
  };

  const submitContact = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.experience) {
      setContactStatus({ status: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setContactStatus({ status: 'pending', message: 'Submitting your application…' });

    try {
      await sendContact(formData);
      setContactStatus({ status: 'success', message: 'Application received! Our team will contact you shortly.' });
      setFormData({ name: '', email: '', phone: '', experience: '', message: '' });
    } catch (error) {
      setContactStatus({ status: 'error', message: error.message || 'Unable to submit form right now. Please try again later.' });
    }
  };

  const value = useMemo(
    () => ({ theme, toggleTheme, formData, setFormData, contactStatus, submitContact, resetForm }),
    [theme, formData, contactStatus]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

import React, { useState } from 'react';
import { sendEmail } from '../../utils/email';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await sendEmail({
      subject: `New Contact from ${formData.name}`,
      content: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `
    });

    if (success) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-pure-white mb-2">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
          required
        />
      </div>
      <div>
        <label className="block text-pure-white mb-2">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
          required
        />
      </div>
      <div>
        <label className="block text-pure-white mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full p-2 rounded bg-matte-black text-pure-white border border-gray-700"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-pure-white text-deep-black py-2 rounded hover:bg-off-white transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
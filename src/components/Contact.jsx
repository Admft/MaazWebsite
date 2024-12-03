import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-light tracking-wide text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600 font-light">Let's connect and discuss opportunities</p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Details */}
        <div className="space-y-6">
          <div className="bg-white/50 p-6 rounded-lg border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:maazk5120@gmail.com" className="text-gray-700 hover:text-red-600 transition-colors">
                  maazk5120@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+19729556532" className="text-gray-700 hover:text-red-600 transition-colors">
                  (972) 955-6532
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-700">Dallas, TX</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a 
                  href="https://www.linkedin.com/in/maazkhan123" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  linkedin.com/in/maazkhan123
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-colors resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-colors font-light"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-50 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-stone-100 rounded-full opacity-20 blur-3xl" />
    </motion.div>
  );
};

export default Contact;
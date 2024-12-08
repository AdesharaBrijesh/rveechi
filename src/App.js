import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Mail, ArrowRight } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-white">RVEECHI</div>
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Collections', 'Contact'].map(section => (
              <button 
                key={section}
                onClick={() => setActiveSection(section.toLowerCase())}
                className="text-white hover:text-pink-300 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-center bg-gradient-to-br from-pink-100 to-purple-100">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="px-4"
        >
          <h1 className="text-6xl font-bold mb-4 text-black">RVEECHI</h1>
          <p className="text-2xl mb-6">Wave of Fashion</p>
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors">
            Explore Collection
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Rveechi</h2>
            <p className="text-lg mb-4">
              Founded by Riddhi Pattni, Rveechi is more than a fashion brand – 
              it's a creative expression of contemporary style and individual essence.
            </p>
            <p className="text-lg">
              With a passion for innovative design and quality craftsmanship, 
              we believe in creating fashion that tells a story.
            </p>
          </div>
          <img 
            src="/api/placeholder/500/600" 
            alt="Riddhi Pattni" 
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg"
              />
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleFormChange}
                placeholder="Your Message"
                required
                className="w-full p-3 border rounded-lg h-32"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-pink-600 text-white py-3 rounded-lg flex items-center justify-center hover:bg-pink-700"
              >
                Send Message <ArrowRight className="ml-2" />
              </button>
            </form>
            <div className="space-y-6">
              {[
                { Icon: Instagram, handle: "@rveechi_official", color: "text-pink-600" },
                { Icon: Twitter, handle: "@rveechi_fashion", color: "text-blue-400" },
                { Icon: Facebook, handle: "Rveechi Fashion", color: "text-blue-700" },
                { Icon: Mail, handle: "hello@rveechi.com", color: "text-red-500" }
              ].map(({ Icon, handle, color }) => (
                <div key={handle} className="flex items-center space-x-4">
                  <Icon className={`${color} w-10 h-10`} />
                  <span>{handle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>© 2024 Rveechi. All Rights Reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-pink-300">Privacy Policy</a>
            <a href="#" className="hover:text-pink-300">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
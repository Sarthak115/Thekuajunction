import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const addRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91-9876543210', '+91-8765432109'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['support@thekuajunction.com', 'orders@thekuajunction.com'],
      description: 'Send us your queries anytime'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Heritage Street', 'Patna, Bihar 800001'],
      description: 'Visit our production facility'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM'],
      description: 'We are here to help you'
    }
  ];

  const faqs = [
    {
      question: 'How long do thekuas stay fresh?',
      answer: 'Our thekuas stay fresh for up to 15 days when stored in an airtight container at room temperature.'
    },
    {
      question: 'Do you deliver nationwide?',
      answer: 'Yes, we deliver across India. Delivery time varies from 3-7 business days depending on your location.'
    },
    {
      question: 'Are your products preservative-free?',
      answer: 'Absolutely! All our thekuas are made with natural ingredients without any artificial preservatives.'
    },
    {
      question: 'Can I customize my order?',
      answer: 'Yes, we accept custom orders for bulk purchases and special occasions. Contact us for more details.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-card px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-accent">Get in Touch</h1>
          <p className="text-xl text-text">
            We'd love to hear from you! Whether you have questions about our products, 
            need help with an order, or just want to share your feedback, we're here to help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
                <MessageCircle className="w-8 h-8" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-text font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-text font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-text font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-text font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Related</option>
                    <option value="complaint">Complaint</option>
                    <option value="feedback">Feedback</option>
                    <option value="bulk">Bulk Order</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-text font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-bg text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-hover text-white py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2"
                  onClick={addRippleEffect}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-3xl font-bold mb-6 text-accent">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-accent mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-text mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-text">{detail}</p>
                        ))}
                        <p className="text-sm text-text opacity-75 mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-4 text-accent">Find Us</h3>
                <div className="bg-bg rounded-lg h-64 flex items-center justify-center border border-border">
                  <div className="text-center text-text">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-accent" />
                    <p className="font-semibold">123 Heritage Street</p>
                    <p>Patna, Bihar 800001</p>
                    <p className="text-sm mt-2 opacity-75">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-bg rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-3 text-accent">{faq.question}</h3>
                <p className="text-text leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-accent">Need Immediate Help?</h2>
          <p className="text-xl text-text mb-8">
            For urgent queries or immediate assistance, feel free to call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-accent hover:bg-accent-hover text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2"
              onClick={addRippleEffect}
            >
              <Phone className="w-5 h-5" />
              Call Now: +91-9876543210
            </button>
            <button
              className="bg-green-600 hover:bg-green-700 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-2"
              onClick={addRippleEffect}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
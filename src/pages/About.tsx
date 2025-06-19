import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Made with Love',
      description: 'Every thekua is handcrafted with traditional methods passed down through generations.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'We use only the finest ingredients sourced directly from local farmers.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Family Tradition',
      description: 'Our recipes have been perfected over decades by skilled artisans from Bihar and Jharkhand.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fresh Daily',
      description: 'All our products are made fresh daily to ensure maximum taste and quality.'
    }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="bg-card px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-accent">About Thekua Junction</h1>
          <p className="text-xl text-text leading-relaxed">
            We are passionate about preserving the authentic taste of traditional Bihari and Jharkhandi sweets. 
            Our journey began with a simple mission: to bring the nostalgic flavors of home-made thekuas to 
            every doorstep across India.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-accent">Our Story</h2>
              <div className="space-y-4 text-text leading-relaxed">
                <p>
                  Founded in 2020, Thekua Junction started as a small family business with a big dream. 
                  Our founder, inspired by childhood memories of festival celebrations and the aroma of 
                  freshly made thekuas, decided to share this authentic taste with the world.
                </p>
                <p>
                  What began in a small kitchen has now grown into a trusted brand, serving thousands 
                  of customers who crave the authentic taste of traditional sweets. We maintain the 
                  same dedication to quality and authenticity that started our journey.
                </p>
                <p>
                  Every piece of thekua we make carries the essence of our heritage, the warmth of our 
                  traditions, and the love of our artisans who have mastered this craft over generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Traditional thekua making"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-card px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-accent">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-bg rounded-xl p-6 text-center border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-accent mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-text">{feature.title}</h3>
                <p className="text-text leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-3xl font-bold mb-6 text-accent">Our Mission</h3>
              <p className="text-text leading-relaxed">
                To preserve and promote the rich culinary heritage of Bihar and Jharkhand by delivering 
                authentic, high-quality traditional sweets to customers worldwide. We strive to maintain 
                the original taste and nutritional value while ensuring modern hygiene standards and 
                convenient delivery.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-3xl font-bold mb-6 text-accent">Our Vision</h3>
              <p className="text-text leading-relaxed">
                To become the most trusted brand for traditional Indian sweets globally, connecting 
                people with their roots through authentic flavors. We envision a world where traditional 
                recipes are preserved, celebrated, and enjoyed by future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-card px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-accent">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                role: 'Founder & Master Chef',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: '25+ years of experience in traditional sweet making'
              },
              {
                name: 'Priya Sharma',
                role: 'Quality Manager',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Ensures every product meets our high standards'
              },
              {
                name: 'Amit Singh',
                role: 'Operations Head',
                image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
                description: 'Manages nationwide delivery and customer satisfaction'
              }
            ].map((member, index) => (
              <div key={index} className="bg-bg rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-accent"
                />
                <h3 className="text-xl font-bold mb-2 text-text">{member.name}</h3>
                <p className="text-accent font-semibold mb-3">{member.role}</p>
                <p className="text-text">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
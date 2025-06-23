import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'Chief Technology Officer',
      company: 'TechFlow Manufacturing',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      quote: 'Ragentech\'s AI-powered IoT platform transformed our manufacturing operations completely. We achieved a 40% reduction in maintenance costs and virtually eliminated unexpected equipment failures. The predictive analytics are incredibly accurate.',
      metrics: {
        improvement: '40% cost reduction',
        timeframe: '6 months',
        devices: '500+ devices'
      }
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'Operations Director',
      company: 'GreenSpace Buildings',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      quote: 'The smart building management capabilities exceeded our expectations. Energy efficiency improved by 35% across all our properties, and tenant satisfaction increased significantly due to better climate control and lighting.',
      metrics: {
        improvement: '35% energy savings',
        timeframe: '3 months',
        devices: '1,200+ devices'
      }
    },
    {
      id: 3,
      name: 'Dr. Emily Watson',
      position: 'Research & Development Lead',
      company: 'AgroTech Solutions',
      avatar: 'https://images.pexels.com/photos/3727511/pexels-photo-3727511.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      quote: 'Our precision agriculture initiatives became incredibly effective with Ragentech\'s IoT platform. Crop yields increased by 25% while reducing water usage by 30%. The AI-driven insights are game-changing for sustainable farming.',
      metrics: {
        improvement: '25% yield increase',
        timeframe: '2 seasons',
        devices: '800+ sensors'
      }
    },
    {
      id: 4,
      name: 'James Thompson',
      position: 'Plant Manager',
      company: 'PowerGrid Industries',
      avatar: 'https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      rating: 5,
      quote: 'The real-time monitoring and predictive maintenance features have been revolutionary for our power generation facility. System uptime improved to 99.8%, and we prevented three major equipment failures that could have cost millions.',
      metrics: {
        improvement: '99.8% uptime',
        timeframe: '12 months',
        devices: '2,000+ devices'
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Customer Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how leading enterprises are transforming their operations 
            with our AI-powered IoT management platform.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-gray-800"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Avatar and Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-green-400/50"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-400 mb-1">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-green-400 font-medium mb-4">
                    {testimonials[currentTestimonial].company}
                  </p>
                  <div className="flex justify-center lg:justify-start space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        {testimonials[currentTestimonial].metrics.improvement}
                      </div>
                      <div className="text-gray-400 text-sm">Improvement</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-white">
                        {testimonials[currentTestimonial].metrics.timeframe}
                      </div>
                      <div className="text-gray-400 text-sm">Implementation</div>
                    </div>
                    <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                      <div className="text-lg font-bold text-white">
                        {testimonials[currentTestimonial].metrics.devices}
                      </div>
                      <div className="text-gray-400 text-sm">Connected</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-green-400 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-green-400 transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-green-400 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                index === currentTestimonial
                  ? 'border-green-400/50'
                  : 'border-gray-800 hover:border-gray-700'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-400 text-sm line-clamp-3">
                "{testimonial.quote.substring(0, 100)}..."
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl border border-green-400/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { metric: '500+', label: 'Enterprise Clients' },
              { metric: '10M+', label: 'Devices Connected' },
              { metric: '99.9%', label: 'Platform Uptime' },
              { metric: '$50M+', label: 'Cost Savings Generated' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.metric}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
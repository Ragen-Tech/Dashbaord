import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building, Factory } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      icon: Zap,
      price: 299,
      period: 'month',
      description: 'Perfect for small to medium businesses getting started with IoT',
      popular: false,
      features: [
        'Up to 100 IoT devices',
        'Real-time monitoring dashboard',
        'Basic AI analytics',
        'Email alerts',
        '24/7 support',
        'Mobile app access',
        'Data retention (30 days)',
        'API access'
      ],
      color: 'from-blue-400 to-cyan-500',
      gradient: 'from-blue-900/20 to-cyan-900/20',
      border: 'border-blue-500/30'
    },
    {
      name: 'Pro',
      icon: Building,
      price: 899,
      period: 'month',
      description: 'Advanced features for growing enterprises with complex requirements',
      popular: true,
      features: [
        'Up to 1,000 IoT devices',
        'Advanced AI predictive analytics',
        'Custom dashboard builder',
        'Real-time alerts & notifications',
        'Priority support',
        'White-label mobile app',
        'Data retention (1 year)',
        'Advanced API & webhooks',
        'Custom integrations',
        'Dedicated account manager'
      ],
      color: 'from-green-400 to-emerald-500',
      gradient: 'from-green-900/20 to-emerald-900/20',
      border: 'border-green-500/30'
    },
    {
      name: 'Enterprise',
      icon: Factory,
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large-scale industrial operations',
      popular: false,
      features: [
        'Unlimited IoT devices',
        'Custom AI model training',
        'Multi-tenant architecture',
        'Advanced security & compliance',
        'Dedicated infrastructure',
        'Custom mobile applications',
        'Unlimited data retention',
        'Full API access & SDKs',
        'Custom integrations',
        'Dedicated success team',
        'On-premise deployment',
        'SLA guarantees'
      ],
      color: 'from-purple-400 to-pink-500',
      gradient: 'from-purple-900/20 to-pink-900/20',
      border: 'border-purple-500/30'
    }
  ];

  const features = [
    'AI-Powered Predictive Analytics',
    'Real-time Telemetry Monitoring',
    'Custom Dashboard Creation',
    'Mobile App Access',
    'API Integration',
    'Advanced Security',
    'Priority Support',
    'Custom Reporting'
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Flexible Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. Scale from startups 
            to enterprise with our flexible IoT management solutions.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border ${plan.border} hover:border-green-400/50 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-green-400/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black text-sm font-semibold rounded-full">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {typeof plan.price === 'number' ? (
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      {plan.price}
                    </div>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`w-full inline-block text-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-black hover:shadow-lg hover:shadow-green-400/25'
                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 hover:border-green-400'
                }`}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            All Plans Include
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg"
              >
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl border border-green-400/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Try our platform risk-free for 30 days. If you're not completely satisfied 
            with the results, we'll refund your entire investment, no questions asked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-gray-600 text-white rounded-lg hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
              Schedule Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;

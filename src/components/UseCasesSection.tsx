import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Factory, Sprout, Zap, ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';

const UseCasesSection = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCases = [
    {
      id: 0,
      icon: Building,
      title: 'Smart Buildings',
      subtitle: 'Intelligent facility management',
      description: 'Transform your commercial buildings into intelligent, energy-efficient spaces with AI-powered HVAC control, occupancy monitoring, and predictive maintenance.',
      image: '/1.png',
      benefits: ['40% energy savings', '60% maintenance cost reduction', '99.9% system uptime'],
      features: [
        'Automated climate control',
        'Occupancy-based lighting',
        'Air quality monitoring',
        'Security integration'
      ],
      roi: '300% ROI in 18 months',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 1,
      icon: Factory,
      title: 'Smart Factories',
      subtitle: 'Industry 4.0 manufacturing',
      description: 'Revolutionize manufacturing operations with real-time production monitoring, quality control automation, and predictive equipment maintenance.',
      image: '/2.png',
      benefits: ['25% production increase', '80% defect reduction', '90% downtime prevention'],
      features: [
        'Production line monitoring',
        'Quality control automation',
        'Equipment health tracking',
        'Supply chain optimization'
      ],
      roi: '450% ROI in 12 months',
      color: 'from-orange-400 to-red-500'
    },
    {
      id: 2,
      icon: Sprout,
      title: 'Agri-IoT',
      subtitle: 'Precision agriculture solutions',
      description: 'Optimize crop yields and resource usage with smart irrigation, soil monitoring, weather prediction, and automated farming equipment control.',
      image: '/3.png',
      benefits: ['35% water savings', '20% yield increase', '50% fertilizer reduction'],
      features: [
        'Soil moisture monitoring',
        'Weather pattern analysis',
        'Automated irrigation',
        'Crop health assessment'
      ],
      roi: '250% ROI in 2 seasons',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 3,
      icon: Zap,
      title: 'Energy Management',
      subtitle: 'Smart grid optimization',
      description: 'Optimize energy distribution and consumption with intelligent grid management, renewable energy integration, and demand response automation.',
      image: './4.png',
      benefits: ['30% grid efficiency', '50% renewable integration', '70% peak demand reduction'],
      features: [
        'Load forecasting',
        'Grid balancing',
        'Renewable integration',
        'Demand response'
      ],
      roi: '400% ROI in 24 months',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Use Case Explorer
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how our AI-powered IoT platform transforms industries across 
            the globe with intelligent automation and predictive insights.
          </p>
        </motion.div>

        {/* Use Case Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {useCases.map((useCase) => (
            <button
              key={useCase.id}
              onClick={() => setActiveUseCase(useCase.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeUseCase === useCase.id
                  ? `bg-gradient-to-r ${useCase.color} text-black shadow-lg`
                  : 'bg-gray-900/50 text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-800'
              }`}
            >
              <useCase.icon className="h-5 w-5" />
              <span>{useCase.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUseCase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${useCases[activeUseCase].color}`}>
                    {React.createElement(useCases[activeUseCase].icon, { className: "h-6 w-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{useCases[activeUseCase].title}</h3>
                    <p className="text-gray-400">{useCases[activeUseCase].subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {useCases[activeUseCase].description}
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span>Key Benefits</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {useCases[activeUseCase].benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 text-center"
                    >
                      <div className={`text-xl font-bold bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text text-transparent mb-1`}>
                        {benefit.split(' ')[0]}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {benefit.substring(benefit.indexOf(' ') + 1)}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span>Core Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {useCases[activeUseCase].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-gray-900/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div> 
                  ))}
                </div>
              </div>

              {/* ROI */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-between p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-xl border border-green-400/20"
              >
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-green-400" />
                  <div>
                    <div className="text-white font-semibold">Return on Investment</div>
                    <div className="text-gray-400 text-sm">Typical customer results</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text text-transparent`}>
                    {useCases[activeUseCase].roi.split(' ')[0]}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {useCases[activeUseCase].roi.substring(useCases[activeUseCase].roi.indexOf(' ') + 1)}
                  </div>
                </div>
              </motion.div>

              <button className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105">
                <a href='/login' target='_blank' rel="noopener noreferrer">Learn More</a>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                <img
                  src={useCases[activeUseCase].image}
                  alt={useCases[activeUseCase].title}
                  className="w-full h-[400px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              </div>
              
              {/* Floating stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                  <div className="grid grid-cols-3 gap-4">
                    {useCases[activeUseCase].benefits.slice(0, 3).map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${useCases[activeUseCase].color} bg-clip-text text-transparent`}>
                          {benefit.split(' ')[0]}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {benefit.substring(benefit.indexOf(' ') + 1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCasesSection;
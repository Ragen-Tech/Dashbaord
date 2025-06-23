import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Smartphone, Database, Shield, Zap } from 'lucide-react';

const ArchitectureSection = () => {
  const architectureFlow = [
    {
      id: 1,
      icon: Smartphone,
      title: 'IoT Devices',
      description: 'Smart sensors and controllers',
      position: { x: 0, y: 0 },
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Secure Gateway',
      description: 'Encrypted data transmission',
      position: { x: 1, y: 0 },
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      icon: Cloud,
      title: 'Cloud Platform',
      description: 'Scalable infrastructure',
      position: { x: 2, y: 0 },
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 4,
      icon: Brain,
      title: 'AI Engine',
      description: 'Machine learning algorithms',
      position: { x: 0, y: 1 },
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 5,
      icon: Database,
      title: 'Data Lake',
      description: 'Historical data storage',
      position: { x: 1, y: 1 },
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 6,
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Live insights and alerts',
      position: { x: 2, y: 1 },
      color: 'from-red-400 to-pink-500'
    }
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 3, to: 5 },
    { from: 3, to: 6 },
    { from: 4, to: 5 },
    { from: 5, to: 6 }
  ];

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
              Platform Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the sophisticated architecture that powers our AI-driven IoT platform, 
            designed for scalability, security, and real-time performance.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {architectureFlow.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${component.color} flex items-center justify-center`}>
                    <component.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{component.title}</h3>
                  <p className="text-gray-400 text-sm">{component.description}</p>
                </div>

                {/* Connection lines visible only on desktop */}
                <div className="hidden md:block">
                  {connections
                    .filter(conn => conn.from === component.id)
                    .map((conn, connIndex) => {
                      const target = architectureFlow.find(c => c.id === conn.to);
                      if (!target) return null;

                      const isHorizontal = component.position.y === target.position.y;
                      const isVertical = component.position.x === target.position.x;

                      if (isHorizontal && target.position.x > component.position.x) {
                        return (
                          <motion.div
                            key={connIndex}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            className="absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 origin-left"
                          >
                            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          </motion.div>
                        );
                      }

                      if (isVertical && target.position.y > component.position.y) {
                        return (
                          <motion.div
                            key={connIndex}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-400 to-blue-500 origin-top"
                          >
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          </motion.div>
                        );
                      }

                      return null;
                    })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Data Flow Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Data Collection',
                description: 'IoT sensors collect real-time telemetry data from industrial equipment and environmental conditions.',
                icon: Smartphone,
                color: 'from-blue-400 to-cyan-500'
              },
              {
                step: '02',
                title: 'Secure Transmission',
                description: 'Data is encrypted and transmitted through secure gateways to our cloud infrastructure.',
                icon: Shield,
                color: 'from-purple-400 to-pink-500'
              },
              {
                step: '03',
                title: 'AI Processing',
                description: 'Advanced machine learning algorithms analyze data patterns and generate predictive insights.',
                icon: Brain,
                color: 'from-yellow-400 to-orange-500'
              },
              {
                step: '04',
                title: 'Actionable Insights',
                description: 'Real-time alerts and recommendations are delivered to your dashboard and mobile devices.',
                icon: Zap,
                color: 'from-red-400 to-pink-500'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-400 to-blue-500">
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Scalability',
              specs: ['10M+ devices supported', 'Auto-scaling infrastructure', '99.99% uptime SLA'],
              icon: Cloud,
              color: 'from-green-400 to-emerald-500'
            },
            {
              title: 'Security',
              specs: ['End-to-end encryption', 'ISO 27001 compliant', 'Zero-trust architecture'],
              icon: Shield,
              color: 'from-purple-400 to-pink-500'
            },
            {
              title: 'Performance',
              specs: ['< 100ms latency', 'Real-time processing', 'Edge computing ready'],
              icon: Zap,
              color: 'from-yellow-400 to-orange-500'
            }
          ].map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 mb-4 rounded-lg bg-gradient-to-r ${spec.color} flex items-center justify-center`}>
                <spec.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">{spec.title}</h3>
              <ul className="space-y-2">
                {spec.specs.map((item, specIndex) => (
                  <li key={specIndex} className="text-gray-400 text-sm flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ArchitectureSection;

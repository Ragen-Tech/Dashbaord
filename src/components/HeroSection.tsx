import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Brain, Activity, Shield } from "lucide-react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "AI-Powered IoT Management",
    "Predictive Analytics Engine",
    "Smart Device Control",
    "Real-time Monitoring",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(147,223,61,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(27,116,200,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <motion.span
              key={currentText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {texts[currentText]}
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Transform your industrial operations with AI-driven insights,
            real-time telemetry monitoring, and predictive maintenance
            solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#contact"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105 text-center inline-block"
          >
            Start Free Trial
          </a>
          <a
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-gray-600 text-white rounded-lg hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 text-center inline-block"
          >
            Watch Demo
          </a>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Brain,
              title: "AI-Powered Analytics",
              desc: "Advanced machine learning algorithms",
            },
            {
              icon: Activity,
              title: "Real-time Monitoring",
              desc: "24/7 telemetry data streaming",
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "Military-grade data protection",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
            >
              <feature.icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

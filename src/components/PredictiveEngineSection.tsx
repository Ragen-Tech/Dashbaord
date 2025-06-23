import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, AlertTriangle, TrendingUp, Clock } from 'lucide-react';

const PredictiveEngineSection = () => {
  const [predictions, setPredictions] = useState([
    { id: 1, confidence: 87, timeframe: '3 days', type: 'Bearing Failure', severity: 'High' },
    { id: 2, confidence: 92, timeframe: '1 week', type: 'Temperature Spike', severity: 'Medium' },
    { id: 3, confidence: 78, timeframe: '2 weeks', type: 'Pressure Drop', severity: 'Low' },
  ]);

  const [activeTab, setActiveTab] = useState('predictions');

  useEffect(() => {
    const interval = setInterval(() => {
      setPredictions(prev => prev.map(pred => ({
        ...pred,
        confidence: Math.max(70, Math.min(95, pred.confidence + (Math.random() - 0.5) * 5))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const maintenanceSuggestions = [
    {
      task: 'Replace bearing assembly in Motor Unit #A-102',
      priority: 'Critical',
      estimated_time: '4 hours',
      cost_savings: '$12,500'
    },
    {
      task: 'Calibrate temperature sensors in Zone B',
      priority: 'Medium',
      estimated_time: '2 hours',
      cost_savings: '$3,200'
    },
    {
      task: 'Inspect pressure valves in System C',
      priority: 'Low',
      estimated_time: '1 hour',
      cost_savings: '$1,800'
    }
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
              AI Predictive Engine
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced machine learning algorithms analyze patterns and predict equipment failures 
            before they happen, saving costs and preventing downtime.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-1 rounded-lg border border-gray-800">
            {[
              { id: 'predictions', label: 'Failure Predictions', icon: Brain },
              { id: 'maintenance', label: 'Maintenance Queue', icon: AlertTriangle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-green-400 to-blue-500 text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Predictions Tab */}
        {activeTab === 'predictions' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-400" />
                <span>Failure Timeline</span>
              </h3>
              
              {predictions.map((prediction, index) => (
                <motion.div
                  key={prediction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        prediction.severity === 'High' ? 'bg-red-500' :
                        prediction.severity === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <h4 className="text-white font-medium">{prediction.type}</h4>
                    </div>
                    <span className="text-gray-400 text-sm flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{prediction.timeframe}</span>
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Confidence Level</span>
                      <motion.span
                        key={prediction.confidence}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-white font-semibold"
                      >
                        {prediction.confidence.toFixed(0)}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${prediction.confidence}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      prediction.severity === 'High' ? 'bg-red-900 text-red-300' :
                      prediction.severity === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-green-900 text-green-300'
                    }`}>
                      {prediction.severity} Priority
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                <Brain className="h-5 w-5 text-blue-400" />
                <span>AI Model Performance</span>
              </h3>
              
              <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    >
                      94.7%
                    </motion.div>
                    <div className="text-gray-400 text-sm">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    >
                      2,847
                    </motion.div>
                    <div className="text-gray-400 text-sm">Predictions Made</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    >
                      $1.2M
                    </motion.div>
                    <div className="text-gray-400 text-sm">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2"
                    >
                      99.2%
                    </motion.div>
                    <div className="text-gray-400 text-sm">System Uptime</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-medium mb-4">Recent AI Insights</h4>
                <div className="space-y-3">
                  {[
                    'Detected unusual vibration pattern in Motor #A-102',
                    'Temperature correlation analysis completed for Zone B',
                    'Predictive model updated with 2,847 new data points'
                  ].map((insight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 text-sm"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                      <span className="text-gray-300">{insight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Maintenance Tab */}
        {activeTab === 'maintenance' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-400" />
              <span>AI-Generated Maintenance Suggestions</span>
            </h3>
            
            {maintenanceSuggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-2">{suggestion.task}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>Time: {suggestion.estimated_time}</span>
                      <span>Savings: {suggestion.cost_savings}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    suggestion.priority === 'Critical' ? 'bg-red-900 text-red-300' :
                    suggestion.priority === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-green-900 text-green-300'
                  }`}>
                    {suggestion.priority}
                  </div>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
                  Schedule Maintenance
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PredictiveEngineSection;
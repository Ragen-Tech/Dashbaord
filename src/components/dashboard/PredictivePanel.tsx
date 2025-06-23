import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, AlertTriangle, Clock, Target, Zap } from 'lucide-react';

const PredictivePanel = () => {
  const [predictions, setPredictions] = useState([
    {
      id: 1,
      equipment: 'Motor Unit A-102',
      prediction: 'Bearing Failure',
      confidence: 87,
      timeframe: '3 days',
      severity: 'High',
      recommendation: 'Schedule immediate bearing replacement',
      costImpact: '$12,500'
    },
    {
      id: 2,
      equipment: 'Temperature Controller B-205',
      prediction: 'Calibration Drift',
      confidence: 92,
      timeframe: '1 week',
      severity: 'Medium',
      recommendation: 'Perform sensor calibration',
      costImpact: '$3,200'
    },
    {
      id: 3,
      equipment: 'Pressure Valve C-301',
      prediction: 'Seal Degradation',
      confidence: 78,
      timeframe: '2 weeks',
      severity: 'Low',
      recommendation: 'Monitor closely, plan maintenance',
      costImpact: '$1,800'
    }
  ]);

  const [modelMetrics, setModelMetrics] = useState({
    accuracy: 94.7,
    predictionsMade: 2847,
    costSavings: 1200000,
    uptime: 99.2,
    falsePositives: 3.2,
    modelVersion: '2.1.4'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPredictions(prev => prev.map(pred => ({
        ...pred,
        confidence: Math.max(70, Math.min(95, pred.confidence + (Math.random() - 0.5) * 3))
      })));

      setModelMetrics(prev => ({
        ...prev,
        predictionsMade: prev.predictionsMade + Math.floor(Math.random() * 5 + 1),
        accuracy: Math.max(90, Math.min(98, prev.accuracy + (Math.random() - 0.5) * 0.5))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High': return 'bg-red-900 text-red-300 border-red-500/30';
      case 'Medium': return 'bg-yellow-900 text-yellow-300 border-yellow-500/30';
      case 'Low': return 'bg-green-900 text-green-300 border-green-500/30';
      default: return 'bg-gray-900 text-gray-300 border-gray-500/30';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'from-green-400 to-emerald-500';
    if (confidence >= 80) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Predictive Insights</h1>
          <p className="text-gray-400 mt-1">AI-powered failure predictions and maintenance recommendations</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Brain className="h-4 w-4 text-green-400" />
          <span>AI Model v{modelMetrics.modelVersion}</span>
        </div>
      </div>

      {/* Model Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Prediction Accuracy',
            value: `${modelMetrics.accuracy.toFixed(1)}%`,
            icon: Target,
            color: 'from-green-400 to-emerald-500',
            trend: '+0.3%'
          },
          {
            title: 'Predictions Made',
            value: modelMetrics.predictionsMade.toLocaleString(),
            icon: Brain,
            color: 'from-blue-400 to-cyan-500',
            trend: '+127'
          },
          {
            title: 'Cost Savings',
            value: `$${(modelMetrics.costSavings / 1000000).toFixed(1)}M`,
            icon: TrendingUp,
            color: 'from-purple-400 to-pink-500',
            trend: '+$45K'
          },
          {
            title: 'System Uptime',
            value: `${modelMetrics.uptime.toFixed(1)}%`,
            icon: Zap,
            color: 'from-yellow-400 to-orange-500',
            trend: '+0.1%'
          }
        ].map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-xs text-green-400 font-medium">{metric.trend}</div>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-gray-400 text-sm font-medium">{metric.title}</h3>
              <motion.div
                key={metric.value}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-white"
              >
                {metric.value}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Active Predictions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
      >
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
          <span>Active Failure Predictions</span>
        </h2>

        <div className="space-y-4">
          {predictions.map((prediction, index) => (
            <motion.div
              key={prediction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Prediction Details */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {prediction.equipment}
                      </h3>
                      <p className="text-gray-400">{prediction.prediction}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(prediction.severity)}`}>
                      {prediction.severity} Priority
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-400">Time to Failure</div>
                        <div className="text-white font-medium">{prediction.timeframe}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-4 w-4 text-gray-400" />
                      <div>
                        <div className="text-sm text-gray-400">Cost Impact</div>
                        <div className="text-white font-medium">{prediction.costImpact}</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                    <h4 className="text-blue-300 font-medium mb-2">AI Recommendation</h4>
                    <p className="text-gray-300 text-sm">{prediction.recommendation}</p>
                  </div>
                </div>

                {/* Confidence Meter */}
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Confidence Level</div>
                    <motion.div
                      key={prediction.confidence}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-3xl font-bold text-white"
                    >
                      {prediction.confidence.toFixed(0)}%
                    </motion.div>
                  </div>
                  
                  <div className="w-24 h-24 relative">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-700"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeLinecap="round"
                        className={`bg-gradient-to-r ${getConfidenceColor(prediction.confidence)}`}
                        style={{
                          strokeDasharray: `${2 * Math.PI * 40}`,
                        }}
                        initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                        animate={{ 
                          strokeDashoffset: 2 * Math.PI * 40 * (1 - prediction.confidence / 100)
                        }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </svg>
                  </div>

                  <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105">
                    Schedule Maintenance
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* AI Model Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <Brain className="h-5 w-5 text-purple-400" />
            <span>Model Performance</span>
          </h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">False Positive Rate</span>
              <span className="text-white font-semibold">{modelMetrics.falsePositives}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${100 - modelMetrics.falsePositives}%` }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-white font-medium mb-3">Recent Model Updates</h4>
              <div className="space-y-2">
                {[
                  'Enhanced bearing failure detection algorithm',
                  'Improved temperature correlation analysis',
                  'Updated vibration pattern recognition'
                ].map((update, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-gray-300">{update}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
        >
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            <span>Prediction Trends</span>
          </h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-2">
                73%
              </div>
              <div className="text-gray-400 text-sm">Predictions Prevented Failures</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-lg font-bold text-white">156</div>
                <div className="text-gray-400 text-xs">This Month</div>
              </div>
              <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                <div className="text-lg font-bold text-white">1,847</div>
                <div className="text-gray-400 text-xs">Total Predictions</div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-800">
              <h4 className="text-white font-medium mb-3">Top Failure Types</h4>
              <div className="space-y-2">
                {[
                  { type: 'Bearing Failures', percentage: 34 },
                  { type: 'Sensor Drift', percentage: 28 },
                  { type: 'Seal Degradation', percentage: 23 }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-300">{item.type}</span>
                    <span className="text-white font-medium">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PredictivePanel;
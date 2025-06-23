import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, Zap, Clock } from 'lucide-react';

const IoTMonitoringSection = () => {
  const [telemetryData, setTelemetryData] = useState({
    voltage: 220,
    temperature: 65,
    pressure: 1013,
    uptime: 99.7
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryData(prev => ({
        voltage: prev.voltage + (Math.random() - 0.5) * 10,
        temperature: prev.temperature + (Math.random() - 0.5) * 5,
        pressure: prev.pressure + (Math.random() - 0.5) * 20,
        uptime: Math.max(95, Math.min(100, prev.uptime + (Math.random() - 0.5) * 0.5))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { 
      icon: Zap, 
      label: 'Voltage', 
      value: telemetryData.voltage.toFixed(1), 
      unit: 'V',
      color: 'from-yellow-400 to-orange-500',
      status: telemetryData.voltage > 200 ? 'Normal' : 'Low'
    },
    { 
      icon: Thermometer, 
      label: 'Temperature', 
      value: telemetryData.temperature.toFixed(1), 
      unit: '°C',
      color: 'from-red-400 to-pink-500',
      status: telemetryData.temperature < 75 ? 'Normal' : 'High'
    },
    { 
      icon: Activity, 
      label: 'Pressure', 
      value: telemetryData.pressure.toFixed(0), 
      unit: 'hPa',
      color: 'from-blue-400 to-cyan-500',
      status: 'Normal'
    },
    { 
      icon: Clock, 
      label: 'Uptime', 
      value: telemetryData.uptime.toFixed(1), 
      unit: '%',
      color: 'from-green-400 to-emerald-500',
      status: telemetryData.uptime > 99 ? 'Excellent' : 'Good'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              AI-Driven IoT Monitoring
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time telemetry data processing with intelligent anomaly detection 
            and predictive maintenance alerts powered by advanced machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
            >
              <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color} w-fit mb-4`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-gray-400 text-sm font-medium">{metric.label}</h3>
                <div className="flex items-baseline space-x-2">
                  <motion.span
                    key={metric.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-2xl font-bold text-white"
                  >
                    {metric.value}
                  </motion.span>
                  <span className="text-gray-400">{metric.unit}</span>
                </div>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  metric.status === 'Excellent' ? 'bg-green-900 text-green-300' :
                  metric.status === 'Normal' ? 'bg-blue-900 text-blue-300' :
                  metric.status === 'Good' ? 'bg-yellow-900 text-yellow-300' :
                  'bg-red-900 text-red-300'
                }`}>
                  {metric.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Data Stream Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-400" />
            <span>Live Telemetry Stream</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-gray-300 font-medium">System Status</h4>
              <div className="space-y-3">
                {[
                  { device: 'Industrial Sensor #001', status: 'Online', health: 98 },
                  { device: 'Temperature Controller #002', status: 'Online', health: 95 },
                  { device: 'Pressure Monitor #003', status: 'Warning', health: 87 },
                  { device: 'Voltage Regulator #004', status: 'Online', health: 99 }
                ].map((device, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg"
                  >
                    <div>
                      <div className="text-white text-sm font-medium">{device.device}</div>
                      <div className="text-gray-400 text-xs">{device.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-medium">{device.health}%</div>
                      <div className="w-12 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${device.health}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-300 font-medium">AI Insights</h4>
              <div className="space-y-3">
                <div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <div className="text-blue-300 text-sm font-medium">Predictive Analysis</div>
                      <div className="text-gray-300 text-sm">Temperature trending upward. Maintenance recommended in 72 hours.</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-900/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <div className="text-green-300 text-sm font-medium">Optimization Detected</div>
                      <div className="text-gray-300 text-sm">Energy efficiency improved by 15% this week.</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 animate-pulse"></div>
                    <div>
                      <div className="text-yellow-300 text-sm font-medium">Anomaly Alert</div>
                      <div className="text-gray-300 text-sm">Unusual pressure readings detected on Sensor #003.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IoTMonitoringSection;
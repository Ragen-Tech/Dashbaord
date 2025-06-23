import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Thermometer, Zap, Gauge, Droplets, Wind, Filter, Download } from 'lucide-react';

const TelemetryPanel = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('1h');
  const [selectedMetric, setSelectedMetric] = useState('all');
  const [telemetryData, setTelemetryData] = useState({
    temperature: Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString(),
      value: 65 + Math.sin(i * 0.3) * 5 + Math.random() * 2
    })),
    pressure: Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString(),
      value: 1013 + Math.cos(i * 0.2) * 10 + Math.random() * 5
    })),
    voltage: Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString(),
      value: 220 + Math.sin(i * 0.4) * 8 + Math.random() * 3
    })),
    flow: Array.from({ length: 20 }, (_, i) => ({
      time: new Date(Date.now() - (19 - i) * 60000).toLocaleTimeString(),
      value: 45 + Math.cos(i * 0.5) * 6 + Math.random() * 4
    }))
  });

  const [currentValues, setCurrentValues] = useState({
    temperature: 68.5,
    pressure: 1015.2,
    voltage: 221.8,
    flow: 47.3,
    humidity: 45.2,
    windSpeed: 12.8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTelemetryData(prev => ({
        temperature: [...prev.temperature.slice(1), {
          time: now.toLocaleTimeString(),
          value: 65 + Math.sin(Date.now() * 0.001) * 5 + Math.random() * 2
        }],
        pressure: [...prev.pressure.slice(1), {
          time: now.toLocaleTimeString(),
          value: 1013 + Math.cos(Date.now() * 0.0008) * 10 + Math.random() * 5
        }],
        voltage: [...prev.voltage.slice(1), {
          time: now.toLocaleTimeString(),
          value: 220 + Math.sin(Date.now() * 0.0012) * 8 + Math.random() * 3
        }],
        flow: [...prev.flow.slice(1), {
          time: now.toLocaleTimeString(),
          value: 45 + Math.cos(Date.now() * 0.0015) * 6 + Math.random() * 4
        }]
      }));

      setCurrentValues(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        pressure: prev.pressure + (Math.random() - 0.5) * 3,
        voltage: prev.voltage + (Math.random() - 0.5) * 2,
        flow: prev.flow + (Math.random() - 0.5) * 3,
        humidity: prev.humidity + (Math.random() - 0.5) * 1,
        windSpeed: prev.windSpeed + (Math.random() - 0.5) * 2
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    {
      key: 'temperature',
      label: 'Temperature',
      value: currentValues.temperature.toFixed(1),
      unit: '°C',
      icon: Thermometer,
      color: 'from-red-400 to-pink-500',
      status: currentValues.temperature > 70 ? 'warning' : 'normal'
    },
    {
      key: 'pressure',
      label: 'Pressure',
      value: currentValues.pressure.toFixed(1),
      unit: 'hPa',
      icon: Gauge,
      color: 'from-blue-400 to-cyan-500',
      status: 'normal'
    },
    {
      key: 'voltage',
      label: 'Voltage',
      value: currentValues.voltage.toFixed(1),
      unit: 'V',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      status: currentValues.voltage < 215 ? 'warning' : 'normal'
    },
    {
      key: 'flow',
      label: 'Flow Rate',
      value: currentValues.flow.toFixed(1),
      unit: 'L/min',
      icon: Activity,
      color: 'from-green-400 to-emerald-500',
      status: 'normal'
    },
    {
      key: 'humidity',
      label: 'Humidity',
      value: currentValues.humidity.toFixed(1),
      unit: '%',
      icon: Droplets,
      color: 'from-cyan-400 to-blue-500',
      status: 'normal'
    },
    {
      key: 'windSpeed',
      label: 'Wind Speed',
      value: currentValues.windSpeed.toFixed(1),
      unit: 'm/s',
      icon: Wind,
      color: 'from-purple-400 to-pink-500',
      status: 'normal'
    }
  ];

  const timeRanges = [
    { value: '1h', label: '1 Hour' },
    { value: '6h', label: '6 Hours' },
    { value: '24h', label: '24 Hours' },
    { value: '7d', label: '7 Days' }
  ];

  const renderChart = (data: any[], color: string) => {
    const maxValue = Math.max(...data.map(d => d.value));
    const minValue = Math.min(...data.map(d => d.value));
    const range = maxValue - minValue;

    return (
      <div className="h-32 flex items-end space-x-1">
        {data.map((point, index) => {
          const height = range > 0 ? ((point.value - minValue) / range) * 100 : 50;
          return (
            <motion.div
              key={index}
              className={`flex-1 bg-gradient-to-t ${color} rounded-t opacity-80`}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white">Telemetry Data</h1>
          <p className="text-gray-400 mt-1">Real-time sensor data and historical trends</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={selectedTimeRange}
              onChange={(e) => setSelectedTimeRange(e.target.value)}
              className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-lg focus:border-green-400 focus:outline-none"
            >
              {timeRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300">
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Current Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${metric.color}`}>
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                metric.status === 'warning' ? 'bg-yellow-900 text-yellow-300' : 'bg-green-900 text-green-300'
              }`}>
                {metric.status === 'warning' ? 'Warning' : 'Normal'}
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-gray-400 text-sm font-medium">{metric.label}</h3>
              <div className="flex items-baseline space-x-2">
                <motion.span
                  key={metric.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-white"
                >
                  {metric.value}
                </motion.span>
                <span className="text-gray-400">{metric.unit}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {metrics.slice(0, 4).map((metric, index) => (
          <motion.div
            key={metric.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <metric.icon className="h-5 w-5 text-gray-400" />
                <span>{metric.label} Trend</span>
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live</span>
              </div>
            </div>
            
            {renderChart(telemetryData[metric.key as keyof typeof telemetryData], metric.color)}
            
            <div className="mt-4 flex justify-between text-xs text-gray-400">
              <span>{telemetryData[metric.key as keyof typeof telemetryData][0]?.time}</span>
              <span>{telemetryData[metric.key as keyof typeof telemetryData][19]?.time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Data Stream Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
      >
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
          <Activity className="h-5 w-5 text-green-400" />
          <span>Live Data Stream</span>
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Timestamp</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Sensor</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Unit</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {metrics.slice(0, 6).map((metric, index) => (
                <motion.tr
                  key={metric.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors"
                >
                  <td className="py-3 px-4 text-gray-300">
                    {new Date().toLocaleTimeString()}
                  </td>
                  <td className="py-3 px-4 text-white font-medium">
                    {metric.label} Sensor
                  </td>
                  <td className="py-3 px-4">
                    <motion.span
                      key={metric.value}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-white font-semibold"
                    >
                      {metric.value}
                    </motion.span>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{metric.unit}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      metric.status === 'warning' ? 'bg-yellow-900 text-yellow-300' : 'bg-green-900 text-green-300'
                    }`}>
                      {metric.status === 'warning' ? 'Warning' : 'Normal'}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default TelemetryPanel;
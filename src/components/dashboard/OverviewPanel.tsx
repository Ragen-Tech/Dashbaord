import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, AlertTriangle, CheckCircle, TrendingUp, Zap, Thermometer, Gauge } from 'lucide-react';

const OverviewPanel = () => {
  const [systemStats, setSystemStats] = useState({
    devicesOnline: 1247,
    totalDevices: 1285,
    activeAlerts: 3,
    systemUptime: 99.7,
    dataPoints: 2847291,
    energySaved: 34.2
  });

  const [realtimeData, setRealtimeData] = useState({
    temperature: 68.5,
    pressure: 1013.2,
    voltage: 220.4,
    flow: 45.8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStats(prev => ({
        ...prev,
        devicesOnline: prev.devicesOnline + Math.floor(Math.random() * 3 - 1),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 100 + 50)
      }));

      setRealtimeData(prev => ({
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        pressure: prev.pressure + (Math.random() - 0.5) * 5,
        voltage: prev.voltage + (Math.random() - 0.5) * 3,
        flow: prev.flow + (Math.random() - 0.5) * 4
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const quickStats = [
    {
      title: 'Devices Online',
      value: systemStats.devicesOnline,
      total: systemStats.totalDevices,
      icon: Activity,
      color: 'from-green-400 to-emerald-500',
      trend: '+2.3%'
    },
    {
      title: 'Active Alerts',
      value: systemStats.activeAlerts,
      icon: AlertTriangle,
      color: 'from-yellow-400 to-orange-500',
      trend: '-15%'
    },
    {
      title: 'System Uptime',
      value: `${systemStats.systemUptime}%`,
      icon: CheckCircle,
      color: 'from-blue-400 to-cyan-500',
      trend: '+0.1%'
    },
    {
      title: 'Energy Saved',
      value: `${systemStats.energySaved}%`,
      icon: TrendingUp,
      color: 'from-purple-400 to-pink-500',
      trend: '+5.2%'
    }
  ];

  const realtimeMetrics = [
    {
      label: 'Temperature',
      value: realtimeData.temperature.toFixed(1),
      unit: '°C',
      icon: Thermometer,
      color: 'from-red-400 to-pink-500'
    },
    {
      label: 'Pressure',
      value: realtimeData.pressure.toFixed(1),
      unit: 'hPa',
      icon: Gauge,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      label: 'Voltage',
      value: realtimeData.voltage.toFixed(1),
      unit: 'V',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      label: 'Flow Rate',
      value: realtimeData.flow.toFixed(1),
      unit: 'L/min',
      icon: Activity,
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Temperature sensor #A-102 reading above normal range',
      time: '2 minutes ago',
      device: 'Building A - Floor 2'
    },
    {
      id: 2,
      type: 'info',
      message: 'Predictive maintenance scheduled for Motor Unit #B-205',
      time: '15 minutes ago',
      device: 'Building B - Floor 2'
    },
    {
      id: 3,
      type: 'success',
      message: 'Energy optimization completed - 12% efficiency gain',
      time: '1 hour ago',
      device: 'System Wide'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">System Overview</h1>
          <p className="text-gray-400 mt-1">Real-time monitoring and system status</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>Live Data</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-xs text-green-400 font-medium">{stat.trend}</div>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-gray-400 text-sm font-medium">{stat.title}</h3>
              <div className="flex items-baseline space-x-2">
                <motion.span
                  key={stat.value}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-2xl font-bold text-white"
                >
                  {stat.value}
                </motion.span>
                {stat.total && (
                  <span className="text-gray-400 text-sm">/ {stat.total}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-400" />
            <span>Real-time Telemetry</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-4">
            {realtimeMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-gray-800/50 p-4 rounded-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${metric.color}`}>
                    <metric.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-400 text-sm">{metric.label}</span>
                </div>
                <div className="flex items-baseline space-x-1">
                  <motion.span
                    key={metric.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="text-xl font-bold text-white"
                  >
                    {metric.value}
                  </motion.span>
                  <span className="text-gray-400 text-sm">{metric.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
        >
          <h2 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <span>Recent Alerts</span>
          </h2>
          
          <div className="space-y-4">
            {recentAlerts.map((alert, index) => (
              <motion.div
                key={alert.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-3 p-3 bg-gray-800/30 rounded-lg"
              >
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  alert.type === 'warning' ? 'bg-yellow-400' :
                  alert.type === 'success' ? 'bg-green-400' : 'bg-blue-400'
                }`}></div>
                <div className="flex-1">
                  <p className="text-white text-sm">{alert.message}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-gray-400 text-xs">{alert.device}</span>
                    <span className="text-gray-500 text-xs">{alert.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* System Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
      >
        <h2 className="text-xl font-semibold text-white mb-6">System Performance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-gray-300 font-medium">Data Processing</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Data Points Processed</span>
                <motion.span
                  key={systemStats.dataPoints}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-white font-semibold"
                >
                  {systemStats.dataPoints.toLocaleString()}
                </motion.span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
                  initial={{ width: 0 }}
                  animate={{ width: '87%' }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-300 font-medium">AI Model Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Prediction Accuracy</span>
                <span className="text-white font-semibold">94.7%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{ width: '94.7%' }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-300 font-medium">Network Health</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">Connection Quality</span>
                <span className="text-white font-semibold">98.2%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: '98.2%' }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OverviewPanel;
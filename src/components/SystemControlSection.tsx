import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, MapPin, Activity, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const SystemControlSection = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Temperature Sensor #A-101', location: 'Building A - Floor 1', status: 'online', health: 98, lastUpdate: '2 min ago' },
    { id: 2, name: 'Pressure Monitor #B-205', location: 'Building B - Floor 2', status: 'warning', health: 87, lastUpdate: '1 min ago' },
    { id: 3, name: 'Voltage Regulator #C-302', location: 'Building C - Floor 3', status: 'online', health: 95, lastUpdate: '30 sec ago' },
    { id: 4, name: 'Flow Meter #A-150', location: 'Building A - Basement', status: 'offline', health: 0, lastUpdate: '15 min ago' },
    { id: 5, name: 'Humidity Control #B-101', location: 'Building B - Floor 1', status: 'online', health: 92, lastUpdate: '1 min ago' },
    { id: 6, name: 'Power Monitor #C-401', location: 'Building C - Floor 4', status: 'online', health: 99, lastUpdate: '45 sec ago' }
  ]);

  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      setDevices(prev => prev.map(device => ({
        ...device,
        health: device.status === 'offline' ? 0 : Math.max(75, Math.min(100, device.health + (Math.random() - 0.5) * 5))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const regions = ['all', 'Building A', 'Building B', 'Building C'];
  const categories = ['all', 'Temperature', 'Pressure', 'Voltage', 'Flow', 'Humidity', 'Power'];

  const filteredDevices = devices.filter(device => {
    const regionMatch = selectedRegion === 'all' || device.location.includes(selectedRegion);
    const categoryMatch = selectedCategory === 'all' || device.name.toLowerCase().includes(selectedCategory.toLowerCase());
    return regionMatch && categoryMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online': return CheckCircle;
      case 'warning': return AlertTriangle;
      case 'offline': return XCircle;
      default: return Activity;
    }
  };

  const getHealthColor = (health: number) => {
    if (health >= 95) return 'from-green-400 to-emerald-500';
    if (health >= 85) return 'from-yellow-400 to-orange-500';
    if (health >= 70) return 'from-orange-400 to-red-500';
    return 'from-red-500 to-red-700';
  };

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
              System Control Panel
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Centralized device management with real-time monitoring, health analytics, 
            and intelligent control systems for your entire IoT infrastructure.
          </p>
        </motion.div>

        {/* Control Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg focus:border-green-400 focus:outline-none"
            >
              {regions.map(region => (
                <option key={region} value={region}>
                  {region === 'all' ? 'All Regions' : region}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-lg focus:border-green-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Device Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredDevices.map((device, index) => {
            const StatusIcon = getStatusIcon(device.status);
            return (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1">{device.name}</h3>
                    <p className="text-gray-400 text-sm flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{device.location}</span>
                    </p>
                  </div>
                  <div className={`flex items-center space-x-1 ${getStatusColor(device.status)}`}>
                    <StatusIcon className="h-4 w-4" />
                    <span className="text-sm font-medium capitalize">{device.status}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Health Score</span>
                    <motion.span
                      key={device.health}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-white font-semibold"
                    >
                      {device.health}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${getHealthColor(device.health)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${device.health}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Last Update</span>
                    <span className="text-gray-300">{device.lastUpdate}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-800">
                  <a href='/login' target='_blank' rel="noopener noreferrer" className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black font-medium rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105">
                    Manage Device
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Health Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
        >
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
            <Activity className="h-5 w-5 text-green-400" />
            <span>System Health Heatmap</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-gray-300 font-medium">Overall Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl font-bold text-green-400 mb-1"
                  >
                    {devices.filter(d => d.status === 'online').length}
                  </motion.div>
                  <div className="text-gray-400 text-sm">Online</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl font-bold text-yellow-400 mb-1"
                  >
                    {devices.filter(d => d.status === 'warning').length}
                  </motion.div>
                  <div className="text-gray-400 text-sm">Warning</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-2xl font-bold text-red-400 mb-1"
                  >
                    {devices.filter(d => d.status === 'offline').length}
                  </motion.div>
                  <div className="text-gray-400 text-sm">Offline</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-1"
                  >
                    {Math.round(devices.reduce((acc, d) => acc + d.health, 0) / devices.length)}%
                  </motion.div>
                  <div className="text-gray-400 text-sm">Avg Health</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-gray-300 font-medium">Real-time Indicators</h4>
              <div className="space-y-2">
                {devices.slice(0, 4).map((device, index) => (
                  <motion.div
                    key={device.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        device.status === 'online' ? 'bg-green-400' :
                        device.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                      } ${device.status === 'online' ? 'animate-pulse' : ''}`}></div>
                      <span className="text-white text-sm">{device.name.split('#')[0]}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-medium text-sm">{device.health}%</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemControlSection;
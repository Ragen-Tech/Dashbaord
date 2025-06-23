import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu, BarChart3, Activity, Brain, Settings, FileText, Map, AlertTriangle,
  ChevronLeft, ChevronRight, LogOut, Home
} from 'lucide-react';

interface DashboardSidebarProps {
  activePanel: string;
  setActivePanel: (panel: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  activePanel,
  setActivePanel,
  collapsed,
  setCollapsed
}) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'telemetry', label: 'Telemetry Data', icon: Activity },
    { id: 'predictive', label: 'Predictive Insights', icon: Brain },
    { id: 'device-control', label: 'Device Control', icon: Settings },
    { id: 'ai-analytics', label: 'AI Analytics', icon: Brain },
    { id: 'device-logs', label: 'Device Logs', icon: FileText },
    { id: 'device-map', label: 'Device Map', icon: Map },
    { id: 'alert-logs', label: 'Alert Logs', icon: AlertTriangle }
  ];

  return (
    <motion.div
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className={`fixed left-0 top-0 h-full bg-gray-900/95 backdrop-blur-sm border-r border-gray-800 z-50 transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <Link to="/" className="flex items-center space-x-2">
              <img src="/Dashboard login.svg" alt="Ragentech Logo" className="h-18 w-36 object-contain" />
            </Link>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePanel(item.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
              activePanel === item.id
                ? 'bg-gradient-to-r from-green-400/20 to-blue-500/20 text-green-400 border border-green-400/30'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <Link
          to="/"
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
        >
          <Home className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Back to Home</span>}
        </Link>
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors mt-2">
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm font-medium">Sign Out</span>}
        </button>
      </div>
    </motion.div>
  );
};

export default DashboardSidebar;
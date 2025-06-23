import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import OverviewPanel from '../components/dashboard/OverviewPanel';
import TelemetryPanel from '../components/dashboard/TelemetryPanel';
import PredictivePanel from '../components/dashboard/PredictivePanel';

const Dashboard = () => {
  const [activePanel, setActivePanel] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActivePanel = () => {
    switch (activePanel) {
      case 'overview':
        return <OverviewPanel />;
      case 'telemetry':
        return <TelemetryPanel />;
      case 'predictive':
        return <PredictivePanel />;
      default:
        return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      <DashboardSidebar
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <main className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? 'ml-16' : 'ml-64'
      }`}>
        <motion.div
          key={activePanel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          {renderActivePanel()}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
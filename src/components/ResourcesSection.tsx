import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Clock,
  User,
} from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      type: "whitepaper",
      icon: FileText,
      title: "The Future of Industrial IoT: AI-Driven Predictive Maintenance",
      description:
        "Comprehensive analysis of how AI-powered predictive maintenance is transforming industrial operations, reducing costs by up to 40% and preventing 90% of unexpected equipment failures.",
      author: "Dr. Sarah Chen, IoT Research Director",
      readTime: "12 min read",
      downloads: "2.3K",
      color: "from-blue-400 to-cyan-500",
      category: "Industry Report",
    },
    {
      type: "case-study",
      icon: BookOpen,
      title: "Smart Factory Transformation: 300% ROI in 18 Months",
      description:
        "Real-world case study of a Fortune 500 manufacturer that achieved remarkable results by implementing our AI-IoT platform across 15 production facilities.",
      author: "Manufacturing Excellence Team",
      readTime: "8 min read",
      downloads: "1.8K",
      color: "from-green-400 to-emerald-500",
      category: "Case Study",
    },
    {
      type: "video",
      icon: Video,
      title: "AI Predictive Analytics Demo: Live Equipment Monitoring",
      description:
        "Watch our AI algorithms in action as they analyze real-time sensor data, detect anomalies, and predict equipment failures before they occur.",
      author: "Technical Team",
      readTime: "15 min video",
      downloads: "5.2K",
      color: "from-purple-400 to-pink-500",
      category: "Product Demo",
    },
    {
      type: "guide",
      icon: Download,
      title: "IoT Implementation Guide: From Pilot to Production",
      description:
        "Step-by-step guide for enterprises looking to implement IoT solutions at scale, including best practices, common pitfalls, and success metrics.",
      author: "Implementation Specialists",
      readTime: "20 min read",
      downloads: "3.1K",
      color: "from-yellow-400 to-orange-500",
      category: "Implementation Guide",
    },
  ];

  const blogPosts = [
    {
      title: "How Machine Learning Transforms Equipment Maintenance",
      summary:
        "Discover how advanced machine learning models are revolutionizing equipment maintenance by predicting failures before they occur, optimizing asset performance, and driving smarter, data-informed operational decisions across industrial environments.",
      publishedDate: "2 days ago",
      category: "AI & Machine Learning",
    },
    {
      title: "5 IoT Security Best Practices for Industrial Networks",
      summary:
        "Learn the essential best practices for securing industrial IoT networks, from device authentication and data encryption to continuous monitoring and threat detection, ensuring your infrastructure stays protected against evolving cyber risks.",
      publishedDate: "1 week ago",
      category: "Security",
    },
    {
      title: "Edge Computing in IoT: Reducing Latency and Costs",
      summary:
        "Explore how edge computing is reshaping the future of IoT by processing data closer to where it’s generated, minimizing latency, reducing cloud dependency, and enabling faster, real-time analytics for more efficient industrial operations.",
      publishedDate: "2 weeks ago",
      category: "Technology",
    },
  ];

  return (
    <section
      id="resources"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
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
              AI Content Resource Hub
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive library of AI-generated insights, industry
            reports, case studies, and technical documentation to accelerate
            your IoT journey.
          </p>
        </motion.div>

        {/* Featured Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${resource.color} flex-shrink-0`}
                >
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${resource.color} text-black`}
                    >
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{resource.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{resource.readTime}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  {resource.downloads} downloads
                </div>
              </div>

              <button className="flex items-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105 justify-center">
                <Download className="h-4 w-4" />
                <a href="/login" target="_blank" rel="noopener noreferrer">
                  Download Resource
                </a>
              </button>
            </motion.div>
          ))}
        </div>

        {/* AI-Generated Blog Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-semibold text-white flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-green-400" />
              <span>Latest AI-Generated Insights</span>
            </h3>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-green-400/50 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-900/50 text-blue-300 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3 hover:text-green-400 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.summary}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.publishedDate}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl border border-green-400/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Stay Updated with AI-Powered IoT Insights
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and receive the latest AI-generated
            insights, industry trends, and product updates directly in your
            inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 text-white rounded-lg focus:border-green-400 focus:outline-none"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;

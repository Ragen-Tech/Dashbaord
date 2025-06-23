import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe, Clock } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaValid) {
      alert("Please verify that you're not a robot.");
      return;
    }

    // Handle form submission here
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", company: "", message: "" });

    // Optionally reset the captcha
    recaptchaRef.current?.reset();
    setCaptchaValid(false);
  };

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [captchaValid, setCaptchaValid] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@ragentech.com",
      subDetails: "support@ragentech.com",
      color: "from-blue-400 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "0768439520",
      subDetails: "Mon-Fri 9AM-6PM",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "No. 32 Hillcrest Avenue, Mount Lavinia",
      subDetails: "Colombo, Western 10370, SriLanka",
      color: "from-purple-400 to-pink-500",
    },
  ];

  const globalOffices = [
    {
      city: "San Francisco",
      country: "USA",
      timezone: "PST",
      status: "Headquarters",
    },
    { city: "London", country: "UK", timezone: "GMT", status: "European Hub" },
    {
      city: "Singapore",
      country: "SG",
      timezone: "SGT",
      status: "Asia Pacific",
    },
    {
      city: "Toronto",
      country: "CA",
      timezone: "EST",
      status: "North America",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
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
              Get in Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your operations with AI-powered IoT solutions?
            Contact our experts to discuss your specific requirements and get
            started.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-green-400 focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:border-green-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your IoT requirements and how we can help..."
                />
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LdkVGorAAAAAOOh4KCYyzkHRQQxsMtmQ0Z2_RGt"
                onChange={() => setCaptchaValid(true)}
                theme="dark"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </motion.button>
            </form>
            <div className="mt-10 rounded-xl overflow-hidden border border-gray-700">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15845.551222177184!2d79.86442324149344!3d6.844026140465378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%2032%20Hillcrest%20Avenue%2C%20Mount%20Lavinia%20%20Colombo%2C%20Western%2010370%2C%20SriLanka!5e0!3m2!1sen!2slk!4v1750576839815!5m2!1sen!2slk"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[550px]"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-start space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
                >
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${info.color} flex-shrink-0`}
                  >
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-300">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.subDetails}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global Offices */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Globe className="h-5 w-5 text-green-400" />
                <span>Global Presence</span>
              </h4>
              <div className="space-y-3">
                {globalOffices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg"
                  >
                    <div>
                      <div className="text-white font-medium">
                        {office.city}, {office.country}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {office.status}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-sm flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{office.timezone}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* IoT Device Map Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Global IoT Network
              </h4>
              <div className="relative h-48 bg-gray-800/50 rounded-lg overflow-hidden">
                {/* Simulated world map with device indicators */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20">
                  {/* Device location indicators */}
                  {[
                    { x: "20%", y: "40%", size: "large" },
                    { x: "50%", y: "30%", size: "medium" },
                    { x: "75%", y: "45%", size: "large" },
                    { x: "30%", y: "60%", size: "small" },
                    { x: "65%", y: "55%", size: "medium" },
                    { x: "85%", y: "35%", size: "small" },
                  ].map((device, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${
                        device.size === "large"
                          ? "w-4 h-4"
                          : device.size === "medium"
                          ? "w-3 h-3"
                          : "w-2 h-2"
                      } bg-green-400 rounded-full animate-pulse`}
                      style={{ left: device.x, top: device.y }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>10M+ Connected Devices</span>
                    <span>150+ Countries</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Response Time Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-green-900/20 to-blue-900/20 p-8 rounded-xl border border-green-400/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            We Respond Within 24 Hours
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our expert team is committed to providing rapid responses to all
            inquiries. For urgent matters, please call our direct line for
            immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Demo
            </a>
            <a
              href="/login"
              className="px-8 py-3 border-2 border-gray-600 text-white rounded-lg hover:border-green-400 hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300"
            >
              Download Brochure
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

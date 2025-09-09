"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const SlidingPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("home");

  const tabs = [
    {
      id: "home",
      label: "Home",
      icon: "🏠",
      content:
        "Welcome to the home section! This is where you can find all the main content.",
    },
    {
      id: "about",
      label: "About",
      icon: "👤",
      content:
        "Learn more about us. We're passionate about creating amazing user experiences.",
    },
    {
      id: "contact",
      label: "Contact",
      icon: "📧",
      content:
        "Get in touch with us. We'd love to hear from you and answer any questions.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-8">
      <h2 className="text-3xl font-bold text-white mb-8">
        Layout Animations Demo
      </h2>

      <div className="w-full max-w-md">
        <motion.button
          className="w-full mb-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close Panel" : "Open Panel"}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => (
                  <motion.button
                    key={tab.id}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                      selectedTab === tab.id
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTab(tab.id)}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="p-6"
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-700"
                  >
                    {tabs.find((tab) => tab.id === selectedTab)?.content}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-300 text-sm">
            This demonstrates layout animations with smooth height transitions,
            tab switching, and content sliding effects.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingPanel;

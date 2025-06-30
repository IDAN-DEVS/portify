"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Download,
  Zap,
  Palette,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

const CLONE_PORTFOLIO_COMMAND =
  "git clone https://github.com/IDAN-DEVS/portify.git";

const LandingPage = () => {
  const templates = [
    {
      name: "Base Template",
      description: "Clean, minimal design with dark mode",
      image: "/images/templates/base.png",
      demoUrl: "/demo?template=base",
    },
    {
      name: "Shadow Template",
      description: "Modern and elegant with subtle shadows",
      image: "/images/templates/shadow.png",
      demoUrl: "/demo?template=shadow",
    },
    // {
    //   name: "Neon Template",
    //   description: "Vibrant and futuristic design",
    //   image: "/images/templates/neon.png",
    //   demoUrl: "/demo?template=neon",
    // },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Code Required",
      description: "Just update config files",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Multiple Templates",
      description: "Choose from professionally designed templates",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile First",
      description: "Looks great on all devices",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="font-bold text-black">P</span>
          </div>
          <span className="text-xl font-bold">Portify</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-6"
        >
          <a
            href="#templates"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Templates
          </a>
          <a
            href="https://github.com/IDAN-DEVS/portify"
            className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm mb-8"
          >
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span>Open Source Portfolio Generator</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            Create Your Developer
            <br />
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-2 left-0 right-0 h-2 bg-orange-400/20 rounded-full origin-left"
              />
            </span>{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                in Minutes
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-2 left-0 right-0 h-2 bg-yellow-400/20 rounded-full origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            A modern portfolio generator that lets you create stunning developer
            portfolios without writing a single line of code. Choose a template,
            update configs, deploy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex items-center bg-gray-900 rounded-lg border border-gray-700 overflow-hidden">
              <input
                type="text"
                placeholder={CLONE_PORTFOLIO_COMMAND}
                className="bg-transparent px-6 py-4 text-gray-300 placeholder-gray-500 flex-1 min-w-0 w-96"
                readOnly
              />
              <button
                className="px-6 py-4 bg-white text-black hover:bg-gray-200 transition-colors flex items-center space-x-2"
                onClick={() => {
                  navigator.clipboard.writeText(CLONE_PORTFOLIO_COMMAND);
                  toast.success("Command copied to clipboard");
                }}
              >
                <Download className="w-4 h-4" />
                <span>Copy</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-sm text-gray-500"
          >
            Open source • 20+ GitHub stars • MIT License
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Portify?</h2>
          <p className="text-gray-400 text-lg">
            Everything you need to create a professional portfolio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-gray-700 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mx-auto mb-6 text-orange-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Templates Section */}
      <div
        id="templates"
        className="relative z-10 max-w-7xl mx-auto px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Choose Your Template</h2>
          <p className="text-gray-400 text-lg">
            Professional templates designed for developers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition-colors group"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                <p className="text-gray-400 mb-4">{template.description}</p>
                <div className="flex space-x-3">
                  <a
                    href={template.demoUrl}
                    className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Installation Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get Started in 3 Steps</h2>
          <p className="text-gray-400 text-lg">
            Have your portfolio running in under 5 minutes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Clone & Install",
              code: "git clone https://github.com/IDAN-DEVS/portify.git\ncd portify && npm install",
            },
            {
              step: "2",
              title: "Initialize Config",
              code: "npm run init-config",
            },
            {
              step: "3",
              title: "Start Development",
              code: "npm run dev",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <pre>{item.code}</pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-gray-400 mb-8">
            Join developers who chose Portify for their portfolio needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/IDAN-DEVS/portify"
              className="flex items-center justify-center space-x-2 bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#templates"
              className="flex items-center justify-center space-x-2 border border-gray-600 text-white px-8 py-4 rounded-lg hover:border-gray-500 transition-colors font-medium"
            >
              <span>View Templates</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="font-bold text-black">P</span>
              </div>
              <span className="text-xl font-bold">Portify</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a
                href="https://github.com/IDAN-DEVS/portify"
                className="hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#templates"
                className="hover:text-white transition-colors"
              >
                Templates
              </a>
              <a
                href="https://github.com/IDAN-DEVS/portify/blob/main/USAGE.md"
                className="hover:text-white transition-colors"
              >
                Docs
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>Open source • Created with ❤️ by JC CODER and IDAN DEVS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Brain, Cpu } from 'lucide-react';

const FloatingIcon = ({ children, delay, duration = 3, x = 20, y = 20 }) => (
  <motion.div
    animate={{
      y: [-y, y],
      x: [-x, x],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className="absolute text-red-600/20"
  >
    {children}
  </motion.div>
);

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    'Threat Detection', 'Ethical Hacking', 'OSCP', 'AWS', 'UI/UX', 
    'Project Management', 'Penetration Testing', 'Information Security',
    'Data Protection', 'Compliance'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 opacity-30">
        <FloatingIcon delay={0}><Shield size={48} /></FloatingIcon>
        <FloatingIcon delay={1} x={30} y={40}><Code size={32} /></FloatingIcon>
        <FloatingIcon delay={2} duration={4}><Brain size={40} /></FloatingIcon>
        <FloatingIcon delay={1.5} x={40} y={30}><Cpu size={36} /></FloatingIcon>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Asymmetrical Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-right md:pr-8 space-y-4"
          >
            <h1 className="text-6xl md:text-7xl font-light tracking-wide text-gray-900 leading-tight">
              Maaz
              <br />
              Khan
            </h1>
            <div className="h-1 bg-gradient-to-r from-red-600 to-transparent ml-auto w-32" />
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:pl-8 border-l border-gray-200"
          >
            <h2 className="text-2xl text-gray-600 font-light mb-4">
              Cybersecurity Professional
              <br />
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate about creating secure digital experiences and protecting organizational assets through innovative cybersecurity solutions.
            </p>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-400 to-transparent" />
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-light mb-6 text-gray-900">Educational Journey</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-xl">University of Texas at Dallas</h3>
                  <p className="text-gray-600">BS in Computer Information Systems (Cybersecurity)</p>
                  <p className="text-sm text-red-600">Expected December 2026 • GPA: 3.6</p>
                </div>
                <div>
                  <h3 className="font-medium text-xl">Collin College</h3>
                  <p className="text-gray-600">Associates of Arts</p>
                  <p className="text-sm text-red-600">May 2024 • GPA: 3.6</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-light mb-6 text-gray-900">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mouse follower gradient */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 0, 0, 0.03), transparent 80%)`,
          }}
        />
      </motion.div>
    </div>
  );
};

export default About;
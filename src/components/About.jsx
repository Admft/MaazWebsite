import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Brain, Cpu, Dumbbell, Book, Lock, Mountain, Terminal, Database, Cloud, Wifi, Monitor, Server, Key, Bug } from 'lucide-react';

// Enhanced FloatingIcon component
const FloatingIcon = ({ children, delay, duration = 3, x = 20, y = 20, rotate = 0, top, left }) => (
  <motion.div
    animate={{
      y: [-y, y],
      x: [-x, x],
      rotate: [-rotate, rotate],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }}
    className="absolute text-red-600/20"
    style={{ top, left }}
  >
    {children}
  </motion.div>
);

// Add new animation components
const OrbitalIcon = ({ children, radius = 100, duration = 10, delay = 0, clockwise = true, top, left }) => {
  const variants = {
    orbit: {
      rotate: clockwise ? 360 : -360,
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      className="absolute"
      style={{ width: radius * 2, height: radius * 2, top, left }}
      variants={variants}
      animate="orbit"
    >
      <motion.div
        className="absolute"
        style={{ left: radius, top: 0 }}
        animate={{ rotate: clockwise ? -360 : 360 }}
        transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const WaveIcon = ({ children, delay = 0, duration = 4, amplitude = 50, top, left }) => (
  <motion.div
    className="absolute"
    style={{ top, left }}
    animate={{
      y: [amplitude, -amplitude],
      x: [-amplitude, amplitude],
    }}
    transition={{
      y: {
        duration,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      },
      x: {
        duration: duration * 1.5,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }}
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

  const hobbies = [
    { 
      name: 'Working Out', 
      icon: Dumbbell,
      description: 'Dedicated to maintaining physical fitness and pushing personal limits.'
    },
    { 
      name: 'Manga', 
      icon: Book,
      description: 'Passionate about Japanese storytelling and artistic expression.'
    },
    { 
      name: 'Cybersecurity', 
      icon: Lock,
      description: 'Not just a profession, but a genuine interest in digital security.'
    },
    { 
      name: 'Climbing', 
      icon: Mountain,
      description: 'Finding joy in conquering new heights and challenging myself.'
    },
  ];

  // Rest of the imports and initial setup remain the same until the Video Introduction Section

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Animation - Same as before */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Icons distributed across the viewport */}
        <FloatingIcon delay={0} x={40} y={30} rotate={15} top="10%" left="10%">
          <Shield size={48} />
        </FloatingIcon>
        <FloatingIcon delay={1} x={30} y={40} rotate={-15} top="20%" left="80%">
          <Code size={32} />
        </FloatingIcon>
        <FloatingIcon delay={2} duration={4} x={50} y={50} rotate={20} top="40%" left="15%">
          <Brain size={40} />
        </FloatingIcon>
        <FloatingIcon delay={1.5} x={40} y={30} rotate={-20} top="60%" left="75%">
          <Cpu size={36} />
        </FloatingIcon>
        
        {/* Orbital Icons */}
        <OrbitalIcon radius={80} duration={8} clockwise={true} top="30%" left="25%">
          <Terminal size={24} className="text-red-600/20" />
        </OrbitalIcon>
        <OrbitalIcon radius={100} duration={12} clockwise={false} delay={2} top="70%" left="65%">
          <Database size={28} className="text-red-600/20" />
        </OrbitalIcon>
        
        {/* Wave Motion Icons */}
        <WaveIcon amplitude={60} duration={5} delay={1} top="45%" left="40%">
          <Cloud size={32} className="text-red-600/20" />
        </WaveIcon>
        <WaveIcon amplitude={40} duration={6} delay={2} top="85%" left="30%">
          <Wifi size={28} className="text-red-600/20" />
        </WaveIcon>
        
        {/* Additional Background Elements */}
        <FloatingIcon delay={3} x={60} y={40} rotate={25} top="15%" left="45%">
          <Monitor size={42} />
        </FloatingIcon>
        <FloatingIcon delay={2.5} x={45} y={55} rotate={-25} top="75%" left="85%">
          <Server size={38} />
        </FloatingIcon>
        <FloatingIcon delay={1.8} x={35} y={45} rotate={15} top="90%" left="20%">
          <Key size={34} />
        </FloatingIcon>
        <FloatingIcon delay={3.5} x={50} y={35} rotate={-15} top="25%" left="70%">
          <Bug size={30} />
        </FloatingIcon>
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Hero Section - Same as before */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left column with image - Same as before */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="md:text-right md:pr-8 space-y-4 flex flex-col justify-center"
          >
            <div className="relative mb-8 md:mb-0">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-100 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-stone-200 rounded-full opacity-20 blur-2xl" />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 mx-auto overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="/headshot.jpg" 
                    alt="Maaz Khan"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-stone-300/20 rounded-lg blur" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right column with text - Same as before */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="md:pl-8 border-l border-gray-200 flex flex-col justify-center"
          >
            <h1 className="text-6xl md:text-7xl font-light tracking-wide text-gray-900 leading-tight mb-4">
              Maaz
              <br />
              Khan
            </h1>
            <div className="h-1 bg-gradient-to-r from-red-600 to-transparent w-32 mb-6" />
            <h2 className="text-2xl text-gray-600 font-light mb-4">
              Cybersecurity Professional
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate about creating secure digital experiences and protecting organizational assets through innovative cybersecurity solutions.
            </p>
          </motion.div>
        </div>

        {/* Redesigned Video & Hobbies Section */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-400 to-transparent" />
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-light mb-8 text-gray-900">Meet Maaz</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {/* Left column - Hobbies */}
                <div className="space-y-6">
                  <div className="prose">
                    <p className="text-lg text-gray-700 mb-6">
                      Beyond my professional pursuits, I'm passionate about personal growth and diverse interests that challenge me both mentally and physically.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={hobby.name}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/80">
                          <div className="flex-shrink-0">
                            <hobby.icon className="w-6 h-6 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-1">{hobby.name}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">{hobby.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right column - Video */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="relative rounded-lg overflow-hidden shadow-xl"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <video 
                        className="w-full rounded-lg object-cover"
                        controls
                        playsInline
                      >
                        <source src="/vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    {/* Video overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section - Same as before */}
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
        {/* ... */}

        {/* Skills Section - Move inside the main motion.div */}
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
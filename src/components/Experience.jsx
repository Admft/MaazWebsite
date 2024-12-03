import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Award } from 'lucide-react';

const ExperienceCard = ({ title, company, date, points }) => (
  <div className="bg-white/50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-light text-gray-900">{title}</h3>
    <p className="text-red-600 mb-2">{company}</p>
    <p className="text-sm text-gray-500 mb-4">{date}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-700 leading-relaxed flex gap-2">
          <span className="text-red-600 opacity-50">•</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, subtitle, date, points }) => (
  <div className="bg-white/50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-light text-gray-900">{title}</h3>
    <p className="text-red-600 mb-2">{subtitle}</p>
    <p className="text-sm text-gray-500 mb-4">{date}</p>
    <ul className="space-y-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-700 leading-relaxed flex gap-2">
          <span className="text-red-600 opacity-50">•</span>
          {point}
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Cybersecurity Intern",
      company: "Buckner Rent A Car & Sales",
      date: "Jun. 2024 – Aug. 2024",
      points: [
        "Actively assisted in developing and implementing comprehensive security policies to protect company data",
        "Investigated and responded to over 20 security incidents, analyzing causes and recommending preventive measures",
        "Conducted regular vulnerability assessments and proposed solutions to enhance IT infrastructure security"
      ]
    },
    {
      title: "Supervisor",
      company: "General Nutrition Center (GNC)",
      date: "Aug. 2024 – Present",
      points: [
        "Led and motivated the sale associates to achieve their selling per hour (SPH) by 34% and kept customer service",
        "Coordinated schedules for a team of 10+ and managed an inventory of 500+ items to ensure smooth operations",
        "Trained and mentored new hires, fostering a positive work environment and improving team efficiency by 10%"
      ]
    },
    {
      title: "Sales Associate",
      company: "Ralph Lauren Polo",
      date: "Aug. 2023 – July. 2024",
      points: [
        "Successfully increased daily transactions by 15% through personalized recommendations and customer activity",
        "Promoted the rewards program to over 200 customers, enhancing customer loyalty and drive repeat business",
        "Maintained the store's ambiance and visual merchandising standards through frequent restocking and organization"
      ]
    }
  ];

  const projects = [
    {
      title: "Muscle Manga",
      subtitle: "E-commerce Website Development & Product Launch",
      date: "Mar. 2022 – Present",
      points: [
        "Led a team of 4 C-suite members, led project development that achieved a 95% completion rate within 4 weeks",
        "Collaborated with the CFO to develop financial models forecasting $500K in potential first-year revenue",
        "Implemented targeted social media strategies, boosting brand visibility by 30% and drove pre-launch sales by 15%"
      ]
    },
    {
      title: "Nature's Route",
      subtitle: "Sustainable Mock Business Plan",
      date: "Sep. 2024 – Oct. 2024",
      points: [
        "Developed and launched a Shopify e-commerce site, increasing user engagement by 25% with enhanced features",
        "Collaborated with manufacturers to produce high-quality lifting straps, reducing overall production costs by 15%",
        "Delivered a high-impact presentation to stakeholders, securing positive feedback for innovative sustainability strategies"
      ]
    },
    {
      title: "Carson",
      subtitle: "Technical Sales Case Study & CVS Chatbot",
      date: "Oct. 2024 – Nov. 2024",
      points: [
        "Led a team of 4 to develop a bilingual AI chatbot prototype, projected to serve 18M annual CVS customers",
        "Designed workflows with Google integration and bilingual support, enhancing accessibility by 25%",
        "Presented a market-first solution to stakeholders, achieving a 90% evaluator approval rating"
      ]
    }
  ];

  const leadership = [
    {
      title: "Founder",
      company: "Muscle Manga",
      date: "Mar. 2022 – Present",
      points: [
        "Launched and managed an anime-themed gym accessory business, overseeing all aspects & product design",
        "Solely responsible for marketing, sales, daily operations, and demonstrating strong entrepreneurship skills",
        "Developed expertise in customer engagement, significantly growing social media presence and driving sales"
      ]
    },
    {
      title: "Member",
      company: "National FFA Organization",
      date: "Aug. 2020 – May 2022",
      points: [
        "Organized and executed various events, including fundraisers and workshops, enhancing organization visibility",
        "Led and organized community service projects, collaborating with over 50 peers to achieve impactful outcomes",
        "Participated in public speaking competition, developing strong communication and presentation skills"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-light tracking-wide text-gray-900">Experience</h1>
        <p className="text-lg text-gray-600 font-light">Professional Journey & Achievements</p>
      </div>

      {/* Work Experience */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-red-600" />
          <h2 className="text-2xl font-light text-gray-900">Work Experience</h2>
        </div>
        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Code className="w-5 h-5 text-red-600" />
          <h2 className="text-2xl font-light text-gray-900">Projects</h2>
        </div>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5 text-red-600" />
          <h2 className="text-2xl font-light text-gray-900">Leadership</h2>
        </div>
        <div className="grid gap-6">
          {leadership.map((role, index) => (
            <ExperienceCard key={index} {...role} />
          ))}
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-50 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-stone-100 rounded-full opacity-20 blur-3xl" />
    </motion.div>
  );
};

export default Experience;
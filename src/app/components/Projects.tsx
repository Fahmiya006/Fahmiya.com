import React from 'react';
import { motion } from 'motion/react';
import { Github, Newspaper, MapPin, ShoppingCart, GraduationCap, TrendingUp, Users, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export function Projects() {
  const projects = [
    {
      title: "FactAI – Fake News Prediction",
      description: "Machine learning model for fake news classification using text preprocessing, TF-IDF vectorization, and supervised learning — achieving over 98% accuracy on the evaluation dataset.",
      icon: Newspaper,
      tech: ["Python", "Azure Jupyter Notebook", "Pandas", "NumPy", "Scikit-learn", "NLTK"],
      gradient: "from-blue-400 to-cyan-500",
      github: "https://github.com/Fahmiya006/Fake-News-Prediction"
    },
    {
      title: "Smart Attendance System",
      description: "Flutter-based attendance app using geolocation verification to prevent proxy attendance. Built for Smart India Hackathon (SIH) 2025 — contributed to UI design and development.",
      icon: MapPin,
      tech: ["Flutter", "Geolocation APIs"],
      gradient: "from-purple-400 to-pink-500",
      github: "https://github.com/Fahmiya006/SIH-25016-Attendance-System-Teacher"
    },
    {
      title: "ShopKart – E-Commerce Platform",
      description: "Full-stack e-commerce website with separate user and admin interfaces, authentication, and order management built using the MERN stack.",
      icon: ShoppingCart,
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      gradient: "from-green-400 to-blue-500",
      github: "https://github.com/Fahmiya006/Shop-Kart"
    },
    {
      title: "EduPortal – Student Management System",
      description: "Web-based student management system enabling login and data handling for students and staff, with JSON-based data storage.",
      icon: GraduationCap,
      tech: ["React", "Node.js", "JSON"],
      gradient: "from-orange-400 to-red-500",
      github: "https://github.com/Fahmiya006/Eduportal"
    },
    {
      title: "E-Commerce Sales Trends Analysis",
      description: "End-to-end data analysis project uncovering sales trends, seasonal patterns, and revenue drivers from e-commerce datasets using Python and visualization libraries.",
      icon: TrendingUp,
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Excel"],
      gradient: "from-yellow-400 to-orange-500",
      github: "https://github.com/Fahmiya006/Ecommerce-Sales-Trends-Analysis"
    },
    {
      title: "Customer Churn Analysis",
      description: "Predictive analysis identifying key churn drivers and at-risk customer segments using classification models, enabling targeted retention strategies.",
      icon: Users,
      tech: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
      gradient: "from-pink-400 to-rose-500",
      github: "https://github.com/Fahmiya006/Customer_Churn_Analysis"
    },
    {
      title: "Marketing Funnel Analysis",
      description: "Data-driven breakdown of the marketing funnel — from awareness to conversion — identifying drop-off points and optimizing campaign performance with visual insights.",
      icon: Filter,
      tech: ["Python", "Pandas", "Matplotlib", "Data Viz"],
      gradient: "from-violet-400 to-purple-500",
      github: "https://github.com/Fahmiya006/Marketing-Funnel"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Spanning AI/ML, data analytics, full-stack development, and hackathons
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden relative h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-20`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-blue-400" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300 text-base leading-snug">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

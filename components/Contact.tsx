"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  ExternalLink,
  MessageCircle,
  Phone,
  Github,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/danish-karim-fullstack",
      icon: Linkedin,
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/Danish-karim",
      icon: Github,
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "Fiverr",
      url: "https://www.fiverr.com/s/XLAwzQD",
      icon: ExternalLink,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Upwork",
      url: "https://www.upwork.com/freelancers/~01d311f220d3e561f1?mp_source=share",
      icon: ExternalLink,
      color: "from-green-600 to-green-700",
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              through any of the platforms below or send me a message.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:danishkarim96@gmail.com"
                className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
              >
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Email</div>
                  <div className="text-gray-600 text-sm">
                    danishkarim96@gmail.com
                  </div>
                </div>
              </a>
              <a
                href="tel:+923489944496"
                className="flex items-center gap-4 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200"
              >
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Phone</div>
                  <div className="text-gray-600 text-sm">+92 3489944496</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">
                Find me on
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gradient-to-r ${social.color} text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2`}
                  >
                    <social.icon className="w-5 h-5" />
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-600 to-primary-500 rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="mb-6">
              <MessageCircle className="w-12 h-12 mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to Start a Project?
              </h3>
              <p className="opacity-95 leading-relaxed mb-6">
                Whether you have a project in mind or just want to chat about
                possibilities, I'd love to hear from you. Let's create something
                amazing together!
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-1">Available For</div>
                <div className="text-sm opacity-90">
                  Full-time positions • Freelance projects • Consulting
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="font-semibold mb-1">Response Time</div>
                <div className="text-sm opacity-90">
                  Usually responds within 24 hours
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>
              © {new Date().getFullYear()} Danish Karim. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;

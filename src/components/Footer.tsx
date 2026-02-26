import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const logoImage = 'https://image2url.com/r2/default/images/1772005300282-29e58bca-d0c4-4b09-8b1e-88ced6f0b8ed.png';

export function Footer() {
  return (
    <footer className="bg-[#021223] text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2ECC71] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2ECC71] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="mb-6">
              <img
                src={logoImage}
                alt="Sotiotech"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-8">
              Leading ServiceNow experts delivering digital transformation excellence across the globe.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2ECC71] flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2ECC71] flex items-center justify-center transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#2ECC71] flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/advisory" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Advisory & Consulting</Link></li>
              <li><Link to="/implementation" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Implementation</Link></li>
              <li><Link to="/digital-transformation" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Digital Transformation</Link></li>
              <li><Link to="/managed-support" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Managed Services</Link></li>
              <li><a href="#" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Training & Support</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Solutions</h4>
            <ul className="space-y-3">
              <li><Link to="/itsm" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">IT Service Management & UX</Link></li>
              <li><Link to="/itom" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">IT Operation Management</Link></li>
              <li><Link to="/hrsd" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Human Resource Automation</Link></li>
              <li><Link to="/csm" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Customer Service Management</Link></li>
              <li><Link to="/itbm" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Project & Portfolio Management</Link></li>
              <li><Link to="/grc" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Governance, Risk, and Compliance</Link></li>
              <li><Link to="/itam" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">CMDB & IT Assets Management</Link></li>
              <li><Link to="/secops" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">Security Operations (SecOps)</Link></li>
            </ul>
          </div>

          {/* Company & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                <a href="mailto:connect@sotiotech.com" className="text-white/70 hover:text-[#2ECC71] transition-colors duration-200">
                  connect@sotiotech.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2ECC71] flex-shrink-0 mt-1" />
                <span className="text-white/70">
                  KSA, UAE, USA,<br />INDIA, SINGAPORE
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
            <div>
              © 2026 Sotiotech. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#2ECC71] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[#2ECC71] transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-[#2ECC71] transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
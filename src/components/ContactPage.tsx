import { motion } from 'motion/react';
import { MapPin, Mail, Phone, Send, Check, Globe } from 'lucide-react';
import { useState } from 'react';
import sotiotechLogo from 'figma:asset/930e3e6468e18dfbe6d2c5482b94a8a18a03f9aa.png';
import worldMapImage from 'figma:asset/ca7ec86b3a25dfeaf7e567da3ac25d5b450631be.png';
import { Footer } from './Footer';

const businessLocations = [
  {
    name: 'India',
    address: '#103, 1st Flr Newmark House, Hitech City, 500081, Hyderabad TS, India',
  },
  {
    name: 'Singapore',
    address: '#68 Circular Road #02-01, 049422, Singapore',
  },
  {
    name: 'New York',
    address: '#1250 Broadway Ave, New York 10001 United States',
  },
  {
    name: 'UAE',
    address: 'Dubai ( TBR )',
  },
  {
    name: 'KSA',
    address: 'Riyadh ( TBR )',
  },
];

export function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0E2A47] via-[#1a3a5f] to-[#0E2A47] pt-32 pb-20">
        {/* Engineering Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(46, 204, 113, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(46, 204, 113, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Animated Green Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#2ECC71] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-10 left-20 w-80 h-80 bg-[#2ECC71] rounded-full blur-[100px]"
        />

        <div className="relative max-w-[1400px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-6xl font-bold text-white mb-6">
              Get in Touch with Us !
            </h1>
            <p className="text-2xl text-[#2ECC71] font-semibold tracking-wide">
              WE'D BE DELIGHTED TO HEAR FROM YOU!
            </p>
          </motion.div>

          {/* Partnership Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-8 mt-12"
          >
            <img src={sotiotechLogo} alt="Sotiotech" className="h-12 brightness-0 invert" />
            <div className="text-4xl text-[#2ECC71] font-bold">×</div>
            <img
              src="https://image2url.com/r2/default/images/1771834696242-12f35ae2-faf6-4c12-9b10-74cf667eb83a.png"
              alt="ServiceNow"
              className="h-12 w-auto brightness-0 invert"
            />
          </motion.div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative max-w-[1400px] mx-auto px-8 -mt-16 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-xl"
            style={{
              boxShadow: '0 25px 50px -12px rgba(14, 42, 71, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            <h2 className="text-3xl font-bold text-[#0E2A47] mb-6">Contact Us</h2>

            <div className="mb-8">
              <p className="text-[#64748B] text-lg mb-2">Reach us at</p>
              <a
                href="mailto:connect@sotiotech.com"
                className="text-[#2ECC71] text-xl font-semibold hover:text-[#27AE60] transition-colors inline-flex items-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                connect@sotiotech.com
              </a>
            </div>

            <div className="space-y-6 mb-10">
              <h3 className="text-[#2ECC71] text-xl font-bold">
                What happens after you fill out the form?
              </h3>

              <div className="space-y-4">
                {[
                  'We will match you with the ServiceNow specialist.',
                  'Our expert will promptly reach out to you for a detailed discussion.',
                  'Share your ServiceNow objectives and requirements with us.',
                  'Collaborate with us on developing a comprehensive plan that meets your unique goals.',
                  'Kick off with our intelligent and agile team, gearing up to push your business objectives.',
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-[#0E2A47] text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl rounded-3xl p-10 border border-white/40 shadow-xl relative overflow-hidden"
            style={{
              boxShadow: '0 25px 50px -12px rgba(46, 204, 113, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Inner Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2ECC71]/5 to-transparent pointer-events-none" />

            <h2 className="text-3xl font-bold text-[#2ECC71] mb-8 relative">
              Talk To A Trusted Advisor
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {/* Name Field */}
              <div>
                <label className="block text-[#0E2A47] font-semibold mb-2 text-sm">
                  Your Name*
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/30 focus:border-[#2ECC71] transition-all text-[#0E2A47] placeholder:text-[#94A3B8]"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[#0E2A47] font-semibold mb-2 text-sm">
                  Email*
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email"
                  className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/30 focus:border-[#2ECC71] transition-all text-[#0E2A47] placeholder:text-[#94A3B8]"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-[#0E2A47] font-semibold mb-2 text-sm">
                  Phone Number*
                </label>
                <div className="flex gap-2">
                  <select className="px-4 py-3.5 rounded-xl border border-[#E2E8F0] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/30 focus:border-[#2ECC71] transition-all text-[#0E2A47]">
                    <option>+91</option>
                    <option>+1</option>
                    <option>+65</option>
                    <option>+971</option>
                    <option>+966</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91"
                    className="flex-1 px-5 py-3.5 rounded-xl border border-[#E2E8F0] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/30 focus:border-[#2ECC71] transition-all text-[#0E2A47] placeholder:text-[#94A3B8]"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[#0E2A47] font-semibold mb-2 text-sm">
                  Message*
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#2ECC71]/30 focus:border-[#2ECC71] transition-all text-[#0E2A47] placeholder:text-[#94A3B8] resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#2ECC71] to-[#27AE60] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
                style={{
                  boxShadow: '0 10px 30px -10px rgba(46, 204, 113, 0.5)',
                }}
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {/* Privacy Note */}
              <p className="text-xs text-[#64748B] text-center">
                ⓘ Submit Your Contact Details to connect with a ServiceNow Expert
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Business Locations Section */}
      <div className="bg-white py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-[#0E2A47] mb-16"
          >
            Our Business Locations
          </motion.h2>

          {/* World Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-16 rounded-3xl overflow-hidden bg-white p-12"
            style={{
              boxShadow: '0 20px 60px -15px rgba(46, 204, 113, 0.2), 0 0 0 1px rgba(226, 232, 240, 0.5)'
            }}
          >
            {/* Custom World Map with Built-in Pins */}
            <img
              src={worldMapImage}
              alt="Our Global Locations"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {businessLocations.map((location, idx) => (
              <motion.div
                key={location.name}
                onClick={() => onNavigate('contact')}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, borderColor: '#2ECC71' }}
                className="bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl p-6 border-2 border-transparent shadow-[0_4px_20px_-5px_rgba(46,204,113,0.1)] transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#2ECC71]/10 flex items-center justify-center group-hover:bg-[#2ECC71]/20 transition-colors">
                    <Globe className="w-5 h-5 text-[#2ECC71]" />
                  </div>
                  <h3 className="text-[#0E2A47] font-bold text-lg">{location.name}</h3>
                </div>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  {location.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Connect With Us Footer */}
      <div className="bg-gradient-to-r from-[#2ECC71] to-[#27AE60] py-12">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Expert Avatars */}
            <div className="flex items-center justify-center mb-8 pl-4">
              {[
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80',
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100&q=80',
                'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100&q=80',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&h=100&q=80'
              ].map((img, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  src={img}
                  alt="Expert"
                  className="w-14 h-14 rounded-full border-2 border-white object-cover -ml-4 shadow-lg first:ml-0"
                />
              ))}
            </div>

            <h3 className="text-white text-2xl font-bold mb-6">Connect with us</h3>

            <motion.button
              onClick={() => {
                console.log('Book Call triggered from ContactPage bottom');
                onNavigate('book-call');
              }}
              whileHover={{ scale: 1.05, backgroundColor: '#F8FAFC' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 bg-white text-[#2ECC71] px-8 py-3 rounded-full font-bold text-sm hover:shadow-xl transition-all relative z-10"
            >
              Connect With Expert
            </motion.button>
          </motion.div>
        </div>
      </div>



      {/* Footer */}
      <Footer />
    </div>
  );
}
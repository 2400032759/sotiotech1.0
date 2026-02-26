import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Loader2, ArrowRight, Shield } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';
import { createPortal } from 'react-dom';

interface BookCallModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export function BookCallModal({ isOpen, onClose, onSuccess }: BookCallModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (phoneDigits.length < 10) {
            newErrors.phone = 'Phone number must be at least 10 digits';
        }

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const { error } = await supabase
                .from('consult')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        company: formData.company,
                        message: formData.message,
                    },
                ]);

            if (error) throw error;

            toast.success('Consultation request sent successfully!');
            setIsSubmitting(false);
            onSuccess();
            onClose();
            setFormData({ name: '', email: '', phone: '', company: '', message: '' });
            setErrors({});
        } catch (error: any) {
            console.error('Supabase Error:', error);
            toast.error(error.message || 'Failed to send request. Please try again.');
            setIsSubmitting(false);
        }
    };

    const inputBaseClass = "w-full h-14 px-4 rounded-lg bg-white border-2 border-[#CBD5E1] focus:border-[#2ECC71] focus:ring-2 focus:ring-[#2ECC71]/10 outline-none transition-all duration-200 text-[#0E2A47] text-base placeholder:text-[#94A3B8]";
    const inputErrorClass = "!border-red-400 bg-red-50/50";

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    style={{ zIndex: 1000000, fontFamily: 'Poppins, sans-serif' }}
                    className="fixed inset-0 flex items-center justify-center px-4 overflow-y-auto py-6"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    
                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="relative w-full max-w-[540px] bg-white rounded-3xl shadow-2xl overflow-hidden my-auto"
                    >
                        {/* Header */}
                        <div className="bg-[#0E2A47] px-8 pt-8 pb-8 text-center relative overflow-hidden">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0E2A47] via-[#0E2A47] to-[#1a3a5c]" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#2ECC71]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            
                            <div className="relative z-10">
                                <h2 
                                    className="text-[28px] font-bold text-white mb-2"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Contact an Expert
                                </h2>
                                <p 
                                    className="text-white/60 text-sm"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    Get in touch with our ServiceNow specialists
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-8">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Row 1: Name & Company */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                                            Full Name <span className="text-[#2ECC71]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`${inputBaseClass} ${errors.name ? inputErrorClass : ''}`}
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        {errors.name && (
                                            <p className="text-[11px] text-red-500 mt-1.5 font-medium">{errors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            className={inputBaseClass}
                                            placeholder="Acme Inc."
                                            value={formData.company}
                                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                                            Work Email <span className="text-[#2ECC71]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className={`${inputBaseClass} ${errors.email ? inputErrorClass : ''}`}
                                            placeholder="john@acme.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                        {errors.email && (
                                            <p className="text-[11px] text-red-500 mt-1.5 font-medium">{errors.email}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                                            Phone Number <span className="text-[#2ECC71]">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            className={`${inputBaseClass} ${errors.phone ? inputErrorClass : ''}`}
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        />
                                        {errors.phone && (
                                            <p className="text-[11px] text-red-500 mt-1.5 font-medium">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-[11px] font-semibold text-[#64748B] uppercase tracking-wider mb-2">
                                        How can we help? <span className="text-[#2ECC71]">*</span>
                                    </label>
                                    <textarea
                                        rows={4}
                                        className={`${inputBaseClass} h-auto py-3 resize-none ${errors.message ? inputErrorClass : ''}`}
                                        placeholder="Tell us about your project or challenges..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                    {errors.message && (
                                        <p className="text-[11px] text-red-500 mt-1.5 font-medium">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full h-14 bg-[#2ECC71] hover:bg-[#27AE60] text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#2ECC71]/20"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send My Request</span>
                                            <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>

                                {/* Trust Badge */}
                                <div className="flex items-center justify-center gap-2 pt-1">
                                    <Shield className="w-4 h-4 text-[#2ECC71]" />
                                    <p className="text-[11px] text-[#94A3B8]">
                                        Your data is protected with 256-bit SSL encryption
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div
                    style={{ zIndex: 1000001, fontFamily: 'Poppins, sans-serif' }}
                    className="fixed inset-0 flex items-center justify-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="relative w-full max-w-[400px] bg-white rounded-3xl shadow-2xl p-10 text-center overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-[#64748B] hover:text-[#0E2A47] hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
                            aria-label="Close modal"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                            className="w-20 h-20 bg-[#2ECC71] rounded-full flex items-center justify-center mx-auto mb-6"
                        >
                            <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>

                        <h3 
                            className="text-2xl font-bold text-[#0E2A47] mb-3"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Request Sent!
                        </h3>
                        <p className="text-[#64748B] text-sm leading-relaxed mb-8">
                            Thank you for reaching out! Our ServiceNow specialists will contact you within 24 hours.
                        </p>

                        <motion.button
                            onClick={onClose}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-[#0E2A47] hover:bg-[#1a3a5c] text-white font-semibold py-4 rounded-xl transition-colors duration-200"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Got It, Thanks!
                        </motion.button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}

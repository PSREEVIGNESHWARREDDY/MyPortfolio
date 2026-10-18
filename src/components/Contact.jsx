import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, GraduationCap, Shield, Terminal, Info } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'submitting' | 'success' | 'error'

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be empty';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Simulate form submission delay & local validation feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 8000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <Mail className="w-3.5 h-3.5" />
            <span>09. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Connect With Patharched Sree Vigneshwar Reddy
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Have a question, hackathon opportunity, security project, or technical query? Send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Side Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-slate-800 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">
                    Contact Details
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-code">
                    Cyber Security Student & Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 font-mono-code text-xs">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all group"
                >
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div className="min-w-0">
                    <span className="text-slate-500 block text-[10px]">EMAIL ADDRESS</span>
                    <span className="text-slate-200 group-hover:text-cyan-300 transition-colors break-all">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">INSTITUTION</span>
                    <span className="text-slate-200">{personalInfo.collegeShort} (Hyderabad)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">LOCATION</span>
                    <span className="text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 block text-[10px]">AVAILABILITY</span>
                    <span className="text-cyan-300">Open for CTFs, Hackathons & Security Projects</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-300/90 leading-relaxed font-mono-code flex items-start gap-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Integration Note:</strong> This form features full frontend validation. You can connect standard services like EmailJS, Formspree, or custom FastAPI endpoints directly in <code className="text-cyan-300">src/components/Contact.jsx</code>.
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 border border-cyan-500/30 shadow-2xl relative">
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Name */}
                <div className="space-y-2 text-left">
                  <label htmlFor="name" className="text-xs font-mono-code text-slate-300 block font-medium">
                    Your Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Patharched Sree Vigneshwar Reddy"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-all ${
                      errors.name
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 font-mono-code flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-xs font-mono-code text-slate-300 block font-medium">
                    Your Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 font-mono-code flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-xs font-mono-code text-slate-300 block font-medium">
                    Message / Inquiry <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Vigneshwar, I would like to connect with you regarding..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-slate-100 placeholder-slate-600 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-red-500/80 focus:border-red-400'
                        : 'border-slate-800 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 font-mono-code flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2 font-mono-code text-xs">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Validating Payload...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {/* Status Toast Banner */}
              {status === 'success' && (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono-code flex items-start gap-2.5 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <strong>Validation Successful!</strong> Your message payload passed all frontend checks. Connect your EmailJS or backend key in <code className="text-emerald-200">Contact.jsx</code> for live automated email dispatching.
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

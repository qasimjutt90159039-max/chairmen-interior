import React, { useState } from 'react';
import { Phone, MapPin, ExternalLink, Send, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { businessInfo } from '../data/businessInfo';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'PVC Panels',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Please provide your contact phone number.";
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid telephone number.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a brief description of your project or enquiry.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend submission handling ready for backend API endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Contact Chairman Interiors Lahore | Call, Visit, or Message"
        description="Contact Chairman Interiors in Garhi Shahu, Lahore. Phone: +92 323 8845888. Address: Beadon Rd, Victoria Park, Garhi Shahu, Lahore. Enquire for PVC panels & wallpapers."
      />

      {/* =========================================================================
          PAGE HEADER: Authoritative and Practical
          ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-luxury-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Direct Contact & Inquiries]
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.1] text-balance">
              CONNECT WITH CHAIRMAN INTERIORS.
            </h1>
            <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              We are situated on Beadon Road, Garhi Shahu, Lahore. Reach out by phone, message us on Facebook, or submit an enquiry for wall paneling and interior consultation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT CONTENT: Verified Details & Action Buttons + Form
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Col: Practical Verified Info & Prominent Buttons */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="bg-luxury-black border border-white/10 p-8 sm:p-10 space-y-6">
                <div>
                  <h2 className="font-cinzel text-xl sm:text-2xl font-bold tracking-widest text-white">
                    CHAIRMAN INTERIORS
                  </h2>
                  <p className="text-[11px] font-mono tracking-luxury uppercase text-luxury-bronze mt-1">
                    PVC PANELS & WALLPAPERS
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  {/* Phone */}
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block mb-1">
                      Direct Telephone
                    </span>
                    <a
                      href={businessInfo.phoneTel}
                      className="font-mono text-xl sm:text-2xl text-white hover:text-luxury-bronze transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5 text-luxury-bronze shrink-0" />
                      <span>{businessInfo.phoneDisplay}</span>
                    </a>
                  </div>

                  {/* Address */}
                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block mb-1">
                      Studio Address
                    </span>
                    <div className="flex items-start gap-2.5 text-stone-300 text-sm leading-relaxed">
                      <MapPin className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                      <address className="not-italic">
                        {businessInfo.address.street},<br />
                        {businessInfo.address.area}, {businessInfo.address.city},<br />
                        {businessInfo.address.postalCode}, {businessInfo.address.country}
                      </address>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div className="pt-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block mb-1">
                      Official Facebook Page
                    </span>
                    <a
                      href={businessInfo.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-luxury-bronze hover:underline"
                    >
                      <span>facebook.com/chairmanmax</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* 3 Prominent Quick Action Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href={businessInfo.phoneTel}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-luxury-bronze text-luxury-black font-semibold text-xs uppercase tracking-luxury hover:bg-luxury-bronzeLight transition-colors shadow-md"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span>Call Now ({businessInfo.phoneDisplay})</span>
                  </a>

                  <a
                    href={businessInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-luxury-graphite text-white hover:bg-luxury-charcoal border border-white/15 text-xs font-medium uppercase tracking-widest transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-luxury-bronze" />
                    <span>Message on Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </a>

                  <a
                    href={businessInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-white/20 text-stone-200 hover:border-luxury-bronze hover:text-white text-xs font-medium uppercase tracking-widest transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2 text-luxury-bronze" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Col: Professional Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-luxury-black border border-white/10 p-8 sm:p-12">
                <span className="text-[10px] font-mono uppercase tracking-luxury text-luxury-bronze block mb-2">
                  [Enquiry Form]
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                  Send a Consultation Inquiry
                </h3>
                <p className="mt-2 text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                  Provide your space details and requirements. We will review your inquiry and follow up promptly.
                </p>

                {submitted ? (
                  <div className="mt-8 p-6 sm:p-8 bg-luxury-graphite/60 border border-luxury-bronze/40 animate-fade-in text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-luxury-bronze/10 border border-luxury-bronze flex items-center justify-center mx-auto text-luxury-bronze">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-white font-medium">
                      Thank You for Reaching Out
                    </h4>
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                      Your inquiry details have been successfully recorded on this client interface.
                    </p>
                    <div className="p-4 bg-luxury-black/70 border border-white/10 text-xs text-stone-400 max-w-lg mx-auto leading-relaxed">
                      <span className="text-luxury-bronze font-mono uppercase tracking-wider block mb-1">
                        Immediate Assistance
                      </span>
                      For instantaneous consultation or sample inspections in Lahore, please call our studio directly at <a href={businessInfo.phoneTel} className="text-white font-mono underline">{businessInfo.phoneDisplay}</a>.
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          service: 'PVC Panels',
                          message: ''
                        });
                      }}
                      className="mt-4 text-xs font-mono uppercase tracking-widest text-luxury-bronze hover:underline"
                    >
                      Submit Another Inquiry →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider font-mono text-stone-300 mb-2">
                        Your Name <span className="text-luxury-bronze">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Tariq Mehmood"
                        className={`w-full bg-luxury-obsidian border px-4 py-3.5 text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-luxury-bronze'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-mono text-stone-300 mb-2">
                          Phone Number <span className="text-luxury-bronze">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 1234567"
                          className={`w-full bg-luxury-obsidian border px-4 py-3.5 text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors ${
                            errors.phone ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-luxury-bronze'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider font-mono text-stone-300 mb-2">
                          Email Address <span className="text-luxury-bronze">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@domain.com"
                          className={`w-full bg-luxury-obsidian border px-4 py-3.5 text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-luxury-bronze'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label htmlFor="service" className="block text-xs uppercase tracking-wider font-mono text-stone-300 mb-2">
                        Service of Interest <span className="text-luxury-bronze">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-luxury-obsidian border border-white/15 focus:border-luxury-bronze px-4 py-3.5 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="PVC Panels">PVC Panels</option>
                        <option value="Wallpapers">Wallpapers</option>
                        <option value="Interior Design">Interior Design</option>
                        <option value="Interior Decoration">Interior Decoration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-wider font-mono text-stone-300 mb-2">
                        Message / Space Details <span className="text-luxury-bronze">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please tell us about your walls, room dimensions, or design ideas..."
                        className={`w-full bg-luxury-obsidian border px-4 py-3.5 text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors resize-y ${
                          errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-white/15 focus:border-luxury-bronze'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center px-8 py-4 bg-luxury-bronze text-luxury-black font-semibold text-xs uppercase tracking-luxury hover:bg-luxury-bronzeLight transition-all duration-300 shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <span>Send Consultation Inquiry</span>
                            <Send className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          LOCATION SECTION: Open in Google Maps + Map Card
          ========================================================================= */}
      <section className="py-20 bg-luxury-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[10px] font-mono tracking-luxury text-luxury-bronze uppercase block mb-1">
              [Showroom & Studio Location]
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Visit Us in Garhi Shahu, Lahore
            </h2>
            <p className="mt-3 text-stone-400 text-sm font-light">
              Beadon Rd, Victoria Park, Garhi Shahu, Lahore, 54000, Pakistan
            </p>
          </div>

          {/* Clean Map / Location Action Card */}
          <div className="bg-luxury-obsidian border border-white/10 p-8 sm:p-12 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="w-14 h-14 rounded-full bg-luxury-bronze/10 border border-luxury-bronze/30 flex items-center justify-center mx-auto text-luxury-bronze mb-6">
              <MapPin className="w-7 h-7" />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3">
              Chairman Interiors Showroom
            </h3>
            
            <p className="text-stone-300 text-sm max-w-lg mx-auto leading-relaxed mb-6 font-light">
              Conveniently accessible in Central Lahore via Beadon Road and Victoria Park, Garhi Shahu. Open for physical sample reviews, catalog inspections, and interior discussions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-luxury bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-colors shadow-lg"
              >
                <span>Open Location in Google Maps</span>
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>

              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center justify-center px-7 py-4 text-xs font-medium uppercase tracking-widest text-white border border-white/20 hover:border-luxury-bronze transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-luxury-bronze" />
                <span>Call Before Visiting</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

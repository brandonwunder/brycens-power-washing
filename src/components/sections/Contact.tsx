'use client';

import { useState, FormEvent } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimateOnScroll from '@/components/ui/AnimateOnScroll';
import Button from '@/components/ui/Button';
import { COMPANY, SERVICE_AREAS, BUSINESS_HOURS } from '@/lib/constants';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <SectionWrapper id="contact">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            Get Your Free Quote
          </h2>
          <p className="text-text-light text-lg mt-3 max-w-2xl mx-auto">
            Fill out the form and we will get back to you within 24 hours.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Form */}
        <AnimateOnScroll>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-heading font-semibold text-sm mb-1 text-text">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-border rounded-[8px] text-text bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-colors duration-150"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-heading font-semibold text-sm mb-1 text-text">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 border border-border rounded-[8px] text-text bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-colors duration-150"
              />
            </div>

            <div>
              <label htmlFor="address" className="block font-heading font-semibold text-sm mb-1 text-text">
                Service Address / Area
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="City or zip code"
                className="w-full px-4 py-3 border border-border rounded-[8px] text-text bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-colors duration-150"
              />
            </div>

            <div>
              <label htmlFor="details" className="block font-heading font-semibold text-sm mb-1 text-text">
                Project Details
              </label>
              <textarea
                id="details"
                name="details"
                rows={4}
                placeholder="Tell us about the surfaces you need cleaned, any stains or concerns, and your preferred timeline."
                className="w-full px-4 py-3 border border-border rounded-[8px] text-text bg-white resize-y focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-colors duration-150"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="sms"
                name="sms"
                className="mt-1 w-4 h-4 rounded border-border text-secondary focus:ring-secondary"
              />
              <label htmlFor="sms" className="text-xs text-text-light leading-relaxed">
                I agree to receive text messages regarding my quote request. Message and data rates may apply. Reply STOP to opt out.
              </label>
            </div>

            <Button
              type="submit"
              variant={submitted ? 'primary' : 'cta'}
              size="large"
              className={`w-full ${submitted ? '!bg-success' : ''}`}
            >
              {submitted ? 'Request Sent!' : 'Send Request'}
            </Button>
          </form>
        </AnimateOnScroll>

        {/* Contact Info */}
        <AnimateOnScroll delay={0.15}>
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-xl text-primary">
              Get in Touch
            </h3>
            <p className="text-text-light text-sm">
              Prefer to reach out directly? We are here to help.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Phone</h4>
                  <p className="text-text-light text-sm">{COMPANY.phone}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Email</h4>
                  <p className="text-text-light text-sm">{COMPANY.email}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Service Area</h4>
                  <p className="text-text-light text-sm">
                    {SERVICE_AREAS.join(', ')}, and surrounding areas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary">Business Hours</h4>
                  <p className="text-text-light text-sm">
                    {BUSINESS_HOURS.weekday}
                    <br />
                    {BUSINESS_HOURS.saturday}
                    <br />
                    {BUSINESS_HOURS.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  );
}

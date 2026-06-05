"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import HorizontalDivider from "@/components/HorizontalDivider";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out with any questions or to learn more about our services."
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-6">📍 Address</h3>
              <p className="text-gray-700">
                Atlanta, Georgia<br />
                United States
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-6">📞 Phone</h3>
              <p className="text-gray-700">
                <a href="tel:+18338327278" className="text-[#1C93D1] hover:underline">
                  (833) CARESMART
                </a>
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-bold text-gray-900 mb-6">✉️ Email</h3>
              <p className="text-gray-700">
                <a href="mailto:info@caresmart.com" className="text-[#1C93D1] hover:underline">
                  info@caresmart.com
                </a>
              </p>
            </Card>
          </div>

          <HorizontalDivider className="my-8" />

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto mt-16">
            <SectionHeading title="Send Us a Message" centered={false} underline={false} />

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                ✓ Thank you! We've received your message and will get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C93D1] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C93D1] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C93D1] focus:border-transparent"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C93D1] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="services">Services Question</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="careers">Career Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C93D1] focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <HorizontalDivider className="my-8" />

      {/* Additional Resources */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-[#EBF6FD] to-green-50">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Quick Links" subtitle="Find what you're looking for" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverable>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Explore Services</h3>
              <p className="text-gray-600 mb-4">
                Learn more about our comprehensive case management services.
              </p>
              <a href="/services" className="text-[#1C93D1] font-semibold hover:underline">
                View Services →
              </a>
            </Card>

            <Card hoverable>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Join Our Team</h3>
              <p className="text-gray-600 mb-4">
                Interested in a career with Caresmart? Check out our open positions.
              </p>
              <a href="/careers" className="text-[#1C93D1] font-semibold hover:underline">
                View Careers →
              </a>
            </Card>

            <Card hoverable>
              <h3 className="text-lg font-bold text-gray-900 mb-3">About Us</h3>
              <p className="text-gray-600 mb-4">
                Discover our mission, values, and commitment to excellence.
              </p>
              <a href="/about" className="text-[#1C93D1] font-semibold hover:underline">
                Learn More →
              </a>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

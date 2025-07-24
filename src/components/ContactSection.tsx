"use client"
import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Star, Shield, Clock, Globe, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

type SubmitStatus = "success" | "error" | ""

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-15 scroll-mt-24 px-6">
      <div className="max-w-7xl mx-auto z-30">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#fca5a5', color: 'white' }}>
            📞 Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Start Delivering?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact us today to discuss your delivery needs and get a customized solution for your business.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-xl text-white mr-4" style={{ backgroundColor: '#fca5a5' }}>
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600">support@uddaka.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-xl text-white mr-4" style={{ backgroundColor: '#fca5a5' }}>
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+91 93151 32367</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="p-3 rounded-xl text-white mr-4" style={{ backgroundColor: '#fca5a5' }}>
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Visit Us</p>
                    <p className="text-gray-600">SK-III/6G-4, Indirapuram, Ghaziabad, (U.P.), India 201014</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8 text-black" style={{ backgroundColor: '#fca5a5' }}>
              <h3 className="text-xl font-bold mb-4">Why Choose Uddaka?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="h-5 w-5 mr-3" /> 99.5% On-time delivery rate
                </li>
                <li className="flex items-center">
                  <Shield className="h-5 w-5 mr-3" /> Fully insured packages
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" /> 24/7 customer support
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 mr-3" /> 500+ cities coverage
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ '--tw-ring-color': '#fca5a5' } as React.CSSProperties}
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ '--tw-ring-color': '#fca5a5' } as React.CSSProperties}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ '--tw-ring-color': '#fca5a5' } as React.CSSProperties}
                    placeholder="Enter your phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ '--tw-ring-color': '#fca5a5' } as React.CSSProperties}
                    placeholder="Enter company name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                  style={{ '--tw-ring-color': '#fca5a5' } as React.CSSProperties}
                  placeholder="Tell us about your delivery needs..."
                />
              </div>
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#fca5a5', color: 'white', border: `1px solid #fca5a5` }}>
                  Thank you for your message! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-4 rounded-xl" style={{ backgroundColor: '#fca5a5', color: 'white', border: `1px solid #fca5a5` }}>
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-black py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: '#fca5a5',
                  '--tw-bg-opacity': '1'
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f87171'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fca5a5'
                }}
              >
                {isSubmitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5 text-black" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

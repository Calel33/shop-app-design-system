import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Star, Send, Calendar } from 'lucide-react'
import { ContactDealerProps, ContactFormData } from '../types/automotive.types'

export const ContactDealer: React.FC<ContactDealerProps> = ({
  dealer,
  vehicle,
  onSubmit,
  className = '',
  showTestDrive = true
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    message: '',
    requestType: 'general',
    preferredTime: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await onSubmit(formData)
      setSubmitStatus('success')
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredContact: 'email',
        message: '',
        requestType: 'general',
        preferredTime: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.firstName && formData.lastName && 
                     formData.email && formData.phone

  return (
    <div className={`contact-dealer ${className}`}>
      {/* Dealer Information Card */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{dealer.name}</h3>
            {dealer.rating && (
              <div className="flex items-center space-x-1 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${
                        star <= dealer.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({dealer.rating}/5)</span>
              </div>
            )}
          </div>
          {dealer.distance && (
            <div className="text-sm text-gray-600">
              {dealer.distance} miles away
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">{dealer.address}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-gray-400" />
            <a href={`tel:${dealer.phone}`} className="text-blue-600 hover:text-blue-700">
              {dealer.phone}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-gray-700">{dealer.hours}</span>
          </div>
          {dealer.email && (
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-gray-400" />
              <a href={`mailto:${dealer.email}`} className="text-blue-600 hover:text-blue-700">
                {dealer.email}
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Send className="h-5 w-5 text-blue-600" />
          <h4 className="text-lg font-semibold text-gray-900">Contact Dealer</h4>
        </div>

        {/* Vehicle Context */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-700">
            <strong>Inquiring about:</strong> {vehicle.year} {vehicle.make} {vehicle.model}
            {vehicle.trim && ` ${vehicle.trim}`}
          </div>
          {vehicle.stockNumber && (
            <div className="text-xs text-gray-600 mt-1">
              Stock #: {vehicle.stockNumber}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Request Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I'm interested in:
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                { value: 'test-drive', label: 'Test Drive', icon: Calendar },
                { value: 'quote', label: 'Get Quote', icon: Phone },
                { value: 'financing', label: 'Financing', icon: Mail },
                { value: 'trade-in', label: 'Trade-In', icon: MapPin },
                { value: 'general', label: 'General Info', icon: Send }
              ].map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleInputChange('requestType', option.value as ContactFormData['requestType'])}
                  className={`p-3 rounded-lg border text-sm font-medium transition-colors flex flex-col items-center space-y-1 ${
                    formData.requestType === option.value
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <option.icon className="h-4 w-4" />
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your last name"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="(555) 123-4567"
                required
              />
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <div className="flex space-x-4">
              {[
                { value: 'email', label: 'Email' },
                { value: 'phone', label: 'Phone' },
                { value: 'text', label: 'Text Message' }
              ].map(option => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={option.value}
                    checked={formData.preferredContact === option.value}
                    onChange={(e) => handleInputChange('preferredContact', e.target.value as ContactFormData['preferredContact'])}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Test Drive Scheduling */}
          {showTestDrive && formData.requestType === 'test-drive' && (
            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <input
                type="datetime-local"
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min={new Date().toISOString().slice(0, 16)}
              />
            </div>
          )}

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Tell us more about what you're looking for..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-4">
            <div className="text-xs text-gray-500">
              * Required fields
            </div>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <div className="text-green-600 text-sm">
                  ✓ Your message has been sent successfully! A representative will contact you soon.
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <div className="text-red-600 text-sm">
                  ✗ There was an error sending your message. Please try again or contact us directly.
                </div>
              </div>
            </div>
          )}
        </form>

        {/* Quick Contact Options */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-sm text-gray-600 mb-3">
            Or contact us directly:
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${dealer.phone}`}
              className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            {dealer.email && (
              <a
                href={`mailto:${dealer.email}?subject=Inquiry about ${vehicle.year} ${vehicle.make} ${vehicle.model}&body=Hi, I'm interested in learning more about the ${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ''}${vehicle.stockNumber ? ` (Stock #${vehicle.stockNumber})` : ''}.`}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm font-medium">Email</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
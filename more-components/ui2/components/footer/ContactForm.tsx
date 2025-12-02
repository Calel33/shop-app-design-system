import { useState, FormEvent } from 'react';
import { Mail, Phone, Check, Send } from 'lucide-react';
import { ContactFormProps, ContactFormData, FormState } from './types';

export const ContactForm = ({ contactInfo, onSubmit, className = '' }: ContactFormProps) => {
  const [formState, setFormState] = useState<FormState<ContactFormData>>({
    status: 'idle',
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'product',
    message: '',
    nda: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setFormState({ status: 'error', error: 'Name and email are required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormState({ status: 'error', error: 'Please enter a valid email address' });
      return;
    }

    setFormState({ status: 'loading' });

    try {
      await onSubmit(formData);
      setFormState({ status: 'success' });
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: 'product',
        message: '',
        nda: false,
      });
      setTimeout(() => setFormState({ status: 'idle' }), 3000);
    } catch (error) {
      setFormState({ 
        status: 'error', 
        error: error instanceof Error ? error.message : 'Failed to submit form' 
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (formState.status === 'error') {
      setFormState({ status: 'idle' });
    }
  };

  const getBadgeStyles = () => {
    const variant = contactInfo.statusBadge?.variant || 'success';
    const baseStyles = 'inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs';
    
    const variantStyles = {
      success: 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20',
      warning: 'bg-amber-400/10 text-amber-300 ring-1 ring-amber-300/20',
      info: 'bg-blue-400/10 text-blue-300 ring-1 ring-blue-300/20',
    };

    return `${baseStyles} ${variantStyles[variant]}`;
  };

  const inputBaseStyles = "w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-green-400/60 focus:border-green-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3";
  const labelStyles = "block text-xs font-medium text-white/80 mb-1";

  return (
    <div className={`mt-6 rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 md:p-12 ${className}`}>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="lg:w-1/3 space-y-4">
            {contactInfo.statusBadge && (
              <div className={getBadgeStyles()}>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {contactInfo.statusBadge.text}
              </div>
            )}
            
            <h4 className="text-white font-semibold tracking-tight">Start a project</h4>
            
            <ul className="space-y-2 text-sm text-neutral-300">
              {contactInfo.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 pt-2 text-sm">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 text-white hover:text-green-300 transition"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
              <span className="text-white/20">•</span>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 text-white hover:text-green-300 transition"
              >
                <Phone className="w-4 h-4" />
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Contact Form - Takes up remaining space */}
          <form onSubmit={handleSubmit} className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label htmlFor="name" className={labelStyles}>
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                className={inputBaseStyles}
                disabled={formState.status === 'loading'}
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className={labelStyles}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className={inputBaseStyles}
                disabled={formState.status === 'loading'}
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="company" className={labelStyles}>
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc."
                className={inputBaseStyles}
                disabled={formState.status === 'loading'}
              />
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="projectType" className={labelStyles}>
                Project type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`${inputBaseStyles} appearance-none`}
                disabled={formState.status === 'loading'}
              >
                <option className="bg-neutral-900" value="product">
                  New product build
                </option>
                <option className="bg-neutral-900" value="feature">
                  Feature delivery
                </option>
                <option className="bg-neutral-900" value="advisory">
                  Advisory / audit
                </option>
                <option className="bg-neutral-900" value="ai">
                  AI integration
                </option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelStyles}>
                What are you building?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="A few sentences about your goals, timeline, and success metrics."
                className={inputBaseStyles}
                disabled={formState.status === 'loading'}
              />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex gap-2 text-xs text-white/70 items-center">
                <input
                  id="nda"
                  name="nda"
                  type="checkbox"
                  checked={formData.nda}
                  onChange={handleChange}
                  className="h-4 w-4 rounded bg-white/10 border-white/20 text-green-400 focus:ring-green-400/60"
                  disabled={formState.status === 'loading'}
                />
                <label htmlFor="nda">Please send an NDA</label>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="inline-flex gap-2 ring-1 ring-green-300 hover:bg-green-300 transition text-sm font-medium text-neutral-900 bg-green-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {formState.status === 'loading' ? 'Sending...' : 'Send request'}
                </button>
                
                {formState.status === 'success' && (
                  <span className="text-xs text-emerald-300">Message sent successfully!</span>
                )}
                {formState.status === 'error' && formState.error && (
                  <span className="text-xs text-red-300">{formState.error}</span>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

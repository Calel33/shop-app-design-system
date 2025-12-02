import { useState, FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { NewsletterFormProps, FormState } from './types';

export const NewsletterForm = ({ onSubscribe, className = '' }: NewsletterFormProps) => {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState<string>>({
    status: 'idle',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setFormState({ status: 'error', error: 'Email is required' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState({ status: 'error', error: 'Please enter a valid email' });
      return;
    }

    setFormState({ status: 'loading' });

    try {
      await onSubscribe(email);
      setFormState({ status: 'success' });
      setEmail('');
      setTimeout(() => setFormState({ status: 'idle' }), 3000);
    } catch (error) {
      setFormState({
        status: 'error',
        error: error instanceof Error ? error.message : 'Failed to subscribe',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (formState.status === 'error') {
      setFormState({ status: 'idle' });
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Mail 
            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" 
            style={{ color: 'rgba(255, 255, 255, 0.4)' }}
          />
          <input
            type="email"
            name="subscribeEmail"
            required
            value={email}
            onChange={handleChange}
            placeholder="you@example.com"
            disabled={formState.status === 'loading'}
            className="w-full outline-none transition text-xs rounded-xl pt-2.5 pr-3 pb-2.5 pl-9 disabled:opacity-50 placeholder-white/40 border border-white/10 bg-white/10 text-white"
            style={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.1)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--green-300)';
              e.target.style.boxShadow = '0 0 0 2px rgba(34, 197, 94, 0.3)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <button
          type="submit"
          disabled={formState.status === 'loading'}
          className="inline-flex gap-2 ring-1 ring-white/80 rounded-xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 items-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs font-medium bg-white text-gray-900 hover:bg-green-400"
          style={{
            color: 'var(--gray-900)'
          }}
        >
          {formState.status === 'loading' ? 'Joining...' : 'Join'}
        </button>
      </form>
      
      {formState.status === 'success' && (
        <p 
          className="mt-2 text-xs"
          style={{ color: 'var(--success-light)' }}
        >
          Successfully subscribed!
        </p>
      )}
      {formState.status === 'error' && formState.error && (
        <p 
          className="mt-2 text-xs"
          style={{ color: 'var(--error-light)' }}
        >
          {formState.error}
        </p>
      )}
    </div>
  );
};

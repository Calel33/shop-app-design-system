import type { PaymentMethod } from './types';

interface CardBrandIconProps {
  brand: PaymentMethod;
  className?: string;
}

export const VisaIcon = ({ className = 'w-8 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#1434CB"/>
    <path d="M20.346 11.084h-3.274l-2.046 9.832h3.274l2.046-9.832zm10.306 6.362l1.728-4.758.996 4.758h-2.724zm3.644 3.47h3.022l-2.636-9.832h-2.788c-.628 0-1.156.364-1.39.924l-4.894 8.908h3.442l.684-1.892h4.206l.354 1.892zM24.862 15.474c.014 1.456-1.304 2.268-2.3 2.752-1.02.496-1.362.812-1.358 1.254-.008.676.808 1.402 2.552 1.402.872-.014 1.502-.154 2.006-.326l.24-.114.368 2.268c-.56.204-1.28.39-2.194.39-3.28 0-5.588-1.742-5.606-4.236-.02-1.846 1.648-2.874 2.906-3.488 1.292-.63 1.726-1.034 1.72-1.598-.006-.864-1.036-1.262-1.996-1.262-1.332-.022-2.106.18-2.724.422l-.328.156-.358-2.22c.658-.302 1.872-.564 3.134-.576 3.488 0 5.766 1.722 5.938 4.176zm9.468-6.39h-2.524c-.784 0-1.37.226-1.714.978l-4.864 8.854h3.282l1.07-2.982h3.93l.62 2.982h2.902l-2.532-9.832h-.17z" fill="white"/>
  </svg>
);

export const MastercardIcon = ({ className = 'w-8 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#EB001B"/>
    <circle cx="18" cy="16" r="10" fill="#FF5F00"/>
    <circle cx="30" cy="16" r="10" fill="#F79E1B"/>
    <path d="M24 10.5c2.1 1.8 3.5 4.5 3.5 7.5s-1.4 5.7-3.5 7.5c-2.1-1.8-3.5-4.5-3.5-7.5s1.4-5.7 3.5-7.5z" fill="#FF5F00"/>
  </svg>
);

export const AmexIcon = ({ className = 'w-8 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#006FCF"/>
    <path d="M10 12h4l1 2 1-2h4v6l2-6h4l2 6v-6h4l1 2 1-2h4l-3 8h-4l-1-2-1 2h-11v-2l-1 2h-4l-3-8zm28 8h-4l-1-2-1 2h-4l3-4-3-4h4l1 2 1-2h4l-3 4 3 4z" fill="white"/>
  </svg>
);

export const PayPalIcon = ({ className = 'w-8 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#003087"/>
    <path d="M18.5 10h5.8c2.6 0 4.2 1.3 4.2 3.5 0 2.4-1.8 4-4.5 4h-2.3l-.8 3.5h-2.4l2-11zm4.8 2h-1.8l-.6 3.5h1.8c1.4 0 2.3-.8 2.3-1.9 0-.9-.6-1.6-1.7-1.6z" fill="#009CDE"/>
    <path d="M29.5 10h5.8c2.6 0 4.2 1.3 4.2 3.5 0 2.4-1.8 4-4.5 4h-2.3l-.8 3.5h-2.4l2-11zm4.8 2h-1.8l-.6 3.5h1.8c1.4 0 2.3-.8 2.3-1.9 0-.9-.6-1.6-1.7-1.6z" fill="#012169"/>
  </svg>
);

export const DiscoverIcon = ({ className = 'w-8 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#FF6000"/>
    <circle cx="38" cy="16" r="10" fill="#F26522"/>
    <path d="M8 12h3v8h-3v-8zm4 0h3.5c2 0 3.5 1.3 3.5 4s-1.5 4-3.5 4H12v-8zm3 6.5c1.3 0 2-.8 2-2.5s-.7-2.5-2-2.5h-.5v5h.5z" fill="white"/>
  </svg>
);

export const ApplePayIcon = ({ className = 'w-8 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="32" rx="4" fill="#000"/>
    <path d="M12 16c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm7-7c1.7 0 3 1.3 3 3v8c0 1.7-1.3 3-3 3h-6c-1.7 0-3-1.3-3-3v-8c0-1.7 1.3-3 3-3h6zm-3 2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z" fill="white"/>
    <text x="28" y="20" fill="white" fontSize="8" fontFamily="Arial">Pay</text>
  </svg>
);

export const CardBrandIcon = ({ brand, className }: CardBrandIconProps) => {
  const icons = {
    visa: VisaIcon,
    mastercard: MastercardIcon,
    amex: AmexIcon,
    paypal: PayPalIcon,
    discover: DiscoverIcon,
    'apple-pay': ApplePayIcon,
  };

  const Icon = icons[brand];
  return Icon ? <Icon className={className} /> : null;
};

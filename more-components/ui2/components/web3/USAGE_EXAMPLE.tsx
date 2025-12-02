/**
 * Complete Usage Example for Aura Web3 Landing Page
 * @module USAGE_EXAMPLE
 */

import React from 'react';
import { AuraLanding } from './AuraLanding';
import type { AuraLandingProps } from './types';

/**
 * Example 1: Complete Landing Page with All Sections
 */
export const CompleteAuraExample: React.FC = () => {
  const landingData: AuraLandingProps = {
    header: {
      logo: { text: 'Aura', href: '#' },
      navigation: [
        { label: 'Home', href: '#home' },
        { label: 'Infrastructure', href: '#infrastructure' },
        { label: 'Validators', href: '#validators' },
        { label: 'Networks', href: '#networks' },
        { label: 'Staking', href: '#staking' },
        { label: 'Ecosystem', href: '#community' },
      ],
      ctaButton: {
        text: 'Join Testnet',
        href: '#beta',
        icon: 'zap',
      },
    },

    hero: {
      statusBadge: {
        text: 'Live on Mainnet',
        badge: 'Production Ready',
      },
      headline: 'Meet Aura',
      highlightedText: 'Web3 Infrastructure',
      description:
        'Professional blockchain infrastructure powering the next generation of decentralized networks. Secure validation, lightning-fast RPC endpoints, and seamless IBC relaying across 50+ networks.',
      stats: [
        { value: '50+', label: 'Networks' },
        { value: '99.9%', label: 'Uptime' },
        { value: '$2.8B', label: 'Total Staked' },
        { value: '15k+', label: 'Delegators' },
      ],
      floatingTags: [
        { text: 'Lightning Fast', icon: 'zap', delay: -1 },
        { text: 'Global Network', icon: 'globe', delay: -2 },
        { text: '24/7 Monitoring', icon: 'shield', delay: -3 },
        { text: 'Auto Scaling', icon: 'cpu', delay: -4 },
      ],
      primaryCta: {
        text: 'Explore Infrastructure',
        href: '#infrastructure',
      },
      secondaryCta: {
        text: 'View Validators',
        href: '#validators',
      },
    },

    networks: {
      title: 'Trusted by Leading Networks',
      description:
        'Providing secure validation and infrastructure services across multiple blockchain ecosystems',
      networks: [
        { symbol: 'ATOM', name: 'Cosmos' },
        { symbol: 'OSMO', name: 'Osmosis' },
        { symbol: 'JUNO', name: 'Juno' },
        { symbol: 'STAR', name: 'Stargaze' },
        { symbol: 'EVMOS', name: 'Evmos' },
        { symbol: 'AKASH', name: 'Akash' },
      ],
    },

    pricing: {
      title: 'Simple, Transparent Pricing',
      description:
        'Choose the perfect plan for your infrastructure needs. All plans include 24/7 monitoring and support.',
      plans: [
        {
          name: 'Starter',
          description: 'Perfect for individual validators and small projects',
          price: '$49',
          period: 'month',
          features: [
            'Up to 3 validator nodes',
            'Basic RPC endpoints',
            '24/7 monitoring',
            'Email support',
            '99.9% SLA',
          ],
          buttonText: 'Get Started',
        },
        {
          name: 'Professional',
          description: 'Ideal for growing networks and enterprise validators',
          price: '$199',
          period: 'month',
          features: [
            'Up to 15 validator nodes',
            'Premium RPC endpoints',
            'IBC relaying services',
            'Advanced monitoring & alerts',
            'Priority support',
            '99.99% SLA',
          ],
          highlighted: true,
          buttonText: 'Start Free Trial',
        },
        {
          name: 'Enterprise',
          description: 'Custom solutions for large-scale operations',
          price: 'Custom',
          features: [
            'Unlimited validator nodes',
            'Dedicated infrastructure',
            'Custom integrations',
            'White-label solutions',
            'Dedicated support team',
            '99.99% SLA guarantee',
          ],
          buttonText: 'Contact Sales',
        },
      ],
      footer: {
        guaranteeText: 'All plans include a 30-day money-back guarantee',
        features: [
          { icon: 'shield', text: 'Enterprise Security' },
          { icon: 'headphones', text: '24/7 Support' },
          { icon: 'zap', text: '99.9% Uptime' },
        ],
      },
    },

    testimonials: {
      title: 'Trusted by Web3 Leaders',
      description:
        'See what leading validators and developers say about our infrastructure platform',
      testimonials: [
        {
          rating: 5,
          quote:
            "Aura's infrastructure has been rock-solid for our validator operations. Their monitoring and alerting system helped us maintain 100% uptime across all networks.",
          author: 'Sarah Mitchell',
          role: 'Lead Validator, CosmosHub',
          initials: 'SM',
          avatarColor: 'orange',
        },
        {
          rating: 5,
          quote:
            'The RPC endpoints are incredibly fast and reliable. Our dApp users have noticed the significant improvement in transaction speeds since switching to Aura.',
          author: 'David Kim',
          role: 'CTO, DeFi Protocol',
          initials: 'DK',
          avatarColor: 'blue',
        },
        {
          rating: 5,
          quote:
            'Their IBC relaying service is exceptional. Cross-chain transactions are processed smoothly, and their technical support team is always responsive.',
          author: 'Alex Liu',
          role: 'Founder, Cross-chain Bridge',
          initials: 'AL',
          avatarColor: 'purple',
        },
      ],
      metrics: [
        { value: '500+', label: 'Active Validators' },
        { value: '99.99%', label: 'Average Uptime' },
        { value: '1M+', label: 'Transactions/Day' },
        { value: '24/7', label: 'Support' },
      ],
    },

    faq: {
      title: 'Frequently Asked Questions',
      description:
        'Everything you need to know about our infrastructure platform and services',
      faqs: [
        {
          question: 'What networks do you support?',
          answer:
            'We support 50+ blockchain networks including Cosmos Hub, Osmosis, Juno, Stargaze, Evmos, Akash, and many more. Our infrastructure spans across all major Cosmos SDK networks and we\'re constantly adding support for new chains as they launch.',
        },
        {
          question: 'How do you ensure high availability?',
          answer:
            'Our infrastructure is built with redundancy in mind. We operate multiple geographically distributed data centers, implement automated failover systems, and maintain 24/7 monitoring with instant alerts. This allows us to achieve 99.99% uptime consistently.',
        },
        {
          question: 'Can I migrate my existing validators to Aura?',
          answer:
            'Absolutely! Our team provides comprehensive migration support to help you transition your existing validator operations seamlessly. We handle the technical aspects while ensuring zero downtime and maintaining your validator performance metrics.',
        },
        {
          question: 'What kind of monitoring do you provide?',
          answer:
            'We provide comprehensive monitoring including validator performance metrics, network health status, alerting for missed blocks or governance proposals, and detailed analytics dashboards. All metrics are available through our web interface and API.',
        },
        {
          question: 'Do you offer custom enterprise solutions?',
          answer:
            'Yes, our Enterprise plan includes custom solutions tailored to your specific needs. This includes dedicated infrastructure, white-label services, custom integrations, and dedicated support teams. Contact our sales team to discuss your requirements.',
        },
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept credit cards (Visa, Mastercard, American Express), wire transfers, and cryptocurrency payments (USDC, USDT, BTC, ETH). Enterprise customers can also arrange custom payment terms.',
        },
      ],
    },

    footer: {
      logo: { text: 'Aura' },
      description:
        'Professional blockchain infrastructure for the next generation of decentralized networks.',
      socialLinks: [
        { name: 'Twitter', href: 'https://twitter.com/aura', icon: 'twitter' },
        { name: 'GitHub', href: 'https://github.com/aura', icon: 'github' },
        { name: 'Discord', href: 'https://discord.gg/aura', icon: 'discord' },
      ],
      copyright: '© 2024 Aura Infrastructure. All rights reserved.',
    },

    splineBackground: 'https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx',
  };

  return <AuraLanding {...landingData} />;
};

/**
 * Example 2: Minimal Landing Page (No 3D Background)
 */
export const MinimalAuraExample: React.FC = () => {
  return (
    <AuraLanding
      splineBackground={undefined}
      header={{
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Features', href: '#features' },
          { label: 'Pricing', href: '#pricing' },
        ],
      }}
      hero={{
        headline: 'Simple',
        highlightedText: 'Web3 Infrastructure',
        description: 'Get started with professional blockchain infrastructure.',
        stats: [
          { value: '50+', label: 'Networks' },
          { value: '99.9%', label: 'Uptime' },
        ],
        primaryCta: { text: 'Get Started', href: '#signup' },
      }}
      footer={{
        socialLinks: [
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
        ],
      }}
    />
  );
};

/**
 * Example 3: Custom Branding
 */
export const CustomBrandedExample: React.FC = () => {
  return (
    <AuraLanding
      header={{
        logo: { text: 'MyValidator', href: '/' },
        navigation: [
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Contact', href: '#contact' },
        ],
        ctaButton: { text: 'Delegate Now', href: '#delegate' },
      }}
      hero={{
        headline: 'Your Trusted',
        highlightedText: 'Validator Service',
        description: 'Secure, reliable, and professional blockchain validation.',
        stats: [
          { value: '100%', label: 'Uptime' },
          { value: '$5M', label: 'Staked' },
        ],
        primaryCta: { text: 'Learn More', href: '#about' },
      }}
      footer={{
        logo: { text: 'MyValidator' },
        description: 'Professional validator services since 2020.',
        socialLinks: [
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
          { name: 'Discord', href: 'https://discord.com', icon: 'discord' },
        ],
        copyright: '© 2024 MyValidator. All rights reserved.',
      }}
    />
  );
};

export default CompleteAuraExample;

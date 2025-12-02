/**
 * Layout Examples for Aura Web3 Components
 * Demonstrates different layout configurations and component compositions
 * @module LAYOUT_EXAMPLES
 */

import React from 'react';
import {
  AuraHeader,
  AuraHero,
  NetworksSection,
  PricingSection,
  TestimonialsSection,
  FAQSection,
  AuraFooter,
} from './index';

/**
 * Layout 1: Hero + Pricing Only (Simple Landing)
 */
export const SimpleLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AuraHeader
        navigation={[
          { label: 'Home', href: '#home' },
          { label: 'Pricing', href: '#pricing' },
        ]}
      />
      
      <AuraHero
        headline="Meet Aura"
        highlightedText="Web3 Infrastructure"
        description="Professional blockchain infrastructure at your fingertips."
        stats={[
          { value: '50+', label: 'Networks' },
          { value: '99.9%', label: 'Uptime' },
        ]}
        primaryCta={{ text: 'Get Started', href: '#pricing' }}
      />
      
      <PricingSection
        title="Choose Your Plan"
        description="Simple, transparent pricing for everyone."
        plans={[
          {
            name: 'Starter',
            description: 'For individuals',
            price: '$49',
            period: 'month',
            features: ['3 nodes', 'Basic support', '99.9% SLA'],
            buttonText: 'Get Started',
          },
          {
            name: 'Pro',
            description: 'For teams',
            price: '$199',
            period: 'month',
            features: ['15 nodes', 'Priority support', '99.99% SLA'],
            highlighted: true,
            buttonText: 'Start Trial',
          },
        ]}
      />
      
      <AuraFooter
        socialLinks={[
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
        ]}
      />
    </div>
  );
};

/**
 * Layout 2: Networks Showcase
 */
export const NetworksShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AuraHeader
        navigation={[
          { label: 'Networks', href: '#networks' },
          { label: 'About', href: '#about' },
        ]}
      />
      
      <AuraHero
        headline="Supporting"
        highlightedText="50+ Blockchain Networks"
        description="Connect to the most reliable infrastructure across all major chains."
        stats={[
          { value: '50+', label: 'Networks' },
          { value: '1M+', label: 'Transactions/Day' },
          { value: '99.99%', label: 'Uptime' },
        ]}
        primaryCta={{ text: 'View Networks', href: '#networks' }}
      />
      
      <NetworksSection
        title="Supported Networks"
        description="We validate on the most popular Cosmos SDK chains"
        networks={[
          { symbol: 'ATOM', name: 'Cosmos' },
          { symbol: 'OSMO', name: 'Osmosis' },
          { symbol: 'JUNO', name: 'Juno' },
          { symbol: 'STAR', name: 'Stargaze' },
          { symbol: 'EVMOS', name: 'Evmos' },
          { symbol: 'AKASH', name: 'Akash' },
          { symbol: 'SCRT', name: 'Secret' },
          { symbol: 'BAND', name: 'Band' },
          { symbol: 'REGEN', name: 'Regen' },
        ]}
      />
      
      <AuraFooter
        socialLinks={[
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
          { name: 'GitHub', href: 'https://github.com', icon: 'github' },
        ]}
      />
    </div>
  );
};

/**
 * Layout 3: Testimonials + FAQ Focus
 */
export const TrustBuilder: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AuraHeader
        navigation={[
          { label: 'Home', href: '#home' },
          { label: 'Reviews', href: '#reviews' },
          { label: 'FAQ', href: '#faq' },
        ]}
      />
      
      <AuraHero
        headline="Trusted by"
        highlightedText="500+ Validators"
        description="Join the most reliable Web3 infrastructure platform."
        stats={[
          { value: '500+', label: 'Validators' },
          { value: '4.9/5', label: 'Rating' },
        ]}
        primaryCta={{ text: 'Read Reviews', href: '#reviews' }}
      />
      
      <TestimonialsSection
        title="What Our Customers Say"
        description="Real feedback from real validators"
        testimonials={[
          {
            rating: 5,
            quote: 'Best infrastructure provider in the Cosmos ecosystem.',
            author: 'John Doe',
            role: 'Validator, Cosmos Hub',
            avatarColor: 'orange',
          },
          {
            rating: 5,
            quote: 'Reliable, fast, and great support team.',
            author: 'Jane Smith',
            role: 'CTO, DeFi Project',
            avatarColor: 'blue',
          },
          {
            rating: 5,
            quote: 'Switched from another provider and never looked back.',
            author: 'Mike Johnson',
            role: 'Founder, DAO',
            avatarColor: 'purple',
          },
        ]}
        metrics={[
          { value: '500+', label: 'Happy Customers' },
          { value: '99.99%', label: 'Uptime' },
        ]}
      />
      
      <FAQSection
        title="Common Questions"
        description="Everything you need to know"
        faqs={[
          {
            question: 'How do I get started?',
            answer: 'Sign up for an account, choose your plan, and deploy your first validator node in minutes.',
          },
          {
            question: 'What is your uptime guarantee?',
            answer: 'We guarantee 99.9% uptime on Starter plans and 99.99% on Pro and Enterprise plans.',
          },
          {
            question: 'Can I upgrade my plan later?',
            answer: 'Yes, you can upgrade or downgrade your plan at any time with no penalties.',
          },
        ]}
      />
      
      <AuraFooter
        socialLinks={[
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
          { name: 'Discord', href: 'https://discord.com', icon: 'discord' },
        ]}
      />
    </div>
  );
};

/**
 * Layout 4: Compact Single Page
 */
export const CompactLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <AuraHeader
        logo={{ text: 'Aura', href: '#' }}
        navigation={[
          { label: 'Home', href: '#home' },
          { label: 'Pricing', href: '#pricing' },
        ]}
        ctaButton={{ text: 'Sign Up', href: '#signup' }}
      />
      
      <AuraHero
        headline="Web3"
        highlightedText="Infrastructure"
        description="Reliable blockchain validation services."
        stats={[
          { value: '50+', label: 'Networks' },
          { value: '99.9%', label: 'Uptime' },
        ]}
        primaryCta={{ text: 'Get Started', href: '#pricing' }}
      />
      
      <PricingSection
        title="Pricing"
        description="Choose your plan"
        plans={[
          {
            name: 'Basic',
            description: 'Get started',
            price: '$49',
            period: 'month',
            features: ['3 nodes', 'Email support'],
            buttonText: 'Select',
          },
          {
            name: 'Pro',
            description: 'Most popular',
            price: '$199',
            period: 'month',
            features: ['15 nodes', 'Priority support'],
            highlighted: true,
            buttonText: 'Select',
          },
        ]}
      />
      
      <AuraFooter
        logo={{ text: 'Aura' }}
        socialLinks={[
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
        ]}
        copyright="© 2024 Aura"
      />
    </div>
  );
};

/**
 * Layout 5: Marketing-Focused with All Sections
 */
export const FullMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Spline Background */}
      <div className="spline-container fixed top-0 w-full h-screen -z-10">
        <iframe
          src="https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Background"
        />
      </div>

      <AuraHeader
        logo={{ text: 'Aura', href: '#' }}
        navigation={[
          { label: 'Home', href: '#home' },
          { label: 'Infrastructure', href: '#infrastructure' },
          { label: 'Networks', href: '#networks' },
          { label: 'Pricing', href: '#pricing' },
          { label: 'Testimonials', href: '#testimonials' },
        ]}
        ctaButton={{ text: 'Join Testnet', href: '#beta' }}
      />
      
      <AuraHero
        statusBadge={{ text: 'Live on Mainnet', badge: 'Production Ready' }}
        headline="Meet Aura"
        highlightedText="Web3 Infrastructure"
        description="Professional blockchain infrastructure powering the next generation."
        stats={[
          { value: '50+', label: 'Networks' },
          { value: '99.9%', label: 'Uptime' },
          { value: '$2.8B', label: 'Staked' },
          { value: '15k+', label: 'Delegators' },
        ]}
        floatingTags={[
          { text: 'Lightning Fast', icon: 'zap', delay: -1 },
          { text: 'Global Network', icon: 'globe', delay: -2 },
          { text: '24/7 Monitoring', icon: 'shield', delay: -3 },
          { text: 'Auto Scaling', icon: 'cpu', delay: -4 },
        ]}
        primaryCta={{ text: 'Explore Infrastructure', href: '#infrastructure' }}
        secondaryCta={{ text: 'View Validators', href: '#validators' }}
      />
      
      <NetworksSection
        title="Trusted by Leading Networks"
        description="Secure validation across 50+ blockchain ecosystems"
        networks={[
          { symbol: 'ATOM', name: 'Cosmos' },
          { symbol: 'OSMO', name: 'Osmosis' },
          { symbol: 'JUNO', name: 'Juno' },
          { symbol: 'STAR', name: 'Stargaze' },
          { symbol: 'EVMOS', name: 'Evmos' },
          { symbol: 'AKASH', name: 'Akash' },
        ]}
      />
      
      <PricingSection
        title="Simple, Transparent Pricing"
        description="Choose the perfect plan for your needs"
        plans={[
          {
            name: 'Starter',
            description: 'For individual validators',
            price: '$49',
            period: 'month',
            features: ['3 nodes', 'Basic RPC', '24/7 monitoring', 'Email support', '99.9% SLA'],
            buttonText: 'Get Started',
          },
          {
            name: 'Professional',
            description: 'For growing networks',
            price: '$199',
            period: 'month',
            features: ['15 nodes', 'Premium RPC', 'IBC relaying', 'Priority support', '99.99% SLA'],
            highlighted: true,
            buttonText: 'Start Trial',
          },
          {
            name: 'Enterprise',
            description: 'Custom solutions',
            price: 'Custom',
            features: ['Unlimited nodes', 'Dedicated infra', 'Custom integrations', 'Dedicated team', '99.99% SLA'],
            buttonText: 'Contact Sales',
          },
        ]}
        footer={{
          guaranteeText: '30-day money-back guarantee',
          features: [
            { icon: 'shield', text: 'Enterprise Security' },
            { icon: 'headphones', text: '24/7 Support' },
            { icon: 'zap', text: '99.9% Uptime' },
          ],
        }}
      />
      
      <TestimonialsSection
        title="Trusted by Web3 Leaders"
        description="Real feedback from our customers"
        testimonials={[
          {
            rating: 5,
            quote: 'Rock-solid infrastructure for our operations.',
            author: 'Sarah Mitchell',
            role: 'Lead Validator, CosmosHub',
            avatarColor: 'orange',
          },
          {
            rating: 5,
            quote: 'Fast and reliable RPC endpoints.',
            author: 'David Kim',
            role: 'CTO, DeFi Protocol',
            avatarColor: 'blue',
          },
          {
            rating: 5,
            quote: 'Exceptional IBC relaying service.',
            author: 'Alex Liu',
            role: 'Founder, Cross-chain Bridge',
            avatarColor: 'purple',
          },
        ]}
        metrics={[
          { value: '500+', label: 'Validators' },
          { value: '99.99%', label: 'Uptime' },
          { value: '1M+', label: 'Tx/Day' },
          { value: '24/7', label: 'Support' },
        ]}
      />
      
      <FAQSection
        title="Frequently Asked Questions"
        description="Everything you need to know"
        faqs={[
          {
            question: 'What networks do you support?',
            answer: 'We support 50+ blockchain networks including all major Cosmos SDK chains.',
          },
          {
            question: 'How do you ensure high availability?',
            answer: 'Multiple data centers, automated failover, and 24/7 monitoring ensure 99.99% uptime.',
          },
          {
            question: 'Can I migrate existing validators?',
            answer: 'Yes! We provide comprehensive migration support with zero downtime.',
          },
        ]}
      />
      
      <AuraFooter
        logo={{ text: 'Aura' }}
        description="Professional blockchain infrastructure for the next generation."
        socialLinks={[
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
          { name: 'GitHub', href: 'https://github.com', icon: 'github' },
          { name: 'Discord', href: 'https://discord.com', icon: 'discord' },
        ]}
        copyright="© 2024 Aura Infrastructure. All rights reserved."
      />
    </div>
  );
};

export default {
  SimpleLanding,
  NetworksShowcase,
  TrustBuilder,
  CompactLanding,
  FullMarketingPage,
};

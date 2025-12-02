import React, { useEffect } from 'react';
import { Twitter, Instagram, DribbbleIcon as Dribbble, Zap, Calendar, ArrowRight } from 'lucide-react';
import { CreativeStudioLandingProps } from './types';
import { SplineBackground } from './SplineBackground';
import { CreativeStudioHero } from './CreativeStudioHero';
import { ProjectCard } from './ProjectCard';
import { ProcessSteps } from './ProcessSteps';
import { TestimonialsCarousel } from './TestimonialsCarousel';
import { PricingTiers } from './PricingTiers';
import { CreativeStudioFooter } from './CreativeStudioFooter';

export const CreativeStudioLanding: React.FC<CreativeStudioLandingProps> = ({
  className = ''
}) => {
  // Sample data for components
  const featuredProjects = [
    {
      title: "Brand Identity",
      description: "Complete visual identity for tech startup",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600&auto=format&fit=crop",
      category: "Visual Identity"
    },
    {
      title: "Mobile App Design",
      description: "User experience design for fintech platform",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop",
      category: "UI/UX Design"
    },
    {
      title: "Motion Graphics",
      description: "Animated explainer video series",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=600&auto=format&fit=crop",
      category: "Animation"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your brand, audience, and goals to create a solid foundation."
    },
    {
      number: "02",
      title: "Creative Development",
      description: "Our team crafts innovative concepts that bring your vision to life."
    },
    {
      number: "03",
      title: "Execution & Delivery",
      description: "We refine every detail to ensure pixel-perfect results that exceed expectations."
    }
  ];

  const testimonials = [
    {
      quote: "Lumi transformed our brand from ordinary to extraordinary. Their creative vision and attention to detail delivered results beyond our wildest dreams.",
      author: "Sarah Johnson, Marketing Director at TechFlow",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60",
      nextName: "Michael R.",
      nextAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60"
    },
    {
      quote: "Working with Lumi was a game-changer for our startup. They didn't just design our brand - they helped us discover our identity.",
      author: "Michael Rodriguez, CEO at InnovateTech",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60",
      nextName: "Emily C.",
      nextAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60"
    },
    {
      quote: "The level of creativity and professionalism from the Lumi team is unmatched. They brought our vision to life in ways we never imagined.",
      author: "Emily Chen, Creative Director at FutureForward",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60",
      nextName: "Sarah J.",
      nextAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60"
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: 2500,
      period: "project",
      description: "Perfect for startups and small businesses",
      features: [
        "Logo & Brand Identity",
        "Brand Guidelines",
        "3 Design Concepts",
        "2 Weeks Delivery"
      ],
      buttonText: "Get Started",
      badge: "Start Here"
    },
    {
      name: "Professional",
      price: 5500,
      period: "project",
      description: "For growing businesses ready to stand out",
      features: [
        "Complete Brand System",
        "UI/UX Design",
        "Marketing Materials",
        "Priority Support"
      ],
      buttonText: "Start Project",
      badge: "Most Popular",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for complex projects",
      features: [
        "Full Creative Direction",
        "Motion Graphics",
        "Dedicated Team",
        "24/7 Creative Support"
      ],
      buttonText: "Let's Talk",
      badge: "Premium"
    }
  ];

  const socialLinks = [
    {
      platform: "Twitter",
      href: "#",
      icon: Twitter
    },
    {
      platform: "Instagram",
      href: "#",
      icon: Instagram
    },
    {
      platform: "Dribbble",
      href: "#",
      icon: Dribbble
    }
  ];

  // Scroll animations setup
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all scroll elements
    document.querySelectorAll('.scroll-element').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`antialiased bg-background text-foreground ${className}`}>
      {/* Spline 3D Background */}
      <SplineBackground />

      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg ring-1 ring-border scroll-element fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-foreground tracking-tight">Lumi</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Analytics</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Platform</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Solutions</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Enterprise</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">Pricing</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <CreativeStudioHero />

      {/* Featured Work */}
      <section className="sm:py-20 pt-16 pb-16 scroll-element fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-border bg-gradient-to-br from-card to-background sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] sm:text-xs tracking-widest text-muted-foreground font-light uppercase mb-3">
                  (05) Portfolio
                </p>
                <h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-foreground">
                  Featured Work
                </h2>
                <p className="mt-4 text-xl text-muted-foreground">
                  Exploring the intersection of creativity and innovation
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  className={`scroll-element fade-in-up stagger-${index + 1}`}
                />
              ))}
            </div>

            <div className="text-center mt-12 scroll-element fade-in-up">
              <button className="inline-flex gap-2 hover:bg-muted transition-colors ring-1 ring-border text-sm font-medium text-background bg-foreground rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <ProcessSteps 
        title="Our Creative Process"
        steps={processSteps}
        image="https://images.unsplash.com/photo-1587614295999-6c1c3f7c1d38?q=80&w=800&auto=format&fit=crop"
      />

      {/* Testimonials */}
      <TestimonialsCarousel testimonials={testimonials} />

      {/* Pricing */}
      <PricingTiers 
        title="Creative Services Packages"
        tiers={pricingTiers}
        billingToggle={{
          monthly: "Monthly",
          yearly: "Yearly",
          savings: "Save 20% annually"
        }}
      />

      {/* CTA Banner */}
      <section className="sm:py-20 pt-16 pb-16 scroll-element fade-in-up">
        <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
          <div className="bg-gradient-to-br from-card to-background ring-1 ring-border rounded-3xl sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6 text-center">
            <h3 className="text-3xl sm:text-5xl font-light tracking-tighter text-foreground mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Let's collaborate and bring your creative vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 py-3 text-sm font-medium transition-colors">
                <Zap className="w-4 h-4" />
                Start Your Project
              </button>
              <button className="inline-flex items-center gap-2 ring-1 ring-border text-muted-foreground hover:bg-muted rounded-full px-6 py-3 text-sm font-medium transition-colors">
                <Calendar className="w-4 h-4" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <CreativeStudioFooter socialLinks={socialLinks} />

      {/* Custom CSS for animations */}
      <style>{`
        .scroll-element {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in-up {
          transform: translateY(40px);
        }
        
        .fade-in-left {
          transform: translateX(-40px);
        }
        
        .fade-in-right {
          transform: translateX(40px);
        }
        
        .stagger-1 {
          transition-delay: 0.1s;
        }
        
        .stagger-2 {
          transition-delay: 0.2s;
        }
        
        .stagger-3 {
          transition-delay: 0.3s;
        }
        
        .animate-in {
          opacity: 1;
          transform: translateY(0) translateX(0);
        }
      `}</style>
    </div>
  );
};

export default CreativeStudioLanding;
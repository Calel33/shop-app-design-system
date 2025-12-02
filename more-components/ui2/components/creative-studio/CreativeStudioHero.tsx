import React from 'react';
import { ArrowBigRight, Zap, Phone, CheckSquare, CalendarCheck2, Clock } from 'lucide-react';
import { CreativeStudioHeroProps } from './types';
import { TeamCollage } from './TeamCollage';

export const CreativeStudioHero: React.FC<CreativeStudioHeroProps> = ({
  title = {
    line1: "CREATIVE DESIGN",
    line2: "VISUAL STUDIO"
  },
  subtitle = "Where creativity meets strategy. We transform brands through compelling visual storytelling and innovative design solutions.",
  projectCount = 200,
  teamCount = 25,
  className = ''
}) => {
  const teamPhotos = [
    {
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=640&q=60",
      alt: "Team member 1",
      rotation: -12,
      position: { left: '-8px', top: '8px' }
    },
    {
      src: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=640&q=60",
      alt: "Team member 2",
      rotation: 12,
      position: { right: '-4px', top: '16px' }
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=60",
      alt: "Team member 3",
      rotation: 10,
      position: { left: '8px', bottom: '0px' }
    },
    {
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=640&q=60",
      alt: "Team member 4",
      rotation: -8,
      position: { right: '4px', bottom: '4px' }
    },
    {
      src: "https://cdn.midjourney.com/57ea9136-4c5d-4313-8748-67d826cbe22d/0_3.png?w=800&q=80",
      alt: "Lead creative",
      rotation: 0,
      position: { 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
    }
  ];

  return (
    <section className={`lg:pt-32 lg:pb-20 pt-24 pb-16 ${className}`}>
      <div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
        {/* Main Headlines */}
        <div className="text-center space-y-4 mb-16 scroll-element fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
            <span className="flex items-center justify-center gap-4">
              {title.line1}
              <span className="inline-flex bg-accent/10 rounded-full p-2">
                <ArrowBigRight className="w-6 h-6 text-accent" />
              </span>
              DESIGN
            </span>
          </h1>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-light tracking-tighter leading-none">
            <span className="flex items-center justify-center gap-4">
              VISUAL
              <span className="inline-flex bg-accent/10 rounded-full p-2">
                <ArrowBigRight className="w-6 h-6 text-accent" />
              </span>
              <span className="flex items-center justify-center gap-4">STUDIO</span>
            </span>
          </h1>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 space-x-8">
          {/* Left Card */}
          <div className="lg:col-span-1 scroll-element fade-in-left">
            <div className="lg:min-h-[520px] flex flex-col ring-1 ring-border bg-gradient-to-br from-card to-background rounded-3xl pt-6 pr-6 pb-6 pl-6">
              <div className="flex items-baseline gap-2">
                <span className="sm:text-6xl text-5xl font-light text-foreground tracking-tighter">
                  {projectCount}+
                </span>
                <span className="text-muted-foreground">projects</span>
              </div>
              <p className="text-muted-foreground mt-3">
                We craft visual experiences that inspire, engage, and leave lasting impressions.
              </p>
              <p className="mt-4 italic text-muted-foreground">Design. Create. Inspire.</p>

              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-border">
                <div className="relative w-full h-44 sm:h-56 bg-gradient-to-br from-card to-muted">
                  {/* Dashboard mockup */}
                  <div className="relative h-full w-full sm:p-5 flex flex-col pt-4 pr-4 pb-4 pl-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-medium ring-1 ring-border shadow-sm">
                          BG
                        </div>
                        <div className="flex flex-col">
                          <span className="text-foreground text-sm sm:text-base font-medium">Bryan Gill</span>
                          <span className="text-[11px] text-muted-foreground">Active</span>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">UI Designers</span>
                    </div>

                    {/* Task rows */}
                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-3.5">
                      {[
                        { icon: CheckSquare, progress: 100 },
                        { icon: CalendarCheck2, progress: 70 },
                        { icon: Clock, progress: 40 }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-lg bg-muted ring-1 ring-border flex items-center justify-center text-muted-foreground">
                            <item.icon className="w-4.5 h-4.5" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2.5 rounded-full bg-muted-foreground"></div>
                            <div 
                              className="mt-2 h-2.5 rounded-full bg-muted"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="mt-auto">
                      <div className="mt-4 h-8 w-full rounded-xl bg-muted ring-1 ring-border"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <button className="inline-flex gap-2 hover:bg-muted transition-colors ring-1 ring-border text-sm font-medium text-background bg-foreground rounded-full pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm items-center">
                  Start Project
                  <ArrowBigRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="lg:col-span-1 lg:min-h-[520px] flex flex-col scroll-element fade-in-up">
            {/* Subtitle + CTA */}
            <div className="text-center space-y-6 mb-8">
              <p className="text-lg sm:text-xl text-muted-foreground">{subtitle}</p>
              
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <button className="inline-flex gap-2 hover:bg-muted transition-colors text-sm font-medium text-background bg-foreground rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center">
                  <Zap className="w-4 h-4" />
                  Get Started
                </button>
                <button className="inline-flex gap-2 ring-1 ring-border text-foreground hover:bg-muted transition-colors text-sm font-medium bg-card rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center">
                  <Phone className="w-4 h-4" />
                  Call Us
                </button>
              </div>
            </div>

            {/* Team Collage */}
            <TeamCollage 
              photos={teamPhotos}
              teamCount={teamCount}
              className="mt-auto"
            />
          </div>

          {/* Right Card */}
          <div className="lg:col-span-1 scroll-element fade-in-right">
            <div className="lg:min-h-[520px] flex flex-col ring-1 ring-border bg-gradient-to-br from-card to-background rounded-3xl pt-6 pr-6 pb-6 pl-6">
              <h3 className="text-lg font-semibold mb-2 text-foreground">Creative Services</h3>
              <p className="text-muted-foreground mt-3 mb-8">
                From concept to completion, we deliver creative solutions that make an impact.
              </p>

              <div className="flex-1 relative">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-border bg-gradient-to-br from-card to-muted h-full">
                  <div className="relative h-full flex flex-col pt-4 pr-4 pb-4 pl-4">
                    <div className="mb-0">
                      <div className="inline-flex items-center gap-3 mb-4">
                        <h4 className="text-2xl font-light tracking-tight text-foreground">We Create</h4>
                      </div>
                    </div>
                    
                    {/* Service cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        { title: 'Brand Identity', progress: 100 },
                        { title: 'UI/UX Design', progress: 85 },
                        { title: 'Animation', progress: 70 },
                        { title: 'Art Direction', progress: 90 }
                      ].map((service, index) => (
                        <div 
                          key={index}
                          className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-muted to-card p-4 ring-1 ring-border hover:ring-accent/30 transition-all hover:scale-[1.02]"
                        >
                          <div className="flex gap-2 mb-2 items-center">
                            <span className="text-sm font-medium text-foreground">{service.title}</span>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1.5 rounded-full bg-muted-foreground w-full"></div>
                            <div 
                              className="h-1.5 rounded-full bg-muted"
                              style={{ width: `${service.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom element */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Creative Process
                        </span>
                        <span className="text-xs text-muted-foreground">75% Complete</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground">Brand identity development in progress</p>
                        </div>
                        <button className="h-8 w-8 hover:bg-muted flex transition-colors bg-foreground rounded-full items-center justify-center">
                          <ArrowBigRight className="w-3.5 h-3.5 text-background" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeStudioHero;
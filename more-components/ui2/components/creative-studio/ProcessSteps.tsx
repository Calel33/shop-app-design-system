import React from 'react';
import { ProcessStepsProps } from './types';

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
  title,
  subtitle = "We believe great design starts with understanding your vision and ends with exceeding your expectations.",
  steps,
  image,
  className = ''
}) => {
  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-border bg-gradient-to-br from-card to-background sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-element fade-in-left">
              <p className="text-[11px] sm:text-xs tracking-widest text-muted-foreground font-light uppercase mb-3">
                (03) Process
              </p>
              <h2 className="sm:text-5xl text-3xl font-light text-foreground tracking-tighter mb-6">
                {title}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 scroll-element fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-semibold text-sm">{step.number}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {image && (
              <div className="relative scroll-element fade-in-right">
                <div 
                  className="aspect-square flex bg-cover bg-center ring-1 ring-border rounded-2xl p-8 items-end justify-start"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="max-w-md text-left bg-card/90 backdrop-blur-sm rounded-2xl p-6 ring-1 ring-border/50">
                    <h3 className="text-2xl font-light tracking-tighter text-foreground mb-3">
                      Creative Excellence
                    </h3>
                    <p className="text-muted-foreground">
                      Every project is a canvas for innovation and artistic expression.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
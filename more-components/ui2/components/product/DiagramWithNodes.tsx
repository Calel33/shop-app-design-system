import React from 'react';
import { Target, Shield } from 'lucide-react';
import { DiagramWithNodesProps } from '../types/product.types';

export const DiagramWithNodes: React.FC<DiagramWithNodesProps> = ({
  nodes,
  backgroundImage,
  className = ''
}) => {
  const defaultNodes = nodes || [
    {
      id: 'precision',
      position: 'left' as const,
      icon: (
        <Target
          data-lucide="target"
          className="lucide lucide-target w-[24px] h-[24px] text-zinc-400 group-hover:text-emerald-400 transition-colors"
        />
      ),
      label: '1.5 mm Precision'
    },
    {
      id: 'spectral',
      position: 'right' as const,
      value: '45',
      label: 'Spectral bands'
    },
    {
      id: 'grade',
      position: 'top' as const,
      icon: (
        <Shield
          data-lucide="shield"
          className="lucide lucide-shield w-[24px] h-[24px] text-zinc-400 group-hover:text-emerald-400 transition-colors"
        />
      ),
      label: 'Industrial Grade'
    },
    {
      id: 'sensitivity',
      position: 'bottom' as const,
      value: '×8',
      label: 'Enhanced sensitivity'
    }
  ];

  const getNodePosition = (position: string) => {
    switch (position) {
      case 'left':
        return 'left-6 top-1/2 -translate-y-1/2';
      case 'right':
        return 'right-6 top-1/2 -translate-y-1/2 text-right';
      case 'top':
        return 'left-1/2 top-6 -translate-x-1/2';
      case 'bottom':
        return 'bottom-6 left-1/2 -translate-x-1/2';
      default:
        return 'left-6 top-1/2 -translate-y-1/2';
    }
  };

  const getTextAlignment = (position: string) => {
    switch (position) {
      case 'right':
        return 'text-right';
      case 'top':
        return 'text-center w-28 -ml-6';
      case 'bottom':
        return 'text-center w-32 -ml-8';
      default:
        return '';
    }
  };

  return (
    <div className={`relative ${className}`}>
      {backgroundImage && (
        <div className="absolute -inset-6 -z-10 opacity-30">
          <img
            alt=""
            src={backgroundImage}
            className="h-full w-full rounded-3xl object-cover mix-blend-overlay hover:opacity-50 transition-opacity duration-500"
          />
        </div>
      )}
      
      <div className="relative max-w-md ring-1 ring-white/10 bg-neutral-900/40 rounded-3xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 hover:ring-white/20 hover:bg-neutral-900/60 transition-all duration-500">
        <div className="relative aspect-square w-full">
          {/* Network lines */}
          <div className="absolute inset-0 rounded-2xl border border-dashed border-emerald-400/20 animate-pulse"></div>
          <div 
            className="absolute inset-6 rounded-2xl border border-dashed border-cyan-400/20 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          ></div>

          {/* Nodes */}
          {defaultNodes.map((node) => (
            <div
              key={node.id}
              className={`absolute ${getNodePosition(node.position)} hover:scale-110 transition-transform duration-300 cursor-pointer group`}
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-neutral-900 ring-1 ring-white/10 group-hover:ring-emerald-400/40 group-hover:bg-neutral-800 transition-all duration-300">
                {node.icon ? (
                  React.cloneElement(node.icon as any, {
                    className: `${(node.icon as any).props?.className ?? ''}`,
                  })
                ) : (
                  <span className="text-xl font-semibold text-zinc-400 group-hover:text-emerald-400 transition-colors font-sans">
                    {node.value}
                  </span>
                )}
              </div>
              <p className={`mt-2 text-sm text-neutral-300 group-hover:text-emerald-200 transition-colors font-sans ${getTextAlignment(node.position)}`}>
                {node.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

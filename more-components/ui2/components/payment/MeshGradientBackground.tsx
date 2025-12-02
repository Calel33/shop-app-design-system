/**
 * MeshGradientBackground Component
 * Animated mesh gradient blobs for card background
 */

import React from 'react';

interface MeshGradientBackgroundProps {
  className?: string;
}

export const MeshGradientBackground: React.FC<MeshGradientBackgroundProps> = ({ 
  className: _className = '' 
}) => {
  return (
    <>
      <style>{`
        @keyframes mesh1 {
          0% { transform: translate(-55%, -62%) scale(1); }
          33% { transform: translate(-38%, -46%) scale(1.34); }
          66% { transform: translate(-85%, -62%) scale(1.12); }
          100% { transform: translate(-55%, -62%) scale(1); }
        }

        @keyframes mesh2 {
          0% { transform: translate(-60%, -30%) scale(1); }
          30% { transform: translate(-42%, -32%) scale(1.27); }
          70% { transform: translate(-69%, -37%) scale(0.92); }
          100% { transform: translate(-60%, -30%) scale(1); }
        }

        @keyframes mesh3 {
          0% { transform: translate(-33%, -70%) scale(1); }
          40% { transform: translate(-18%, -33%) scale(0.82); }
          90% { transform: translate(-70%, -60%) scale(1.23); }
          100% { transform: translate(-33%, -70%) scale(1); }
        }

        @keyframes mesh4 {
          0% { transform: translate(-15%, -60%) scale(1); }
          50% { transform: translate(-49%, -67%) scale(1.36); }
          100% { transform: translate(-15%, -60%) scale(1); }
        }

        .mesh1 { animation: mesh1 7s ease-in-out infinite alternate; }
        .mesh2 { animation: mesh2 6.3s ease-in-out infinite alternate; }
        .mesh3 { animation: mesh3 4.8s ease-in-out infinite alternate; }
        .mesh4 { animation: mesh4 8.2s ease-in-out infinite alternate; }
      `}</style>

      {/* Mesh Gradient Blob 1 - Primary Blue */}
      <div
        className="mesh1 absolute top-1/2 left-1/2 w-[200px] h-[160px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(120deg, #6366f1 92%, transparent 100%)',
          filter: 'blur(24px)',
        }}
        aria-hidden="true"
      />

      {/* Mesh Gradient Blob 2 - Secondary Indigo */}
      <div
        className="mesh2 absolute top-1/2 left-1/2 w-[180px] h-[150px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(80deg, #2563eb 85%, transparent 100%)',
          filter: 'blur(18px)',
        }}
        aria-hidden="true"
      />

      {/* Mesh Gradient Blob 3 - White Overlay */}
      <div
        className="mesh3 absolute top-1/2 left-1/2 w-[160px] h-[120px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.25) 80%, transparent 100%)',
          filter: 'blur(12px)',
        }}
        aria-hidden="true"
      />

      {/* Mesh Gradient Blob 4 - Accent Orange */}
      <div
        className="mesh4 absolute top-1/2 left-1/2 w-[90px] h-[100px] rounded-full pointer-events-none"
        style={{
          background: 'linear-gradient(95deg, #fb923c 80%, transparent 100%)',
          filter: 'blur(14px)',
        }}
        aria-hidden="true"
      />
    </>
  );
};

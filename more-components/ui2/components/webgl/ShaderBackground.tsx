/**
 * Shader Background Component
 * WebGL animated shader background with circular patterns
 * @module ShaderBackground
 */

'use client';

import React, { useRef, useEffect } from 'react';
import { useWebGLShader } from './hooks/useWebGLShader';

export const ShaderBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useWebGLShader(canvasRef);

  return (
    <canvas
      ref={canvasRef}
      id="shader-canvas"
      className="fixed top-0 left-0 w-screen h-screen block z-0"
      style={{ background: '#111' }}
      aria-hidden="true"
    />
  );
};

ShaderBackground.displayName = 'ShaderBackground';

export default ShaderBackground;

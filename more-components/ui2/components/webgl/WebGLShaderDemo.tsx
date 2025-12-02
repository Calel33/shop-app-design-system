/**
 * WebGL Shader Demo Component
 * Main component showcasing WebGL shader background with AI platform UI
 * @module WebGLShaderDemo
 */

'use client';

import React from 'react';
import { Brain, Eye, TrendingUp, Shield, Lock, Activity } from 'lucide-react';
import { ShaderBackground } from './ShaderBackground';
import { Navigation } from './Navigation';
import { FeatureCard } from './FeatureCard';
import { StatCard } from './StatCard';
import './webgl-shader.css';

export const WebGLShaderDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111] text-white overflow-x-hidden">
      {/* WebGL Shader Background */}
      <ShaderBackground />

      {/* Navigation */}
      <Navigation onCtaClick={() => alert('Get Started clicked!')} />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-tight gradient-text bg-gradient-to-r from-white via-blue-300 to-indigo-400 mb-6">
              <span className="title-bold">The Future of AI</span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl title-bold">is Here</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transform your business with our cutting-edge AI platform. From natural language processing to computer vision,
              unlock the power of artificial intelligence with simple, scalable solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-xl transition-all duration-200 pulse-glow">
                Start Building Now
              </button>
              <button className="px-8 py-4 backdrop-blur-[14px] backdrop-brightness-[0.91] bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl transition-all duration-200 border border-white/10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <span className="text-xs text-white/60 px-3 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <Shield className="w-3 h-3" />
                SOC 2 Certified
              </span>
              <span className="text-xs text-white/60 px-3 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <Lock className="w-3 h-3" />
                GDPR Compliant
              </span>
              <span className="text-xs text-white/60 px-3 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                <Activity className="w-3 h-3" />
                99.9% Uptime
              </span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" id="features">
            <FeatureCard
              icon={<Brain className="w-6 h-6 text-blue-400" />}
              title="Advanced NLP"
              description="Process and understand human language with state-of-the-art models trained on billions of parameters."
              linkColor="blue"
            />
            <FeatureCard
              icon={<Eye className="w-6 h-6 text-indigo-400" />}
              title="Computer Vision"
              description="Analyze images and videos with precision. Detect objects, recognize faces, and extract insights automatically."
              linkColor="indigo"
              animationDelay="-2s"
            />
            <FeatureCard
              icon={<TrendingUp className="w-6 h-6 text-purple-400" />}
              title="Predictive Analytics"
              description="Forecast trends and make data-driven decisions with our machine learning algorithms and predictive models."
              linkColor="purple"
              animationDelay="-4s"
            />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16">
            <StatCard value="10M+" label="API Calls Daily" />
            <StatCard value="50ms" label="Average Latency" />
            <StatCard value="99.9%" label="Uptime SLA" />
            <StatCard value="500+" label="Enterprise Clients" />
          </div>
        </div>
      </div>
    </div>
  );
};

WebGLShaderDemo.displayName = 'WebGLShaderDemo';

export default WebGLShaderDemo;

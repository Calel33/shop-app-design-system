/**
 * Custom Hook for WebGL Shader Background
 * Manages WebGL context, shader compilation, and render loop
 * @module useWebGLShader
 */

import { useEffect, RefObject } from 'react';

export const useWebGLShader = (canvasRef: RefObject<HTMLCanvasElement>) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    // Resize canvas to match window size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener('resize', resize);

    // Vertex Shader - Simple pass-through for full-screen quad
    const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // Fragment Shader - Animated circular patterns with rotation
    const fragmentShaderSource = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      
      mat2 rotate2d(float angle){
        float c = cos(angle), s = sin(angle);
        return mat2(c, -s, s, c);
      }
      
      float variation(vec2 v1, vec2 v2, float strength, float speed) {
        return sin(
            dot(normalize(v1), normalize(v2)) * strength + iTime * speed
        ) / 100.0;
      }
      
      vec3 paintCircle (vec2 uv, vec2 center, float rad, float width) {
        vec2 diff = center-uv;
        float len = length(diff);
        len += variation(diff, vec2(0.0, 1.0), 5.0, 2.0);
        len -= variation(diff, vec2(1.0, 0.0), 5.0, 2.0);
        float circle = smoothstep(rad-width, rad, len) - smoothstep(rad, rad+width, len);
        return vec3(circle);
      }
      
      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        uv.x *= 1.5;
        uv.x -= 0.25;
        vec3 color = vec3(0.0);
        float radius = 0.35;
        vec2 center = vec2(0.5);
        color += paintCircle(uv, center, radius, 0.035);
        color += paintCircle(uv, center, radius - 0.018, 0.01);
        color += paintCircle(uv, center, radius + 0.018, 0.005);
        vec2 v = rotate2d(iTime) * uv;
        color *= vec3(v.x, v.y, 0.7-v.y*v.x);
        color += paintCircle(uv, center, radius, 0.003);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shader helper function
    const compileShader = (type: number, source: string): WebGLShader => {
      const shader = gl.createShader(type);
      if (!shader) throw new Error('Failed to create shader');
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const error = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(`Shader compilation error: ${error}`);
      }
      
      return shader;
    };

    try {
      // Compile shaders
      const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

      // Create and link program
      const program = gl.createProgram();
      if (!program) throw new Error('Failed to create program');
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const error = gl.getProgramInfoLog(program);
        throw new Error(`Program linking error: ${error}`);
      }

      gl.useProgram(program);

      // Create buffer for full-screen quad
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([
          -1, -1,
           1, -1,
          -1,  1,
          -1,  1,
           1, -1,
           1,  1,
        ]),
        gl.STATIC_DRAW
      );

      // Setup vertex attribute
      const aPosition = gl.getAttribLocation(program, 'aPosition');
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

      // Get uniform locations
      const iTimeLoc = gl.getUniformLocation(program, 'iTime');
      const iResLoc = gl.getUniformLocation(program, 'iResolution');

      // Render loop
      let animationFrameId: number;
      const render = (time: number) => {
        gl.uniform1f(iTimeLoc, time * 0.001);
        gl.uniform2f(iResLoc, canvas.width, canvas.height);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        animationFrameId = requestAnimationFrame(render);
      };
      animationFrameId = requestAnimationFrame(render);

      // Cleanup function
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', resize);
        gl.deleteProgram(program);
        gl.deleteShader(vertexShader);
        gl.deleteShader(fragmentShader);
        gl.deleteBuffer(buffer);
      };
    } catch (error) {
      console.error('WebGL initialization error:', error);
      return;
    }
  }, [canvasRef]);
};

export default useWebGLShader;

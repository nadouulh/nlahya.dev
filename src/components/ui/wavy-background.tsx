"use client";

import { useEffect, useRef } from "react";
import { useResolvedTheme } from "@/lib/theme";
import * as THREE from "three";

const PALETTES = {
  light: {
    rose: [1.0, 0.42, 0.72],
    orange: [1.0, 0.58, 0.36],
    gold: [0.97, 0.83, 0.29],
    deep: [1.0, 0.77, 0.56],
    top: [1.0, 0.91, 0.85],
  },
  dark: {
    rose: [0.82, 0.41, 0.62],
    orange: [0.79, 0.48, 0.31],
    gold: [0.72, 0.6, 0.2],
    deep: [0.16, 0.07, 0.08],
    top: [0.29, 0.14, 0.19],
  },
} as const;

export function WavyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resolvedTheme = useResolvedTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.className = "block h-full w-full";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const setPalette = () => {
      const p = PALETTES[resolvedTheme === "dark" ? "dark" : "light"];
      uniforms.uRose.value.set(...p.rose);
      uniforms.uOrange.value.set(...p.orange);
      uniforms.uGold.value.set(...p.gold);
      uniforms.uDeep.value.set(...p.deep);
      uniforms.uTop.value.set(...p.top);
    };

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uAspect: { value: 1 },
      uRose: { value: new THREE.Color() },
      uOrange: { value: new THREE.Color() },
      uGold: { value: new THREE.Color() },
      uDeep: { value: new THREE.Color() },
      uTop: { value: new THREE.Color() },
    };
    setPalette();

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        precision highp float;

        uniform float uTime;
        uniform vec2 uResolution;
        uniform float uAspect;
        uniform vec3 uRose;
        uniform vec3 uOrange;
        uniform vec3 uGold;
        uniform vec3 uDeep;
        uniform vec3 uTop;

        varying vec2 vUv;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }

        void main() {
          float t = uTime;
          vec2 uv = vUv;

          uv.x += sin(uv.x * 8.0 + t * 0.9) * 0.030
                + sin(uv.y * 13.0 + t * 0.6) * 0.020;
          uv.y += cos(uv.y * 10.0 + t * 0.7) * 0.025
                + sin((uv.x + uv.y) * 6.5 + t * 0.5) * 0.020;

          vec3 colAcc = vec3(0.0);
          float wSum = 0.0;

          for (int i = 0; i < 40; i++) {
            vec2 anchor = vec2(hash(vec2(float(i), 0.0)),
                               hash(vec2(float(i), 1.0)));

            float ph = float(i) * 2.39;
            anchor += vec2(sin(t * 0.15 + ph), cos(t * 0.11 + ph * 1.3)) * 0.04;

            float size = mix(0.05, 0.15, hash(vec2(float(i), 2.0)));
            size *= 1.0 + 0.08 * sin(t * 0.5 + ph);

            vec3 hue = (i % 3 == 0) ? uRose : (i % 3 == 1) ? uOrange : uGold;

            vec2 d = vec2((uv.x - anchor.x) * uAspect, uv.y - anchor.y);
            float dist = length(d);
            float w = smoothstep(size, 0.0, dist);

            colAcc += w * hue;
            wSum += w;
          }

          vec3 backdrop = mix(uDeep, uTop, smoothstep(0.0, 0.7, vUv.y));
          vec3 dropletMix = colAcc / (wSum + 1e-4);
          float presence = 1.0 - exp(-wSum * 2.8);
          vec3 color = mix(backdrop, dropletMix, presence);

          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });

    scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

    const onResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
      uniforms.uAspect.value = width / height;
      setPalette();
    };
    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(container);

    const clock = new THREE.Clock();
    let raf = 0;

    if (reducedMotion) {
      uniforms.uTime.value = 1.7;
      renderer.render(scene, camera);
    } else {
      const render = () => {
        raf = requestAnimationFrame(render);
        uniforms.uTime.value = clock.getElapsedTime();
        renderer.render(scene, camera);
      };
      render();
    }

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    />
  );
}
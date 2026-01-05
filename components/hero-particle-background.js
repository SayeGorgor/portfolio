'use client';

import { useState, useEffect } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import styles from './hero-particle-background.module.css';

export default function HeroParticleBackground() {
  const [init, setInit] = useState(false);
  // Initialize the tsparticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the full tsparticles package
      await loadAll(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      className={styles['particle-background']}
      options={{
        // Fullscreen canvas
        fullScreen: {
          enable: false,
          zIndex: -1, // ensures it stays behind your content
        },
        background: {
          color: '#141414', // dark background
        },
        fpsLimit: 60,
        particles: {
          number: { value: 250, density: { enable: true, area: 1000 } },
          color: { value: '#b7e2ffff' }, // white particles
          shape: { type: 'circle' },
          opacity: { 
            value: 0, 
            random: false,
            animation: {
              enable: true,
              speed: 2,
              easing: "ease-out-circ"
            }
          },
          size: { value: 1.2, random: true },
          move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'out' } },
          links: {
            enable: true,
            opacity: 0,
            color: { value: '#bbd6ffff' },
            distance: 140
          },
          shadow: {
            enable: true,
            blur: 1,
            color: { value: 'rgba(206, 226, 255, 0)' }
          }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: ['bubble', 'connect', 'grab'],
                },
                resize: true,
            },
            modes: {
              bubble: {
                distance: 600,
                duration: 2,
                opacity: 1,
              },
              connect: {
                distance: 110,
                radius: 330,
                links: {opacity: 0.1, color: '#ffffffff'},
                color: {value: '#ffffffff'}
              },
              grab: {
                distance: 120,
                links: {opacity: 0.5, color: '#b7e2ffff'}
              },
              light: {
                area: {
                  gradient: {
                    start: "rgba(22, 22, 22, 1)",
                    stop: "rgba(20, 20, 20, 0)"
                  },
                  radius: 500
                },
                shadow: {
                  enable: false,
                  color: "#000000ff",
                  length: 0
                }
              }
            },
        },
        detectRetina: true,
      }}
    />
  );
}

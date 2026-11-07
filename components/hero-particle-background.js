'use client';

import Particles from '@tsparticles/react';
import { useParticlesReady } from './use-particles-ready';
import styles from './hero-particle-background.module.css';

const particleOptions = {
  fullScreen: { enable: false, zIndex: -1 },
  background: { color: '#141414' },
  fpsLimit: 60,
  particles: {
    number: { value: 300, density: { enable: true, area: 1000 } },
    color: { value: '#b7e2ffff' },
    shape: { type: 'circle' },
    opacity: {
      value: 0,
      random: false
    },
    size: { value: 1.2, random: true },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none',
      outModes: { default: 'out' }
    },
    links: {enable: false},
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
        }
      },
  },
  detectRetina: true,
  responsive: [
    {
      maxWidth: 480,
      options: {
        particles: {
          number: { value: 150, density: { enable: true, area: 1000 } },
          opacity: {
            value: {min: 0.3, max: 0.8},
            random: true
          },
        },
        interactivity: {
          events: {
            onHover: {enable: false, mode: []}
          },
          modes: {}
        }
      }
    },
    {
      maxWidth: 1024,
      options: {
        particles: {
          number: { value: 200, density: { enable: true, area: 1000 } },
          opacity: {
            value: {min: 0.3, max: 0.8},
            random: true
          },
        },
        interactivity: {
          events: {
            onHover: {enable: false, mode: []}
          },
          modes: {}
        }
      }
    }
  ]
};

export default function HeroParticleBackground() {
  const ready = useParticlesReady();

  if (!ready) return null;

  return (
    <Particles
      id='hero-particles'
      className={`
        ${styles['particle-background']}
        ${styles['larger-screen']}
      `}
      options={particleOptions}
    />
  );
}

'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import styles from './main-particle-background.module.css';

export default function MainParticleBackground() {
  // Initialize the tsparticles engine
  const mainParticlesInit = useCallback(async (engine) => {
    // Load the full tsparticles package
    await loadAll(engine);
  }, []);

  return (
    <Particles
      id='main-particles'
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
          number: { value: 75, density: { enable: true, area: 800 } },
          color: { value: ['#b82222ff', '#184d9eff', '#2568ccff'] }, // white particles
          shape: { type: 'circle' },
          opacity: { value: { min: 0.3, max: 0.8 }, random: true },
          size: { value: 1.2, random: true },
          move: { enable: true, speed: 0.5, direction: 'none', outModes: { default: 'out' } },
          links: {
            enable: true,
            opacity: 0.0,
            distance: 140
          }
        },
        detectRetina: true,
      }}
    />
  );
}

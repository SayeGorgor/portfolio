'use client';

import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

let initializationPromise;

function initializeParticles() {
  if (!initializationPromise) {
    initializationPromise = initParticlesEngine(loadSlim).catch((error) => {
      // A later mount can retry a failed initialization.
      initializationPromise = undefined;
      throw error;
    });
  }

  return initializationPromise;
}

export function useParticlesReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    initializeParticles()
      .then(() => {
        if (mounted) setReady(true);
      })
      .catch((error) => {
        console.error('Failed to initialize tsParticles:', error);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return ready;
}

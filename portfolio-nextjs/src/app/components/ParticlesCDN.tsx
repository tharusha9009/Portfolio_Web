"use client";

import React, { useEffect } from 'react';

const particlesConfig = {
    "particles": {
      "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" }, // This color might need to adapt to theme
      "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 } },
      "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } },
      "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } },
      "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, // This color might need to adapt to theme
      "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
      "modes": {
        "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
        "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
        "repulse": { "distance": 200, "duration": 0.4 },
        "push": { "particles_nb": 4 },
        "remove": { "particles_nb": 2 }
      }
    },
    "retina_detect": true
};

export default function ParticlesCDN() {
  useEffect(() => {
    const scriptId = 'particles-js-cdn-script';
    const containerId = 'particles-js-container-cdn';

    if (typeof window === 'undefined') return; // Ensure runs only on client

    // Ensure the container div exists
    const containerElement = document.getElementById(containerId);
    if (!containerElement) {
        console.error(`Particles.js container with ID '${containerId}' not found.`);
        return;
    }

    // @ts-ignore
    if (window.particlesJS) {
        // If particlesJS is already loaded (e.g., from a previous navigation)
        // @ts-ignore
        window.particlesJS(containerId, particlesConfig);
        return;
    }

    // Load the script
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.particlesJS) {
        // @ts-ignore
        window.particlesJS(containerId, particlesConfig);
      } else {
        console.error("Particles.js loaded but window.particlesJS is not defined.");
      }
    };
    script.onerror = () => {
      console.error("Failed to load Particles.js script from CDN.");
    };

    document.body.appendChild(script);

    return () => {
      // Optional: Cleanup script if component unmounts.
      // However, for a global background that should persist, this might not be desired.
      // Also, particles.js creates a canvas that would also need cleanup if we want full removal.
      // const existingScript = document.getElementById(scriptId);
      // if (existingScript) {
      //   document.body.removeChild(existingScript);
      // }
      // The canvas element created by particles.js will have a class 'particles-js-canvas-el'.
      // We could try to remove it, but it's often simpler to let it persist for a background.
    };
  }, []); // Empty dependency array means this runs once on mount

  // This div is where particles.js will render its canvas.
  // The zIndex should be behind main content but potentially in front of a base body background.
  return <div id="particles-js-container-cdn" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }} />;
}

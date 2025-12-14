'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 10, 50);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Geometry: Digital Globe ---
    const geometry = new THREE.IcosahedronGeometry(10, 2);
    const material = new THREE.LineBasicMaterial({ 
      color: 0x6366f1, // Indigo 500
      transparent: true,
      opacity: 0.25
    });
    const wireframe = new THREE.WireframeGeometry(geometry);
    const globe = new THREE.LineSegments(wireframe, material);
    scene.add(globe);

    // --- Geometry: Inner Globe ---
    const innerGeometry = new THREE.IcosahedronGeometry(6, 1);
    const innerMaterial = new THREE.LineBasicMaterial({ 
      color: 0xa855f7, // Purple 500
      transparent: true,
      opacity: 0.15
    });
    const innerWireframe = new THREE.WireframeGeometry(innerGeometry);
    const innerGlobe = new THREE.LineSegments(innerWireframe, innerMaterial);
    scene.add(innerGlobe);

    // --- Geometry: Particles ---
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const velocityArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 80;
      velocityArray[i] = (Math.random() - 0.5) * 0.02;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.12,
      color: 0xa855f7, // Purple 500
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // --- Animation Variables ---
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005; // Slower time progression

      // Continuous globe rotation - slower, more elegant
      globe.rotation.y += 0.0008;
      globe.rotation.x += 0.0003;
      
      // Add mouse influence - reduced
      globe.rotation.y += mouseX * 0.02;
      globe.rotation.x += mouseY * 0.02;

      // Inner globe rotates opposite direction - slower
      innerGlobe.rotation.y -= 0.001;
      innerGlobe.rotation.x -= 0.0005;
      innerGlobe.rotation.z += 0.0003;

      // Floating animation for globe - gentler
      globe.position.y = Math.sin(time * 0.3) * 0.3;
      innerGlobe.position.y = Math.sin(time * 0.3 + 0.5) * 0.2;

      // Particles continuous movement - slower
      particles.rotation.y += 0.0001;
      particles.rotation.x += 0.00005;
      
      // Animate individual particles - slower
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] += velocityArray[i] * 0.3;
        positions[i + 1] += velocityArray[i + 1] * 0.3;
        positions[i + 2] += velocityArray[i + 2] * 0.3;

        // Wrap particles around
        if (positions[i] > 40) positions[i] = -40;
        if (positions[i] < -40) positions[i] = 40;
        if (positions[i + 1] > 40) positions[i + 1] = -40;
        if (positions[i + 1] < -40) positions[i + 1] = 40;
        if (positions[i + 2] > 40) positions[i + 2] = -40;
        if (positions[i + 2] < -40) positions[i + 2] = 40;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Camera subtle movement - gentler
      camera.position.x = Math.sin(time * 0.1) * 0.3;
      camera.position.y = Math.cos(time * 0.08) * 0.2;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      renderer.domElement.remove();
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #000000 80%)'
      }}
    />
  );
};

export default ThreeBackground;

// public/particles-text.js
import * as THREE from 'https://cdn.skypack.dev/three@0.150.1';
import { FontLoader } from 'https://cdn.skypack.dev/three@0.150.1/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.skypack.dev/three@0.150.1/examples/jsm/geometries/TextGeometry.js';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('three-container');
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 400;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  const loader = new FontLoader();
  loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeo = new TextGeometry('Hello', {
      font,
      size: 80,
      height: 5,
      curveSegments: 12,
    });
    textGeo.center();

    const mat = new THREE.PointsMaterial({ size: 2, color: 0xffffff });
    const points = new THREE.Points(textGeo, mat);
    scene.add(points);

    function animate() {
      requestAnimationFrame(animate);
      points.rotation.x += 0.001;
      points.rotation.y += 0.002;
      renderer.render(scene, camera);
    }

    animate();
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});

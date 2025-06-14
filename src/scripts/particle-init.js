// src/scripts/particle-init.js

// Astro/Vite will resolve these bare module specifiers
import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

// You can now use THREE and FontLoader within this script
// and call your initialization functions as needed.
// For example:
// const fontLoader = new FontLoader();
// fontLoader.load( 'path/to/your/font.json', function ( font ) {
//   // use the font here
// });

// You can also define your initialization functions here
// and call them from the inline scripts in your .astro file.
// Or, if your particle-init.js file directly runs the initialization code,
// you might not need the inline scripts anymore.

document.addEventListener('DOMContentLoaded', function () {
	// Particle Text initialization
	if (window.initParticlesText) {
		window.initParticlesText('particles-text-container', 'COMING SOON')
	}

	// Particle Network initialization (jQuery-based)
	$(document).ready(function () {
		const container = document.getElementById('particle-container')
		if (container && window.PNA) {
			const animation = new window.PNA()
			animation.init(container)
		}
	})
})

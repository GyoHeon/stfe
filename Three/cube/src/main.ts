import GUI from "lil-gui";
import * as THREE from "three";

window.addEventListener("load", () => {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set(0, 0, 5);

  renderer.render(scene, camera);

  renderAnimation();

  function renderAnimation() {
    renderer.render(scene, camera);

    requestAnimationFrame(renderAnimation);
  }

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", handleResize);

  const gui = new GUI();

  gui.add(camera.position, "x", 1, 10);
}

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import Card from "./Card";

window.addEventListener("load", () => {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
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
  camera.position.set(0, 0, 25);

  const controls = new OrbitControls(camera, renderer.domElement);

  const card = new Card({
    width: 10,
    height: 15.8,
    color: "#0077ff",
  });

  scene.add(card.mesh);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.position.set(-5, -5, -5);
  scene.add(ambientLight);

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
}

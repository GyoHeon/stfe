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
  camera.position.set(2, 3, 5);

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.lookAt(cube.position);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.position.set(-1, 2, 3);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  ambientLight.position.set(3, 2, 1);
  scene.add(ambientLight);

  renderer.render(scene, camera);

  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  window.addEventListener("resize", handleResize);
}

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

  const cubeGeometry = new THREE.IcosahedronGeometry(1, 0);
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    emissive: 0x111111,
  });
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  const skeletonGeometry = new THREE.IcosahedronGeometry(2);
  const skeletonMaterial = new THREE.MeshBasicMaterial({
    wireframe: true,
    transparent: true,
    opacity: 0.2,
    color: 0xaaaaaa,
  });
  const skeleton = new THREE.Mesh(skeletonGeometry, skeletonMaterial);
  scene.add(skeleton);

  const directionalLight = new THREE.DirectionalLight(0xffffff);
  scene.add(cube, directionalLight);

  renderer.render(scene, camera);

  const clock = new THREE.Clock();

  renderAnimation();

  function renderAnimation() {
    const elapsedTime = clock.getElapsedTime();
    cube.rotation.x = elapsedTime;
    cube.rotation.y = elapsedTime;

    skeleton.rotation.x = elapsedTime * 1.5;
    skeleton.rotation.y = elapsedTime * 1.5;

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

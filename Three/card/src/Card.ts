import * as THREE from "three";

interface CardOptions {
  width: number;
  height: number;
  color: string;
}

class Card {
  mesh: THREE.Mesh;
  constructor({ width, height, color }: CardOptions) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshStandardMaterial({
      color,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);

    this.mesh = mesh;
  }
}

export default Card;

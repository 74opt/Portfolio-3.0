import * as THREE from 'three';

const width = window.innerWidth;
const height = window.innerHeight;

// const renderer = new THREE.WebGLRenderer({
//     canvas: document.getElementById("app") as HTMLCanvasElement
// })
// Parameters are FOV, Aspect Ratio, Near PLane, Far Plane
const mainCamera = new THREE.PerspectiveCamera(80, width / height, 0.1, 10);
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xFFAD00});

const cube = new THREE.Mesh(geometry, material) ;
mainCamera.position.z = 5;
// cube.position.z = -5
// cube.position.y = 1

scene.add(cube);

// const light = new THREE.DirectionalLight(0xFFFFFF, 1)
// light.position.set(0, 4, 2) //between camera and cube

// scene.add(light)

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, mainCamera);
}

renderer.setAnimationLoop(animate);
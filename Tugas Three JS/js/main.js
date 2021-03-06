let scene, camera, renderer;
let cube,
  cone,
  cylinder,
  torus,
  sphere,
  octahedron,
  circle,
  dodecahedron,
  extrude,
  icosahedron,
  lathe,
  plane,
  polyhedron;
let ring, tetrahedron, torusknot, tube, textgeo;

// set up the environment -
// initiallize scene, camera, objects and renderer
let createCube = () => {
  let geometry = new THREE.BoxGeometry(1, 1, 1);
  let material = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0x0ca1cb,
  });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  cube.position.set(0, -2, 0);
};

let createCircle = () => {
  let geometry = new THREE.CircleGeometry(0.8, 50);
  let material = new THREE.MeshBasicMaterial({
    wireframe: true,
    color: 0x0652464,
  });
  circle = new THREE.Mesh(geometry, material);
  scene.add(circle);
  circle.position.set(6, 2, 0);
};

let createCone = () => {
  let geometry = new THREE.ConeGeometry(0.5, 1, 16);
  let material = new THREE.MeshPhongMaterial({
    color: 0xaa4400,
    shininess: 150,
  });
  cone = new THREE.Mesh(geometry, material);
  scene.add(cone);
  cone.position.set(0, 2, 0);
};

let createCylinder = () => {
  let geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 16);
  let material = new THREE.MeshLambertMaterial({
    color: 0x448800,
    emissive: 0x0,
  });
  cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);
  cylinder.position.set(-2, -2, 0);
};

let createDodecahedron = () => {
  let geometry = new THREE.DodecahedronGeometry(0.8, 0);
  let material = new THREE.MeshPhysicalMaterial({ color: 0x23cb68 });
  dodecahedron = new THREE.Mesh(geometry, material);
  scene.add(dodecahedron);
  dodecahedron.position.set(-6, -2, 0);
};

let createExtrude = () => {
  var frame = new THREE.Shape();
  frame.moveTo(-0.5, -0.5);
  frame.lineTo(0.5, -0.5);
  frame.lineTo(0.5, 0.5);
  frame.lineTo(-0.5, 0.5);

  var extrudeSettings = {
    steps: 1,
    depth: 1,
    bevelEnabled: false,
  };

  var geometry = new THREE.ExtrudeGeometry(frame, extrudeSettings);
  extrude = new THREE.Mesh(
    geometry,
    new THREE.MeshPhongMaterial({ color: 0xdeded, shininess: 150 })
  );
  scene.add(extrude);

  extrude.position.set(-3, 2, 0);
};

let createIcosahedron = () => {
  let geometry = new THREE.IcosahedronGeometry(0.8, 0);
  let material = new THREE.MeshPhysicalMaterial({ color: 0xf0446f });
  icosahedron = new THREE.Mesh(geometry, material);
  scene.add(icosahedron);
  icosahedron.position.set(-3, 0, 0);
};

let createLathe = () => {
  const points = [];
  for (let i = 1; i < 4; i++) {
    points.push(new THREE.Vector2(0.4 + Math.sin(i * 0.005), i * 0.5));
  }
  const geometry = new THREE.LatheGeometry(points);
  let material = new THREE.MeshPhysicalMaterial({
    color: 0xf0446f,
    wireframe: true,
  });
  lathe = new THREE.Mesh(geometry, material);
  scene.add(lathe);
  lathe.position.set(4, -1, 0);
};

let createOctahedron = () => {
  let geometry = new THREE.OctahedronGeometry(0.5);
  let material = new THREE.MeshToonMaterial({ color: 0x0077ff });
  octahedron = new THREE.Mesh(geometry, material);
  scene.add(octahedron);
  octahedron.position.set(2.35, 0, 0);
};

let createPlane = () => {
  let geometry = new THREE.PlaneGeometry(1, 1);
  let material = new THREE.MeshToonMaterial({
    color: 0x1aa028,
    wireframe: true,
  });
  plane = new THREE.Mesh(geometry, material);
  scene.add(plane);
  plane.position.set(4, 2, 0);
};

let createPolyhedron = () => {
  const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1,
    -1, 1, 1,
  ];

  const indicesOfFaces = [
    2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2,
    3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4,
  ];

  const geometry = new THREE.PolyhedronGeometry(
    verticesOfCube,
    indicesOfFaces,
    0.8,
    2
  );
  let material = new THREE.MeshLambertMaterial({ color: 0x1aa028 });
  polyhedron = new THREE.Mesh(geometry, material);
  scene.add(polyhedron);
  polyhedron.position.set(6, -2, 0);
};

let createRing = () => {
  let geometry = new THREE.RingGeometry(0.5, 0.8, 32);
  let material = new THREE.MeshPhysicalMaterial({
    color: 0xbf48b7,
    wireframe: true,
  });
  ring = new THREE.Mesh(geometry, material);
  scene.add(ring);
  ring.position.set(-6, 2, 0);
};

let createTetrahedron = () => {
  let geometry = new THREE.TetrahedronGeometry(0.5, 0);
  let material = new THREE.MeshPhysicalMaterial({ color: 0x588ac1 });
  tetrahedron = new THREE.Mesh(geometry, material);
  scene.add(tetrahedron);
  tetrahedron.position.set(-4, -2, 0);
};

let createTorus = () => {
  let geometry = new THREE.TorusGeometry(0.5, 0.15, 8, 16);
  let material = new THREE.MeshStandardMaterial({ color: 0x880044 });
  torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
  torus.position.set(2, -2, 0);
};

let createTorusKnot = () => {
  let geometry = new THREE.TorusKnotGeometry(0.5, 0.15);
  let material = new THREE.MeshPhongMaterial({
    color: 0x880044,
    shininess: 150,
  });
  torusknot = new THREE.Mesh(geometry, material);
  scene.add(torusknot);
  torusknot.position.set(-6, 0, 0);
};

let createTube = () => {
  class CustomSinCurve extends THREE.Curve {
    constructor(scale = 1) {
      super();
      this.scale = scale;
    }
    getPoint(t, optionalTarget = new THREE.Vector3()) {
      const tx = t * 3 - 1.5;
      const ty = Math.sin(2 * Math.PI * t);
      const tz = 0;
      return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale);
    }
  }
  let path = new CustomSinCurve(0.5);
  let geometry = new THREE.TubeGeometry(path, 100, 0.1, 20, false);
  let material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    shininess: 150,
  });
  tube = new THREE.Mesh(geometry, material);
  scene.add(tube);
  tube.position.set(6, 0, 0);
};

let createText = () => {
  var loader = new THREE.FontLoader();
  loader.load(
    "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
    function (font) {
      var geometry = new THREE.TextGeometry("Three JS", {
        font: font,
        size: 0.4,
        height: 0.5,
        curveSegments: 4,
      });
      geometry.center();
      var material = new THREE.MeshNormalMaterial();
      var textgeo = new THREE.Mesh(geometry, material);
      scene.add(textgeo);
      textgeo.position.set(0, 0, 0);
    }
  );
};

let createSphere = () => {
  let geometry = new THREE.SphereGeometry(0.5, 8, 8);
  let material = new THREE.MeshPhongMaterial({
    color: 0x990099,
    shininess: 150,
  });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  sphere.position.set(2, 2, 0);
};

// 1. create the scene
scene = new THREE.Scene();
scene.background = new THREE.Color(0x151515);

// 2. create an locate the camera
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

const dLight = new THREE.DirectionalLight(0xffffff, 1);
dLight.position.set(1, 0, 1).normalize();
const aLight = new THREE.AmbientLight(0xffffff, 1);
aLight.position.set(0, 0, 10);
const pLight = new THREE.PointLight(0xffffff, 1, 100);
pLight.position.set(-10, 0, 0);
const hLight = new THREE.HemisphereLight(0xffffff, "#ffb703", 0.8);
hLight.position.set(-10, 10, 20);
const sLight = new THREE.SpotLight(0xffffff, 1, 50);
sLight.position.set(5, 10, 10);

const lights = [dLight, aLight, pLight, hLight, sLight];

lights.forEach((obj) => scene.add(obj));

lights.forEach((light) => {
  light.visible = false;
});
lights[0].visible = true;

const selectedLight = document.getElementById("light");
selectedLight.addEventListener("change", (e) => {
  const selected = e.target.value;
  lights.forEach((light) => {
    light.visible = false;
  });
  lights[selected].visible = true;
});

// 3. create an locate the object on the scene
createCube();
createCircle();
createCone();
createCylinder();
createDodecahedron();
createExtrude();
createIcosahedron();
createLathe();
createPlane();
createPolyhedron();
createRing();
createTetrahedron();
createTorus();
createTorusKnot();
createTube();
createSphere();
createText();
createOctahedron();

camera.position.z = 5;

// 4. create the renderer
const canvas = document.querySelector("#c");
renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
// renderer = new THREE.WebGLRenderer({ });
// renderer.setSize(window.innerWidth, window.innerHeight);

// document.body.appendChild(renderer.domElement);

// main animation loop - calls 50-60 in a second.
let mainLoop = function () {
  renderer.render(scene, camera);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  circle.rotation.x += 0.01;
  circle.rotation.y += 0.01;
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;
  extrude.rotation.x += 0.01;
  extrude.rotation.y += 0.01;
  icosahedron.rotation.x += 0.01;
  icosahedron.rotation.y += 0.01;
  lathe.rotation.x += 0.01;
  lathe.rotation.y += 0.01;
  plane.rotation.x += 0.01;
  plane.rotation.y += 0.01;
  ring.rotation.x += 0.01;
  ring.rotation.y += 0.01;
  tube.rotation.x += 0.01;
  tube.rotation.y += 0.01;
  tetrahedron.rotation.x += 0.01;
  tetrahedron.rotation.y += 0.01;
  polyhedron.rotation.x += 0.01;
  polyhedron.rotation.y += 0.01;
  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;
  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  torusknot.rotation.x += 0.01;
  torusknot.rotation.y += 0.01;
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  octahedron.rotation.x += 0.01;
  octahedron.rotation.y += 0.01;
  requestAnimationFrame(mainLoop);
};

mainLoop();

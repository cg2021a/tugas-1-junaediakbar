function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  const object_kotak = {
    line_top_color: [0.53, 0.56, 0.59],

    line_top_a: [-0.83, 0.68],
    line_top_b: [-0.16, 0.7],
    line_top_c: [-0.01, 0.24],
    line_top_d: [-0.95, 0.22],
    line_top_e: [-0.92, 0.12],
    line_top_f: [-0.88, 0.12],
    line_top_g: [-0.09, 0.13],
    line_top_h: [-0.05, 0.13],

    ///////////////////////////
    line_top_i: [-0.85, 0.06],
    line_top_j: [-0.82, 0.04],
    line_top_k: [-0.14, 0.05],
    line_top_l: [-0.11, 0.065],
    /////////////////////////////
    Body_kotak_color: [0.2, 0.23, 0.25],
  };

  const object_kotak_2 = {
    line_top_color: [0.53, 0.56, 0.59],

    line_body_color: [0.2, 0.23, 0.25],

    line_top_a: [0.17, 0.68],
    line_top_b: [0.84, 0.7],
    line_top_c: [0.99, 0.24],
    line_top_d: [0.05, 0.22],
    line_top_e: [0.08, 0.12],
    line_top_f: [0.12, 0.12],
    line_top_g: [0.91, 0.13],
    line_top_h: [0.95, 0.13],

    ///////////////////////////
    line_top_i: [0.15, 0.06],
    line_top_j: [0.18, 0.04],
    line_top_k: [0.86, 0.05],
    line_top_l: [0.89, 0.065],
  };

  const vertices = [
    ...object_kotak.line_top_a,
    ...object_kotak.line_top_color,
    ...object_kotak.line_top_b,
    ...object_kotak.line_top_color,
    ...object_kotak.line_top_c,
    ...object_kotak.line_top_color, //15

    ...object_kotak.line_top_a,
    ...object_kotak.line_top_color,
    ...object_kotak.line_top_c,
    ...object_kotak.line_top_color,
    ...object_kotak.line_top_d,
    ...object_kotak.line_top_color, //30

    ...object_kotak.line_top_d,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_e,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_f,
    ...object_kotak.Body_kotak_color, //45

    ...object_kotak.line_top_d,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_f,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_g,
    ...object_kotak.Body_kotak_color, //60

    ...object_kotak.line_top_d,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_g,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_h,
    ...object_kotak.Body_kotak_color, // 75

    ...object_kotak.line_top_d,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_h,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_c,
    ...object_kotak.Body_kotak_color, //90

    ...object_kotak.line_top_f,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_i,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_j,
    ...object_kotak.Body_kotak_color, //105

    ...object_kotak.line_top_f,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_j,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_k,
    ...object_kotak.Body_kotak_color, //120

    ...object_kotak.line_top_f,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_k,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_l,
    ...object_kotak.Body_kotak_color, //135

    ...object_kotak.line_top_f,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_l,
    ...object_kotak.Body_kotak_color,
    ...object_kotak.line_top_g,
    ...object_kotak.Body_kotak_color, //150

    ...object_kotak_2.line_top_a,
    ...object_kotak_2.line_top_color,
    ...object_kotak_2.line_top_b,
    ...object_kotak_2.line_top_color,
    ...object_kotak_2.line_top_c,
    ...object_kotak_2.line_top_color, //165

    ...object_kotak_2.line_top_a,
    ...object_kotak_2.line_top_color,
    ...object_kotak_2.line_top_c,
    ...object_kotak_2.line_top_color,
    ...object_kotak_2.line_top_d,
    ...object_kotak_2.line_top_color, //180

    ...object_kotak_2.line_top_d,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_e,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_f,
    ...object_kotak_2.line_body_color, //195

    ...object_kotak_2.line_top_d,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_f,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_g,
    ...object_kotak_2.line_body_color, //210

    ...object_kotak_2.line_top_d,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_g,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_h,
    ...object_kotak_2.line_body_color, //225

    ...object_kotak_2.line_top_d,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_h,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_c,
    ...object_kotak_2.line_body_color, //240

    ...object_kotak_2.line_top_f,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_i,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_j,
    ...object_kotak_2.line_body_color, //255

    ...object_kotak_2.line_top_f,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_j,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_k,
    ...object_kotak_2.line_body_color, //270

    ...object_kotak_2.line_top_f,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_k,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_l,
    ...object_kotak_2.line_body_color, //285

    ...object_kotak_2.line_top_f,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_l,
    ...object_kotak_2.line_body_color,
    ...object_kotak_2.line_top_g,
    ...object_kotak_2.line_body_color, //300
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var vertexShaderSource = `
          attribute vec2 aPosition;
          attribute vec3 aColor;
          varying vec3 vColor;
          uniform float uChange;
          void main() {
              gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
              vColor = aColor;
          }
      `;

  var fragmentShaderSource = `
          precision mediump float;
          varying vec3 vColor;
          void main() {
              gl_FragColor = vec4(vColor, 1.0);
          }
      `;

  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  var shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  gl.linkProgram(shaderProgram);

  gl.useProgram(shaderProgram);

  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(
    aPosition,
    2,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    0
  );
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(
    aColor,
    3,
    gl.FLOAT,
    false,
    5 * Float32Array.BYTES_PER_ELEMENT,
    2 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aColor);

  var freeze = false;
  // Interactive graphics with mouse
  function onMouseClick(event) {
    freeze = !freeze;
  }
  document.addEventListener("click", onMouseClick);
  // Interactive graphics with keyboard
  function onKeydown(event) {
    if (event.keyCode == 32) freeze = true;
  }

  function onKeyup(event) {
    if (event.keyCode == 32) freeze = false;
  }
  document.addEventListener("keydown", onKeydown);
  document.addEventListener("keyup", onKeyup);

  var speed = 0.0041;
  var change = 0;
  var uChange = gl.getUniformLocation(shaderProgram, "uChange");

  function moveVertices() {
    if (vertices[266] < -1.0 || vertices[166] > 1.0) {
      speed = speed * -1;
    }

    for (let i = 151; i < vertices.length; i += 5) {
      vertices[i] = vertices[i] + speed;
    }
  }

  function render() {
    moveVertices();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    change = change + speed;
    gl.uniform1f(uChange, change);

    gl.clearColor(0.87, 0.89, 0.9, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    var primitive = gl.TRIANGLES;
    var offset = 0;
    var nVertex = 120;
    gl.drawArrays(primitive, offset, nVertex);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

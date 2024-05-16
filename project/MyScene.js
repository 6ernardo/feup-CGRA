import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFtexture } from "../lib/CGF.js";
import { MyGarden } from "./objects/MyGarden.js";
import { MyPanorama } from "./objects//MyPanorama.js";
import { MyPlane } from "./objects/MyPlane.js";
import { MyRockSet } from "./objects/MyRockSet.js";
import { MyBee } from "./objects/MyBee.js";

/**
 * MyScene
 * @constructor
 */
export class MyScene extends CGFscene {
  constructor() {
    super();
  }
  init(application) {
    super.init(application);
    
    this.initCameras();
    this.initLights();

    //Background color
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

    this.gl.clearDepth(100.0);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.enable(this.gl.CULL_FACE);
    this.gl.depthFunc(this.gl.LEQUAL);

    //Initialize scene objects
    this.axis = new CGFaxis(this);
    this.plane = new MyPlane(this,30);
    this.garden = new MyGarden(this);
    this.rockset = new MyRockSet(this, 4, 2);

    let texture = new CGFtexture(this, "images/panorama4.jpg");
    this.panorama = new MyPanorama(this, texture);

    this.bee = new MyBee(this);

    //Objects connected to MyInterface
    this.displayPanorama = true;
    this.displayAxis = true;
    this.displayGarden = false;
    this.displayRockSet = false;
    this.scaleFactor = 1;
    this.speedFactor = 1;
    this.gardenRows = 3;
    this.gardenColumns = 3;

    this.enableTextures(true);

  this.texture = new CGFtexture(this, "images/terrain.jpg");
  this.appearance = new CGFappearance(this);
  this.appearance.setTexture(this.texture);
  this.appearance.setTextureWrap('REPEAT', 'REPEAT');

  this.starttime = Date.now();
  this.setUpdatePeriod(30);
  }

  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();

    this.lights[1].setPosition(0, 20, 0, 1);
    this.lights[1].setDiffuse(0.4, 0.4, 0.4, 1.0);
    this.lights[1].setSpecular(0.4, 0.4, 0.4, 1.0);
    this.lights[1].disable();
    this.lights[1].setVisible(false);
    this.lights[1].update();

    this.lights[2].setPosition(18, 30, 18, 1);
    this.lights[2].setDiffuse(0.1, 0.1, 0.1, 1.0);
    this.lights[2].setSpecular(0.1, 0.1, 0.1, 1.0);
    this.lights[2].disable();
    this.lights[2].setVisible(false);
    this.lights[2].update();
    
  }
  initCameras() {
    this.camera = new CGFcamera(
      1.0,
      0.1,
      1000,
      vec3.fromValues(50, 10, 15),
      vec3.fromValues(0, 0, 0)
    );
  }

  setDefaultAppearance() {
    this.setAmbient(0.2, 0.4, 0.8, 1.0);
    this.setDiffuse(0.2, 0.4, 0.8, 1.0);
    this.setSpecular(0.2, 0.4, 0.8, 1.0);
    this.setShininess(10.0);
  }

  checkKeys() {
    var text="Keys pressed: ";
    var keysPressed = false;

    if (this.gui.isKeyPressed("KeyW")) {
      this.bee.accelerate(0.01 * this.speedFactor);
      text += " W ";
      keysPressed = true;
    }
    
    if (this.gui.isKeyPressed("KeyS")) {
      this.bee.accelerate(-0.01 * this.speedFactor);
      text += " S ";
      keysPressed = true;
    }

    if (this.gui.isKeyPressed("KeyA")) {
      this.bee.turn(5 * Math.PI / 180 * this.speedFactor);
      text += " A ";
      keysPressed = true;
    }

    if (this.gui.isKeyPressed("KeyD")) {
      this.bee.turn(-5 * Math.PI / 180 * this.speedFactor);
      text += " D ";
      keysPressed = true;
    }

    if (this.gui.isKeyPressed("KeyR")) {
      this.bee.reset();
      text += " R ";
      keysPressed = true;
    }

    if (keysPressed) console.log(text);
  }

  update(t) {
    this.time_diff = (t - this.starttime) / 1000.0;

    this.oscilation = Math.sin(this.time_diff * Math.PI * 2);
    this.wings = Math.sin(this.time_diff * Math.PI * 12);
    this.bee.update(this.oscilation, this.wings, 3);

    this.checkKeys();
  }

  display() {
    // ---- BEGIN Background, camera and axis setup
    // Clear image and depth buffer everytime we update the scene
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    // Initialize Model-View matrix as identity (no transformation
    this.updateProjectionMatrix();
    this.loadIdentity();
    // Apply transformations corresponding to the camera position relative to the origin
    this.applyViewMatrix();

    // Draw axis
    if (this.displayAxis) this.axis.display();

    if (this.displayPanorama) this.panorama.display();

    if (this.displayGarden){
      this.garden.display(this.gardenRows, this.gardenColumns);

      this.lights[1].enable();
      this.lights[2].enable();

    } 
    else {
      this.lights[1].disable();
      this.lights[2].disable()
    }

    if (this.displayRockSet) this.rockset.display();

    this.lights[1].update();
    this.lights[2].update();

    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.appearance.apply();
    this.translate(0,-100,0);
    this.scale(400,400,400);
    this.rotate(-Math.PI/2.0,1,0,0);
    this.plane.display();
    this.popMatrix();

    // ---- END Primitive drawing section

    this.pushMatrix();
    this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
    this.bee.display();
    this.popMatrix();
  }

}

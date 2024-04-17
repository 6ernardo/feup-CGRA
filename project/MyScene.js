import { CGFscene, CGFcamera, CGFaxis, CGFappearance, CGFshader, CGFtexture } from "../lib/CGF.js";
import { MyFlower } from "./MyFlower.js";
import { MyPanorama } from "./MyPanorama.js";
import { MyPetal } from "./MyPetal.js";
import { MyPlane } from "./MyPlane.js";

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
    //this.sphere = new MySphere(this, 1, 50, 50);

    this.receptacle_material = new CGFappearance(this);
    this.receptacle_material.setAmbient(1, 1, 0, 1.0);
    this.receptacle_material.setDiffuse(1, 1, 0, 1.0);
    this.receptacle_material.setSpecular(1, 1, 0, 1.0);
    this.receptacle_material.setShininess(10.0);

    this.petal_material = new CGFappearance(this);
    this.petal_material.setAmbient(1, 0, 0, 1.0);
    this.petal_material.setDiffuse(1, 0, 0, 1.0);
    this.petal_material.setSpecular(1, 0, 0, 1.0);
    this.petal_material.setShininess(10.0);

    this.stem_material = new CGFappearance(this);
    this.stem_material.setAmbient(0, 1, 0, 1.0);
    this.stem_material.setDiffuse(0, 1, 0, 1.0);
    this.stem_material.setSpecular(0, 1, 0, 1.0);
    this.stem_material.setShininess(10.0);


    //this.flower = new MyFlower(this, 3, 15, this.petal_material, 0.4, this.receptacle_material, 0.3, 14, this.stem_material, null, 180, 30);
    this.flower = this.generateRandomFlower();

    let texture = new CGFtexture(this, "images/panorama4.jpg");
    this.panorama = new MyPanorama(this, texture);

    //Objects connected to MyInterface
    this.displayPanorama = true;
    this.displayAxis = true;
    this.scaleFactor = 1;

    this.enableTextures(true);

this.texture = new CGFtexture(this, "images/terrain.jpg");
this.appearance = new CGFappearance(this);
this.appearance.setTexture(this.texture);
this.appearance.setTextureWrap('REPEAT', 'REPEAT');

  }
  initLights() {
    this.lights[0].setPosition(15, 0, 5, 1);
    this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
    this.lights[0].enable();
    this.lights[0].update();
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

    //this.sphere.display();
    if (this.displayPanorama) this.panorama.display();

    this.flower.display();


    // ---- BEGIN Primitive drawing section

    this.pushMatrix();
    this.appearance.apply();
    this.translate(0,-100,0);
    this.scale(400,400,400);
    this.rotate(-Math.PI/2.0,1,0,0);
    this.plane.display();
    this.popMatrix();

    // ---- END Primitive drawing section
  }

  generateRandomFlower() {
    /* FLOWER */
    //external radius (between 3 and 7)
    let external_radius = 3 + Math.random() * 4;


    /*  RECEPTACLE  */
    //receptacle material

    //receptacle radius (between 0.4 and 0.6)
    let receptacle_radius = 0.4 + Math.random() * 0.2;

    /*  STEM  */
    //stem material
    //stem radius (between 0.1 and 0.3)
    let stem_radius = 0.1 + Math.random() * 0.2;

    //stem height (between 4 and 14)
    let stem_height = Math.round(4 + Math.random() * 10);

    /*  PETAL  */
    //petal material
    //petal number (between 5 and 15)
    let petal_number = Math.round(5 + Math.random() * 10);
    //petal angle (between 150 and 200)
    let petal_angle = 150 + Math.random() * 50;
    //petal insert angle (between -30 and 30)
    let petal_insert_angle = -30 + Math.random() * 60;
    
    
    let receptacle_material = new CGFappearance(this);
    receptacle_material.setAmbient(1, 1, 0, 1.0);
    receptacle_material.setDiffuse(1, 1, 0, 1.0);
    receptacle_material.setSpecular(1, 1, 0, 1.0);
    receptacle_material.setShininess(10.0);

    let petal_material = new CGFappearance(this);
    petal_material.setAmbient(1, 0, 0, 1.0);
    petal_material.setDiffuse(1, 0, 0, 1.0);
    petal_material.setSpecular(1, 0, 0, 1.0);
    petal_material.setShininess(10.0);

    let stem_material = new CGFappearance(this);
    stem_material.setAmbient(0, 1, 0, 1.0);
    stem_material.setDiffuse(0, 1, 0, 1.0);
    stem_material.setSpecular(0, 1, 0, 1.0);
    stem_material.setShininess(10.0);

    console.log("**********************************");
    console.log(stem_height);

    return new MyFlower(this, external_radius, petal_number, petal_material, receptacle_radius, receptacle_material, stem_radius, stem_height, stem_material, null, petal_angle, petal_insert_angle);

  }
}

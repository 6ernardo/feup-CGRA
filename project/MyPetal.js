import {CGFappearance, CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyTriangle } from './MyTriangle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPetal extends CGFobject {

    constructor(scene, angle, petal_material, triangle_height) {
		super(scene);
        this.angle = angle;
        this.petal_material = petal_material;
        this.textureDown = new CGFtexture(this.scene, "./images/petalTextDown1.png");
        this.textureUp = new CGFtexture(this.scene, "./images/petalTextUp.png")
        this.petal_material.setTextureWrap('REPEAT', 'REPEAT');
        this.triangle = new MyTriangle(this.scene, triangle_height);
	}

    display() {
        this.scene.pushMatrix();
        this.petal_material.setTexture(this.textureUp);
        this.petal_material.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.petal_material.setTexture(this.textureDown);
        this.petal_material.apply();
        this.scene.rotate(-this.angle*Math.PI/180, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();
    }
	
}


import {CGFappearance, CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyTriangle } from './MyTriangle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPetal extends CGFobject {

    constructor(scene, angle, color, triangle_height, petal_material) {
		super(scene);
        this.angle = angle;
        this.color = color;
        this.petal_material = petal_material;
        this.texture = new CGFtexture(this.scene, "./images/petalText.png");
        //this.petal_material.setTexture(texture);
        this.petal_material.setTextureWrap('REPEAT', 'REPEAT');
        this.triangle = new MyTriangle(this.scene, triangle_height);
	}

    display() {
        this.scene.pushMatrix();
        this.petal_material.setTexture(this.texture);
        this.petal_material.apply();
        //this.color.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.petal_material.setTexture(this.texture);
        this.petal_material.apply();
        //this.color.apply();
        this.scene.rotate(-this.angle*Math.PI/180, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();
    }
	
}


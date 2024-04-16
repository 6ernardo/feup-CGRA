import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyTriangle } from './MyTriangle.js';

/**
 * MyPetal
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPetal extends CGFobject {

    constructor(scene, angle, color, triangle_height) {
		super(scene);
        this.angle = angle;
        this.color = color;
        this.triangle = new MyTriangle(this.scene, triangle_height);
	}

    display() {
        this.scene.pushMatrix();
        this.color.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.color.apply();
        this.scene.rotate(-this.angle*Math.PI/180, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();
    }
	
}


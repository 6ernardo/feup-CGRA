import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';

/**
 * MyReceptacle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyReceptacle extends CGFobject {

    constructor(scene, radius, color) {
		super(scene);
        this.sphere = new MySphere(this.scene, radius, 50, 50);
        this.color = color;
	}

    display() {
        this.scene.pushMatrix();
        this.color.apply();
        this.sphere.display();
        this.scene.popMatrix();

    }
	
}


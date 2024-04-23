import {CGFappearance, CGFobject, CGFtexture} from '../lib/CGF.js';
import { MySphere } from './MySphere.js';

/**
 * MyReceptacle
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyReceptacle extends CGFobject {

    constructor(scene, radius, receptacle_material) {
		super(scene);
        this.sphere = new MySphere(this.scene, radius, 50, 50);
        this.receptacle_material = receptacle_material;
        this.texture = new CGFtexture(this.scene, "./images/receptableText.jpg");
        this.receptacle_material.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    display() {
        this.scene.pushMatrix();
        this.receptacle_material.setTexture(this.texture);
        this.receptacle_material.apply();
        this.sphere.display();
        this.scene.popMatrix();

    }
	
}


import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';

/**
 * MyStem
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyStem extends CGFobject {

    constructor(scene, radius, cylinder_number, color) {
		super(scene);
        this.cylinder_number = cylinder_number;
        this.color = color;
        this.cylinder = new MyCylinder(this.scene, 40, 1, radius);
	}

    display() {
        for(let i=0; i<this.cylinder_number; i++){
            this.scene.pushMatrix();
            this.color.apply();
            this.scene.translate(0, i, 0);
            this.scene.rotate(-90*Math.PI/180, 1, 0, 0);
            this.cylinder.display();
            this.scene.popMatrix();
        }
    }
	
}


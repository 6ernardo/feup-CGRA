import {CGFappearance, CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';

/**
 * MyStem
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyStem extends CGFobject {

    constructor(scene, radius, cylinder_number, color, stem_material) {
		super(scene);
        this.cylinder_number = cylinder_number;
        this.color = color;
        this.stem_material = stem_material; 
        this.texture = new CGFtexture(this.scene, "./images/stemText.png");
        //this.stem_material.setTexture(this.texture);
        this.stem_material.setTextureWrap('REPEAT', 'REPEAT');
        this.cylinder = new MyCylinder(this.scene, 40, 1, radius);
    }

    display() {
        for(let i=0; i<this.cylinder_number; i++){
            this.scene.pushMatrix();
            this.stem_material.setTexture(this.texture);
            this.stem_material.apply();
            //this.color.apply();
            this.scene.translate(0, i, 0);
            this.scene.rotate(-90*Math.PI/180, 1, 0, 0);
            this.cylinder.display();
            this.scene.popMatrix();
        }
    }
	
}


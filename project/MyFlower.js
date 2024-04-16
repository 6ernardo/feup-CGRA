import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyPetal } from './MyPetal.js';
import { MyReceptacle } from './MyReceptacle.js';
import { MyStem } from './MyStem.js';

/**
 * MyFlower
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyFlower extends CGFobject {

    constructor(scene, external_radius, petal_number, petal_color, receptacle_radius, receptacle_color, stem_radius, stem_height, stem_color, leaf_color, petal_angle, petal_insert_angle) {
		super(scene);

        this.petal_number = petal_number;
        this.stem_height = stem_height;
        this.petal_insert_angle = petal_insert_angle;
        this.receptacle_radius = receptacle_radius;

        let d = external_radius - receptacle_radius;
        this.triangle_height = (d/2) / (Math.sin((petal_angle/2)*(Math.PI/180)))

        this.stem = new MyStem(this.scene, stem_radius, stem_height, stem_color);
        this.receptacle = new MyReceptacle(this.scene, receptacle_radius, receptacle_color);
        this.petal = new MyPetal(this.scene, petal_angle, petal_color, this.triangle_height);
	}


    display() {
        this.scene.pushMatrix();
        this.stem.display();
        this.scene.popMatrix();

        for(let i = 0; i < this.petal_number; i++){
            this.scene.pushMatrix();
            this.scene.translate(0, this.stem_height, 0);
            this.scene.rotate(this.petal_insert_angle * Math.PI/180, 1, 0, 0);
            this.scene.rotate((360/this.petal_number)*i*Math.PI/180, 0, 1, 0);
            this.scene.translate(0, 0, this.triangle_height+this.receptacle_radius-0.2)
            this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
            this.petal.display();
            this.scene.popMatrix();
        }        

        this.scene.pushMatrix();
        this.scene.translate(0, this.stem_height, 0);
        this.receptacle.display();
        this.scene.popMatrix();

        
    }
	
}


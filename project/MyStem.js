import {CGFobject, CGFtexture} from '../lib/CGF.js';
import { MyCylinder } from './MyCylinder.js';
import { MyPetal } from './MyPetal.js';

/**
 * MyStem
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyStem extends CGFobject {

    constructor(scene, radius, cylinder_number, stem_material) {
		super(scene);
        this.cylinder_number = cylinder_number;
        this.stem_material = stem_material; 
        this.texture = new CGFtexture(this.scene, "./images/stemText.png");
        this.stem_material.setTextureWrap('REPEAT', 'REPEAT');
        this.cylinder = new MyCylinder(this.scene, 40, 1, radius);
        this.leaf = new MyPetal(this.scene, 180, stem_material, 1);

        //randomized parameters of the leaf
        this.scale = [];
        this.incline = [];
        this.is_displayed = [];

        for(let i=0; i<cylinder_number-1; i++){
            let scale_random = 0.3 + Math.random() * 0.2 //0.3 to 0.5
            let incline_random = -45 + Math.random() * 90 //-45 to 45
            let is_displayed_random = Math.round(Math.random()) //50% chance the cylinder will have a leaf

            this.scale.push(scale_random);
            this.incline.push(incline_random);
            this.is_displayed.push(is_displayed_random);
        }
    }

    display() {
        for(let i=0; i<this.cylinder_number; i++){
            this.scene.pushMatrix();
            this.stem_material.setTexture(this.texture);
            this.stem_material.apply();
            this.scene.translate(0, i, 0);
            this.scene.rotate(-90*Math.PI/180, 1, 0, 0);
            this.cylinder.display();
            this.scene.popMatrix();

            if(i>0){
                if(this.is_displayed[i-1] == 1){
                    this.scene.pushMatrix();
                    this.scene.translate(this.scale[i-1], i, 0);
                    this.scene.rotate(-90*Math.PI/180, 0, 0, 1);
                    this.scene.rotate(this.incline[i-1]*Math.PI/180, 0, 1, 0);
                    this.scene.scale(this.scale[i-1], this.scale[i-1], 1);
                    this.leaf.display();
                    this.scene.popMatrix();
                }
            }
        }
    }
	
}


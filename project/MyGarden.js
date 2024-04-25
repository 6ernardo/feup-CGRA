import {CGFobject, CGFappearance} from '../lib/CGF.js';
import { MyFlower } from './MyFlower.js';

/**
 * MyGarden
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyGarden extends CGFobject {
	constructor(scene) {
		super(scene);

        this.flowers = [];
        this.deviation_x = [];
        this.deviation_z = [];

        //hardcoded bit, always generates 5x5 matrix of flowers
        for(let i=0; i<5; i++){
            let row = [];
            let row_x = [];
            let row_z= [];
            for(let j=0; j<5; j++){
                row.push(this.generateRandomFlower());

                // (pseudo) random position in the matrix
                let random_x = 1.5 + Math.random() * 4;
                let random_z = 1.5 + Math.random() * 4;
                row_x.push(random_x);
                row_z.push(random_z);
            }
            this.deviation_x.push(row_x);
            this.deviation_z.push(row_z);
            this.flowers.push(row);
        }
	}

    display(row, column) {

        for(let i=0; i<row; i++){
            for(let j=0; j<column; j++){

                this.scene.pushMatrix();
                this.scene.translate(this.deviation_x[i][j] + 7 * i, 0, this.deviation_z[i][j] + 7 * j);
                this.flowers[i][j].display();
                this.scene.popMatrix();
            }
        }

    }

    generateRandomFlower() {
        /* FLOWER */
        //external radius (between 3 and 7)
        let external_radius = 3 + Math.random() * 4;
    
        /*  RECEPTACLE  */
        //receptacle material
    
        //receptacle radius (between 0.4 and 0.6)
        let receptacle_radius = 0.4 + Math.random() * 0.2;

        //receptacle height (between 0.3 and 0.5)
        let receptacle_height = 0.3 + Math.random() * 0.2;
    
        /*  STEM  */
        //stem material
        //stem radius (between 0.1 and 0.25)
        let stem_radius = 0.1 + Math.random() * 0.15;
    
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
        
      
        //generate different shades of yellow for the receptacles
        let receptacle_material = new CGFappearance(this.scene);
        let [r, g, b] = this.randomYellow();
        receptacle_material.setAmbient(r, g, b, 1.0);
        receptacle_material.setDiffuse(r, g, b, 1.0);
        receptacle_material.setSpecular(r, g, b, 1.0);
        receptacle_material.setShininess(10.0);

        //different materials for the petals
        let petal_material = new CGFappearance(this.scene);
        petal_material.setAmbient(this.randomize(0,1), this.randomize(0,1), this.randomize(0,1), 1.0);
        petal_material.setDiffuse(this.randomize(0,1), this.randomize(0,1), this.randomize(0,1), 1.0);
        petal_material.setSpecular(this.randomize(0,1), this.randomize(0,1), this.randomize(0,1), 1.0);
        petal_material.setShininess(10.0);
    
        //generate different shades of green for the stems
        let stem_material = new CGFappearance(this.scene);
        let [r1, g1, b1] = this.randomGreen();
        stem_material.setAmbient(r1, g1, b1, 1.0);
        stem_material.setDiffuse(r1, g1, b1, 1.0);
        stem_material.setSpecular(r1, g1, b1, 1.0);
        stem_material.setShininess(10.0);


        return new MyFlower(this.scene, external_radius, petal_number, petal_material , receptacle_radius, receptacle_height, receptacle_material, stem_radius, stem_height, stem_material, null, petal_angle, petal_insert_angle);

    }

    randomize(min, max) {
        return Math.random() * (max - min) + min;
    }

    randomYellow() {
        const baseValue = this.randomize(0.7, 1); // Ensuring a certain level of brightness
        const variationR = this.randomize(0, 0.3);
        const variationG = this.randomize(0, 0.3);
        const variationB = this.randomize(0, 0.3);
        const r = baseValue + variationR;
        const g = baseValue + variationG;
        const b = this.randomize(0, variationB);
        return [r, g, b];
    }

    randomGreen() {
        const baseValue = this.randomize(0.5, 1); // Ensuring a certain level of brightness
        const variationR = this.randomize(0, 0.5);
        const variationG = this.randomize(0, 0.5);
        const variationB = this.randomize(0, 0.5);
        const r = this.randomize(0, variationR);
        const g = baseValue + variationG;
        const b = this.randomize(0, variationB);
        return [r, g, b];
    }

	
}


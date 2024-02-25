import {CGFobject} from '../lib/CGF.js';
import { MyDiamond } from './MyDiamond.js';
import { MyTriangle } from './MyTriangle.js';
import { MyParallelogram } from './MyParallelogram.js';
import { MyTriangleBig } from './MyTriangleBig.js';
import { MyTriangleSmall } from './MyTriangleSmall.js'; 

/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglebig = new MyTriangleBig(this.scene);
        this.trianglesmall = new MyTriangleSmall(this.scene);
	}

    display() {
        //Green Diamond
        this.scene.pushMatrix();

        let tm =
        [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            1.15, 2.15, 0, 1
        ]

        this.scene.multMatrix(tm);

        this.scene.setAmbient(0, 1, 0, 1.0);
        this.scene.setDiffuse(0, 1, 0, 1.0);

        this.diamond.display();
        this.scene.popMatrix();

        //Orange Triangle
        this.scene.pushMatrix();

        this.scene.translate(1.415, -1.415, 0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        this.scene.setAmbient(1, 0.6, 0, 1.0);
        this.scene.setDiffuse(1, 0.6, 0, 1.0);

        this.trianglebig.display();
        this.scene.popMatrix();

        //Blue Triangle
        this.scene.pushMatrix();

        this.scene.translate(-1.415, -1.415, 0);
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        this.scene.setAmbient(0, 0.4, 0.8, 1.0);
        this.scene.setDiffuse(0, 0.4, 0.8, 1.0);

        this.trianglebig.display();
        this.scene.popMatrix();

        //Pink Triangle
        this.scene.pushMatrix();

        this.scene.translate(1.415, 0, 0);
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        this.scene.setAmbient(1, 0.6, 1, 1.0);
        this.scene.setDiffuse(1, 0.6, 1, 1.0);

        this.triangle.display();
        this.scene.popMatrix();

        //Red Triangle
        this.scene.pushMatrix();

        this.scene.translate(2.1225, -0.7075, 0);
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        this.scene.setAmbient(1, 0, 0, 1.0);
        this.scene.setDiffuse(1, 0, 0, 1.0);

        this.trianglesmall.display();
        this.scene.popMatrix();

        //Yellow Parallelogram
        this.scene.pushMatrix();

        this.scene.translate(0, -2.83, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(135*Math.PI/180, 0, 0, 1);
        this.scene.setAmbient(1, 1, 0, 1.0);
        this.scene.setDiffuse(1, 1, 0, 1.0);

        this.parallelogram.display();
        this.scene.popMatrix();

        //Purple Triangle
        this.scene.pushMatrix();

        this.scene.translate(-0.4, -0.4, 0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        this.scene.setAmbient(0.6, 0.2, 1, 1.0);
        this.scene.setDiffuse(0.6, 0.2, 1, 1.0);

        this.trianglesmall.display();
        this.scene.popMatrix();
        
    }
	
}


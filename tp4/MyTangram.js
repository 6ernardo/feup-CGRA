import {CGFappearance, CGFobject} from '../lib/CGF.js';
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
        this.trianglebigorange = new MyTriangleBig(this.scene, true);
        this.trianglebigblue = new MyTriangleBig(this.scene, false);
        this.trianglesmallred = new MyTriangleSmall(this.scene, true);
        this.trianglesmallpurple = new MyTriangleSmall(this.scene, false);

        this.initMaterials();
	}

    initMaterials() {
        //Green Diamond
        this.greendiamondmaterial = new CGFappearance(this.scene);
        this.greendiamondmaterial.setAmbient(0, 1, 0, 1.0);
        this.greendiamondmaterial.setDiffuse(0, 1, 0, 1.0);
        this.greendiamondmaterial.setSpecular(1, 1, 1, 1);
        this.greendiamondmaterial.setShininess(10.0);

        //Orange Triangle
        this.orangetrianglematerial = new CGFappearance(this.scene);
        this.orangetrianglematerial.setAmbient(1, 0.6, 0, 1.0);
        this.orangetrianglematerial.setDiffuse(1, 0.6, 0, 1.0);
        this.orangetrianglematerial.setSpecular(1, 1, 1, 1);
        this.orangetrianglematerial.setShininess(10.0);

        //Blue Triangle
        this.bluetrianglematerial = new CGFappearance(this.scene);
        this.bluetrianglematerial.setAmbient(0, 0.4, 0.8, 1.0);
        this.bluetrianglematerial.setDiffuse(0, 0.4, 0.8, 1.0);
        this.bluetrianglematerial.setSpecular(1, 1, 1, 1);
        this.bluetrianglematerial.setShininess(10.0);

        //Pink Triangle
        this.pinktrianglematerial = new CGFappearance(this.scene);
        this.pinktrianglematerial.setAmbient(1, 0.6, 1, 1.0);
        this.pinktrianglematerial.setDiffuse(1, 0.6, 1, 1.0);
        this.pinktrianglematerial.setSpecular(1, 1, 1, 1);
        this.pinktrianglematerial.setShininess(10.0);

        //Red Triangle
        this.redtrianglematerial = new CGFappearance(this.scene);
        this.redtrianglematerial.setAmbient(1, 0, 0, 1.0);
        this.redtrianglematerial.setDiffuse(1, 0, 0, 1.0);
        this.redtrianglematerial.setSpecular(1, 1, 1, 1);
        this.redtrianglematerial.setShininess(10.0);

        //Yellow Parallelogram
        this.yellowparallelogrammaterial = new CGFappearance(this.scene);
        this.yellowparallelogrammaterial.setAmbient(1, 1, 0, 1.0);
        this.yellowparallelogrammaterial.setDiffuse(1, 1, 0, 1.0);
        this.yellowparallelogrammaterial.setSpecular(1, 1, 1, 1);
        this.yellowparallelogrammaterial.setShininess(10.0);

        //Purple Triangle
        this.purpletrianglematerial = new CGFappearance(this.scene);
        this.purpletrianglematerial.setAmbient(0.6, 0.2, 1, 1.0);
        this.purpletrianglematerial.setDiffuse(0.6, 0.2, 1, 1.0);
        this.purpletrianglematerial.setSpecular(1, 1, 1, 1);
        this.purpletrianglematerial.setShininess(10.0);

        //Texture
        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/tangram.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');
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

        //this.greendiamondmaterial.apply();
        this.texture.apply();

        this.diamond.display();
        this.scene.popMatrix();

        //Orange Triangle
        this.scene.pushMatrix();

        this.scene.translate(1.415, -1.415, 0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        
        //this.orangetrianglematerial.apply();
        this.texture.apply();

        this.trianglebigorange.display();
        this.scene.popMatrix();

        //Blue Triangle
        this.scene.pushMatrix();

        this.scene.translate(-1.415, -1.415, 0);
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        
        //this.bluetrianglematerial.apply();
        this.texture.apply();

        this.trianglebigblue.display();
        this.scene.popMatrix();

        //Pink Triangle
        this.scene.pushMatrix();

        this.scene.translate(1.415, 0, 0);
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        
        //this.pinktrianglematerial.apply();
        this.texture.apply();

        this.triangle.display();
        this.scene.popMatrix();

        //Red Triangle
        this.scene.pushMatrix();

        this.scene.translate(2.1225, -0.7075, 0);
        this.scene.rotate(-135*Math.PI/180, 0, 0, 1);
        
        //this.redtrianglematerial.apply();
        this.texture.apply();

        this.trianglesmallred.display();
        this.scene.popMatrix();

        //Yellow Parallelogram
        this.scene.pushMatrix();

        this.scene.translate(0, -2.83, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(135*Math.PI/180, 0, 0, 1);
        
        //this.yellowparallelogrammaterial.apply();
        this.texture.apply();

        this.parallelogram.display();
        this.scene.popMatrix();

        //Purple Triangle
        this.scene.pushMatrix();

        this.scene.translate(-0.4, -0.4, 0);
        this.scene.rotate(45*Math.PI/180, 0, 0, 1);
        
        //this.purpletrianglematerial.apply();
        this.texture.apply();

        this.trianglesmallpurple.display();
        this.scene.popMatrix();
        
    }
	
}


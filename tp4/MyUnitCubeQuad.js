import {CGFappearance, CGFobject} from '../lib/CGF.js';
import { MyQuad } from './MyQuad.js'

/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCubeQuad extends CGFobject {

    constructor(scene, top, bottom, right, left, front, back) {
		super(scene);
        this.quad = new MyQuad(this.scene);
        this.top = top;
        this.bottom = bottom;
        this.right = right;
        this.left = left;
        this.front = front;
        this.back = back;
	}

    display() {

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);

        //Frente
        this.scene.pushMatrix();

        this.scene.translate(0, 0, 0.5);

        this.material.setTexture(this.front);
        this.material.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quad.display();

        this.scene.popMatrix();

        //Trás
        this.scene.pushMatrix();

        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);

        this.material.setTexture(this.back);
        this.material.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quad.display();

        this.scene.popMatrix();

        //Lado esquerdo
        this.scene.pushMatrix();

        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90*Math.PI/180, 0, 1, 0);

        this.material.setTexture(this.left);
        this.material.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quad.display();

        this.scene.popMatrix();

        //Lado direito
        this.scene.pushMatrix();

        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90*Math.PI/180, 0, 1, 0);

        this.material.setTexture(this.right);
        this.material.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quad.display();

        this.scene.popMatrix();

        //Topo
        this.scene.pushMatrix();

        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90*Math.PI/180, 1, 0, 0);

        this.material.setTexture(this.top);
        this.material.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quad.display();

        this.scene.popMatrix();

        //Fundo
        this.scene.pushMatrix();

        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90*Math.PI/180, 1, 0, 0);

        this.material.setTexture(this.bottom);
        this.material.apply();
        this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.quad.display();

        this.scene.popMatrix();
    }
	
}


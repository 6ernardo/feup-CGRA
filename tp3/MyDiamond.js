import {CGFobject} from '../lib/CGF.js';
/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//A
			0, -1, 0,	//B
			0, 1, 0,	//C
			1, 0, 0,	//D
			-1, 0, 0,	//A 1
			0, -1, 0,	//B 1
			0, 1, 0,	//C 1
			1, 0, 0		//D 1
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			2, 1, 0,
			2, 3, 1
		];

		this.normals = [
			0, 0, 1, // A
			0, 0, 1, // B
			0, 0, 1, // C
			0, 0, 1, // D
			0, 0, -1, // A 1
			0, 0, -1, // B 1
			0, 0, -1, // C 1
			0, 0, -1 // D 1
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


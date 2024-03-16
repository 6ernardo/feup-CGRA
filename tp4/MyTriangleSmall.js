import {CGFobject} from '../lib/CGF.js';
/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyTriangleSmall extends CGFobject {
	constructor(scene, red) {
		super(scene);
		this.initBuffers(red);
	}
	
	initBuffers(red) {
		this.vertices = [
			-1, 0, 0,	//A
			1, 0, 0,	//B
			0, 1, 0,	//C
			-1, 0, 0,	//A 1
			1, 0, 0,	//B 1
			0, 1, 0,	//C 1
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 0
		];

		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, -1,
			0, 0, -1,
			0, 0, -1
		]

		if(red){
			this.texCoords = [
				0.25, 0.75,
				0.75, 0.75,
				0.5, 0.5,
				0.25, 0.75,
				0.75, 0.75,
				0.5, 0.5
			]
		}
		else {
			this.texCoords = [
				0, 0,
				0, 0.5,
				0.25, 0.25,
				0, 0,
				0, 0.5,
				0.25, 0.25
			]
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


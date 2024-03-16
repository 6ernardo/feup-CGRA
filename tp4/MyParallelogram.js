import {CGFobject} from '../lib/CGF.js';
/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {

		this.vertices = [
			0, 0, 0, // A
			1, 0, 0, // B
			1, 1, 0, // C
			2, 1, 0, // D
			2, 0, 0, // E
			3, 1, 0, // F
			0, 0, 0, // A 1
			1, 0, 0, // B 1
			1, 1, 0, // C 1
			2, 1, 0, // D 1
			2, 0, 0, // E 1
			3, 1, 0 // F 1
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			1, 4, 3,
			4, 5, 3, 
			2, 1, 0, // Needed
			2, 3, 1, // for
			3, 4, 1, // double
			3, 5, 4 // sidedness
		]

		this.normals = [
			0, 0, 1, // A
			0, 0, 1, // B
			0, 0, 1, // C
			0, 0, 1, // D
			0, 0, 1, // E
			0, 0, 1,  //F
			0, 0, -1, // A 1
			0, 0, -1, // B 1
			0, 0, -1, // C 1
			0, 0, -1, // D 1
			0, 0, -1, // E 1
			0, 0, -1,  //F 1
		]

		this.texCoords = [
			0.25, 0.75,
			0.5, 0.75,
			0.5, 1,
			0.75, 1,
			0.75, 0.75,
			1, 1,
			0.25, 0.75,
			0.5, 0.75,
			0.5, 1,
			0.75, 1,
			0.75, 0.75,
			1, 1
		]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


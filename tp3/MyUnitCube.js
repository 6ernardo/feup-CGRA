import {CGFobject} from '../lib/CGF.js';
/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		// this.vertices = [
		// 	-0.5, 0.5, -0.5,  //0
        //     0.5, 0.5, -0.5,   //1
        //     0.5, -0.5, -0.5,  //2
        //     -0.5, -0.5, -0.5, //3
        //     -0.5, 0.5, 0.5,   //4
        //     0.5, 0.5, 0.5,    //5
        //     0.5, -0.5, 0.5,   //6
        //     -0.5, -0.5, 0.5   //7
		// ];

		// //Counter-clockwise reference of vertices
		// this.indices = [
		// 	0, 1, 2,
        //     0, 2, 3,
                        
        //     4, 6, 5,
        //     4, 7, 6,

        //     4, 5, 1,
        //     4, 1, 0,

        //     3, 2, 6,
        //     3, 6, 7,

        //     1, 5, 6,
        //     1, 6, 2,

        //     4, 0, 3,
        //     4, 3, 7
		// ];

        //defined all vertices and repeat
        this.vertices = [
            0.5, -0.5, 0.5, // A
            0.5, -0.5, -0.5, // B
            0.5, 0.5, 0.5, // C
            0.5, 0.5, -0.5, // D
            -0.5, -0.5, -0.5, // E
            -0.5, -0.5, 0.5, // F
            -0.5, 0.5, -0.5, // G
            -0.5, 0.5, 0.5, // H
            0.5, -0.5, 0.5, // A 1
            0.5, -0.5, -0.5, // B 1
            0.5, 0.5, 0.5, // C 1
            0.5, 0.5, -0.5, // D 1
            -0.5, -0.5, -0.5, // E 1
            -0.5, -0.5, 0.5, // F 1
            -0.5, 0.5, -0.5, // G 1
            -0.5, 0.5, 0.5, // H 1
            0.5, -0.5, 0.5, // A 2
            0.5, -0.5, -0.5, // B 2
            0.5, 0.5, 0.5, // C 2
            0.5, 0.5, -0.5, // D 2
            -0.5, -0.5, -0.5, // E 2
            -0.5, -0.5, 0.5, // F 2
            -0.5, 0.5, -0.5, // G 2
            -0.5, 0.5, 0.5, // H 2
        ];

        this.indices = [
            0, 1, 2,
            1, 3, 2,

            1, 4, 6,
            1, 6, 3,

            2, 3, 6,
            6, 7, 2,

            4, 1, 0,
            0, 5, 4,

            5, 0, 2,
            2, 7, 5,

            4, 5, 7,
            7, 6, 4
        ]

        this.normals = [
            1, 0, 0, //A
            1, 0, 0, //B
            1, 0, 0, //C
            1, 0, 0, //D
            -1, 0, 0, //E
            -1, 0, 0, //F
            -1, 0, 0, //G
            -1, 0, 0, //H
            0, 0, 1, //A 1
            0, 0, -1, //B 1
            0, 0, 1, //C 1
            0, 0, -1, //D 1
            0, 0, -1, //E 1
            0, 0, 1, //F 1
            0, 0, -1, //G 1
            0, 0, 1, //H 1
            0, -1, 0, //A 2
            0, -1, 0, //B 2
            0, 1, 0, //C 2
            0, 1, 0, //D 2
            0, -1, 0, //E 2
            0, -1, 0, //F 2
            0, 1, 0, //G 2
            0, 1, 0, //H 2
            
        ]

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


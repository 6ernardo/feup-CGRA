import {CGFobject} from '../lib/CGF.js';
/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
export class MyPrism extends CGFobject {
	constructor(scene, slices, stacks){
        super(scene);

        this.slices = slices;
        this.stacks = stacks;

        this.initBuffers();
    }
	
	initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];


        let increment = 2 * Math.PI/ this.slices; // Angle in between each point of the prism in radians 

        let stack_height = 1 / this.stacks;

        //initialize vertices
        for(let i=0; i<=this.stacks; i++){
            for(let j=0; j<this.slices; j++){
                let x = Math.cos(j*increment);
                let y = Math.sin(j*increment);
                let z = i*stack_height;

                this.vertices.push(x, y, z);
            }
        }

        //initialize indices
        for(let i=1; i<=this.stacks; i++){
            for(let j=0; j<this.slices-1; j++){
                this.indices.push(j+this.slices*(i-1), j+this.slices*(i-1)+1, j+1+this.slices*i);
                this.indices.push(j+1+this.slices*i, j+this.slices*i, j+this.slices*(i-1));
            }
            //draw last face
            this.indices.push(i*this.slices-1, this.slices*(i-1), this.slices*i);
            this.indices.push(this.slices*i, this.slices*(i+1)-1, i*this.slices-1);
        }

        //initialize normals
        //each vertex needs to be defined twice, because each vertex will have two normal vectors
        for(let i=0; i<=this.stacks; i++){
            for(let j=0; j<this.slices; j++){
                let x = Math.cos(j*increment);
                let y = Math.sin(j*increment);
                let z = i*stack_height;

                this.vertices.push(x, y, z);
            }
        }

        //first normal
        for(let i=0; i<=this.stacks; i++){
            for(let j=0; j<this.slices; j++){
                this.normals.push(Math.cos(increment/2+j*increment), Math.sin(increment/2+j*increment), 0)
            }
        }

        //second normal
        for(let i=0; i<=this.stacks; i++){
            for(let j=0; j<this.slices; j++){
                this.normals.push(Math.cos(-(increment/2)+j*increment), Math.sin(-(increment/2)+j*increment), 0)
            }
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


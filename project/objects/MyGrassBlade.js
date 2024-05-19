import { CGFappearance, CGFobject, CGFtexture } from '../lib/CGF.js';

/**
 * MyGrass
 * @constructor
 * @param scene - Reference to MyScene object
 * @param width - Width of the base of the grass blade
 * @param height - Height of the grass blade
 * @param sections - Number of sections for the grass blade
 */
export class MyGrassBlade extends CGFobject {
    constructor(scene, width, height, sections) {
        super(scene);

        this.width = width;
        this.height = height;
        this.sections = sections;

        this.texture = new CGFappearance(this.scene);
        this.texture.setAmbient(0.345, 0.761, 0.192, 1);
        this.texture.setDiffuse(0.345, 0.761, 0.192, 1);
        this.texture.setSpecular(0.345, 0.761, 0.192, 1);
        this.texture.setShininess(10.0);

        this.text = new CGFtexture(this.scene, "./images/grassBlade.png");

        this.initBuffers();
    }

    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        const stepHeight = this.height / this.sections;
        const stepWidth = this.width / (2 * this.sections);

        // Create vertices, normals, and texture coordinates
        for (let i = 0; i <= this.sections; i++) {
            const y = i * stepHeight;
            const halfWidth = (this.width / 2) - (i * stepWidth);

            this.vertices.push(-halfWidth, y, 0); // Left vertex
            this.vertices.push(halfWidth, y, 0);  // Right vertex

            this.normals.push(0, 0, 1); // Normal for left vertex
            this.normals.push(0, 0, 1); // Normal for right vertex

            this.texCoords.push(0, 1 - i / this.sections); // Texture coord for left vertex
            this.texCoords.push(1, 1 - i / this.sections); // Texture coord for right vertex
        }

        // Create indices
        for (let i = 0; i < this.sections; i++) {
            const topLeft = i * 2;
            const topRight = topLeft + 1;
            const bottomLeft = topLeft + 2;
            const bottomRight = topLeft + 3;

            this.indices.push(topLeft, topRight, bottomLeft); // First triangle
            this.indices.push(topRight, bottomLeft, bottomRight); // Second triangle
        }

        // Add the tip of the grass blade
        const tipIndex = this.vertices.length / 3;
        this.vertices.push(0, this.height, 0);
        this.normals.push(0, 0, 1);
        this.texCoords.push(0.5, 0);

        const lastLeft = this.sections * 2;
        const lastRight = lastLeft + 1;

        this.indices.push(lastLeft, lastRight, tipIndex);

        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    display() {
        this.texture.setTexture(this.text);
        this.texture.apply();
        this.scene.gl.disable(this.scene.gl.CULL_FACE);
        super.display();
        this.scene.gl.enable(this.scene.gl.CULL_FACE);
    }
}

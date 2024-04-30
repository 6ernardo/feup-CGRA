import {CGFinterface, dat} from '../lib/CGF.js';

/**
* MyInterface
* @constructor
*/
export class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        
        // init GUI. For more information on the methods, check:
        // https://github.com/dataarts/dat.gui/blob/master/API.md
        this.gui = new dat.GUI();

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayPanorama').name('Display Panorama');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //Folder for Garden settings
        var f0 = this.gui.addFolder('Garden');
        f0.add(this.scene, 'displayGarden').name("Display Garden");
        //subfolder
        var sf0 = f0.addFolder('Garden Settings');
        sf0.add(this.scene, 'gardenRows', 1, 5).step(1).name("Garden Rows");
        sf0.add(this.scene, 'gardenColumns', 1, 5).step(1).name("Garden Columns");

        this.gui.add(this.scene, 'displayRockSet').name('Display Rock Set');

        return true;
    }
}
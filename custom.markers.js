/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

       
        // add your markers here

	// quests

	//prisson
	{
            x: -712,
            z: 383,
            image: "sword.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "prisson",
            textColor: "cyan", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	// Map room 1
	{
            x: -33,
            z: -174,
            image: "EnvSprite_world.png",
            imageAnchor: [0.5, 1],
            imageScale: 1.0,
            text: "Map Room",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },



	// Map room 2
	{
            x: -1495,
            z: 352,
            image: "EnvSprite_world.png",
            imageAnchor: [0.5, 1],
            imageScale: 1.0,
            text: "Map Room",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },


	//player build locations

	//hotel
	{
            x: -51,
            z: -157,
            image: "crafting-table.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.9,
            text: "hotel Spawn",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },


	//Sand Castle
	{
            x: -1280,
            z: -306,
            image: "diamond.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.7,
            text: "Sand Castle",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	//Frank
	{
            x: -2211,
            z: -481,
            image: "golden-apple.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.7,
            text: "Frank's zone",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	//City
	{
            x: 1024,
            z: 1024,
            image: "furnace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.7,
            text: "Monuments City",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	//Marit
	{
            x: 28,
            z: -730,
            image: "diamond.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.7,
            text: "Stufje House",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	//daarook
	{
            x: -1560,
            z: 432,
            image: "pickaxe.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.7,
            text: "Daarook's Hut",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	// villages

	// village 1
	{
            x: -378,
            z: -967,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},

	// village 2
	{
            x: -1541,
            z: -1258,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},

	// village 3
	{
            x: -1022,
            z: -1963,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},

	// village 4
	{
            x: -1364,
            z: -2100,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},

	// village 5
	{
            x: -1892,
            z: 331,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},

	// village 6
	{
            x: 773,
            z: 2957,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},


	// Pillager 1
	{
            x: -824,
            z: -856,
            image: "PillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.4,
	},



	// broken portal
	{
            x: 126,
            z: -429,
            image: "EnvSprite_ruined-portal.png",
            imageAnchor: [0.5, 1],
            imageScale: 1.0,
	},

	//landscape names

        // lake of no name
        {
            x: -800,
            z: 0,
            text: "lake of no name", 
            textColor: "lime", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 30px Calibri,sans serif",
        },

        // stufo island
        {
            x: 100,
            z: -560,
            text: "stufo island", 
            textColor: "lime", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 30px Calibri,sans serif",
        },

        // do not delete the following two closing brackets
    ]
}

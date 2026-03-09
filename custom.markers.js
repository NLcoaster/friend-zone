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


	//spawn
	{
            x: 0,
            z: 0,
            image: "compass.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "World Spawn",
            textColor: "red", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

       
// add your markers here

	// quests

		//prisson
	{
            x: -716,
            z: 362,
            image: "quest.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Prisson",
            textColor: "cyan", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	// men made 

		// Map room 1
	{
            x: -33,
            z: -174,
            image: "EnvSprite_world.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
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
            imageScale: 0.25,
            text: "Map Room",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// library 1
	{
            x: -70,
            z: -138,
            image: "book enchanted.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Library",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },

	//station's

		// station Green keep
	{
            x: -1916,
            z: -1384,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station 26
	{
            x: -1550,
            z: -1206,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station 26",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station pilager tower
	{
            x: -841,
            z: -828,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station ",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station 12
	{
            x: -331,
            z: -923,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station 12",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station chery
	{
            x: -101,
            z: -706,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station chery",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },

		// station spawn
	{
            x: -5,
            z: -426,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station 3
	{
            x: -1104,
            z: -305,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station 3",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station 10
	{
            x: -1479,
            z: 423,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station 10",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station 11
	{
            x: -1910,
            z: 194,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station 11",
            textColor: "black", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 10px Calibri,sans serif",
        },
		// station 5
	{
            x: -2140,
            z: -501,
            image: "riding.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "station 5",
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
            image: "Red_Bed_2D.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
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
            image: "item.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
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
            image: "item.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
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
            image: "item.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
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
            image: "item.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
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
            image: "item.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Daarook's Hut",
            textColor: "yellow", 
            offsetX: 0,
            offsetY: 20,
            font: "bold 20px Calibri,sans serif",
        },

	// Green Keep
	{
            x: -2000,
            z: -1509,
            image: "item.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
            text: "Green Keep",
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
            imageScale: 0.3,
	},
		// village 4
	{
            x: -1364,
            z: -2100,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 5
	{
            x: -1892,
            z: 331,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 6
	{
            x: 773,
            z: 2957,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 7
	{
            x: -2396,
            z: -1908,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 8
	{
            x: -2522,
            z: -2453,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 9
	{
            x: -3243,
            z: -2603,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 10
	{
            x: -3987,
            z: -2548,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//pill
		// Pillager 1
	{
            x: -824,
            z: -856,
            image: "PillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},

	//portals
		// broken portal 1
	{
            x: 126,
            z: -429,
            image: "EnvSprite_ruined-portal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
	},
		// broken portal 2
	{
            x: -1722,
            z: -444,
            image: "EnvSprite_ruined-portal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
	},
		// broken portal 3
	{
            x: -1063,
            z: -940,
            image: "EnvSprite_ruined-portal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.5,
	},
		// portal spawn
	{
            x: -46,
            z: -77,
            image: "nether-portal.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
	},

	//ship wrek
		// ship 1
	{
            x: -2304,
            z: -1707,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
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
            font: "bold 15px Calibri,sans serif",
        },

        // stufo island
        {
            x: 100,
            z: -560,
            text: "stufo island", 
            textColor: "lime", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 15px Calibri,sans serif",
        },

        // do not delete the following two closing brackets
    ]
}

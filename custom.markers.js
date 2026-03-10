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
		// village 11
	{
            x: -299,
            z: -2884,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 12
	{
            x: -964,
            z: -4190,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 13
	{
            x: -1573,
            z: -4172,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 14
	{
            x: -2038,
            z: -4745,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 15
	{
            x: -218,
            z: -4690,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 16
	{
            x: 925,
            z: -5755,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 17
	{
            x: 1765,
            z: -5172,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 18
	{
            x: 3477,
            z: -5947,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 19
	{
            x: 4627,
            z: -5605,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 20
	{
            x: 5109,
            z: -4555,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 21
	{
            x: 3965,
            z: -4140,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 22
	{
            x: 4965,
            z: -3627,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 23
	{
            x: 4616,
            z: -3101,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 24
	{
            x: 2955,
            z: -2996,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 25
	{
            x: 2365,
            z: -1419,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 26
	{
            x: 5094,
            z: 4109,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 27
	{
            x: 4437,
            z: 4093,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 28
	{
            x: 5260,
            z: 4604,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 29
	{
            x: 5548,
            z: 4710,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 30
	{
            x: 3939,
            z: 4971,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 31
	{
            x: 3030,
            z: 2501,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 32
	{
            x: 733,
            z: 2359,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 33
	{
            x: 699,
            z: 1941,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 34
	{
            x: 220,
            z: 2443,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 35
	{
            x: -311,
            z: 2300,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 36
	{
            x: 764,
            z: 3564,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 37
	{
            x: 293,
            z: 3996,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 38
	{
            x: 211,
            z: 4378,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 39
	{
            x: -940,
            z: 1813,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 40
	{
            x: -1445,
            z: 1908,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 41
	{
            x: -2619,
            z: 3996,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 42
	{
            x: -1913,
            z: 5771,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 43
	{
            x: -3502,
            z: 2440,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 44
	{
            x: -3725,
            z: 4910,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 45
	{
            x: -4613,
            z: 4630,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 46
	{
            x: -5212,
            z: 5005,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 47
	{
            x: -4699,
            z: 3829,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 48
	{
            x: -4803,
            z: 3507,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 49
	{
            x: -4267,
            z: 2948,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 50
	{
            x: -3777,
            z: 1837,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 51
	{
            x: -5229,
            z: -373,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 52
	{
            x: -5750,
            z: -1279,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 53
	{
            x: -4345,
            z: -3526,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 54
	{
            x: -5291,
            z: -4132,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 55
	{
            x: -5211,
            z: -5845,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 56
	{
            x: 4998,
            z: -2468,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 57
	{
            x: 4473,
            z: -2491,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},

		// village 58
	{
            x: 3946,
            z: -2159,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 59
	{
            x: 3986,
            z: -1597,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 60
	{
            x: 4457,
            z: -2006,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 61
	{
            x: 5059,
            z: -1971,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 62
	{
            x: 5543,
            z: -2048,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 63
	{
            x: 3399,
            z: -1428,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 64
	{
            x: 3473,
            z: -463,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 65
	{
            x: 2774,
            z: -428,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 66
	{
            x: 2387,
            z: -865,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 67
	{
            x: 2489,
            z: -409,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 68
	{
            x: 2342,
            z: 35,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 69
	{
            x: 2973,
            z: 133,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 70
	{
            x: 3341,
            z: 222,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 71
	{
            x: 2517,
            z: -3108,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 72
	{
            x: 1828,
            z: -3115,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// village 73
	{
            x: 2347,
            z: -3679,
            image: "VillagerFace.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},

	//pill
		// Pillager 1
	{
            x: -824,
            z: -856,
            image: "pillager-outpost.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// Pillager 2
	{
            x: -5048,
            z: -2120,
            image: "pillager-outpost.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// Pillager 3
	{
            x: -5864,
            z: -3608,
            image: "pillager-outpost.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
		// Pillager 4
	{
            x: -4536,
            z: -3496,
            image: "pillager-outpost.png",
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
	//ship wrek
		// ship 2
	{
            x: -664,
            z: 72,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 3
	{
            x: 280,
            z: 24,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 4
	{
            x: -2304,
            z: -1707,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 5
	{
            x: 104,
            z: 600,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 6
	{
            x: -104,
            z: 824,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 7
	{
            x: -488,
            z: 808,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 8
	{
            x: -968,
            z: 1016,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 9
	{
            x: -1240,
            z: -1320,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 10
	{
            x: -1912,
            z: -904,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 11
	{
            x: -1528,
            z: -1656,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 12
	{
            x: -1784,
            z: -1672,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 13
	{
            x: -2440,
            z: -1640,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
	},
	//ship wrek
		// ship 14
	{
            x: -1768,
            z: -2152,
            image: "shipwreck.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
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

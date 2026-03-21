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
UnminedCustomUnderground = {
    isEnabled: true,

    underground: [
		// Ancient City's
            // Ancient City 1
                {
                    x: 5128,
                    z: 2920,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Ancient City 2
                {
                    x: 3960,
                    z: -3000,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Ancient City 3
                {
                    x: 3928,
                    z: -2216,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Ancient City 4
                {
                    x: 3592,
                    z: -1800,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Ancient City 5
                {
                    x: 2856,
                    z: -3704,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Ancient City 6
                {
                    x: 2824,
                    z: -3320,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 7
                {
                    x: -774,
                    z: -184,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 8
                {
                    x: -1816,
                    z: 152,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 9
                {
                    x: -2184,
                    z: 904,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 10
                {
                    x: -3704,
                    z: 5464,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 11
                {
                    x: -3800,
                    z: -4856,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 12
                {
                    x: -3816,
                    z: 5816,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 13
                {
                    x: -4520,
                    z: 1640,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 14
                {
                    x: -4568,
                    z: 488,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 15
                {
                    x: -5272,
                    z: -2568,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Ancient City 16
                {
                    x: -5656,
                    z: -3000,
                    image: "playerimages/Ancient_City.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
		//Mineshafts
			// Mineshaft 1
                {
                    x: -5992,
                    z: -3864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2
                {
                    x: -5992,
                    z: -3656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 3
                {
                    x: -5992,
                    z: 2168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 4
                {
                    x: -5592,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 5
                {
                    x: -5992,
                    z: 5528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 6
                {
                    x: -5992,
                    z: 5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 7
                {
                    x: -5976,
                    z: -5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 8
                {
                    x: -5976,
                    z: 2456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 9
                {
                    x: -5976,
                    z: 3976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 10
                {
                    x: -5960,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 11
                {
                    x: -5960,
                    z: 2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 12
                {
                    x: -5960,
                    z: 3416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 13
                {
                    x: -5944,
                    z: -328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 14
                {
                    x: -5944,
                    z: 1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 15
                {
                    x: -5944,
                    z: 3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 16
                {
                    x: -5944,
                    z: 3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 17
                {
                    x: -5928,
                    z: -5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 18
                {
                    x: -5928,
                    z: -3528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 19
                {
                    x: -5928,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 20
                {
                    x: -5928,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 21
                {
                    x: -5864,
                    z: -4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 22
                {
                    x: -5864,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 23
                {
                    x: -5848,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 24
                {
                    x: -5848,
                    z: -648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 25
                {
                    x: -5848,
                    z: 648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 26
                {
                    x: -5848,
                    z: 3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 27
                {
                    x: -5832,
                    z: -5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 28
                {
                    x: -5832,
                    z: -3240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 29
                {
                    x: -5832,
                    z: -3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 30
                {
                    x: -5832,
                    z: -1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 31
                {
                    x: -5832,
                    z: 136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 32
                {
                    x: -5832,
                    z: 328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 33
                {
                    x: -5832,
                    z: 2952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 34
                {
                    x: -5832,
                    z: 3192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 35
                {
                    x: -5832,
                    z: 4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 36
                {
                    x: -5816,
                    z: -200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 37
                {
                    x: -5816,
                    z: 392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 38
                {
                    x: -5800,
                    z: -1784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 39
                {
                    x: -5800,
                    z: 1752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 40
                {
                    x: -5784,
                    z: -5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 41
                {
                    x: -5784,
                    z: -1224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 42
                {
                    x: -5784,
                    z: 5688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 43
                {
                    x: -5768,
                    z: -5416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 44
                {
                    x: -5768,
                    z: -3704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 45
                {
                    x: -5752,
                    z: -3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 46
                {
                    x: -5752,
                    z: -3112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 47
                {
                    x: -5752,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 48
                {
                    x: -5752,
                    z: 3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 49
                {
                    x: -5736,
                    z: 3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 50
                {
                    x: -5736,
                    z: 5080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 51
                {
                    x: -5736,
                    z: 4840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 52
                {
                    x: -5720,
                    z: -568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 53
                {
                    x: -5720,
                    z: 4664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 54
                {
                    x: -5704,
                    z: -1112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 55
                {
                    x: -5688,
                    z: -5032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 56
                {
                    x: -5688,
                    z: -2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 57
                {
                    x: -5688,
                    z: -3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 58
                {
                    x: -5688,
                    z: -1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 59
                {
                    x: -5688,
                    z: 2680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 60
                {
                    x: -5672,
                    z: 5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 61
                {
                    x: -5672,
                    z: -5016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 62
                {
                    x: -5672,
                    z: -360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 63
                {
                    x: -5672,
                    z: 4824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 64
                {
                    x: -5656,
                    z: 3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 65
                {
                    x: -5640,
                    z: -1240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 66
                {
                    x: -5624,
                    z: -1640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 67
                {
                    x: -5624,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 68
                {
                    x: -5608,
                    z: -4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 69
                {
                    x: -5608,
                    z: -2680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 70
                {
                    x: -5608,
                    z: -3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 71
                {
                    x: -5608,
                    z: -1816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 72
                {
                    x: -5608,
                    z: -664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 73
                {
                    x: -5608,
                    z: 1624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 74
                {
                    x: -5608,
                    z: 4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 75
                {
                    x: -5608,
                    z: 4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 76
                {
                    x: -5608,
                    z: 4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 77
                {
                    x: -5592,
                    z: -4408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 78
                {
                    x: -5592,
                    z: -2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 79
                {
                    x: -5592,
                    z: 3528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 80
                {
                    x: -5576,
                    z: -3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 81
                {
                    x: -5576,
                    z: 200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 82
                {
                    x: -5576,
                    z: 1528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 83
                {
                    x: -5576,
                    z: 3176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 84
                {
                    x: -5560,
                    z: -952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 85
                {
                    x: -5560,
                    z: 2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 86
                {
                    x: -5560,
                    z: 3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 87
                {
                    x: -5544,
                    z: -1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 88
                {
                    x: -5544,
                    z: -24,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 89
                {
                    x: -5544,
                    z: 4008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 90
                {
                    x: -5528,
                    z: -4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 91
                {
                    x: -5512,
                    z: -904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 92
                {
                    x: -5512,
                    z: 4424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 93
                {
                    x: -5512,
                    z: 5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 94
                {
                    x: -5512,
                    z: 5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 95
                {
                    x: -5496,
                    z: -344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 96
                {
                    x: -5496,
                    z: 1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 97
                {
                    x: -5480,
                    z: -872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 98
                {
                    x: -5480,
                    z: 2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 99
                {
                    x: -5464,
                    z: -1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 100
                {
                    x: -5464,
                    z: -600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 101
                {
                    x: -5464,
                    z: 4008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 102
                {
                    x: -5464,
                    z: 5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 103
                {
                    x: -5448,
                    z: -1176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 104
                {
                    x: -5448,
                    z: -568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 105
                {
                    x: -5448,
                    z: -280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 106
                {
                    x: -5432,
                    z: -5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 107
                {
                    x: -5432,
                    z: -2392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 108
                {
                    x: -5432,
                    z: -1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 109
                {
                    x: -5432,
                    z: 5784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 110
                {
                    x: -5416,
                    z: -4200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 111
                {
                    x: -5416,
                    z: -920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 112
                {
                    x: -5416,
                    z: 4776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 113
                {
                    x: -5400,
                    z: -5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 114
                {
                    x: -5400,
                    z: 3976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 115
                {
                    x: -5400,
                    z: 5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 116
                {
                    x: -5384,
                    z: 2120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 117
                {
                    x: -5384,
                    z: 1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 118
                {
                    x: -5368,
                    z: -2456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 119
                {
                    x: -5368,
                    z: -648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 120
                {
                    x: -5352,
                    z: -5784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 121
                {
                    x: -5352,
                    z: -2504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 122
                {
                    x: -5336,
                    z: -1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 123
                {
                    x: -5336,
                    z: -2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 124
                {
                    x: -5336,
                    z: -2232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 125
                {
                    x: -5336,
                    z: 3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 126
                {
                    x: -5320,
                    z: -4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 127
                {
                    x: -5320,
                    z: 1976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 128
                {
                    x: -5320,
                    z: 1928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 129
                {
                    x: -5320,
                    z: 3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 130
                {
                    x: -5320,
                    z: 3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 131
                {
                    x: -5320,
                    z: 4280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 132
                {
                    x: -5304,
                    z: -1016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 133
                {
                    x: -5304,
                    z: -312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 134
                {
                    x: -5288,
                    z: -5448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 135
                {
                    x: -5288,
                    z: -4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 136
                {
                    x: -5288,
                    z: -3352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 137
                {
                    x: -5288,
                    z: 824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 138
                {
                    x: -5288,
                    z: 3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 139
                {
                    x: -5272,
                    z: -3752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 140
                {
                    x: -5272,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 141
                {
                    x: -5272,
                    z: 88,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 142
                {
                    x: -5272,
                    z: 1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 143
                {
                    x: -5272,
                    z: 3288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 144
                {
                    x: -5256,
                    z: -1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 145
                {
                    x: -5240,
                    z: -200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 146
                {
                    x: -5240,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 147
                {
                    x: -5224,
                    z: -4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 148
                {
                    x: -5208,
                    z: -4872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 149
                {
                    x: -5208,
                    z: -2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 150
                {
                    x: -5208,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 151
                {
                    x: -5208,
                    z: 2088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 152
                {
                    x: -5208,
                    z: 744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 153
                {
                    x: -5192,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 154
                {
                    x: -5176,
                    z: -5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 155
                {
                    x: -5176,
                    z: 5240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 156
                {
                    x: -5160,
                    z: -2520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 157
                {
                    x: -5160,
                    z: -1352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 158
                {
                    x: -5160,
                    z: 2152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 159
                {
                    x: -5160,
                    z: 5512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 160
                {
                    x: -5144,
                    z: 552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 161
                {
                    x: -5128,
                    z: -5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 162
                {
                    x: -5128,
                    z: -5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 163
                {
                    x: -5128,
                    z: -1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 164
                {
                    x: -5128,
                    z: 4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 165
                {
                    x: -5112,
                    z: -2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 166
                {
                    x: -5112,
                    z: -2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 167
                {
                    x: -5112,
                    z: 5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 168
                {
                    x: -5096,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 169
                {
                    x: -5096,
                    z: -3832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 170
                {
                    x: -5096,
                    z: 232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 171
                {
                    x: -5080,
                    z: -2472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 172
                {
                    x: -5080,
                    z: 504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 173
                {
                    x: -5064,
                    z: -1176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 174
                {
                    x: -5048,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 175
                {
                    x: -5048,
                    z: -2136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 176
                {
                    x: -5048,
                    z: 4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 177
                {
                    x: -5032,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 178
                {
                    x: -5032,
                    z: -5832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 179
                {
                    x: -5032,
                    z: -4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 180
                {
                    x: -5032,
                    z: -2920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 181
                {
                    x: -5032,
                    z: 3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 182
                {
                    x: -5016,
                    z: -5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 183
                {
                    x: -5016,
                    z: -5688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 184
                {
                    x: -5016,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 185
                {
                    x: -5016,
                    z: -2520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 186
                {
                    x: -5016,
                    z: -136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 187
                {
                    x: -5016,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 188
                {
                    x: -5016,
                    z: 3512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 189
                {
                    x: -5016,
                    z: 2872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 190
                {
                    x: -5016,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 191
                {
                    x: -5016,
                    z: 5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 192
                {
                    x: -5000,
                    z: 296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 193
                {
                    x: -4984,
                    z: 200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 194
                {
                    x: -4984,
                    z: 5832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 195
                {
                    x: -4984,
                    z: 5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 196
                {
                    x: -4968,
                    z: 1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 197
                {
                    x: -4968,
                    z: 1496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 198
                {
                    x: -4952,
                    z: -5976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 199
                {
                    x: -4952,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 200
                {
                    x: -4952,
                    z: 1976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 201
                {
                    x: -4936,
                    z: -5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 202
                {
                    x: -4936,
                    z: -2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 203
                {
                    x: -4936,
                    z: -4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 204
                {
                    x: -4936,
                    z: 4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 205
                {
                    x: -4920,
                    z: -3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 206
                {
                    x: -4920,
                    z: -1080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 207
                {
                    x: -4904,
                    z: -5720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 208
                {
                    x: -4904,
                    z: 4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 209
                {
                    x: -4888,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 210
                {
                    x: -4888,
                    z: -4808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 211
                {
                    x: -4888,
                    z: 4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 212
                {
                    x: -4872,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 213
                {
                    x: -4872,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 214
                {
                    x: -4872,
                    z: -184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 215
                {
                    x: -4856,
                    z: 88,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 216
                {
                    x: -4856,
                    z: 5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 217
                {
                    x: -4840,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 218
                {
                    x: -4840,
                    z: 1560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 219
                {
                    x: -4824,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 220
                {
                    x: -4824,
                    z: 3288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 221
                {
                    x: -4824,
                    z: 5624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 222
                {
                    x: -4808,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 223
                {
                    x: -4808,
                    z: 5352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 224
                {
                    x: -4792,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 225
                {
                    x: -4776,
                    z: -1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 226
                {
                    x: -4776,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 227
                {
                    x: -4760,
                    z: -5608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 228
                {
                    x: -4760,
                    z: -5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 229
                {
                    x: -4760,
                    z: 3656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 230
                {
                    x: -4744,
                    z: -5416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 231
                {
                    x: -4744,
                    z: -3624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 232
                {
                    x: -4744,
                    z: -1624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 233
                {
                    x: -4728,
                    z: 920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 234
                {
                    x: -4728,
                    z: 1016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 235
                {
                    x: -4728,
                    z: 4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 236
                {
                    x: -4712,
                    z: -3128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 237
                {
                    x: -4712,
                    z: 5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 238
                {
                    x: -4696,
                    z: 4424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 239
                {
                    x: -4680,
                    z: -4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 240
                {
                    x: -4680,
                    z: -968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 241
                {
                    x: -4680,
                    z: 3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 242
                {
                    x: -4680,
                    z: 3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 243
                {
                    x: -4664,
                    z: -5368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 244
                {
                    x: -4664,
                    z: -2040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 245
                {
                    x: -4664,
                    z: 4040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 246
                {
                    x: -4648,
                    z: -1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 247
                {
                    x: -4648,
                    z: 248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 248
                {
                    x: -4648,
                    z: 4632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 249
                {
                    x: -4632,
                    z: -3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 250
                {
                    x: -4632,
                    z: 4008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 251
                {
                    x: -4632,
                    z: 5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 252
                {
                    x: -4616,
                    z: 2792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 253
                {
                    x: -4616,
                    z: 3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 254
                {
                    x: -4600,
                    z: -5880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 255
                {
                    x: -4600,
                    z: -4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 256
                {
                    x: -4600,
                    z: -4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 257
                {
                    x: -4600,
                    z: 5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 258
                {
                    x: -4584,
                    z: -5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 259
                {
                    x: -4584,
                    z: -3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 260
                {
                    x: -4584,
                    z: 40,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 261
                {
                    x: -4568,
                    z: -728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 262
                {
                    x: -4568,
                    z: -88,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 263
                {
                    x: -4568,
                    z: 5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 264
                {
                    x: -4536,
                    z: 2376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 265
                {
                    x: -4536,
                    z: 3304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 266
                {
                    x: -4520,
                    z: -3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 267
                {
                    x: -4520,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 268
                {
                    x: -4520,
                    z: 5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 269
                {
                    x: -4520,
                    z: 5512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 270
                {
                    x: -4504,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 271
                {
                    x: -4488,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 272
                {
                    x: -4488,
                    z: 5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 273
                {
                    x: -4472,
                    z: -5144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 274
                {
                    x: -4472,
                    z: -2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 275
                {
                    x: -4472,
                    z: -616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 276
                {
                    x: -4472,
                    z: 232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 277
                {
                    x: -4472,
                    z: 4856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 278
                {
                    x: -4472,
                    z: 3736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 279
                {
                    x: -4456,
                    z: -824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 280
                {
                    x: -4440,
                    z: -5976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 281
                {
                    x: -4440,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 282
                {
                    x: -4440,
                    z: 1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 283
                {
                    x: -4440,
                    z: 2536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 284
                {
                    x: -4440,
                    z: 4360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 285
                {
                    x: -4424,
                    z: 1496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 286
                {
                    x: -4408,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 287
                {
                    x: -4408,
                    z: 4488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 288
                {
                    x: -4408,
                    z: 5608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 289
                {
                    x: -4408,
                    z: 3752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 290
                {
                    x: -4376,
                    z: -4712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 291
                {
                    x: -4376,
                    z: -2472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 292
                {
                    x: -4360,
                    z: -1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 293
                {
                    x: -4360,
                    z: -456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 294
                {
                    x: -4360,
                    z: 792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 295
                {
                    x: -4360,
                    z: 440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 296
                {
                    x: -4360,
                    z: 1608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 297
                {
                    x: -4360,
                    z: 3112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 298
                {
                    x: -4360,
                    z: 5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 299
                {
                    x: -4344,
                    z: -3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 300
                {
                    x: -4344,
                    z: -3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 301
                {
                    x: -4344,
                    z: -360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 302
                {
                    x: -4344,
                    z: -456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 303
                {
                    x: -4344,
                    z: 5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 304
                {
                    x: -4328,
                    z: -5880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 305
                {
                    x: -4328,
                    z: -5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 306
                {
                    x: -4328,
                    z: -2744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 307
                {
                    x: -4328,
                    z: -2312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 308
                {
                    x: -4312,
                    z: -4840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 309
                {
                    x: -4312,
                    z: -4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 310
                {
                    x: -4312,
                    z: -3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 311
                {
                    x: -4312,
                    z: -3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 312
                {
                    x: -4312,
                    z: 5032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 313
                {
                    x: -4296,
                    z: -5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 314
                {
                    x: -4296,
                    z: -3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 315
                {
                    x: -4280,
                    z: -312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 316
                {
                    x: -4280,
                    z: 5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 317
                {
                    x: -4264,
                    z: -2680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 318
                {
                    x: -4264,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 319
                {
                    x: -4264,
                    z: 2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 320
                {
                    x: -4264,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 321
                {
                    x: -4248,
                    z: -5912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 322
                {
                    x: -4248,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 323
                {
                    x: -4248,
                    z: 1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 324
                {
                    x: -4248,
                    z: 2536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 325
                {
                    x: -4232,
                    z: -5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 326
                {
                    x: -4232,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 327
                {
                    x: -4232,
                    z: 3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 328
                {
                    x: -4184,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 329
                {
                    x: -4184,
                    z: 3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 330
                {
                    x: -4168,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 331
                {
                    x: -4168,
                    z: -1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 332
                {
                    x: -4168,
                    z: -248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 317
                {
                    x: -4264,
                    z: -2680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 318
                {
                    x: -4264,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 319
                {
                    x: -4264,
                    z: 2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 320
                {
                    x: -4264,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 321
                {
                    x: -4248,
                    z: -5912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 322
                {
                    x: -4248,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 323
                {
                    x: -4248,
                    z: 1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 324
                {
                    x: -4248,
                    z: 2536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 325
                {
                    x: -4232,
                    z: -5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 326
                {
                    x: -4232,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 327
                {
                    x: -4232,
                    z: 3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 328
                {
                    x: -4184,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 329
                {
                    x: -4184,
                    z: 3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 330
                {
                    x: -4168,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 331
                {
                    x: -4168,
                    z: -1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 332
                {
                    x: -4168,
                    z: -248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 333
                {
                    x: -4168,
                    z: -3112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 334
                {
                    x: -4168,
                    z: 4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 335
                {
                    x: -4152,
                    z: -3352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 336
                {
                    x: -4152,
                    z: -1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 337
                {
                    x: -4152,
                    z: -904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 338
                {
                    x: -4152,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 339
                {
                    x: -4152,
                    z: 4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 340
                {
                    x: -4136,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 341
                {
                    x: -4136,
                    z: -472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 342
                {
                    x: -4136,
                    z: 3752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 343
                {
                    x: -4136,
                    z: 4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 344
                {
                    x: -4136,
                    z: 5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 345
                {
                    x: -4120,
                    z: 56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 346
                {
                    x: -4104,
                    z: 1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 347
                {
                    x: -4088,
                    z: -664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 348
                {
                    x: -4088,
                    z: -56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 349
                {
                    x: -4088,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 350
                {
                    x: -4072,
                    z: -3032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 351
                {
                    x: -4072,
                    z: -392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 352
                {
                    x: -4072,
                    z: 808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 353
                {
                    x: -4072,
                    z: 3448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 354
                {
                    x: -4056,
                    z: -3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 355
                {
                    x: -4056,
                    z: 1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 356
                {
                    x: -4056,
                    z: 3224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 357
                {
                    x: -4040,
                    z: -5416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 358
                {
                    x: -4040,
                    z: -1192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 359
                {
                    x: -4040,
                    z: -2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 360
                {
                    x: -4040,
                    z: 1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 361
                {
                    x: -4024,
                    z: -5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 362
                {
                    x: -4024,
                    z: -1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 363
                {
                    x: -4024,
                    z: -680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 364
                {
                    x: -4024,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 365
                {
                    x: -4024,
                    z: -2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 366
                {
                    x: -4024,
                    z: -4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 367
                {
                    x: -4024,
                    z: 1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 368
                {
                    x: -4024,
                    z: 2024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 369
                {
                    x: -4008,
                    z: 2552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 370
                {
                    x: -4008,
                    z: 5352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 371
                {
                    x: -4008,
                    z: 4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 372
                {
                    x: -3992,
                    z: 4616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 373
                {
                    x: -3992,
                    z: 5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 374
                {
                    x: -3976,
                    z: 536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 375
                {
                    x: -3976,
                    z: 4824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 376
                {
                    x: -3976,
                    z: 3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 377
                {
                    x: -3960,
                    z: -2728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 378
                {
                    x: -3960,
                    z: 2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 379
                {
                    x: -3960,
                    z: 4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 380
                {
                    x: -3960,
                    z: 3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 381
                {
                    x: -3944,
                    z: -872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 382
                {
                    x: -3944,
                    z: -4088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 383
                {
                    x: -3944,
                    z: 5992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 384
                {
                    x: -3944,
                    z: 4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 385
                {
                    x: -3928,
                    z: -920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 386
                {
                    x: -3928,
                    z: -3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 387
                {
                    x: -3928,
                    z: 1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 388
                {
                    x: -3928,
                    z: 4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 389
                {
                    x: -3912,
                    z: -5832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 390
                {
                    x: -3912,
                    z: -4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 391
                {
                    x: -3912,
                    z: 872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 392
                {
                    x: -3896,
                    z: -4632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 393
                {
                    x: -3896,
                    z: 1496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 394
                {
                    x: -3880,
                    z: -5816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 395
                {
                    x: -3880,
                    z: -4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 396
                {
                    x: -3880,
                    z: 1304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 397
                {
                    x: -3864,
                    z: -664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 398
                {
                    x: -3864,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 399
                {
                    x: -3848,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 400
                {
                    x: -3848,
                    z: -5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 401
                {
                    x: -3848,
                    z: 1112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 402
                {
                    x: -3832,
                    z: -1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 403
                {
                    x: -3832,
                    z: -2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 404
                {
                    x: -3832,
                    z: -4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 405
                {
                    x: -3832,
                    z: 2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 406
                {
                    x: -3816,
                    z: -1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 407
                {
                    x: -3816,
                    z: -5512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 408
                {
                    x: -3816,
                    z: 3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 409
                {
                    x: -3800,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 410
                {
                    x: -3800,
                    z: -2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 411
                {
                    x: -3800,
                    z: -5416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 412
                {
                    x: -3800,
                    z: 536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 413
                {
                    x: -3800,
                    z: 5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 414
                {
                    x: -3800,
                    z: 4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 415
                {
                    x: -3800,
                    z: 4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 416
                {
                    x: -3784,
                    z: -3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 417
                {
                    x: -3784,
                    z: -3608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 418
                {
                    x: -3784,
                    z: -5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 419
                {
                    x: -3784,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 420
                {
                    x: -3784,
                    z: 4408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 421
                {
                    x: -3768,
                    z: -3960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 422
                {
                    x: -3768,
                    z: 2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 423
                {
                    x: -3768,
                    z: 4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 424
                {
                    x: -3752,
                    z: -3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 425
                {
                    x: -3752,
                    z: 1512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 426
                {
                    x: -3752,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 427
                {
                    x: -3752,
                    z: 5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 428
                {
                    x: -3736,
                    z: -5720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 429
                {
                    x: -3736,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 430
                {
                    x: -3736,
                    z: -4696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 431
                {
                    x: -3736,
                    z: 488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 432
                {
                    x: -3720,
                    z: -5416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 433
                {
                    x: -3720,
                    z: 136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 434
                {
                    x: -3720,
                    z: 4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 435
                {
                    x: -3720,
                    z: 3304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 436
                {
                    x: -3704,
                    z: -3592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 437
                {
                    x: -3704,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 438
                {
                    x: -3688,
                    z: -3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 439
                {
                    x: -3688,
                    z: -5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 440
                {
                    x: -3688,
                    z: 1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 441
                {
                    x: -3688,
                    z: 4632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 442
                {
                    x: -3672,
                    z: -360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 443
                {
                    x: -3672,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 444
                {
                    x: -3672,
                    z: 136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 445
                {
                    x: -3672,
                    z: 2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 446
                {
                    x: -3672,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 447
                {
                    x: -3656,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 448
                {
                    x: -3640,
                    z: -4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 449
                {
                    x: -3640,
                    z: -5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 450
                {
                    x: -3640,
                    z: 984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 451
                {
                    x: -3624,
                    z: -2136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 452
                {
                    x: -3624,
                    z: -3880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 453
                {
                    x: -3624,
                    z: 3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 454
                {
                    x: -3608,
                    z: -5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 455
                {
                    x: -3608,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 456
                {
                    x: -3608,
                    z: -3448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 457
                {
                    x: -3608,
                    z: -4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 458
                {
                    x: -3608,
                    z: -5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 459
                {
                    x: -3608,
                    z: -5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 460
                {
                    x: -3592,
                    z: -488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 461
                {
                    x: -3592,
                    z: -1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 462
                {
                    x: -3592,
                    z: -5352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 463
                {
                    x: -3576,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 464
                {
                    x: -3576,
                    z: -4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 465
                {
                    x: -3576,
                    z: -5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 466
                {
                    x: -3560,
                    z: 1064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 467
                {
                    x: -3560,
                    z: 4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 468
                {
                    x: -3544,
                    z: -4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 469
                {
                    x: -3544,
                    z: -4744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 470
                {
                    x: -3544,
                    z: 4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 471
                {
                    x: -3544,
                    z: 4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 472
                {
                    x: -3528,
                    z: -5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 473
                {
                    x: -3528,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 474
                {
                    x: -3528,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 475
                {
                    x: -3528,
                    z: 2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 476
                {
                    x: -3528,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 477
                {
                    x: -3512,
                    z: -1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 478
                {
                    x: -3512,
                    z: -4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 479
                {
                    x: -3512,
                    z: 5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 480
                {
                    x: -3496,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 481
                {
                    x: -3496,
                    z: -4744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 482
                {
                    x: -3496,
                    z: 504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 483
                {
                    x: -3496,
                    z: 840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 484
                {
                    x: -3496,
                    z: 1400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 485
                {
                    x: -3496,
                    z: 5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 486
                {
                    x: -3480,
                    z: -216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 487
                {
                    x: -3480,
                    z: -824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 488
                {
                    x: -3480,
                    z: -2504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 489
                {
                    x: -3480,
                    z: 1480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 490
                {
                    x: -3480,
                    z: 2008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 491
                {
                    x: -3480,
                    z: 2168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 492
                {
                    x: -3464,
                    z: -2248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 493
                {
                    x: -3464,
                    z: 408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 494
                {
                    x: -3464,
                    z: 3320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 495
                {
                    x: -3448,
                    z: -520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 496
                {
                    x: -3448,
                    z: 424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 497
                {
                    x: -3448,
                    z: 3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 498
                {
                    x: -3432,
                    z: -1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 499
                {
                    x: -3432,
                    z: -1688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Minesshaft 500
                {
                    x: -3432,
                    z: -5624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 501
                {
                    x: -3432,
                    z: -5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 502
                {
                    x: -3432,
                    z: 5528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 503
                {
                    x: -3416,
                    z: -872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 504
                {
                    x: -3416,
                    z: 1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 505
                {
                    x: -3400,
                    z: -3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 506
                {
                    x: -3400,
                    z: 3128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 507
                {
                    x: -3384,
                    z: 1880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 508
                {
                    x: -3384,
                    z: 5240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 509
                {
                    x: -3384,
                    z: 4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 510
                {
                    x: -3384,
                    z: 4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 511
                {
                    x: -3368,
                    z: -2936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 512
                {
                    x: -3368,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 513
                {
                    x: -3368,
                    z: 536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 514
                {
                    x: -3368,
                    z: 1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 515
                {
                    x: -3368,
                    z: 3000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 516
                {
                    x: -3368,
                    z: 3128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 517
                {
                    x: -3352,
                    z: -616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 518
                {
                    x: -3352,
                    z: -2136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 519
                {
                    x: -3352,
                    z: -4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 520
                {
                    x: -3352,
                    z: 1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 521
                {
                    x: -3352,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 522
                {
                    x: -3352,
                    z: 2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 523
                {
                    x: -3336,
                    z: -200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 524
                {
                    x: -3336,
                    z: -3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 525
                {
                    x: -3336,
                    z: -5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 526
                {
                    x: -3320,
                    z: -3304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 527
                {
                    x: -3320,
                    z: -4280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 528
                {
                    x: -3320,
                    z: 1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 529
                {
                    x: -3304,
                    z: -2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 530
                {
                    x: -3288,
                    z: -4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 531
                {
                    x: -3272,
                    z: -4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 532
                {
                    x: -3272,
                    z: 4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 533
                {
                    x: -3256,
                    z: -2824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 534
                {
                    x: -3256,
                    z: -4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 535
                {
                    x: -3256,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 536
                {
                    x: -3256,
                    z: 264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 537
                {
                    x: -3240,
                    z: -5784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 538
                {
                    x: -3240,
                    z: 2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 539
                {
                    x: -3224,
                    z: -4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 540
                {
                    x: -3224,
                    z: 760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 541
                {
                    x: -3224,
                    z: 5704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 542
                {
                    x: -3208,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 543
                {
                    x: -3208,
                    z: 4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 544
                {
                    x: -3208,
                    z: 2936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 545
                {
                    x: -3192,
                    z: -3352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 546
                {
                    x: -3192,
                    z: 3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 547
                {
                    x: -3176,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 548
                {
                    x: -3176,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 549
                {
                    x: -3176,
                    z: 5592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 550
                {
                    x: -3160,
                    z: 5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 551
                {
                    x: -3144,
                    z: -520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 552
                {
                    x: -3144,
                    z: -5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 553
                {
                    x: -3144,
                    z: 5832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 554
                {
                    x: -3128,
                    z: -2680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 555
                {
                    x: -3128,
                    z: -5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 556
                {
                    x: -3128,
                    z: 1512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 557
                {
                    x: -3128,
                    z: 2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 558
                {
                    x: -3128,
                    z: 2280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 559
                {
                    x: -3128,
                    z: 4776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 560
                {
                    x: -3112,
                    z: -1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 561
                {
                    x: -3112,
                    z: 120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 562
                {
                    x: -3112,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 563
                {
                    x: -3112,
                    z: 4472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 564
                {
                    x: -3096,
                    z: -5096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 565
                {
                    x: -3096,
                    z: 5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 566
                {
                    x: -3064,
                    z: -4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 567
                {
                    x: -3064,
                    z: 3128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 568
                {
                    x: -3048,
                    z: 104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 569
                {
                    x: -3048,
                    z: 5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 570
                {
                    x: -3048,
                    z: 4616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 571
                {
                    x: -3032,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 572
                {
                    x: -3032,
                    z: 3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 573
                {
                    x: -3000,
                    z: -3976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 574
                {
                    x: -3000,
                    z: 232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 575
                {
                    x: -2984,
                    z: -600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 576
                {
                    x: -2984,
                    z: -4424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 577
                {
                    x: -2984,
                    z: 2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 578
                {
                    x: -2968,
                    z: -1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 579
                {
                    x: -2968,
                    z: -2408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 580
                {
                    x: -2968,
                    z: 1080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 581
                {
                    x: -2968,
                    z: 3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 582
                {
                    x: -2952,
                    z: -1880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 583
                {
                    x: -2952,
                    z: -4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 584
                {
                    x: -2952,
                    z: 696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 585
                {
                    x: -2936,
                    z: -3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 586
                {
                    x: -2936,
                    z: -5288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 587
                {
                    x: -2920,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 588
                {
                    x: -2920,
                    z: 1784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 589
                {
                    x: -2904,
                    z: -3960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 590
                {
                    x: -2904,
                    z: 5608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 591
                {
                    x: -2904,
                    z: 3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 592
                {
                    x: -2888,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 593
                {
                    x: -2888,
                    z: -1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 594
                {
                    x: -2888,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 595
                {
                    x: -2888,
                    z: 952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 596
                {
                    x: -2872,
                    z: -4824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 597
                {
                    x: -2872,
                    z: 3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 598
                {
                    x: -2856,
                    z: 4712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 599
                {
                    x: -2840,
                    z: -1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
             // Mineshaft 600
                {
                    x: -2840,
                    z: -1480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 601
                {
                    x: -2840,
                    z: -3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 602
                {
                    x: -2840,
                    z: -3160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 603
                {
                    x: -2824,
                    z: -1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },      
            // Mineshaft 604
                {
                    x: -2824,
                    z: -3640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 605
                {
                    x: -2824,
                    z: -5144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 606
                {
                    x: -2824,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 607
                {
                    x: -2824,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 608
                {
                    x: -2808,
                    z: -536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 609
                {
                    x: -2808,
                    z: -1064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 610
                {
                    x: -2808,
                    z: -1192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 611
                {
                    x: -2808,
                    z: -1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 612
                {
                    x: -2808,
                    z: 840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 613
                {
                    x: -2808,
                    z: 1768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 614
                {
                    x: -2808,
                    z: 4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 615
                {
                    x: -2792,
                    z: -2728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 616
                {
                    x: -2792,
                    z: 5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 617
                {
                    x: -2792,
                    z: 3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 618
                {
                    x: -2776,
                    z: -1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 619
                {
                    x: -2776,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 620
                {
                    x: -2776,
                    z: 664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 621
                {
                    x: -2776,
                    z: 648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 622
                {
                    x: -2760,
                    z: -1784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 623
                {
                    x: -2760,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 624
                {
                    x: -2760,
                    z: -4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 625
                {
                    x: -2760,
                    z: -2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 626
                {
                    x: -2744,
                    z: -2456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 627
                {
                    x: -2744,
                    z: 4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 628
                {
                    x: -2728,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 629
                {
                    x: -2728,
                    z: -200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 630
                {
                    x: -2728,
                    z: -2008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 631
                {
                    x: -2728,
                    z: -4488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 632
                {
                    x: -2728,
                    z: 904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 633
                {
                    x: -2728,
                    z: 5512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 634
                {
                    x: -2696,
                    z: -3976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 635
                {
                    x: -2696,
                    z: 1560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 636
                {
                    x: -2696,
                    z: 2504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 637
                {
                    x: -2696,
                    z: 2584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 638
                {
                    x: -2696,
                    z: 2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 639
                {
                    x: -2680,
                    z: -1368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 640
                {
                    x: -2664,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 641
                {
                    x: -2664,
                    z: -2920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 642
                {
                    x: -2664,
                    z: -3160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 643
                {
                    x: -2664,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 644
                {
                    x: -2664,
                    z: 1384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 645
                {
                    x: -2648,
                    z: 1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 646
                {
                    x: -2648,
                    z: 1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 647
                {
                    x: -2632,
                    z: -1992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 648
                {
                    x: -2616,
                    z: -1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 649
                {
                    x: -2616,
                    z: -4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 650
                {
                    x: -2616,
                    z: 3896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 651
                {
                    x: -2616,
                    z: 3896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 652
                {
                    x: -2600,
                    z: -2376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 653
                {
                    x: -2584,
                    z: 424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 654
                {
                    x: -2568,
                    z: -4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 655
                {
                    x: -2568,
                    z: -4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 656
                {
                    x: -2568,
                    z: -2248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 657
                {
                    x: -2568,
                    z: 3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 658
                {
                    x: -2552,
                    z: -5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 659
                {
                    x: -2552,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 660
                {
                    x: -2552,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 661
                {
                    x: -2552,
                    z: 3864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 662
                {
                    x: -2536,
                    z: -3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 663
                {
                    x: -2536,
                    z: -4216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 664
                {
                    x: -2536,
                    z: 2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 665
                {
                    x: -2520,
                    z: -5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 666
                {
                    x: -2504,
                    z: -3368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 667
                {
                    x: -2504,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 668
                {
                    x: -2488,
                    z: -1368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 669
                {
                    x: -2488,
                    z: -1784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 670
                {
                    x: -2488,
                    z: -3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 671
                {
                    x: -2440,
                    z: -5816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 672
                {
                    x: -2440,
                    z: -232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 673
                {
                    x: -2440,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 674
                {
                    x: -2440,
                    z: -3832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 675
                {
                    x: -2440,
                    z: 5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 676
                {
                    x: -2424,
                    z: -5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 677
                {
                    x: -2408,
                    z: -5880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 678
                {
                    x: -2408,
                    z: -3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 679
                {
                    x: -2408,
                    z: -2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 680
                {
                    x: -2392,
                    z: -1960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 681
                {
                    x: -2392,
                    z: 1976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 682
                {
                    x: -2376,
                    z: 4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 683
                {
                    x: -2376,
                    z: 3848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 684
                {
                    x: -2360,
                    z: -520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 685
                {
                    x: -2360,
                    z: -4424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 686
                {
                    x: -2360,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 687
                {
                    x: -2360,
                    z: 3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 688
                {
                    x: -2344,
                    z: -4216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 689
                {
                    x: -2344,
                    z: 2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 690
                {
                    x: -2344,
                    z: 3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 691
                {
                    x: -2328,
                    z: 536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 692
                {
                    x: -2312,
                    z: -5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 693
                {
                    x: -2312,
                    z: -1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 694
                {
                    x: -2312,
                    z: -2808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 695
                {
                    x: -2312,
                    z: 1352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 696
                {
                    x: -2296,
                    z: -3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 697
                {
                    x: -2296,
                    z: -4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 698
                {
                    x: -2296,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },  
            // Mineshaft 699
                {
                    x: -2296,
                    z: 3176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 700
                {
                    x: -2296,
                    z: 2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 701
                {
                    x: -2280,
                    z: -1752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 702
                {
                    x: -2280,
                    z: -2584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 703
                {
                    x: -2264,
                    z: -5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 704
                {
                    x: -2264,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 705
                {
                    x: -2264,
                    z: 4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 706
                {
                    x: -2264,
                    z: 4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 707
                {
                    x: -2248,
                    z: -2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 708
                {
                    x: -2248,
                    z: 1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 709
                {
                    x: -2248,
                    z: 2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },                
            // Mineshaft 710
                {
                    x: -2232,
                    z: -5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 711
                {
                    x: -2232,
                    z: -3096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 712
                {
                    x: -2232,
                    z: -3224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 713
                {
                    x: -2232,
                    z: -1880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 714
                {
                    x: -2232,
                    z: 5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 715
                {
                    x: -2216,
                    z: -3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 716
                {
                    x: -2216,
                    z: 1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 717
                {
                    x: -2200,
                    z: -3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 718
                {
                    x: -2200,
                    z: 440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 719
                {
                    x: -2200,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 720
                {
                    x: -2184,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 721
                {
                    x: -2184,
                    z: -824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 722
                {
                    x: -2184,
                    z: -104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 723
                {
                    x: -2184,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 724
                {
                    x: -2184,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 725
                {
                    x: -2184,
                    z: 5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 726
                {
                    x: -2184,
                    z: 4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 727
                {
                    x: -2168,
                    z: -5448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 728
                {
                    x: -2168,
                    z: -1416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 729
                {
                    x: -2168,
                    z: 3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 730
                {
                    x: -2152,
                    z: -5256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 731
                {
                    x: -2152,
                    z: 3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 732
                {
                    x: -2136,
                    z: -312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 733
                {
                    x: -2136,
                    z: -1688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 734
                {
                    x: -2136,
                    z: -3592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 735
                {
                    x: -2120,
                    z: -2040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 736
                {
                    x: -2120,
                    z: -2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 737
                {
                    x: -2120,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 738
                {
                    x: -2120,
                    z: 5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 739
                {
                    x: -2104,
                    z: -4152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 740
                {
                    x: -2104,
                    z: -3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 741
                {
                    x: -2104,
                    z: 4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 742
                {
                    x: -2088,
                    z: -4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 743
                {
                    x: -2088,
                    z: -4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 744
                {
                    x: -2072,
                    z: -4472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 745
                {
                    x: -2072,
                    z: 5624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 746
                {
                    x: -2056,
                    z: -232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 747
                {
                    x: -2056,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 748
                {
                    x: -2056,
                    z: 3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 749
                {
                    x: -2040,
                    z: -4120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 750
                {
                    x: -2024,
                    z: -3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 751
                {
                    x: -2024,
                    z: 1704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 752
                {
                    x: -2024,
                    z: 8,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 753
                {
                    x: -2008,
                    z: -3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 754
                {
                    x: -2008,
                    z: -3592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 755
                {
                    x: -2008,
                    z: 4696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 756
                {
                    x: -2008,
                    z: 504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 757
                {
                    x: -2008,
                    z: 1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 758
                {
                    x: -1992,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 759
                {
                    x: -1992,
                    z: -1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 760
                {
                    x: -1992,
                    z: 3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 761
                {
                    x: -1976,
                    z: -4712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 762
                {
                    x: -1976,
                    z: 5576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 763
                {
                    x: -1960,
                    z: 1928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 764
                {
                    x: -1944,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 765
                {
                    x: -1944,
                    z: -5976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 766
                {
                    x: -1944,
                    z: -3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 767
                {
                    x: -1944,
                    z: 2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 768
                {
                    x: -1928,
                    z: 4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 769
                {
                    x: -1928,
                    z: 2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 770
                {
                    x: -1912,
                    z: -5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 771
                {
                    x: -1912,
                    z: -440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 772
                {
                    x: -1912,
                    z: -904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 773
                {
                    x: -1912,
                    z: -1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 774
                {
                    x: -1912,
                    z: 4280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 775
                {
                    x: -1912,
                    z: 824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 776
                {
                    x: -1896,
                    z: 3592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 777
                {
                    x: -1896,
                    z: 2280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 778
                {
                    x: -1880,
                    z: -5528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 779
                {
                    x: -1880,
                    z: -328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 780
                {
                    x: -1880,
                    z: -1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 781
                {
                    x: -1880,
                    z: -3304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 782
                {
                    x: -1880,
                    z: -3880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 783
                {
                    x: -1880,
                    z: -2056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 784
                {
                    x: -1880,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 785
                {
                    x: -1864,
                    z: -4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 786
                {
                    x: -1864,
                    z: -3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 787
                {
                    x: -1864,
                    z: -2008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 788
                {
                    x: -1864,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 789
                {
                    x: -1848,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 790
                {
                    x: -1848,
                    z: 4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 791
                {
                    x: -1848,
                    z: 4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 792
                {
                    x: -1848,
                    z: 1976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 793
                {
                    x: -1832,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 794
                {
                    x: -1816,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 795
                {
                    x: -1816,
                    z: 4152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 796
                {
                    x: -1816,
                    z: 776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 797
                {
                    x: -1800,
                    z: -1528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 798
                {
                    x: -1800,
                    z: -2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 799
                {
                    x: -1784,
                    z: -72,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3
                },
            // Mineshaft 800
                {
                    x: -1784,
                    z: -600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 801
                {
                    x: -1752,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 802
                {
                    x: -1752,
                    z: 2648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 803
                {
                    x: -1752,
                    z: 1272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 804
                {
                    x: -1736,
                    z: 5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 805
                {
                    x: -1720,
                    z: -5752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 806
                {
                    x: -1720,
                    z: -5656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 807
                {
                    x: -1720,
                    z: -2280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 808
                {
                    x: -1720,
                    z: 2776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 809
                {
                    x: -1720,
                    z: 1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 810
                {
                    x: -1704,
                    z: -3272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 811
                {
                    x: -1688,
                    z: -1592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 812
                {
                    x: -1688,
                    z: -3608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 813
                {
                    x: -1672,
                    z: -5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 814
                {
                    x: -1672,
                    z: -4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 815
                {
                    x: -1672,
                    z: 2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 816
                {
                    x: -1672,
                    z: 2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 817
                {
                    x: -1672,
                    z: 504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 818
                {
                    x: -1672,
                    z: 648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 819
                {
                    x: -1656,
                    z: -2888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 820
                {
                    x: -1656,
                    z: 4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 821
                {
                    x: -1656,
                    z: 2728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 822
                {
                    x: -1656,
                    z: 1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 823
                {
                    x: -1640,
                    z: -312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 824
                {
                    x: -1640,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 825
                {
                    x: -1640,
                    z: 3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 826
                {
                    x: -1640,
                    z: 936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 827
                {
                    x: -1624,
                    z: -696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 828
                {
                    x: -1624,
                    z: -2312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 829
                {
                    x: -1624,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 830
                {
                    x: -1624,
                    z: 2472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 831
                {
                    x: -1608,
                    z: -5448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 832
                {
                    x: -1608,
                    z: -584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 833
                {
                    x: -1608,
                    z: -4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 834
                {
                    x: -1608,
                    z: -2408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 835
                {
                    x: -1608,
                    z: 5304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 836
                {
                    x: -1592,
                    z: 5656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 837
                {
                    x: -1592,
                    z: 3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 838
                {
                    x: -1576,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 839
                {
                    x: -1576,
                    z: 680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 840
                {
                    x: -1560,
                    z: -3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 841
                {
                    x: -1560,
                    z: -3272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 842
                {
                    x: -1560,
                    z: 2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 843
                {
                    x: -1544,
                    z: 8,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 844
                {
                    x: -1544,
                    z: 2120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 845
                {
                    x: -1528,
                    z: -1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 846
                {
                    x: -1528,
                    z: -3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 847
                {
                    x: -1528,
                    z: -2168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 848
                {
                    x: -1512,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 849
                {
                    x: -1496,
                    z: -5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 850
                {
                    x: -1496,
                    z: -2792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 851
                {
                    x: -1496,
                    z: 5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 852
                {
                    x: -1496,
                    z: 3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 853
                {
                    x: -1496,
                    z: 712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 854
                {
                    x: -1496,
                    z: 2104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 855
                {
                    x: -1480,
                    z: -3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 856
                {
                    x: -1480,
                    z: -2136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 857
                {
                    x: -1480,
                    z: 1176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 858
                {
                    x: -1464,
                    z: -136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 859
                {
                    x: -1464,
                    z: -1304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 860
                {
                    x: -1464,
                    z: 3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 861
                {
                    x: -1448,
                    z: 5512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 862
                {
                    x: -1448,
                    z: 1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 863
                {
                    x: -1432,
                    z: -4840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 864
                {
                    x: -1432,
                    z: -1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 865
                {
                    x: -1432,
                    z: 3608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 866
                {
                    x: -1432,
                    z: 632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 867
                {
                    x: -1432,
                    z: 2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 868
                {
                    x: -1416,
                    z: -2824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 869
                {
                    x: -1416,
                    z: -1944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 870
                {
                    x: -1416,
                    z: 2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 871
                {
                    x: -1416,
                    z: 1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 872
                {
                    x: -1400,
                    z: -4840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 873
                {
                    x: -1400,
                    z: -2872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 874
                {
                    x: -1400,
                    z: 1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 875
                {
                    x: -1384,
                    z: -5080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 876
                {
                    x: -1384,
                    z: 3736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 877
                {
                    x: -1384,
                    z: 808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 878
                {
                    x: -1384,
                    z: 56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 879
                {
                    x: -1368,
                    z: -552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 880
                {
                    x: -1368,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 881
                {
                    x: -1368,
                    z: -4184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 882
                {
                    x: -1368,
                    z: -2152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 883
                {
                    x: -1368,
                    z: 4856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 884
                {
                    x: -1368,
                    z: 4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 885
                {
                    x: -1368,
                    z: 1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 886
                {
                    x: -1352,
                    z: -4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 887
                {
                    x: -1352,
                    z: -3528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 888
                {
                    x: -1336,
                    z: -5896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 889
                {
                    x: -1336,
                    z: -4008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 890
                {
                    x: -1336,
                    z: -3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 891
                {
                    x: -1336,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 892
                {
                    x: -1336,
                    z: -1976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 893
                {
                    x: -1336,
                    z: 2872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 894
                {
                    x: -1336,
                    z: 1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 895
                {
                    x: -1320,
                    z: -5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 896
                {
                    x: -1320,
                    z: -3240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 897
                {
                    x: -1320,
                    z: -2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 898
                {
                    x: -1320,
                    z: 5256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 899
                {
                    x: -1320,
                    z: 4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 900
                {
                    x: -1320,
                    z: 2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 901
                {
                    x: -1304,
                    z: 4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 902
                {
                    x: -1304,
                    z: 3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 903
                {
                    x: -1288,
                    z: -5784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 904
                {
                    x: -1288,
                    z: -3976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 905
                {
                    x: -1272,
                    z: -952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 906
                {
                    x: -1272,
                    z: 5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 907
                {
                    x: -1272,
                    z: 2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 908
                {
                    x: -1272,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 909
                {
                    x: -1256,
                    z: 4664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 910
                {
                    x: -1256,
                    z: 1704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 911
                {
                    x: -1240,
                    z: 5752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 912
                {
                    x: -1240,
                    z: 104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 913
                {
                    x: -1224,
                    z: -1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 914
                {
                    x: -1224,
                    z: 4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 915
                {
                    x: -1224,
                    z: 3304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 916
                {
                    x: -1224,
                    z: 2104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 917
                {
                    x: -1208,
                    z: -968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 918
                {
                    x: -1160,
                    z: -216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 919
                {
                    x: -1160,
                    z: -4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 920
                {
                    x: -1160,
                    z: 3832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 921
                {
                    x: -1144,
                    z: -3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 922
                {
                    x: -1144,
                    z: 4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 923
                {
                    x: -1128,
                    z: -1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 924
                {
                    x: -1128,
                    z: 5624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 925
                {
                    x: -1128,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 926
                {
                    x: -1128,
                    z: 2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 927
                {
                    x: -1128,
                    z: 328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 928
                {
                    x: -1112,
                    z: -5528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 929
                {
                    x: -1112,
                    z: -4040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 930
                {
                    x: -1112,
                    z: -1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 931
                {
                    x: -1112,
                    z: -2024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 932
                {
                    x: -1112,
                    z: 4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 933
                {
                    x: -1112,
                    z: 5016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 934
                {
                    x: -1112,
                    z: 4056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 935
                {
                    x: -1112,
                    z: 3720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 936
                {
                    x: -1112,
                    z: 1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 937
                {
                    x: -1096,
                    z: -5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 938
                {
                    x: -1096,
                    z: -4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 939
                {
                    x: -1096,
                    z: -760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 940
                {
                    x: -1096,
                    z: -1992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 941
                {
                    x: -1096,
                    z: -2248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 942
                {
                    x: -1080,
                    z: -1608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 943
                {
                    x: -1080,
                    z: 4840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 944
                {
                    x: -1080,
                    z: 1944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 945
                {
                    x: -1080,
                    z: 2104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 946
                {
                    x: -1064,
                    z: -5416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 947
                {
                    x: -1064,
                    z: -5608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 948
                {
                    x: -1064,
                    z: -4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 949
                {
                    x: -1064,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 950
                {
                    x: -1048,
                    z: -4856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 951
                {
                    x: -1048,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 952
                {
                    x: -1032,
                    z: -3176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 953
                {
                    x: -1032,
                    z: 4216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 954
                {
                    x: -1032,
                    z: 2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 955
                {
                    x: -1032,
                    z: 2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 956
                {
                    x: -1016,
                    z: -5704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 957
                {
                    x: -1016,
                    z: -1112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 958
                {
                    x: -1016,
                    z: 2888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 959
                {
                    x: -1000,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 960
                {
                    x: -1000,
                    z: -2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 961
                {
                    x: -984,
                    z: 3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 962
                {
                    x: -968,
                    z: -4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 963
                {
                    x: -968,
                    z: -2904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 964
                {
                    x: -968,
                    z: -824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 965
                {
                    x: -968,
                    z: -1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 966
                {
                    x: -968,
                    z: 1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 967
                {
                    x: -952,
                    z: -5528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 968
                {
                    x: -952,
                    z: 392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 969
                {
                    x: -952,
                    z: 1720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 970
                {
                    x: -952,
                    z: 2088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 971
                {
                    x: -936,
                    z: -200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 972
                {
                    x: -936,
                    z: -120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 973
                {
                    x: -920,
                    z: -5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 974
                {
                    x: -920,
                    z: -5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 975
                {
                    x: -920,
                    z: -1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 976
                {
                    x: -920,
                    z: 600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 977
                {
                    x: -920,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 978
                {
                    x: -920,
                    z: 2456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 979
                {
                    x: -904,
                    z: -3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 980
                {
                    x: -904,
                    z: -2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 981
                {
                    x: -904,
                    z: 5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 982
                {
                    x: -904,
                    z: 2872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 983
                {
                    x: -904,
                    z: 1272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 984
                {
                    x: -888,
                    z: -4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 985
                {
                    x: -888,
                    z: 168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 986
                {
                    x: -888,
                    z: 2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 987
                {
                    x: -888,
                    z: 2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 988
                {
                    x: -872,
                    z: 5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 989
                {
                    x: -872,
                    z: 5256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 990
                {
                    x: -856,
                    z: -4616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 991
                {
                    x: -856,
                    z: -1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 992
                {
                    x: -840,
                    z: -440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 993
                {
                    x: -840,
                    z: -1192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 994
                {
                    x: -840,
                    z: -1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 995
                {
                    x: -840,
                    z: -1784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 996
                {
                    x: -840,
                    z: 5240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 997
                {
                    x: -840,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 998
                {
                    x: -824,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 999
                {
                    x: -824,
                    z: 2776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1000
                {
                    x: -808,
                    z: 3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1001
                {
                    x: -792,
                    z: -4792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1002
                {
                    x: -792,
                    z: 5192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1003
                {
                    x: -792,
                    z: 1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1004
                {
                    x: -792,
                    z: 2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1005
                {
                    x: -792,
                    z: 2696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1006
                {
                    x: -776,
                    z: -3240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1007
                {
                    x: -776,
                    z: -2376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1008
                {
                    x: -776,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1009
                {
                    x: -776,
                    z: 264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1010
                {
                    x: -760,
                    z: -280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1011
                {
                    x: -760,
                    z: -1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1012
                {
                    x: -760,
                    z: -1400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1013
                {
                    x: -760,
                    z: 5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1014
                {
                    x: -760,
                    z: 4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1015
                {
                    x: -760,
                    z: 3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1016
                {
                    x: -760,
                    z: 2168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1017
                {
                    x: -744,
                    z: -4776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1018
                {
                    x: -744,
                    z: -2008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1019
                {
                    x: -728,
                    z: -5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1020
                {
                    x: -696,
                    z: -968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1021
                {
                    x: -696,
                    z: 4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1022
                {
                    x: -696,
                    z: 408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1023
                {
                    x: -680,
                    z: -4808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1024
                {
                    x: -680,
                    z: 3720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1025
                {
                    x: -664,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1026
                {
                    x: -664,
                    z: -3896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1027
                {
                    x: -664,
                    z: 2920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1028
                {
                    x: -664,
                    z: 808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1029
                {
                    x: -648,
                    z: -4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1030
                {
                    x: -648,
                    z: -3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1031
                {
                    x: -648,
                    z: 4616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1032
                {
                    x: -648,
                    z: 3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1033
                {
                    x: -632,
                    z: -4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1034
                {
                    x: -632,
                    z: -1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1035
                {
                    x: -632,
                    z: -1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1036
                {
                    x: -632,
                    z: -2440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1037
                {
                    x: -616,
                    z: -5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1038
                {
                    x: -616,
                    z: -3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1039
                {
                    x: -616,
                    z: -2696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1040
                {
                    x: -616,
                    z: 2392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1041
                {
                    x: -600,
                    z: -4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1042
                {
                    x: -600,
                    z: -2680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1043
                {
                    x: -600,
                    z: 5272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1044
                {
                    x: -600,
                    z: 2536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1045
                {
                    x: -600,
                    z: 3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1046
                {
                    x: -584,
                    z: -104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1047
                {
                    x: -584,
                    z: 5512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1048
                {
                    x: -584,
                    z: 2552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1049
                {
                    x: -568,
                    z: 5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1050
                {
                    x: -552,
                    z: -5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1051
                {
                    x: -552,
                    z: -1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1052
                {
                    x: -552,
                    z: -2088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1053
                {
                    x: -552,
                    z: 4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1054
                {
                    x: -536,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1055
                {
                    x: -536,
                    z: 440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1056
                {
                    x: -520,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1057
                {
                    x: -520,
                    z: -2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1058
                {
                    x: -520,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1059
                {
                    x: -504,
                    z: -1064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1060
                {
                    x: -504,
                    z: 5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1061
                {
                    x: -504,
                    z: 4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1062
                {
                    x: -504,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1063
                {
                    x: -504,
                    z: 2776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1064
                {
                    x: -488,
                    z: -5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1065
                {
                    x: -488,
                    z: -2520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1066
                {
                    x: -488,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1067
                {
                    x: -472,
                    z: -5944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1068
                {
                    x: -472,
                    z: -2728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1069
                {
                    x: -472,
                    z: 2312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1070
                {
                    x: -456,
                    z: -5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1071
                {
                    x: -456,
                    z: 1928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1072
                {
                    x: -456,
                    z: 2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1073
                {
                    x: -440,
                    z: -4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1074
                {
                    x: -440,
                    z: -3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1075
                {
                    x: -424,
                    z: -1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1076
                {
                    x: -424,
                    z: 744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1077
                {
                    x: -408,
                    z: -2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1078
                {
                    x: -408,
                    z: 5624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1079
                {
                    x: -408,
                    z: 4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1080
                {
                    x: -408,
                    z: 1960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1081
                {
                    x: -392,
                    z: -3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1082
                {
                    x: -392,
                    z: -952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1083
                {
                    x: -360,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1084
                {
                    x: -360,
                    z: -840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1085
                {
                    x: -344,
                    z: -5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1086
                {
                    x: -344,
                    z: -2376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1087
                {
                    x: -344,
                    z: -2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1088
                {
                    x: -344,
                    z: 5720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1089
                {
                    x: -344,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1090
                {
                    x: -328,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1091
                {
                    x: -328,
                    z: 5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1092
                {
                    x: -296,
                    z: -5816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1093
                {
                    x: -296,
                    z: 4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1094
                {
                    x: -296,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1095
                {
                    x: -296,
                    z: 3880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1096
                {
                    x: -296,
                    z: 456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1097
                {
                    x: -296,
                    z: 2152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1098
                {
                    x: -296,
                    z: 3592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1099
                {
                    x: -280,
                    z: -4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1100
                {
                    x: -280,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1101
                {
                    x: -280,
                    z: 3096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1102
                {
                    x: -280,
                    z: 3000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1103
                {
                    x: -264,
                    z: -5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1104
                {
                    x: -264,
                    z: 1688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1105
                {
                    x: -264,
                    z: 3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1106
                {
                    x: -264,
                    z: 3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1107
                {
                    x: -248,
                    z: -3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1108
                {
                    x: -248,
                    z: 5816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1109
                {
                    x: -248,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1110
                {
                    x: -248,
                    z: 3272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1111
                {
                    x: -248,
                    z: 2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1112
                {
                    x: -232,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1113
                {
                    x: -216,
                    z: -3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1114
                {
                    x: -216,
                    z: 2056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1115
                {
                    x: -200,
                    z: -5816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1116
                {
                    x: -200,
                    z: 4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1117
                {
                    x: -200,
                    z: 1816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1118
                {
                    x: -184,
                    z: 1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1119
                {
                    x: -168,
                    z: -2392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1120
                {
                    x: -168,
                    z: 616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1121
                {
                    x: -152,
                    z: 3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1122
                {
                    x: -152,
                    z: 2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1123
                {
                    x: -120,
                    z: -3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1124
                {
                    x: -120,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1125
                {
                    x: -104,
                    z: 1992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1126
                {
                    x: -104,
                    z: 3096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1127
                {
                    x: -88,
                    z: 5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1128
                {
                    x: -88,
                    z: 5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1129
                {
                    x: -88,
                    z: 5976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1130
                {
                    x: -88,
                    z: 872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1131
                {
                    x: -88,
                    z: 2760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1132
                {
                    x: -72,
                    z: 3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1133
                {
                    x: -72,
                    z: 4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1134
                {
                    x: -56,
                    z: 5944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1135
                {
                    x: -56,
                    z: 4488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1136
                {
                    x: -56,
                    z: 4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1137
                {
                    x: -40,
                    z: 3736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1138
                {
                    x: -24,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1139
                {
                    x: -24,
                    z: 4408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1140
                {
                    x: -8,
                    z: -4360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1141
                {
                    x: -8,
                    z: -3320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1142
                {
                    x: -8,
                    z: 5656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1143
                {
                    x: -8,
                    z: 856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1144
                {
                    x: 8,
                    z: -3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1145
                {
                    x: 8,
                    z: -1640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1146
                {
                    x: 8,
                    z: 3624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1147
                {
                    x: 24,
                    z: 5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1148
                {
                    x: 24,
                    z: 2136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1149
                {
                    x: 40,
                    z: -4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1150
                {
                    x: 40,
                    z: 4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1151
                {
                    x: 40,
                    z: 4648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1152
                {
                    x: 40,
                    z: 4152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1153
                {
                    x: 40,
                    z: 2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1154
                {
                    x: 56,
                    z: -2056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1155
                {
                    x: 56,
                    z: 5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1156
                {
                    x: 56,
                    z: 4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1157
                {
                    x: 72,
                    z: -5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1158
                {
                    x: 72,
                    z: -4184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1159
                {
                    x: 72,
                    z: -3192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1160
                {
                    x: 88,
                    z: 1608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1161
                {
                    x: 104,
                    z: -5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1162
                {
                    x: 104,
                    z: -1016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1163
                {
                    x: 104,
                    z: 5720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1164
                {
                    x: 104,
                    z: 4872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1165
                {
                    x: 104,
                    z: 4408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1166
                {
                    x: 104,
                    z: 1704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1167
                {
                    x: 104,
                    z: 2520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1168
                {
                    x: 104,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1169
                {
                    x: 120,
                    z: -3192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1170
                {
                    x: 120,
                    z: 3880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1171
                {
                    x: 136,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1172
                {
                    x: 136,
                    z: 1080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1173
                {
                    x: 152,
                    z: -3720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1174
                {
                    x: 168,
                    z: -4568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1175
                {
                    x: 184,
                    z: 5944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1176
                {
                    x: 184,
                    z: 4920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1177
                {
                    x: 200,
                    z: -1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1178
                {
                    x: 200,
                    z: 4200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1179
                {
                    x: 200,
                    z: 2120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1180
                {
                    x: 216,
                    z: -4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1181
                {
                    x: 216,
                    z: -4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1182
                {
                    x: 216,
                    z: -1336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1183
                {
                    x: 232,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1184
                {
                    x: 232,
                    z: -4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1185
                {
                    x: 232,
                    z: -4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1186
                {
                    x: 232,
                    z: 5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1187
                {
                    x: 232,
                    z: 1992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1188
                {
                    x: 248,
                    z: -3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1189
                {
                    x: 248,
                    z: 3624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1190
                {
                    x: 248,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1191
                {
                    x: 264,
                    z: -3256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1192
                {
                    x: 264,
                    z: 4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1193
                {
                    x: 264,
                    z: 3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1194
                {
                    x: 280,
                    z: -4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1195
                {
                    x: 280,
                    z: -2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1196
                {
                    x: 280,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1197
                {
                    x: 312,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1198
                {
                    x: 312,
                    z: -3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1199
                {
                    x: 312,
                    z: 4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                }, 
            // Mineshaft 1200
                {
                    x: 328,
                    z: -3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1201
                {
                    x: 344,
                    z: 5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1202
                {
                    x: 360,
                    z: -5032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1203
                {
                    x: 360,
                    z: 5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1204
                {
                    x: 360,
                    z: 5272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1205
                {
                    x: 376,
                    z: 4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1206
                {
                    x: 408,
                    z: -600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1207
                {
                    x: 424,
                    z: -5848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1208
                {
                    x: 424,
                    z: -4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1209
                {
                    x: 424,
                    z: 2792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1210
                {
                    x: 440,
                    z: -2952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1211
                {
                    x: 440,
                    z: 8,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1212
                {
                    x: 456,
                    z: -3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1213
                {
                    x: 472,
                    z: -5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1214
                {
                    x: 472,
                    z: -5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1215
                {
                    x: 472,
                    z: 4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1216
                {
                    x: 472,
                    z: 3512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1217
                {
                    x: 472,
                    z: 4040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1218
                {
                    x: 472,
                    z: 2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1219
                {
                    x: 472,
                    z: 2808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1220
                {
                    x: 488,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1221
                {
                    x: 488,
                    z: -2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1222
                {
                    x: 488,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1223
                {
                    x: 488,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1224
                {
                    x: 488,
                    z: 4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1225
                {
                    x: 504,
                    z: -3896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1226
                {
                    x: 520,
                    z: -5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1227
                {
                    x: 520,
                    z: -3416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1228
                {
                    x: 520,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1229
                {
                    x: 520,
                    z: 5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1230
                {
                    x: 520,
                    z: 4920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1231
                {
                    x: 536,
                    z: -5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1232
                {
                    x: 536,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1233
                {
                    x: 552,
                    z: -2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1234
                {
                    x: 552,
                    z: 4712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1235
                {
                    x: 568,
                    z: -3672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1236
                {
                    x: 568,
                    z: 1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1237
                {
                    x: 568,
                    z: 1704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1238
                {
                    x: 584,
                    z: -1592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1239
                {
                    x: 584,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1240
                {
                    x: 600,
                    z: -4056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1241
                {
                    x: 600,
                    z: -2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1242
                {
                    x: 600,
                    z: 4600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1243
                {
                    x: 600,
                    z: 4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1244
                {
                    x: 600,
                    z: 3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1245
                {
                    x: 600,
                    z: 3512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1246
                {
                    x: 616,
                    z: -1768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1247
                {
                    x: 616,
                    z: 1352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1248
                {
                    x: 616,
                    z: 1768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1249
                {
                    x: 616,
                    z: 3288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1250
                {
                    x: 632,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                }, 
            // Mineshaft 1251
                {
                    x: 632,
                    z: -1336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1252
                {
                    x: 632,
                    z: 5144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1253
                {
                    x: 632,
                    z: 3960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1254
                {
                    x: 632,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1255
                {
                    x: 632,
                    z: 3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1256
                {
                    x: 648,
                    z: -2888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1257
                {
                    x: 648,
                    z: -2120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1258
                {
                    x: 648,
                    z: 4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1259
                {
                    x: 664,
                    z: -4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1260
                {
                    x: 664,
                    z: -3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1261
                {
                    x: 664,
                    z: -968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1262
                {
                    x: 664,
                    z: 2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1263
                {
                    x: 680,
                    z: -600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1264
                {
                    x: 680,
                    z: -1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1265
                {
                    x: 680,
                    z: 728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1266
                {
                    x: 696,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1267
                {
                    x: 712,
                    z: -4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1268
                {
                    x: 712,
                    z: -392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1269
                {
                    x: 712,
                    z: 984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1270
                {
                    x: 728,
                    z: -4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1271
                {
                    x: 728,
                    z: 1688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1272
                {
                    x: 744,
                    z: -1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1273
                {
                    x: 744,
                    z: 5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1274
                {
                    x: 760,
                    z: -4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1275
                {
                    x: 760,
                    z: -2312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1276
                {
                    x: 760,
                    z: 5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1277
                {
                    x: 760,
                    z: 5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1278
                {
                    x: 760,
                    z: 424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1279
                {
                    x: 760,
                    z: 4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1280
                {
                    x: 776,
                    z: -4984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1281
                {
                    x: 776,
                    z: -1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1282
                {
                    x: 776,
                    z: 856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1283
                {
                    x: 792,
                    z: 1976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1284
                {
                    x: 792,
                    z: 3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1285
                {
                    x: 808,
                    z: 1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1286
                {
                    x: 808,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1287
                {
                    x: 824,
                    z: -2024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1288
                {
                    x: 840,
                    z: -5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1289
                {
                    x: 840,
                    z: -2760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1290
                {
                    x: 840,
                    z: -792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1291
                {
                    x: 840,
                    z: 5144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1292
                {
                    x: 856,
                    z: -3592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1293
                {
                    x: 856,
                    z: 2168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1294
                {
                    x: 888,
                    z: -5816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1295
                {
                    x: 888,
                    z: 5448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1296
                {
                    x: 888,
                    z: 4744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1297
                {
                    x: 904,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1298
                {
                    x: 904,
                    z: -152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1299
                {
                    x: 920,
                    z: -5240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1300
                {
                    x: 920,
                    z: -3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1301
                {
                    x: 920,
                    z: 2280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1302
                {
                    x: 920,
                    z: 3224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1303
                {
                    x: 936,
                    z: -5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1304
                {
                    x: 936,
                    z: -4056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1305
                {
                    x: 936,
                    z: -2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1306
                {
                    x: 936,
                    z: 3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1307
                {
                    x: 952,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1308
                {
                    x: 952,
                    z: 1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1309
                {
                    x: 952,
                    z: 2792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1310
                {
                    x: 968,
                    z: -1704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1311
                {
                    x: 968,
                    z: 4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1312
                {
                    x: 984,
                    z: 1784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1313
                {
                    x: 984,
                    z: 3656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1314
                {
                    x: 1000,
                    z: -4120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1315
                {
                    x: 1016,
                    z: -4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1316
                {
                    x: 1016,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1317
                {
                    x: 1016,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1318
                {
                    x: 1016,
                    z: -1080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1319
                {
                    x: 1016,
                    z: -2104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1320
                {
                    x: 1016,
                    z: 328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1321
                {
                    x: 1032,
                    z: 1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1322
                {
                    x: 1048,
                    z: -5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1323
                {
                    x: 1048,
                    z: -2552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1324
                {
                    x: 1048,
                    z: -1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1325
                {
                    x: 1048,
                    z: 616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1326
                {
                    x: 1048,
                    z: 264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1327
                {
                    x: 1064,
                    z: -3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1328
                {
                    x: 1064,
                    z: -3288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1329
                {
                    x: 1064,
                    z: -1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1330
                {
                    x: 1064,
                    z: -1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1331
                {
                    x: 1064,
                    z: 2760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1332
                {
                    x: 1096,
                    z: -1928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1333
                {
                    x: 1096,
                    z: -2088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1334
                {
                    x: 1096,
                    z: 1624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1335
                {
                    x: 1112,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1336
                {
                    x: 1112,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1337
                {
                    x: 1112,
                    z: 5016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1338
                {
                    x: 1128,
                    z: -3080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1339
                {
                    x: 1144,
                    z: -4008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1340
                {
                    x: 1144,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1341
                {
                    x: 1144,
                    z: -1272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1342
                {
                    x: 1144,
                    z: 2920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1343
                {
                    x: 1160,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1344
                {
                    x: 1160,
                    z: 1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1345
                {
                    x: 1160,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1346
                {
                    x: 1160,
                    z: 3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1347
                {
                    x: 1160,
                    z: 3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1348
                {
                    x: 1176,
                    z: -4872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1349
                {
                    x: 1176,
                    z: -2456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1350
                {
                    x: 1176,
                    z: -936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1351
                {
                    x: 1176,
                    z: 824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1352
                {
                    x: 1176,
                    z: 3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1353
                {
                    x: 1176,
                    z: 5592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1354
                {
                    x: 1192,
                    z: 1960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1355
                {
                    x: 1208,
                    z: 4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1356
                {
                    x: 1208,
                    z: 5656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1357
                {
                    x: 1224,
                    z: 984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1358
                {
                    x: 1240,
                    z: -5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1359
                {
                    x: 1240,
                    z: -2808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1360
                {
                    x: 1256,
                    z: 1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1361
                {
                    x: 1256,
                    z: 1496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1362
                {
                    x: 1256,
                    z: 2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1363
                {
                    x: 1272,
                    z: -5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1364
                {
                    x: 1272,
                    z: -4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1365
                {
                    x: 1272,
                    z: -2376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1366
                {
                    x: 1288,
                    z: 968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1367
                {
                    x: 1288,
                    z: 1768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1368
                {
                    x: 1304,
                    z: -1368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1369
                {
                    x: 1304,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1370
                {
                    x: 1304,
                    z: 1688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1371
                {
                    x: 1320,
                    z: -4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1372
                {
                    x: 1320,
                    z: -1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1373
                {
                    x: 1320,
                    z: -408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1374
                {
                    x: 1320,
                    z: 3192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1375
                {
                    x: 1320,
                    z: 5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1376
                {
                    x: 1336,
                    z: -2808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1377
                {
                    x: 1336,
                    z: -2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1378
                {
                    x: 1336,
                    z: 4808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1379
                {
                    x: 1352,
                    z: -2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1380
                {
                    x: 1352,
                    z: -248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1381
                {
                    x: 1352,
                    z: 4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1382
                {
                    x: 1352,
                    z: 5912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1383
                {
                    x: 1368,
                    z: -5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1384
                {
                    x: 1368,
                    z: -3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1385
                {
                    x: 1384,
                    z: 5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1386
                {
                    x: 1400,
                    z: -168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1387
                {
                    x: 1400,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1388
                {
                    x: 1416,
                    z: -1416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1389
                {
                    x: 1432,
                    z: -2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1390
                {
                    x: 1432,
                    z: -264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1391
                {
                    x: 1432,
                    z: 2456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1392
                {
                    x: 1432,
                    z: 4360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1393
                {
                    x: 1448,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1394
                {
                    x: 1448,
                    z: 1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1395
                {
                    x: 1464,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1396
                {
                    x: 1464,
                    z: -2824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1397
                {
                    x: 1464,
                    z: 1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1398
                {
                    x: 1464,
                    z: 4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1399
                {
                    x: 1480,
                    z: -3528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1400
                {
                    x: 1480,
                    z: -3608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1400
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1401
                {
                    x: 1480,
                    z: -3224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1402
                {
                    x: 1480,
                    z: 152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1403
                {
                    x: 1480,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1404
                {
                    x: 1496,
                    z: -2056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1405
                {
                    x: 1496,
                    z: 5304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1406
                {
                    x: 1512,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1407
                {
                    x: 1512,
                    z: 328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1408
                {
                    x: 1512,
                    z: 3608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1409
                {
                    x: 1512,
                    z: 5368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1410
                {
                    x: 1528,
                    z: -4488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1411
                {
                    x: 1528,
                    z: 4648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1412
                {
                    x: 1528,
                    z: 1704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1413
                {
                    x: 1528,
                    z: 2024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1414
                {
                    x: 1544,
                    z: -5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1415
                {
                    x: 1544,
                    z: 2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1416
                {
                    x: 1576,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1417
                {
                    x: 1576,
                    z: 5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1418
                {
                    x: 1592,
                    z: -3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1419
                {
                    x: 1592,
                    z: 248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1420
                {
                    x: 1608,
                    z: -5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1421
                {
                    x: 1608,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1422
                {
                    x: 1608,
                    z: 360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1423
                {
                    x: 1624,
                    z: -2744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1424
                {
                    x: 1624,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1425
                {
                    x: 1624,
                    z: 2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1426
                {
                    x: 1624,
                    z: 3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1427
                {
                    x: 1624,
                    z: 4872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1428
                {
                    x: 1624,
                    z: 5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1429
                {
                    x: 1640,
                    z: -3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1430
                {
                    x: 1640,
                    z: -1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1431
                {
                    x: 1656,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1432
                {
                    x: 1656,
                    z: -2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1433
                {
                    x: 1656,
                    z: 120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1434
                {
                    x: 1656,
                    z: 5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1435
                {
                    x: 1672,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1436
                {
                    x: 1672,
                    z: 1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1437
                {
                    x: 1672,
                    z: 4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1438
                {
                    x: 1672,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1439
                {
                    x: 1688,
                    z: -5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1440
                {
                    x: 1688,
                    z: -1816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1441
                {
                    x: 1688,
                    z: -664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1442
                {
                    x: 1688,
                    z: 1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1443
                {
                    x: 1704,
                    z: -3704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1444
                {
                    x: 1704,
                    z: -4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1445
                {
                    x: 1704,
                    z: -5704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1446
                {
                    x: 1704,
                    z: 4696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1447
                {
                    x: 1720,
                    z: -3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1448
                {
                    x: 1736,
                    z: -2760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1449
                {
                    x: 1736,
                    z: -1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1450
                {
                    x: 1736,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1451
                {
                    x: 1752,
                    z: -2392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1452
                {
                    x: 1752,
                    z: -520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1453
                {
                    x: 1752,
                    z: 3256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1454
                {
                    x: 1768,
                    z: 3832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1455
                {
                    x: 1784,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1456
                {
                    x: 1784,
                    z: -1544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1457
                {
                    x: 1784,
                    z: 56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1458
                {
                    x: 1784,
                    z: 1752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1459
                {
                    x: 1784,
                    z: 2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1460
                {
                    x: 1800,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1461
                {
                    x: 1800,
                    z: -1272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1462
                {
                    x: 1800,
                    z: 3368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1463
                {
                    x: 1816,
                    z: -3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1464
                {
                    x: 1816,
                    z: -4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1465
                {
                    x: 1816,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1466
                {
                    x: 1816,
                    z: 1080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1467
                {
                    x: 1816,
                    z: 2792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1468
                {
                    x: 1832,
                    z: -5368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1469
                {
                    x: 1832,
                    z: -3016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1470
                {
                    x: 1832,
                    z: -344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1471
                {
                    x: 1848,
                    z: -4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1472
                {
                    x: 1848,
                    z: 5304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1473
                {
                    x: 1864,
                    z: -4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1474
                {
                    x: 1864,
                    z: -1880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1475
                {
                    x: 1864,
                    z: -1960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1476
                {
                    x: 1864,
                    z: 312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1477
                {
                    x: 1864,
                    z: 552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1478
                {
                    x: 1880,
                    z: -4712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1479
                {
                    x: 1880,
                    z: -5144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1480
                {
                    x: 1880,
                    z: -5720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1481
                {
                    x: 1880,
                    z: -1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1482
                {
                    x: 1880,
                    z: 3432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1483
                {
                    x: 1880,
                    z: 4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1484
                {
                    x: 1896,
                    z: -1000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1485
                {
                    x: 1912,
                    z: -4200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1486
                {
                    x: 1912,
                    z: -4648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1487
                {
                    x: 1912,
                    z: -2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1488
                {
                    x: 1912,
                    z: 5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1489
                {
                    x: 1928,
                    z: -3240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1490
                {
                    x: 1928,
                    z: 8,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1491
                {
                    x: 1944,
                    z: -3784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1492
                {
                    x: 1944,
                    z: 3752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1493
                {
                    x: 1944,
                    z: 5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1494
                {
                    x: 1944,
                    z: 4824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1495
                {
                    x: 1960,
                    z: -3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1496
                {
                    x: 1960,
                    z: 3848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1497
                {
                    x: 1960,
                    z: 4792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1498
                {
                    x: 1976,
                    z: 280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1499
                {
                    x: 1976,
                    z: 3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1500
                {
                    x: 1976,
                    z: 3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1501
                {
                    x: 1976,
                    z: 4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1502
                {
                    x: 1992,
                    z: -1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1503
                {
                    x: 1992,
                    z: -1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1504
                {
                    x: 1992,
                    z: 2248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1505
                {
                    x: 1992,
                    z: 3304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1506
                {
                    x: 1992,
                    z: 4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1507
                {
                    x: 2008,
                    z: -2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1508
                {
                    x: 2008,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1509
                {
                    x: 2008,
                    z: -1224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1510
                {
                    x: 2008,
                    z: 1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1511
                {
                    x: 2008,
                    z: 4184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1512
                {
                    x: 2008,
                    z: 5608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1513
                {
                    x: 2024,
                    z: -1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1514
                {
                    x: 2024,
                    z: 2952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1515
                {
                    x: 2024,
                    z: 3320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1516
                {
                    x: 2040,
                    z: -5976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1517
                {
                    x: 2040,
                    z: -56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1518
                {
                    x: 2056,
                    z: -5016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1519
                {
                    x: 2072,
                    z: -3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1520
                {
                    x: 2072,
                    z: 5704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1521
                {
                    x: 2088,
                    z: -56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1522
                {
                    x: 2088,
                    z: -264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1523
                {
                    x: 2088,
                    z: 1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1524
                {
                    x: 2088,
                    z: 2504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1525
                {
                    x: 2088,
                    z: 2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1526
                {
                    x: 2088,
                    z: 2696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1527
                {
                    x: 2088,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1528
                {
                    x: 2104,
                    z: 600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1529
                {
                    x: 2104,
                    z: 968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1530
                {
                    x: 2120,
                    z: 3960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1531
                {
                    x: 2136,
                    z: 3640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1532
                {
                    x: 2136,
                    z: 4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1533
                {
                    x: 2152,
                    z: -5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1534
                {
                    x: 2152,
                    z: -1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1535
                {
                    x: 2152,
                    z: 3640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1536
                {
                    x: 2152,
                    z: 4696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1537
                {
                    x: 2152,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1538
                {
                    x: 2152,
                    z: 4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1539
                {
                    x: 2168,
                    z: -4120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1540
                {
                    x: 2168,
                    z: -1560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1541
                {
                    x: 2168,
                    z: 3272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1542
                {
                    x: 2168,
                    z: 5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1543
                {
                    x: 2168,
                    z: 4840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1544
                {
                    x: 2184,
                    z: 5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1545
                {
                    x: 2200,
                    z: -2376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1546
                {
                    x: 2200,
                    z: -536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1547
                {
                    x: 2200,
                    z: -1544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1548
                {
                    x: 2200,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1549
                {
                    x: 2200,
                    z: 1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1550
                {
                    x: 2200,
                    z: 2584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1551
                {
                    x: 2200,
                    z: 3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1552
                {
                    x: 2200,
                    z: 4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1553
                {
                    x: 2216,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1554
                {
                    x: 2216,
                    z: -1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1555
                {
                    x: 2216,
                    z: 3096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1556
                {
                    x: 2248,
                    z: -3416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1557
                {
                    x: 2248,
                    z: 3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1558
                {
                    x: 2248,
                    z: 5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1559
                {
                    x: 2264,
                    z: -1640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1560
                {
                    x: 2264,
                    z: 5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1561
                {
                    x: 2280,
                    z: 1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1562
                {
                    x: 2296,
                    z: -88,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1563
                {
                    x: 2296,
                    z: 152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1564
                {
                    x: 2312,
                    z: -1480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1565
                {
                    x: 2312,
                    z: -1816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1566
                {
                    x: 2312,
                    z: 3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1567
                {
                    x: 2328,
                    z: -4664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1568
                {
                    x: 2328,
                    z: -4696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1569
                {
                    x: 2328,
                    z: -184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1570
                {
                    x: 2328,
                    z: 3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1571
                {
                    x: 2344,
                    z: -2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1572
                {
                    x: 2344,
                    z: 2136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1573
                {
                    x: 2344,
                    z: 3720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1574
                {
                    x: 2344,
                    z: 4424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1575
                {
                    x: 2360,
                    z: -5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1576
                {
                    x: 2360,
                    z: 840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1577
                {
                    x: 2360,
                    z: 2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1578
                {
                    x: 2360,
                    z: 4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1579
                {
                    x: 2360,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1580
                {
                    x: 2376,
                    z: -3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1581
                {
                    x: 2376,
                    z: -4056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1582
                {
                    x: 2376,
                    z: -216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1583
                {
                    x: 2376,
                    z: 536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1584
                {
                    x: 2376,
                    z: 2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1585
                {
                    x: 2376,
                    z: 4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1586
                {
                    x: 2392,
                    z: -3752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1587
                {
                    x: 2392,
                    z: -4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1588
                {
                    x: 2392,
                    z: -568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1589
                {
                    x: 2392,
                    z: 1736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1590
                {
                    x: 2408,
                    z: -1752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1591
                {
                    x: 2408,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1592
                {
                    x: 2408,
                    z: 168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1593
                {
                    x: 2408,
                    z: 2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1594
                {
                    x: 2440,
                    z: -5352,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1595
                {
                    x: 2456,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1596
                {
                    x: 2456,
                    z: 4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1597
                {
                    x: 2456,
                    z: 5704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1598
                {
                    x: 2472,
                    z: -4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1599
                {
                    x: 2472,
                    z: -4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1600
                {
                    x: 2472,
                    z: -3112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1601
                {
                    x: 2472,
                    z: 1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1602
                {
                    x: 2472,
                    z: 2184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1603
                {
                    x: 2472,
                    z: 4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1604
                {
                    x: 2488,
                    z: -5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1605
                {
                    x: 2488,
                    z: 1208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1606
                {
                    x: 2488,
                    z: 936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1607
                {
                    x: 2504,
                    z: -3736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1608
                {
                    x: 2504,
                    z: 1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1609
                {
                    x: 2504,
                    z: 1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1610
                {
                    x: 2504,
                    z: 3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1611
                {
                    x: 2520,
                    z: -3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1612
                {
                    x: 2520,
                    z: -4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1613
                {
                    x: 2520,
                    z: -5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1614
                {
                    x: 2536,
                    z: -3320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1615
                {
                    x: 2536,
                    z: 72,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1616
                {
                    x: 2536,
                    z: 2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1617
                {
                    x: 2536,
                    z: 2792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1618
                {
                    x: 2552,
                    z: -680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1619
                {
                    x: 2552,
                    z: 5992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1620
                {
                    x: 2552,
                    z: 4664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1621
                {
                    x: 2552,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1622
                {
                    x: 2568,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1623
                {
                    x: 2568,
                    z: -1240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1624
                {
                    x: 2568,
                    z: 1096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1625
                {
                    x: 2568,
                    z: 1192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1626
                {
                    x: 2568,
                    z: 1800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1627
                {
                    x: 2584,
                    z: -2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1628
                {
                    x: 2584,
                    z: 4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1629
                {
                    x: 2600,
                    z: -3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1630
                {
                    x: 2600,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1631
                {
                    x: 2600,
                    z: -1944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1632
                {
                    x: 2600,
                    z: 1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1633
                {
                    x: 2600,
                    z: 5544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1634
                {
                    x: 2600,
                    z: 4616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1635
                {
                    x: 2616,
                    z: -4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1636
                {
                    x: 2616,
                    z: -3176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1637
                {
                    x: 2632,
                    z: -3880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1638
                {
                    x: 2632,
                    z: -568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1639
                {
                    x: 2632,
                    z: -1176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1640
                {
                    x: 2632,
                    z: 1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1641
                {
                    x: 2648,
                    z: 184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1642
                {
                    x: 2648,
                    z: 2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1643
                {
                    x: 2648,
                    z: 3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
            // Mineshaft 1644
                {
                    x: 2664,
                    z: -4184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1645
                {
                    x: 2664,
                    z: 536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1646
                {
                    x: 2664,
                    z: 3752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1647
                {
                    x: 2680,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1648
                {
                    x: 2680,
                    z: 1000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1649
                {
                    x: 2696,
                    z: 1384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1650
                {
                    x: 2712,
                    z: -2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1651
                {
                    x: 2712,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1652
                {
                    x: 2712,
                    z: 968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1653
                {
                    x: 2712,
                    z: 712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1654
                {
                    x: 2712,
                    z: 5304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1655
                {
                    x: 2712,
                    z: 4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1656
                {
                    x: 2728,
                    z: -1736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1657
                {
                    x: 2728,
                    z: 1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1658
                {
                    x: 2744,
                    z: -5464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1659
                {
                    x: 2744,
                    z: -2504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1660
                {
                    x: 2744,
                    z: 984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1661
                {
                    x: 2744,
                    z: 840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1662
                {
                    x: 2744,
                    z: 168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1663
                {
                    x: 2744,
                    z: 1544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1664
                {
                    x: 2760,
                    z: -4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1665
                {
                    x: 2776,
                    z: -3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1666
                {
                    x: 2776,
                    z: -3640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1667
                {
                    x: 2776,
                    z: -2056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1668
                {
                    x: 2776,
                    z: -2552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1669
                {
                    x: 2776,
                    z: 5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1670
                {
                    x: 2792,
                    z: -4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1671
                {
                    x: 2792,
                    z: -4408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1672
                {
                    x: 2792,
                    z: -2440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1673
                {
                    x: 2792,
                    z: 3336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1674
                {
                    x: 2792,
                    z: 2744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1675
                {
                    x: 2808,
                    z: -5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1676
                {
                    x: 2808,
                    z: 1224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1677
                {
                    x: 2808,
                    z: 5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1678
                {
                    x: 2808,
                    z: 5928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1679
                {
                    x: 2808,
                    z: 3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1680
                {
                    x: 2808,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1681
                {
                    x: 2824,
                    z: -5080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1682
                {
                    x: 2824,
                    z: -5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1683
                {
                    x: 2824,
                    z: -824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1684
                {
                    x: 2840,
                    z: -2328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1685
                {
                    x: 2840,
                    z: 5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1686
                {
                    x: 2840,
                    z: 4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1687
                {
                    x: 2856,
                    z: 4792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1688
                {
                    x: 2856,
                    z: 1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1689
                {
                    x: 2872,
                    z: -3480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1690
                {
                    x: 2872,
                    z: -5304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1691
                {
                    x: 2872,
                    z: -5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1692
                {
                    x: 2872,
                    z: 4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1693
                {
                    x: 2888,
                    z: -5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1694
                {
                    x: 2888,
                    z: -3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1695
                {
                    x: 2888,
                    z: 1960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1696
                {
                    x: 2888,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1697
                {
                    x: 2904,
                    z: -1944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1698
                {
                    x: 2904,
                    z: 328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1699
                {
                    x: 2920,
                    z: -3704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },     
            // Mineshaft 1701
                {
                    x: 2920,
                    z: -5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1702
                {
                    x: 2920,
                    z: -5832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1703
                {
                    x: 2920,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1704
                {
                    x: 2920,
                    z: 1144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1705
                {
                    x: 2936,
                    z: -3560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1706
                {
                    x: 2936,
                    z: -1080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1707
                {
                    x: 2936,
                    z: 3608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1708
                {
                    x: 2936,
                    z: 1256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1709
                {
                    x: 2968,
                    z: -5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1710
                {
                    x: 2968,
                    z: -408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1711
                {
                    x: 2968,
                    z: 2920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1712
                {
                    x: 2984,
                    z: -5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1713
                {
                    x: 3000,
                    z: -3656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1714
                {
                    x: 3016,
                    z: 5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1715
                {
                    x: 3016,
                    z: 4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1716
                {
                    x: 3016,
                    z: 3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1717
                {
                    x: 3032,
                    z: -4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1718
                {
                    x: 3032,
                    z: -2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1719
                {
                    x: 3032,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1720
                {
                    x: 3032,
                    z: 360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1721
                {
                    x: 3048,
                    z: -1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1722
                {
                    x: 3048,
                    z: -1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1723
                {
                    x: 3048,
                    z: 5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1724
                {
                    x: 3064,
                    z: -4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1725
                {
                    x: 3064,
                    z: -5976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1726
                {
                    x: 3064,
                    z: 3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1727
                {
                    x: 3064,
                    z: 2728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1728
                {
                    x: 3080,
                    z: -1496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1729
                {
                    x: 3080,
                    z: -2600,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1730
                {
                    x: 3096,
                    z: -3112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1731
                {
                    x: 3096,
                    z: -952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1732
                {
                    x: 3096,
                    z: 136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1733
                {
                    x: 3096,
                    z: 1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1734
                {
                    x: 3112,
                    z: -5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1735
                {
                    x: 3112,
                    z: 4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1736
                {
                    x: 3112,
                    z: 3704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1737
                {
                    x: 3112,
                    z: 504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1738
                {
                    x: 3128,
                    z: -3320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1739
                {
                    x: 3128,
                    z: -5288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1740
                {
                    x: 3128,
                    z: 5592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1741
                {
                    x: 3128,
                    z: 1512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1742
                {
                    x: 3144,
                    z: 5240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1743
                {
                    x: 3160,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1744
                {
                    x: 3160,
                    z: -872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1745
                {
                    x: 3160,
                    z: -2008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1746
                {
                    x: 3176,
                    z: -4680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1747
                {
                    x: 3176,
                    z: -5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1748
                {
                    x: 3176,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
            // Mineshaft 1749
                {
                    x: 3192,
                    z: -5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },            
            // Mineshaft 1750
                {
                    x: 3192,
                    z: 152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1751
                {
                    x: 3208,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1752
                {
                    x: 3208,
                    z: -2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1753
                {
                    x: 3208,
                    z: 3368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1754
                {
                    x: 3224,
                    z: -4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1755
                {
                    x: 3224,
                    z: 1592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1756
                {
                    x: 3240,
                    z: -4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1757
                {
                    x: 3240,
                    z: 5272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1758
                {
                    x: 3240,
                    z: 776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1759
                {
                    x: 3240,
                    z: 1560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1760
                {
                    x: 3256,
                    z: -3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1761
                {
                    x: 3256,
                    z: -3784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1762
                {
                    x: 3256,
                    z: -440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1763
                {
                    x: 3272,
                    z: 5144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1764
                {
                    x: 3272,
                    z: 4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1765
                {
                    x: 3272,
                    z: 2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1766
                {
                    x: 3288,
                    z: 5624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1767
                {
                    x: 3288,
                    z: 5080,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1768
                {
                    x: 3288,
                    z: 3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1769
                {
                    x: 3288,
                    z: 1192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1770
                {
                    x: 3304,
                    z: -3704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1771
                {
                    x: 3304,
                    z: -808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1772
                {
                    x: 3304,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1773
                {
                    x: 3304,
                    z: 5368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1774
                {
                    x: 3304,
                    z: 4776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1775
                {
                    x: 3304,
                    z: 4360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1776
                {
                    x: 3304,
                    z: 4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1777
                {
                    x: 3304,
                    z: 1816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1778
                {
                    x: 3320,
                    z: 4648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1779
                {
                    x: 3320,
                    z: 3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1780
                {
                    x: 3320,
                    z: 3784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1781
                {
                    x: 3320,
                    z: 696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1782
                {
                    x: 3336,
                    z: 4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1783
                {
                    x: 3352,
                    z: 5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1784
                {
                    x: 3368,
                    z: -5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1785
                {
                    x: 3368,
                    z: -1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1786
                {
                    x: 3368,
                    z: 24,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1787
                {
                    x: 3384,
                    z: 5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1788
                {
                    x: 3384,
                    z: 424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1789
                {
                    x: 3384,
                    z: 760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1790
                {
                    x: 3400,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1791
                {
                    x: 3400,
                    z: -5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1792
                {
                    x: 3400,
                    z: -1864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1793
                {
                    x: 3400,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1794
                {
                    x: 3400,
                    z: -2008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1795
                {
                    x: 3400,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1796
                {
                    x: 3400,
                    z: 2728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1797
                {
                    x: 3416,
                    z: -4920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1798
                {
                    x: 3416,
                    z: -824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1799
                {
                    x: 3432,
                    z: -328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },            
            // Mineshaft 1800
                {
                    x: 3448,
                    z: -3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1801
                {
                    x: 3448,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1802
                {
                    x: 3448,
                    z: -2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1803
                {
                    x: 3448,
                    z: 4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1804
                {
                    x: 3448,
                    z: 712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1805
                {
                    x: 3448,
                    z: 760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1806
                {
                    x: 3464,
                    z: -4088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1807
                {
                    x: 3464,
                    z: -408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1808
                {
                    x: 3464,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1809
                {
                    x: 3464,
                    z: -2152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1810
                {
                    x: 3480,
                    z: -3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1811
                {
                    x: 3480,
                    z: 4904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1812
                {
                    x: 3480,
                    z: 4856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1813
                {
                    x: 3480,
                    z: 4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1814
                {
                    x: 3480,
                    z: 3240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1815
                {
                    x: 3496,
                    z: -4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1816
                {
                    x: 3496,
                    z: -1448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1817
                {
                    x: 3512,
                    z: -4280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1818
                {
                    x: 3512,
                    z: -5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1819
                {
                    x: 3512,
                    z: -1240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1820
                {
                    x: 3512,
                    z: -2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1821
                {
                    x: 3512,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1822
                {
                    x: 3512,
                    z: 376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1823
                {
                    x: 3512,
                    z: 56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1824
                {
                    x: 3512,
                    z: 1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1825
                {
                    x: 3528,
                    z: -5192,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1826
                {
                    x: 3528,
                    z: 3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1827
                {
                    x: 3528,
                    z: 72,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1828
                {
                    x: 3528,
                    z: 1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1829
                {
                    x: 3528,
                    z: 1336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1830
                {
                    x: 3544,
                    z: -5864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1831
                {
                    x: 3544,
                    z: -2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1832
                {
                    x: 3544,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1833
                {
                    x: 3544,
                    z: -2984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1834
                {
                    x: 3544,
                    z: 5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1835
                {
                    x: 3544,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1836
                {
                    x: 3576,
                    z: -3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1837
                {
                    x: 3576,
                    z: -40,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1838
                {
                    x: 3576,
                    z: -1368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1839
                {
                    x: 3576,
                    z: -2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1840
                {
                    x: 3576,
                    z: 5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1841
                {
                    x: 3576,
                    z: 2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1842
                {
                    x: 3576,
                    z: 1384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1843
                {
                    x: 3592,
                    z: -744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1844
                {
                    x: 3592,
                    z: 5000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1845
                {
                    x: 3592,
                    z: 4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1846
                {
                    x: 3608,
                    z: -1336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1847
                {
                    x: 3608,
                    z: 5944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1848
                {
                    x: 3608,
                    z: 4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1849
                {
                    x: 3624,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1850
                {
                    x: 3624,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },           
            // Mineshaft 1851
                {
                    x: 3624,
                    z: 1880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1852
                {
                    x: 3640,
                    z: -3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1853
                {
                    x: 3640,
                    z: -4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1854
                {
                    x: 3640,
                    z: -5752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1855
                {
                    x: 3640,
                    z: 4184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1856
                {
                    x: 3640,
                    z: 792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1857
                {
                    x: 3656,
                    z: -968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1858
                {
                    x: 3656,
                    z: 4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1859
                {
                    x: 3672,
                    z: 3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1860
                {
                    x: 3672,
                    z: 3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1861
                {
                    x: 3688,
                    z: -2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1862
                {
                    x: 3688,
                    z: 2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1863
                {
                    x: 3688,
                    z: 3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1864
                {
                    x: 3688,
                    z: 1336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1865
                {
                    x: 3704,
                    z: -2904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1866
                {
                    x: 3704,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1867
                {
                    x: 3704,
                    z: 4520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1868
                {
                    x: 3720,
                    z: -4120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1869
                {
                    x: 3720,
                    z: -328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1870
                {
                    x: 3720,
                    z: 968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1871
                {
                    x: 3720,
                    z: 1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1872
                {
                    x: 3736,
                    z: -4344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1873
                {
                    x: 3736,
                    z: 5672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1874
                {
                    x: 3736,
                    z: 1064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1875
                {
                    x: 3752,
                    z: -2280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1876
                {
                    x: 3768,
                    z: -2152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1877
                {
                    x: 3768,
                    z: 4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1878
                {
                    x: 3768,
                    z: 1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1879
                {
                    x: 3784,
                    z: -4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1880
                {
                    x: 3784,
                    z: -2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1881
                {
                    x: 3784,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1882
                {
                    x: 3800,
                    z: 4200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1883
                {
                    x: 3800,
                    z: 2440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1884
                {
                    x: 3800,
                    z: 584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1885
                {
                    x: 3800,
                    z: 4088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1886
                {
                    x: 3800,
                    z: 4136,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1887
                {
                    x: 3816,
                    z: 3320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1888
                {
                    x: 3832,
                    z: 5912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1889
                {
                    x: 3832,
                    z: 3448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1890
                {
                    x: 3848,
                    z: -5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1891
                {
                    x: 3848,
                    z: 5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1892
                {
                    x: 3864,
                    z: -4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1893
                {
                    x: 3864,
                    z: 4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1894
                {
                    x: 3864,
                    z: 264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1895
                {
                    x: 3880,
                    z: -4920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1896
                {
                    x: 3896,
                    z: -2216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1897
                {
                    x: 3912,
                    z: -2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1898
                {
                    x: 3912,
                    z: -1480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1899
                {
                    x: 3912,
                    z: 5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1900
                {
                    x: 3912,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1901
                {
                    x: 3928,
                    z: -2776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1902
                {
                    x: 3944,
                    z: -648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1903
                {
                    x: 3944,
                    z: 3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1904
                {
                    x: 3960,
                    z: -3512,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1905
                {
                    x: 3960,
                    z: -1224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1906
                {
                    x: 3960,
                    z: 5448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1907
                {
                    x: 3976,
                    z: -2584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1908
                {
                    x: 3976,
                    z: 1592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1909
                {
                    x: 3976,
                    z: 1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1910
                {
                    x: 3976,
                    z: 2056,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1911
                {
                    x: 3976,
                    z: 3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1912
                {
                    x: 3992,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1913
                {
                    x: 3992,
                    z: 3288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1914
                {
                    x: 4008,
                    z: -4760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1915
                {
                    x: 4008,
                    z: -24,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1916
                {
                    x: 4008,
                    z: 1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1917
                {
                    x: 4024,
                    z: -3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1918
                {
                    x: 4040,
                    z: 2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1919
                {
                    x: 4040,
                    z: 312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1920
                {
                    x: 4040,
                    z: 696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1921
                {
                    x: 4056,
                    z: -4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1922
                {
                    x: 4056,
                    z: -1368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1923
                {
                    x: 4072,
                    z: -3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1924
                {
                    x: 4072,
                    z: -5672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1925
                {
                    x: 4072,
                    z: 4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1926
                {
                    x: 4072,
                    z: 2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1927
                {
                    x: 4072,
                    z: 3448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1928
                {
                    x: 4088,
                    z: -3976,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1929
                {
                    x: 4088,
                    z: -728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1930
                {
                    x: 4104,
                    z: -4808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1931
                {
                    x: 4104,
                    z: -1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1932
                {
                    x: 4104,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1933
                {
                    x: 4104,
                    z: -152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1934
                {
                    x: 4104,
                    z: -72,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1935
                {
                    x: 4120,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1936
                {
                    x: 4120,
                    z: 472,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1937
                {
                    x: 4120,
                    z: 2760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1938
                {
                    x: 4120,
                    z: 4088,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1939
                {
                    x: 4136,
                    z: -4632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1940
                {
                    x: 4136,
                    z: -488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1941
                {
                    x: 4136,
                    z: -584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1942
                {
                    x: 4136,
                    z: 2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1943
                {
                    x: 4152,
                    z: -5992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1944
                {
                    x: 4152,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1945
                {
                    x: 4152,
                    z: 4424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1946
                {
                    x: 4168,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1947
                {
                    x: 4168,
                    z: -568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1948
                {
                    x: 4168,
                    z: 4584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1949
                {
                    x: 4168,
                    z: 776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1950
                {
                    x: 4168,
                    z: 920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1951
                {
                    x: 4184,
                    z: -1240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1952
                {
                    x: 4184,
                    z: -1272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1953
                {
                    x: 4184,
                    z: 3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1954
                {
                    x: 4184,
                    z: 3496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1955
                {
                    x: 4200,
                    z: 2440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1956
                {
                    x: 4216,
                    z: -4808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1957
                {
                    x: 4216,
                    z: -632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1958
                {
                    x: 4216,
                    z: 4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1959
                {
                    x: 4232,
                    z: 1752,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1960
                {
                    x: 4232,
                    z: 2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1961
                {
                    x: 4232,
                    z: 3464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1962
                {
                    x: 4248,
                    z: -5480,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1963
                {
                    x: 4248,
                    z: 5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1964
                {
                    x: 4248,
                    z: 2040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1965
                {
                    x: 4280,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1966
                {
                    x: 4280,
                    z: -4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1967
                {
                    x: 4296,
                    z: -5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1968
                {
                    x: 4296,
                    z: 5896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1969
                {
                    x: 4296,
                    z: 1000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1970
                {
                    x: 4312,
                    z: -2744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1971
                {
                    x: 4312,
                    z: -696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1972
                {
                    x: 4312,
                    z: 1464,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1973
                {
                    x: 4312,
                    z: 2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1974
                {
                    x: 4312,
                    z: 3064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1975
                {
                    x: 4328,
                    z: -4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1976
                {
                    x: 4328,
                    z: 3880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1977
                {
                    x: 4344,
                    z: -4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1978
                {
                    x: 4344,
                    z: -1384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1979
                {
                    x: 4344,
                    z: -680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1980
                {
                    x: 4344,
                    z: 1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1981
                {
                    x: 4360,
                    z: 5640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1982
                {
                    x: 4360,
                    z: 5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1983
                {
                    x: 4360,
                    z: 5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1984
                {
                    x: 4360,
                    z: 3768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1985
                {
                    x: 4376,
                    z: -4360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1986
                {
                    x: 4376,
                    z: -2488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1987
                {
                    x: 4376,
                    z: -376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1988
                {
                    x: 4376,
                    z: 72,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1989
                {
                    x: 4376,
                    z: 4040,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1990
                {
                    x: 4392,
                    z: -4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1991
                {
                    x: 4392,
                    z: -1000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1992
                {
                    x: 4392,
                    z: -1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1993
                {
                    x: 4392,
                    z: 5096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1994
                {
                    x: 4392,
                    z: 3224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1995
                {
                    x: 4408,
                    z: -5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1996
                {
                    x: 4424,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1997
                {
                    x: 4424,
                    z: 760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1998
                {
                    x: 4440,
                    z: -5880,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 1999
                {
                    x: 4440,
                    z: 5736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2000
                {
                    x: 4440,
                    z: 3992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2001
                {
                    x: 4456,
                    z: -2808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2002
                {
                    x: 4456,
                    z: -1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2003
                {
                    x: 4456,
                    z: -456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2004
                {
                    x: 4456,
                    z: 5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2005
                {
                    x: 4456,
                    z: 2408,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2006
                {
                    x: 4456,
                    z: 4296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2007
                {
                    x: 4488,
                    z: -4264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2008
                {
                    x: 4488,
                    z: -5288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2009
                {
                    x: 4488,
                    z: -216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2010
                {
                    x: 4488,
                    z: 5400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2011
                {
                    x: 4488,
                    z: 5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2012
                {
                    x: 4504,
                    z: 4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2013
                {
                    x: 4504,
                    z: 4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2014
                {
                    x: 4504,
                    z: 696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2015
                {
                    x: 4536,
                    z: -3896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2016
                {
                    x: 4536,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2017
                {
                    x: 4536,
                    z: 3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2018
                {
                    x: 4552,
                    z: 1992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2019
                {
                    x: 4552,
                    z: 2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2020
                {
                    x: 4568,
                    z: -4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2021
                {
                    x: 4568,
                    z: -5304,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2022
                {
                    x: 4568,
                    z: -5384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2023
                {
                    x: 4568,
                    z: -2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2024
                {
                    x: 4568,
                    z: -2840,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2025
                {
                    x: 4568,
                    z: 4696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2026
                {
                    x: 4584,
                    z: -5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2027
                {
                    x: 4600,
                    z: -2552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2028
                {
                    x: 4600,
                    z: -3000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2029
                {
                    x: 4600,
                    z: -552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2030
                {
                    x: 4600,
                    z: 2232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2031
                {
                    x: 4616,
                    z: -4536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2032
                {
                    x: 4616,
                    z: 4744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2033
                {
                    x: 4616,
                    z: 4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2034
                {
                    x: 4632,
                    z: -3528,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2035
                {
                    x: 4632,
                    z: -2952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2036
                {
                    x: 4632,
                    z: -1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2037
                {
                    x: 4632,
                    z: -56,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2038
                {
                    x: 4664,
                    z: -3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2039
                {
                    x: 4664,
                    z: 200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2040
                {
                    x: 4664,
                    z: 4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2041
                {
                    x: 4696,
                    z: -40,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2042
                {
                    x: 4696,
                    z: -216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2043
                {
                    x: 4696,
                    z: 5256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2044
                {
                    x: 4696,
                    z: 1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2045
                {
                    x: 4696,
                    z: 2760,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2046
                {
                    x: 4712,
                    z: -1496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2047
                {
                    x: 4712,
                    z: -1032,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2048
                {
                    x: 4712,
                    z: 2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2049
                {
                    x: 4728,
                    z: -1224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2050
                {
                    x: 4728,
                    z: -296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2051
                {
                    x: 4728,
                    z: -152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2052
                {
                    x: 4728,
                    z: 216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2053
                {
                    x: 4728,
                    z: 792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2054
                {
                    x: 4744,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2055
                {
                    x: 4760,
                    z: 72,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2056
                {
                    x: 4760,
                    z: 1384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2057
                {
                    x: 4792,
                    z: -3544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2058
                {
                    x: 4792,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2059
                {
                    x: 4792,
                    z: -1656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2060
                {
                    x: 4792,
                    z: -392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2061
                {
                    x: 4792,
                    z: -440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2062
                {
                    x: 4808,
                    z: 936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2063
                {
                    x: 4808,
                    z: 1576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2064
                {
                    x: 4824,
                    z: -1768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2065
                {
                    x: 4824,
                    z: 5704,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2066
                {
                    x: 4824,
                    z: 1160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2067
                {
                    x: 4840,
                    z: 4792,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2068
                {
                    x: 4840,
                    z: 3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2069
                {
                    x: 4840,
                    z: 3800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2070
                {
                    x: 4856,
                    z: 4184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2071
                {
                    x: 4856,
                    z: 1128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2072
                {
                    x: 4856,
                    z: 1544,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2073
                {
                    x: 4872,
                    z: -5896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2074
                {
                    x: 4872,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2075
                {
                    x: 4888,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2076
                {
                    x: 4888,
                    z: 4504,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2077
                {
                    x: 4888,
                    z: 152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2078
                {
                    x: 4888,
                    z: 3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2079
                {
                    x: 4904,
                    z: -5912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2080
                {
                    x: 4904,
                    z: -1688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2081
                {
                    x: 4920,
                    z: -2264,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2082
                {
                    x: 4920,
                    z: 4936,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2083
                {
                    x: 4920,
                    z: 4232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2084
                {
                    x: 4920,
                    z: 1368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2085
                {
                    x: 4936,
                    z: -4280,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2086
                {
                    x: 4936,
                    z: 4456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2087
                {
                    x: 4936,
                    z: 3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2088
                {
                    x: 4952,
                    z: -2200,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2089
                {
                    x: 4952,
                    z: -1416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2090
                {
                    x: 4952,
                    z: -1224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2091
                {
                    x: 4968,
                    z: -728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2092
                {
                    x: 4984,
                    z: -4440,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2093
                {
                    x: 4984,
                    z: -2888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2094
                {
                    x: 4984,
                    z: -664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2095
                {
                    x: 4984,
                    z: 4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2096
                {
                    x: 5000,
                    z: 5496,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2097
                {
                    x: 5016,
                    z: -4856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2098
                {
                    x: 5016,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2099
                {
                    x: 5016,
                    z: -1064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },            
            // Mineshaft 2100
                {
                    x: 5032,
                    z: -4888,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2101
                {
                    x: 5032,
                    z: -1016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2102
                {
                    x: 5032,
                    z: 5592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2103
                {
                    x: 5032,
                    z: 5336,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2104
                {
                    x: 5048,
                    z: 456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2105
                {
                    x: 5064,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2106
                {
                    x: 5064,
                    z: 2584,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2107
                {
                    x: 5080,
                    z: -2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2108
                {
                    x: 5080,
                    z: -1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2109
                {
                    x: 5080,
                    z: 5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2110
                {
                    x: 5080,
                    z: 4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2111
                {
                    x: 5096,
                    z: -104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2112
                {
                    x: 5096,
                    z: 696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2113
                {
                    x: 5096,
                    z: 3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2114
                {
                    x: 5096,
                    z: 1592,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2115
                {
                    x: 5128,
                    z: -1288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2116
                {
                    x: 5128,
                    z: 3624,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2117
                {
                    x: 5144,
                    z: -424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2118
                {
                    x: 5144,
                    z: 5832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2119
                {
                    x: 5160,
                    z: -3784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2120
                {
                    x: 5160,
                    z: -4664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2121
                {
                    x: 5160,
                    z: -2744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2122
                {
                    x: 5176,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2123
                {
                    x: 5176,
                    z: -2568,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2124
                {
                    x: 5176,
                    z: 2536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2125
                {
                    x: 5192,
                    z: -5224,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2126
                {
                    x: 5192,
                    z: -1048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2127
                {
                    x: 5192,
                    z: 4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2128
                {
                    x: 5192,
                    z: 4648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2129
                {
                    x: 5208,
                    z: -2776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2130
                {
                    x: 5208,
                    z: 4216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2131
                {
                    x: 5208,
                    z: 3176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2132
                {
                    x: 5224,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2133
                {
                    x: 5224,
                    z: -5176,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2134
                {
                    x: 5224,
                    z: 2072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2135
                {
                    x: 5224,
                    z: 2232,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2136
                {
                    x: 5240,
                    z: -1272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2137
                {
                    x: 5256,
                    z: -4008,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2138
                {
                    x: 5272,
                    z: -2632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2139
                {
                    x: 5288,
                    z: -3048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2140
                {
                    x: 5288,
                    z: -5096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2141
                {
                    x: 5288,
                    z: 4952,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2142
                {
                    x: 5304,
                    z: -3128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2143
                {
                    x: 5304,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2144
                {
                    x: 5304,
                    z: -4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2145
                {
                    x: 5304,
                    z: -4872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2146
                {
                    x: 5304,
                    z: -1928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2147
                {
                    x: 5320,
                    z: -5208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2148
                {
                    x: 5336,
                    z: -4824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2149
                {
                    x: 5336,
                    z: -2296,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2150
                {
                    x: 5336,
                    z: 2520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },            
            // Mineshaft 2151
                {
                    x: 5352,
                    z: -3576,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2152
                {
                    x: 5352,
                    z: -4632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2153
                {
                    x: 5352,
                    z: -4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2154
                {
                    x: 5352,
                    z: -1240,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2155
                {
                    x: 5352,
                    z: 4808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2156
                {
                    x: 5352,
                    z: 4616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2157
                {
                    x: 5368,
                    z: -3256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2158
                {
                    x: 5368,
                    z: -5320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2159
                {
                    x: 5368,
                    z: 4872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2160
                {
                    x: 5368,
                    z: 520,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2161
                {
                    x: 5384,
                    z: -1816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2162
                {
                    x: 5384,
                    z: 904,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2163
                {
                    x: 5400,
                    z: -5256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2164
                {
                    x: 5400,
                    z: 5800,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2165
                {
                    x: 5400,
                    z: 776,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2166
                {
                    x: 5400,
                    z: 3656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2167
                {
                    x: 5416,
                    z: -152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2168
                {
                    x: 5432,
                    z: -2536,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2169
                {
                    x: 5432,
                    z: -1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2170
                {
                    x: 5432,
                    z: 1064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2171
                {
                    x: 5432,
                    z: 2120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2172
                {
                    x: 5448,
                    z: -2968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2173
                {
                    x: 5448,
                    z: -5768,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2174
                {
                    x: 5448,
                    z: 5944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2175
                {
                    x: 5448,
                    z: 1912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2176
                {
                    x: 5464,
                    z: -3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2178
                {
                    x: 5464,
                    z: 5448,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2179
                {
                    x: 5464,
                    z: 8,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2180
                {
                    x: 5464,
                    z: 3000,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2181
                {
                    x: 5480,
                    z: -5848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2182
                {
                    x: 5480,
                    z: -1896,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2183
                {
                    x: 5480,
                    z: 3384,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2184
                {
                    x: 5512,
                    z: -5064,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2185
                {
                    x: 5512,
                    z: 5944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2186
                {
                    x: 5512,
                    z: 360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2187
                {
                    x: 5512,
                    z: 2360,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2188
                {
                    x: 5528,
                    z: -4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2189
                {
                    x: 5528,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2190
                {
                    x: 5528,
                    z: 4920,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2191
                {
                    x: 5528,
                    z: 4376,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2192
                {
                    x: 5528,
                    z: 4152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2193
                {
                    x: 5528,
                    z: 184,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2194
                {
                    x: 5544,
                    z: 4328,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2195
                {
                    x: 5544,
                    z: 4120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2196
                {
                    x: 5544,
                    z: 3688,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2197
                {
                    x: 5560,
                    z: -3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2198
                {
                    x: 5560,
                    z: -4488,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2199
                {
                    x: 5592,
                    z: -5016,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },            
            // Mineshaft 2200
                {
                    x: 5592,
                    z: -216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2201
                {
                    x: 5592,
                    z: 5960,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2202
                {
                    x: 5592,
                    z: 3736,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2203
                {
                    x: 5592,
                    z: 3144,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2204
                {
                    x: 5624,
                    z: -3928,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2205
                {
                    x: 5624,
                    z: -1320,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2206
                {
                    x: 5624,
                    z: 1640,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2207
                {
                    x: 5640,
                    z: -5848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2208
                {
                    x: 5640,
                    z: -168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2209
                {
                    x: 5640,
                    z: 4216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2210
                {
                    x: 5640,
                    z: 2312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2211
                {
                    x: 5640,
                    z: 3656,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2212
                {
                    x: 5656,
                    z: -3272,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2213
                {
                    x: 5656,
                    z: 5160,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2214
                {
                    x: 5672,
                    z: -3720,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2215
                {
                    x: 5672,
                    z: -5784,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2216
                {
                    x: 5672,
                    z: -680,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2217
                {
                    x: 5672,
                    z: 5096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2218
                {
                    x: 5672,
                    z: 3864,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2219
                {
                    x: 5688,
                    z: -5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2220
                {
                    x: 5688,
                    z: -2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2221
                {
                    x: 5688,
                    z: -2696,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2222
                {
                    x: 5688,
                    z: -1672,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2223
                {
                    x: 5688,
                    z: -1416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2224
                {
                    x: 5688,
                    z: 5256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2225
                {
                    x: 5688,
                    z: 4968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2226
                {
                    x: 5688,
                    z: 4248,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2227
                {
                    x: 5688,
                    z: 152,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2228
                {
                    x: 5688,
                    z: 3208,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2229
                {
                    x: 5704,
                    z: -4632,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2230
                {
                    x: 5704,
                    z: -2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2231
                {
                    x: 5704,
                    z: 5048,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2232
                {
                    x: 5720,
                    z: -4168,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2233
                {
                    x: 5720,
                    z: 4120,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2234
                {
                    x: 5720,
                    z: 1432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2235
                {
                    x: 5736,
                    z: -2808,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2236
                {
                    x: 5752,
                    z: -4024,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2237
                {
                    x: 5752,
                    z: -5112,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2238
                {
                    x: 5752,
                    z: 4728,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2239
                {
                    x: 5752,
                    z: 3096,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2240
                {
                    x: 5768,
                    z: -3416,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2241
                {
                    x: 5768,
                    z: 3816,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2242
                {
                    x: 5784,
                    z: -4072,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2243
                {
                    x: 5784,
                    z: -664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2244
                {
                    x: 5784,
                    z: -456,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2245
                {
                    x: 5784,
                    z: 5560,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2246
                {
                    x: 5800,
                    z: -2392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2247
                {
                    x: 5800,
                    z: 968,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2248
                {
                    x: 5800,
                    z: 2664,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2249
                {
                    x: 5816,
                    z: -4392,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2250
                {
                    x: 5816,
                    z: -1848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },            
            // Mineshaft 2251
                {
                    x: 5816,
                    z: 4312,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2252
                {
                    x: 5816,
                    z: 2872,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2253
                {
                    x: 5816,
                    z: 2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2254
                {
                    x: 5832,
                    z: -4824,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2255
                {
                    x: 5832,
                    z: -5368,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2256
                {
                    x: 5832,
                    z: 104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2257
                {
                    x: 5832,
                    z: 216,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2258
                {
                    x: 5848,
                    z: -5992,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2259
                {
                    x: 5848,
                    z: -2712,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2260
                {
                    x: 5864,
                    z: -3848,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2261
                {
                    x: 5880,
                    z: 1832,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2262
                {
                    x: 5896,
                    z: -5128,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2263
                {
                    x: 5896,
                    z: 4104,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2264
                {
                    x: 5896,
                    z: 744,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2265
                {
                    x: 5912,
                    z: -984,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2266
                {
                    x: 5912,
                    z: 3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2267
                {
                    x: 5912,
                    z: 2344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2268
                {
                    x: 5928,
                    z: -3400,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2269
                {
                    x: 5928,
                    z: -4856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2270
                {
                    x: 5928,
                    z: -2616,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2271
                {
                    x: 5944,
                    z: -5288,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2272
                {
                    x: 5944,
                    z: -1608,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2273
                {
                    x: 5944,
                    z: 3912,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2274
                {
                    x: 5944,
                    z: 1256,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2275
                {
                    x: 5960,
                    z: 3944,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2276
                {
                    x: 5960,
                    z: 344,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2277
                {
                    x: 5976,
                    z: -5432,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2278
                {
                    x: 5976,
                    z: -648,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2279
                {
                    x: 5976,
                    z: 4552,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2280
                {
                    x: 5976,
                    z: 2856,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Mineshaft 2281
                {
                    x: 5992,
                    z: -2424,
                    image: "playerimages/Abandoned_Mineshaft.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
		//Strongholds
			// Stronghold 1
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 2
                {
                    x: 4580,
                    z: 4420,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 3
                {
                    x: -300,
                    z: 2292,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 4
                {
                    x: -1324,
                    z: -2156,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 5
                {
                    x: -1900,
                    z: 340,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 6
                {
                    x: -4332,
                    z: -4028,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 7
                {
                    x: -4588,
                    z: -1276,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Stronghold 8
                {
                    x: -4668,
                    z: 1668,
                    image: "playerimages/Stronghold.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
		//Trail Ruins
			// Trail Ruin 1
                {
                    x: 5459,
                    z: 301,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 2
                {
                    x: 5027,
                    z: -2451,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 3
                {
                    x: 4942,
                    z: -3214,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 4
                {
                    x: 4594,
                    z: -3602,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 5
                {
                    x: 4526,
                    z: 290,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 6
                {
                    x: 4467,
                    z: -829,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 7
                {
                    x: 4451,
                    z: 2419,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 8
                {
                    x: 4366,
                    z: 942,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 9
                {
                    x: 4158,
                    z: 830,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 10
                {
                    x: 4157,
                    z: -5667,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 11
                {
                    x: 4066,
                    z: -3042,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 12
                {
                    x: 4061,
                    z: 1117,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 13
                {
                    x: 3986,
                    z: 366,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 14
                {
                    x: 3965,
                    z: -277,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 15
                {
                    x: 3870,
                    z: -1618,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 16
                {
                    x: 3539,
                    z: 29,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 17
                {
                    x: 3506,
                    z: -1358,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 18
                {
                    x: 3309,
                    z: -5357,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 19
                {
                    x: 3037,
                    z: -3987,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 20
                {
                    x: 2206,
                    z: 222,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 21
                {
                    x: 1826,
                    z: -4078,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 22
                {
                    x: 1218,
                    z: 2562,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 23
                {
                    x: 563,
                    z: 1709,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 24
                {
                    x: -530,
                    z: 3650,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 25
                {
                    x: -882,
                    z: 2974,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 26
                {
                    x: -1277,
                    z: -989,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 27
                {
                    x: -1902,
                    z: -4334,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 28
                {
                    x: -2083,
                    z: -813,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 29
                {
                    x: -2173,
                    z: -317,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 30
                {
                    x: -2674,
                    z: 738,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 31
                {
                    x: -2675,
                    z: 5677,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 32
                {
                    x: -3005,
                    z: 5683,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 33
                {
                    x: -3779,
                    z: -1283,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },				
			// Trail Ruin 34
                {
                    x: -4322,
                    z: -2018,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 35
                {
                    x: -5741,
                    z: 1203,
                    image: "playerimages/Trail_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
		//Trail Chambers
			// Trail Chamber 1
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 2
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 3
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 4
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 5
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 6
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 7
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 8
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 9
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 10
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 11
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 12
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 13
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 14
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 15
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 16
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 17
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 18
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 19
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 20
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 21
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 22
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 23
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 24
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 25
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 26
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 27
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 28
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 29
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },						
			// Trail Chamber 30
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 31
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 32
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 33
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 34
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 35
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 36
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 37
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 38
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 39
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 40
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 41
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 42
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 43
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 44
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 45
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 46
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 47
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 48
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 49
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 50
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 51
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 52
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 53
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 54
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 55
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 56
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 57
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 58
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 59
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 60
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 61
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 62
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 63
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 64
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 65
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 66
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 67
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 68
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 69
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 70
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },			
			// Trail Chamber 71
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 72
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 73
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 74
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 75
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 76
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 77
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 78
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 79
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 80
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 81
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 82
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 83
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 84
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 85
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 86
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 87
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 88
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 89
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 90
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 91
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 92
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 93
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 94
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 95
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 96
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 97
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 98
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 99
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 100
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 101
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 102
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 103
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 104
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 105
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 106
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 107
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 108
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 109
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 110
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 111
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 112
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 113
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 114
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 115
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 116
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 117
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 118
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 119
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 120
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 121
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 122
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 123
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 124
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 125
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 126
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 127
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 128
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 129
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 130
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 131
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 132
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 133
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 134
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 135
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 136
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 137
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 138
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 139
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 140
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 141
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 142
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 143
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 144
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 145
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 146
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 147
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 148
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 149
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 150
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 151
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 152
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 153
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 154
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 155
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 156
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 157
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 158
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 159
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 160
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 161
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 162
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 163
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 164
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 165
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 166
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 167
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 168
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 169
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 170
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 171
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 172
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 173
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 174
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 175
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 176
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 177
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 178
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 179
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 180
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 181
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 182
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 183
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 184
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 185
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 186
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 187
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 188
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 189
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 190
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 191
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 192
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 193
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 194
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 195
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 196
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 197
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 198
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 199
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 200
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 201
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 202
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 203
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 204
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 205
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 206
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 207
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 208
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 209
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 210
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 211
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 212
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 213
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 214
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 215
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 216
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 217
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 218
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 219
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 220
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 221
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 222
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 223
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 224
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 225
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 226
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 227
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 228
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 229
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },						
			// Trail Chamber 230
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 231
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 232
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 233
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 234
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 235
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 236
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 237
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 238
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 239
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 240
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 241
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 242
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 243
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 244
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 245
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 246
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 247
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 248
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 249
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 250
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 251
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 252
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 253
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 254
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 255
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 256
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 257
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 258
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 259
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 260
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 261
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 262
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 263
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 264
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 265
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 266
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 267
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 268
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 269
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 270
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },			
			// Trail Chamber 271
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 272
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 273
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 274
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 275
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 276
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 277
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 278
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 279
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 280
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 281
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 282
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 283
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 284
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 285
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 286
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 287
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 288
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 289
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 290
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 291
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 292
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 293
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 294
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 295
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 296
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 297
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 298
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 299
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 300
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 301
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 302
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 303
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 304
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 305
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 306
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 307
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 308
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 309
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 310
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 311
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 312
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 313
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 314
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 315
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 316
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 317
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 318
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 319
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 320
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 321
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 322
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 323
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 324
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 325
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 326
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 327
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 328
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 329
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 330
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 331
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 332
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 333
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 334
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 335
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 336
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 337
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 338
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 339
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 340
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 341
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 342
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 343
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 344
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 345
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 346
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 347
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 348
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 349
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 350
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 351
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 352
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 353
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 354
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 355
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 356
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 357
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 358
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 359
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 360
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 361
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 362
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 363
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 364
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 365
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 366
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 367
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 368
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 369
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 370
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 371
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 372
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 373
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 374
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 375
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 376
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 377
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 378
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 379
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 380
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 381
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 382
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 383
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 384
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 385
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 386
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 387
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 388
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 389
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 390
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 391
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 392
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 393
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 394
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Chamber 395
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 396
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 397
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 398
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 399
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 400
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 401
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 402
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 403
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 404
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 405
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 406
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 407
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 408
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 409
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 410
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 411
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 412
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 413
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 414
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 415
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 416
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 417
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 418
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 419
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 420
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 421
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 422
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 423
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 424
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 425
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 426
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 427
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 428
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 429
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },						
			// Trail Chamber 430
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 431
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 432
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 433
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 434
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 435
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 436
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 437
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 438
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 439
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 440
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 441
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 442
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 443
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 444
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 445
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 446
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Chamber 447
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 448
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 449
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 450
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 451
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 452
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 453
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 454
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 455
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 456
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 457
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 458
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 459
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 460
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 461
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 462
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 463
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 464
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 465
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 466
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 467
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 468
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 469
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Chamber 470
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },			
			// Trail Chamber 471
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 472
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Chamber 473
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                }
    // do not delete the following two closing brackets
    ]
};
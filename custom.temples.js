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
UnminedCustomTemples = {
    isEnabled: true,

    temples: [
    //Structure
        //Desert Pyramid
            //Pyramid 1
                {
                    x: -3576,
                    z: -2744,
                    image: "playerimages/Desert_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Pyramid 2
                {
                    x: 2216,
                    z: 3592,
                    image: "playerimages/Desert_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Pyramid 3
                {
                    x: -5976,
                    z: 4328,
                    image: "playerimages/Desert_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        //Desert Well
            //Desert Well 1
                {
                    x: 3347,
                    z: -2979,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Desert Well 2
                {
                    x: 3246,
                    z: -2606,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Desert Well 3
                {
                    x: -3476,
                    z: -1589,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Desert Well 4
                {
                    x: 776,
                    z: 2906,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Desert Well 5
                {
                    x: 793,
                    z: 2915,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        //Jungle Pyramid
            //Jungle 1
                {
                    x: 4152,
                    z: -5864,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 2
                {
                    x: 3736,
                    z: -5880,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 3
                {
                    x: 4888,
                    z: -4834,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 4
                {
                    x: -4296,
                    z: -1816,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 5
                {
                    x: -4232,
                    z: -1320,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 6
                {
                    x: -824,
                    z: 2408,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 7
                {
                    x: -744,
                    z: 2872,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 8
                {
                    x: -392,
                    z: 3624,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 9
                {
                    x: 3592,
                    z: 4376,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Jungle 10
                {
                    x: 4776,
                    z: 2680,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        //Ocean Ruin
            //Ocean Ruin 1
                {
                    x: 5944,
                    z: 104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 2
                {
                    x: 5944,
                    z: 2312,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 3
                {
                    x: 5944,
                    z: 4872,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 4
                {
                    x: 5912,
                    z: -552,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 5
                {
                    x: 5912,
                    z: 1976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 6
                {
                    x: 5912,
                    z: 1784,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 7
                {
                    x: 5880,
                    z: -168,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 8
                {
                    x: 5880,
                    z: 2600,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 9
                {
                    x: 5864,
                    z: 1384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 10
                {
                    x: 5832,
                    z: 728,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 11
                {
                    x: 5816,
                    z: 5160,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 12
                {
                    x: 5784,
                    z: 392,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 13
                {
                    x: 5624,
                    z: 1288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 14
                {
                    x: 5624,
                    z: 5464,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 15
                {
                    x: 5560,
                    z: -520,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 16
                {
                    x: 5560,
                    z: -184,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 17
                {
                    x: 5512,
                    z: 2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 18
                {
                    x: 5496,
                    z: 4984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 19
                {
                    x: 5480,
                    z: 5288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 20
                {
                    x: 5464,
                    z: -936,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 21
                {
                    x: 5464,
                    z: 40,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 22
                {
                    x: 5464,
                    z: 1688,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 23
                {
                    x: 5464,
                    z: 2104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 24
                {
                    x: 5448,
                    z: -1144,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 25
                {
                    x: 5448,
                    z: 648,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 26
                {
                    x: 5304,
                    z: 2264,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 27
                {
                    x: 5304,
                    z: 1640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 28
                {
                    x: 5272,
                    z: 1464,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 29
                {
                    x: 5256,
                    z: -920,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 30
                {
                    x: 5256,
                    z: -280,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 31
                {
                    x: 5256,
                    z: 1960,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 32
                {
                    x: 5176,
                    z: 712,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 33
                {
                    x: 5144,
                    z: -552,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 34
                {
                    x: 4968,
                    z: 2296,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 35
                {
                    x: 4968,
                    z: 1704,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 36
                {
                    x: 4968,
                    z: 2040,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 37
                {
                    x: 4920,
                    z: -792,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 38
                {
                    x: 4824,
                    z: 56,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 39
                {
                    x: 4648,
                    z: 2104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 40
                {
                    x: 4648,
                    z: 1736,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 41
                {
                    x: 4632,
                    z: 3368,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 42
                {
                    x: 4616,
                    z: 1368,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 43
                {
                    x: 4504,
                    z: 5176,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 44
                {
                    x: 4344,
                    z: 2008,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 45
                {
                    x: 4312,
                    z: 5240,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 46
                {
                    x: 4280,
                    z: 1640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 47
                {
                    x: 3992,
                    z: 2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 48
                {
                    x: 3976,
                    z: 3672,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 49
                {
                    x: 3960,
                    z: 1752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 50
                {
                    x: 3960,
                    z: 2712,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 51
                {
                    x: 3960,
                    z: 5144,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 52
                {
                    x: 3928,
                    z: 3048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 53
                {
                    x: 3896,
                    z: 1960,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 54
                {
                    x: 3896,
                    z: 3288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 55
                {
                    x: 3896,
                    z: 5512,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 56
                {
                    x: 3880,
                    z: -5400,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 57
                {
                    x: 3848,
                    z: -4952,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 58
                {
                    x: 3672,
                    z: -5336,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 59
                {
                    x: 3672,
                    z: -4936,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 60
                {
                    x: 3672,
                    z: 5160,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 61
                {
                    x: 3656,
                    z: 3000,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 62
                {
                    x: 3640,
                    z: -5576,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 63
                {
                    x: 3624,
                    z: -4456,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 64
                {
                    x: 3624,
                    z: 2696,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 65
                {
                    x: 3624,
                    z: 3608,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 66
                {
                    x: 3608,
                    z: 1304,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 67
                {
                    x: 3608,
                    z: 1752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 68
                {
                    x: 3608,
                    z: 4856,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 69
                {
                    x: 3576,
                    z: -4680,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 70
                {
                    x: 3576,
                    z: 2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 71
                {
                    x: 3560,
                    z: 3336,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 72
                {
                    x: 3560,
                    z: 5624,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 73
                {
                    x: 3528,
                    z: -2808,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 74
                {
                    x: 3528,
                    z: 1080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 75
                {
                    x: 3528,
                    z: 2072,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 76
                {
                    x: 3384,
                    z: 5768,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 77
                {
                    x: 3384,
                    z: 5128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 78
                {
                    x: 3368,
                    z: -4136,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 79
                {
                    x: 3352,
                    z: -4696,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 80
                {
                    x: 3352,
                    z: -2200,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 81
                {
                    x: 3352,
                    z: 3224,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 82
                {
                    x: 3336,
                    z: 2280,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 83
                {
                    x: 3336,
                    z: 3000,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 84
                {
                    x: 3336,
                    z: 3960,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 85
                {
                    x: 3320,
                    z: -5096,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 86
                {
                    x: 3304,
                    z: 1448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 87
                {
                    x: 3304,
                    z: 1608,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 88
                {
                    x: 3304,
                    z: 5480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 89
                {
                    x: 3224,
                    z: -5288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 90
                {
                    x: 3224,
                    z: -2760,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 91
                {
                    x: 3224,
                    z: 1976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 92
                {
                    x: 3208,
                    z: -4360,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 93
                {
                    x: 3208,
                    z: -2552,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 94
                {
                    x: 3064,
                    z: -1480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 95
                {
                    x: 3064,
                    z: 1368,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 96
                {
                    x: 3048,
                    z: 2328,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 97
                {
                    x: 3032,
                    z: 5160,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 98
                {
                    x: 3016,
                    z: 1976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 99
                {
                    x: 3000,
                    z: -1880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 100
                {
                    x: 3000,
                    z: 3048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 101
                {
                    x: 3000,
                    z: 3384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 102
                {
                    x: 2984,
                    z: 2728,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 103
                {
                    x: 2984,
                    z: 4968,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 104
                {
                    x: 2968,
                    z: 4008,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 105
                {
                    x: 2952,
                    z: -4760,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 106
                {
                    x: 2952,
                    z: -2216,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 107
                {
                    x: 2936,
                    z: 1672,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 108
                {
                    x: 2936,
                    z: 5880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 109
                {
                    x: 2920,
                    z: -5064,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 110
                {
                    x: 2920,
                    z: 5512,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 111
                {
                    x: 2904,
                    z: -2504,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 112
                {
                    x: 2744,
                    z: 3352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 113
                {
                    x: 2744,
                    z: 2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 114
                {
                    x: 2728,
                    z: -5112,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 115
                {
                    x: 2728,
                    z: 2744,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 116
                {
                    x: 2728,
                    z: 2904,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 117
                {
                    x: 2728,
                    z: 3960,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 118
                {
                    x: 2664,
                    z: 1688,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 119
                {
                    x: 2648,
                    z: 5464,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 120
                {
                    x: 2648,
                    z: 5912,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 121
                {
                    x: 2632,
                    z: -5304,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 122
                {
                    x: 2632,
                    z: 1976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 123
                {
                    x: 2632,
                    z: 3704,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 124
                {
                    x: 2616,
                    z: -4632,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 125
                {
                    x: 2616,
                    z: -1576,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 126
                {
                    x: 2616,
                    z: -2056,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 127
                {
                    x: 2600,
                    z: -1848,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 128
                {
                    x: 2584,
                    z: 1352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 129
                {
                    x: 2584,
                    z: 4824,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 130
                {
                    x: 2568,
                    z: 5240,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 131
                {
                    x: 2424,
                    z: -216,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 132
                {
                    x: 2424,
                    z: 1432,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 133
                {
                    x: 2424,
                    z: 3048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 134
                {
                    x: 2424,
                    z: 4984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 135
                {
                    x: 2408,
                    z: -2392,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 136
                {
                    x: 2408,
                    z: -2184,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 137
                {
                    x: 2408,
                    z: -1912,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 138
                {
                    x: 2392,
                    z: 1688,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 139
                {
                    x: 2376,
                    z: -5704,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 140
                {
                    x: 2376,
                    z: 2392,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 141
                {
                    x: 2344,
                    z: -584,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 142
                {
                    x: 2344,
                    z: 3640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 143
                {
                    x: 2344,
                    z: 5272,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 144
                {
                    x: 2328,
                    z: 1128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 145
                {
                    x: 2312,
                    z: -4776,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 146
                {
                    x: 2312,
                    z: 2616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 147
                {
                    x: 2312,
                    z: 5448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 148
                {
                    x: 2296,
                    z: -1208,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 149
                {
                    x: 2280,
                    z: 4584,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 150
                {
                    x: 2280,
                    z: 5800,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 151
                {
                    x: 2264,
                    z: 3352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 152
                {
                    x: 2264,
                    z: 2056,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 153
                {
                    x: 2104,
                    z: 1128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 154
                {
                    x: 2104,
                    z: 4296,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 155
                {
                    x: 2104,
                    z: 4536,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 156
                {
                    x: 2072,
                    z: -184,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 157
                {
                    x: 2072,
                    z: 2424,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 158
                {
                    x: 2056,
                    z: -1256,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 159
                {
                    x: 2056,
                    z: 3000,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 160
                {
                    x: 2040,
                    z: 5768,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 161
                {
                    x: 2024,
                    z: -456,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 162
                {
                    x: 2024,
                    z: 3624,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 163
                {
                    x: 2024,
                    z: 5160,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 164
                {
                    x: 2008,
                    z: -2104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 165
                {
                    x: 2008,
                    z: 2744,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 166
                {
                    x: 2008,
                    z: 2088,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 167
                {
                    x: 2008,
                    z: 4984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 168
                {
                    x: 2008,
                    z: 5608,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 169
                {
                    x: 1992,
                    z: 728,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 170
                {
                    x: 1992,
                    z: 3864,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 171
                {
                    x: 1976,
                    z: -1432,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 172
                {
                    x: 1960,
                    z: -920,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 173
                {
                    x: 1960,
                    z: 1656,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 174
                {
                    x: 1960,
                    z: 3256,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 175
                {
                    x: 1944,
                    z: 1416,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 176
                {
                    x: 1928,
                    z: -2472,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 177
                {
                    x: 1784,
                    z: 1752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 178
                {
                    x: 1784,
                    z: 5784,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 179
                {
                    x: 1768,
                    z: -136,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 180
                {
                    x: 1736,
                    z: -488,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 181
                {
                    x: 1736,
                    z: 408,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 182
                {
                    x: 1720,
                    z: -2216,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 183
                {
                    x: 1720,
                    z: 3272,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 184
                {
                    x: 1720,
                    z: 2024,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 185
                {
                    x: 1720,
                    z: 4264,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 186
                {
                    x: 1704,
                    z: -2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 187
                {
                    x: 1704,
                    z: 1144,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 188
                {
                    x: 1704,
                    z: 3672,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 189
                {
                    x: 1688,
                    z: -2856,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 190
                {
                    x: 1688,
                    z: 4616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 191
                {
                    x: 1672,
                    z: -3016,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 192
                {
                    x: 1672,
                    z: 2680,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 193
                {
                    x: 1672,
                    z: 2248,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 194
                {
                    x: 1672,
                    z: 4808,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 195
                {
                    x: 1656,
                    z: -792,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 196
                {
                    x: 1656,
                    z: -1128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 197
                {
                    x: 1624,
                    z: -1432,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 198
                {
                    x: 1624,
                    z: 120,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 199
                {
                    x: 1624,
                    z: 5144,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 200
                {
                    x: 1608,
                    z: -1880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 201
                {
                    x: 1608,
                    z: 808,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 202
                {
                    x: 1608,
                    z: 3896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 203
                {
                    x: 1608,
                    z: 5496,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 204
                {
                    x: 1448,
                    z: -2440,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 205
                {
                    x: 1448,
                    z: -2232,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 206
                {
                    x: 1448,
                    z: 5128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 207
                {
                    x: 1432,
                    z: 5832,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 208
                {
                    x: 1416,
                    z: 1016,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 209
                {
                    x: 1400,
                    z: 504,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 210
                {
                    x: 1400,
                    z: 5592,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 211
                {
                    x: 1384,
                    z: -168,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 212
                {
                    x: 1384,
                    z: 4280,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 213
                {
                    x: 1368,
                    z: -616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 214
                {
                    x: 1368,
                    z: 4584,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 215
                {
                    x: 1352,
                    z: -5064,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 216
                {
                    x: 1352,
                    z: -1896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 217
                {
                    x: 1352,
                    z: -776,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 218
                {
                    x: 1352,
                    z: 760,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 219
                {
                    x: 1352,
                    z: 3912,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 220
                {
                    x: 1352,
                    z: 4936,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 221
                {
                    x: 1336,
                    z: -1448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 222
                {
                    x: 1336,
                    z: -1096,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 223
                {
                    x: 1320,
                    z: 56,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 224
                {
                    x: 1304,
                    z: -2792,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 225
                {
                    x: 1304,
                    z: 1976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 226
                {
                    x: 1144,
                    z: 3032,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 227
                {
                    x: 1128,
                    z: -1528,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 228
                {
                    x: 1128,
                    z: -904,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 229
                {
                    x: 1128,
                    z: 3960,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 230
                {
                    x: 1128,
                    z: 4568,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 231
                {
                    x: 1112,
                    z: -3016,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 232
                {
                    x: 1112,
                    z: 328,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 233
                {
                    x: 1096,
                    z: -2536,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 234
                {
                    x: 1096,
                    z: -1896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 235
                {
                    x: 1080,
                    z: -3448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 236
                {
                    x: 1080,
                    z: 4840,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 237
                {
                    x: 1064,
                    z: 664,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 238
                {
                    x: 1048,
                    z: -5080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 239
                {
                    x: 1048,
                    z: 1064,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 240
                {
                    x: 1048,
                    z: 1288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 241
                {
                    x: 1032,
                    z: -1192,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 242
                {
                    x: 1032,
                    z: -600,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 243
                {
                    x: 1032,
                    z: 2296,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 244
                {
                    x: 1016,
                    z: 5560,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 245
                {
                    x: 1000,
                    z: 5896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 246
                {
                    x: 968,
                    z: -2088,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 247
                {
                    x: 968,
                    z: 5176,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 248
                {
                    x: 808,
                    z: -904,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 249
                {
                    x: 792,
                    z: 424,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 250
                {
                    x: 792,
                    z: 984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 251
                {
                    x: 792,
                    z: 1352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 252
                {
                    x: 792,
                    z: 5192,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 253
                {
                    x: 776,
                    z: -2392,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 254
                {
                    x: 776,
                    z: -296,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 255
                {
                    x: 776,
                    z: 4216,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 256
                {
                    x: 776,
                    z: 5512,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 257
                {
                    x: 760,
                    z: -3768,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 258
                {
                    x: 760,
                    z: -568,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 259
                {
                    x: 744,
                    z: -2712,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 260
                {
                    x: 744,
                    z: 4600,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 261
                {
                    x: 728,
                    z: -4984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 262
                {
                    x: 728,
                    z: -4440,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 263
                {
                    x: 728,
                    z: -3464,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 264
                {
                    x: 728,
                    z: 2984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 265
                {
                    x: 728,
                    z: 5880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 266
                {
                    x: 712,
                    z: -2184,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 267
                {
                    x: 696,
                    z: -6024,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 268
                {
                    x: 696,
                    z: -1864,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 269
                {
                    x: 696,
                    z: -1128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 270
                {
                    x: 680,
                    z: -3016,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 271
                {
                    x: 648,
                    z: -5608,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 272
                {
                    x: 648,
                    z: -4632,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 273
                {
                    x: 472,
                    z: -1896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 274
                {
                    x: 472,
                    z: -1480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 275
                {
                    x: 472,
                    z: 4664,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 276
                {
                    x: 456,
                    z: -4712,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 277
                {
                    x: 456,
                    z: -3976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 278
                {
                    x: 456,
                    z: -2760,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 279
                {
                    x: 456,
                    z: -872,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 280
                {
                    x: 440,
                    z: -1256,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 281
                {
                    x: 440,
                    z: 1288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 282
                {
                    x: 440,
                    z: 5304,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 283
                {
                    x: 440,
                    z: 5944,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 284
                {
                    x: 408,
                    z: -4456,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 285
                {
                    x: 408,
                    z: -3176,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 286
                {
                    x: 408,
                    z: -600,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 287
                {
                    x: 408,
                    z: 5496,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 288
                {
                    x: 392,
                    z: -3512,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 289
                {
                    x: 392,
                    z: 328,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 290
                {
                    x: 360,
                    z: -2552,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 291
                {
                    x: 360,
                    z: 728,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 292
                {
                    x: 360,
                    z: 1032,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 293
                {
                    x: 344,
                    z: -136,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 294
                {
                    x: 344,
                    z: 168,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 295
                {
                    x: 328,
                    z: -5928,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 296
                {
                    x: 184,
                    z: -5080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 297
                {
                    x: 168,
                    z: -3352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 298
                {
                    x: 168,
                    z: -776,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 299
                {
                    x: 152,
                    z: -1416,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 300
                {
                    x: 152,
                    z: 1064,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 301
                {
                    x: 136,
                    z: -4136,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 302
                {
                    x: 104,
                    z: -2392,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 303
                {
                    x: 88,
                    z: -1752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 304
                {
                    x: 88,
                    z: 1400,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 305
                {
                    x: 72,
                    z: -216,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 306
                {
                    x: 72,
                    z: 776,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 307
                {
                    x: 56,
                    z: -3176,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 308
                {
                    x: 56,
                    z: 360,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 309
                {
                    x: 40,
                    z: -5752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 310
                {
                    x: 40,
                    z: -2104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 311
                {
                    x: 40,
                    z: 120,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 312
                {
                    x: 8,
                    z: -2760,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 313
                {
                    x: -136,
                    z: -5720,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 314
                {
                    x: -152,
                    z: -5320,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 315
                {
                    x: -152,
                    z: 792,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 316
                {
                    x: -168,
                    z: -1768,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 317
                {
                    x: -168,
                    z: -3192,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 318
                {
                    x: -200,
                    z: -2232,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 319
                {
                    x: -296,
                    z: -2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 320
                {
                    x: -312,
                    z: 1112,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 321
                {
                    x: -456,
                    z: 792,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 322
                {
                    x: -488,
                    z: 1144,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 323
                {
                    x: -504,
                    z: -3080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 324
                {
                    x: -504,
                    z: -2856,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 325
                {
                    x: -504,
                    z: -1912,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 326
                {
                    x: -504,
                    z: -2088,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 327
                {
                    x: -536,
                    z: -6056,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 328
                {
                    x: -536,
                    z: -1592,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 329
                {
                    x: -568,
                    z: 2024,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 330
                {
                    x: -600,
                    z: 1704,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 331
                {
                    x: -600,
                    z: 2280,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 332
                {
                    x: -776,
                    z: 152,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 333
                {
                    x: -792,
                    z: 5480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 334
                {
                    x: -824,
                    z: 1656,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 335
                {
                    x: -840,
                    z: -5032,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 336
                {
                    x: -840,
                    z: 4616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 337
                {
                    x: -840,
                    z: 5192,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 338
                {
                    x: -904,
                    z: 4168,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 339
                {
                    x: -920,
                    z: 1384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 340
                {
                    x: -936,
                    z: 792,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 341
                {
                    x: -952,
                    z: 5912,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 342
                {
                    x: -1128,
                    z: 1304,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 343
                {
                    x: -1128,
                    z: 4952,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 344
                {
                    x: -1160,
                    z: -1416,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 345
                {
                    x: -1160,
                    z: 3672,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 346
                {
                    x: -1176,
                    z: -4648,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 347
                {
                    x: -1176,
                    z: 1048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 348
                {
                    x: -1176,
                    z: 1992,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 349
                {
                    x: -1176,
                    z: 4616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 350
                {
                    x: -1192,
                    z: 5224,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 351
                {
                    x: -1224,
                    z: -4936,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 352
                {
                    x: -1224,
                    z: 776,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 353
                {
                    x: -1240,
                    z: 3928,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 354
                {
                    x: -1240,
                    z: 5448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 355
                {
                    x: -1256,
                    z: -4344,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 356
                {
                    x: -1256,
                    z: 4328,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 357
                {
                    x: -1272,
                    z: 5848,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 358
                {
                    x: -1432,
                    z: 4008,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 359
                {
                    x: -1432,
                    z: 3624,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 360
                {
                    x: -1464,
                    z: -5048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 361
                {
                    x: -1464,
                    z: 5544,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 362
                {
                    x: -1496,
                    z: -1480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 363
                {
                    x: -1496,
                    z: 2584,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 364
                {
                    x: -1512,
                    z: -1752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 365
                {
                    x: -1528,
                    z: -2104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 366
                {
                    x: -1528,
                    z: 1400,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 367
                {
                    x: -1528,
                    z: 4200,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 368
                {
                    x: -1544,
                    z: -4648,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 369
                {
                    x: -1544,
                    z: 2408,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 370
                {
                    x: -1544,
                    z: 3384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 371
                {
                    x: -1560,
                    z: 4632,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 372
                {
                    x: -1576,
                    z: 5128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 373
                {
                    x: -1592,
                    z: 2040,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 374
                {
                    x: -1592,
                    z: 3032,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 375
                {
                    x: -1592,
                    z: 4872,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 376
                {
                    x: -1752,
                    z: -1416,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 377
                {
                    x: -1752,
                    z: 2376,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 378
                {
                    x: -1752,
                    z: 5896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 379
                {
                    x: -1768,
                    z: 4200,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 380
                {
                    x: -1784,
                    z: 1640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 381
                {
                    x: -1800,
                    z: 3336,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 382
                {
                    x: -1800,
                    z: 4968,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 383
                {
                    x: -1816,
                    z: -5640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 384
                {
                    x: -1832,
                    z: -1272,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 385
                {
                    x: -1832,
                    z: 2056,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 386
                {
                    x: -1832,
                    z: 3576,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 387
                {
                    x: -1848,
                    z: -2136,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 388
                {
                    x: -1864,
                    z: -888,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 389
                {
                    x: -1880,
                    z: -4952,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 390
                {
                    x: -1880,
                    z: 1448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 391
                {
                    x: -1880,
                    z: 5224,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 392
                {
                    x: -1896,
                    z: 3880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 393
                {
                    x: -1896,
                    z: 3032,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 394
                {
                    x: -1896,
                    z: 5448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 395
                {
                    x: -1912,
                    z: -5272,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 396
                {
                    x: -1912,
                    z: 1144,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 397
                {
                    x: -1912,
                    z: 4616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 398
                {
                    x: -2056,
                    z: 1768,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 399
                {
                    x: -2056,
                    z: 3704,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 400
                {
                    x: -2072,
                    z: 2056,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 401
                {
                    x: -2088,
                    z: 4216,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 402
                {
                    x: -2104,
                    z: -5592,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 403
                {
                    x: -2104,
                    z: -5096,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 404
                {
                    x: -2104,
                    z: -3080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 405
                {
                    x: -2104,
                    z: 1352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 406
                {
                    x: -2120,
                    z: -3368,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 407
                {
                    x: -2136,
                    z: -1160,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 408
                {
                    x: -2136,
                    z: 2632,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 409
                {
                    x: -2152,
                    z: 2360,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 410
                {
                    x: -2152,
                    z: 3896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 411
                {
                    x: -2152,
                    z: 3352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 412
                {
                    x: -2168,
                    z: 4824,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 413
                {
                    x: -2184,
                    z: -2872,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 414
                {
                    x: -2184,
                    z: 4536,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 415
                {
                    x: -2216,
                    z: 360,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 416
                {
                    x: -2216,
                    z: 2984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 417
                {
                    x: -2232,
                    z: -5416,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 418
                {
                    x: -2376,
                    z: 4344,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 419
                {
                    x: -2376,
                    z: 4520,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 420
                {
                    x: -2392,
                    z: -5576,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 421
                {
                    x: -2424,
                    z: 1944,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 422
                {
                    x: -2440,
                    z: -5368,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 423
                {
                    x: -2440,
                    z: -3480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 424
                {
                    x: -2440,
                    z: -1432,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 425
                {
                    x: -2440,
                    z: 4984,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 426
                {
                    x: -2456,
                    z: -3016,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 427
                {
                    x: -2472,
                    z: -5080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 428
                {
                    x: -2472,
                    z: 3256,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 429
                {
                    x: -2488,
                    z: 2296,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 430
                {
                    x: -2488,
                    z: 3000,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 431
                {
                    x: -2504,
                    z: -5960,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 432
                {
                    x: -2504,
                    z: -1160,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 433
                {
                    x: -2504,
                    z: 3528,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 434
                {
                    x: -2504,
                    z: 2744,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 435
                {
                    x: -2520,
                    z: -3736,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 436
                {
                    x: -2520,
                    z: -232,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 437
                {
                    x: -2536,
                    z: -3992,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 438
                {
                    x: -2552,
                    z: -456,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 439
                {
                    x: -2552,
                    z: 5240,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 440
                {
                    x: -2696,
                    z: -136,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 441
                {
                    x: -2696,
                    z: 4840,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 442
                {
                    x: -2712,
                    z: 3576,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 443
                {
                    x: -2760,
                    z: 88,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 444
                {
                    x: -2792,
                    z: -3816,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 445
                {
                    x: -2808,
                    z: -5352,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 446
                {
                    x: -2808,
                    z: -5080,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 447
                {
                    x: -2808,
                    z: 3896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 448
                {
                    x: -2824,
                    z: -5640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 449
                {
                    x: -2824,
                    z: -2776,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 450
                {
                    x: -2840,
                    z: -616,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 451
                {
                    x: -2840,
                    z: 2072,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 452
                {
                    x: -2840,
                    z: 2728,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 453
                {
                    x: -2856,
                    z: 3384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 454
                {
                    x: -2872,
                    z: -3128,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 455
                {
                    x: -2872,
                    z: -920,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 456
                {
                    x: -3032,
                    z: -584,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 457
                {
                    x: -3048,
                    z: 3656,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 458
                {
                    x: -3064,
                    z: 2648,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 459
                {
                    x: -3096,
                    z: -3096,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 460
                {
                    x: -3096,
                    z: 40,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 461
                {
                    x: -3112,
                    z: -6024,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 462
                {
                    x: -3160,
                    z: -4024,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 463
                {
                    x: -3160,
                    z: 3368,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 464
                {
                    x: -3176,
                    z: -3800,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 465
                {
                    x: -3352,
                    z: -600,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 466
                {
                    x: -3384,
                    z: -3112,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 467
                {
                    x: -3416,
                    z: -3384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 468
                {
                    x: -3416,
                    z: -3736,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 469
                {
                    x: -3416,
                    z: 2584,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 470
                {
                    x: -3416,
                    z: 3208,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 471
                {
                    x: -3416,
                    z: 3640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 472
                {
                    x: -3448,
                    z: -3976,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 473
                {
                    x: -3464,
                    z: -6040,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 474
                {
                    x: -3512,
                    z: 3880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 475
                {
                    x: -3688,
                    z: -6008,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 476
                {
                    x: -3688,
                    z: -3496,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 477
                {
                    x: -3688,
                    z: 3640,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 478
                {
                    x: -3720,
                    z: 3384,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 479
                {
                    x: -3800,
                    z: -552,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 480
                {
                    x: -3816,
                    z: 2952,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 481
                {
                    x: -3992,
                    z: -520,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 482
                {
                    x: -3992,
                    z: 3240,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 483
                {
                    x: -4008,
                    z: -4456,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 484
                {
                    x: -4024,
                    z: -5336,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 485
                {
                    x: -4040,
                    z: -5576,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 486
                {
                    x: -4056,
                    z: -4648,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 487
                {
                    x: -4088,
                    z: -4056,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 488
                {
                    x: -4104,
                    z: -840,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 489
                {
                    x: -4152,
                    z: -6040,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 490
                {
                    x: -4296,
                    z: -4328,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 491
                {
                    x: -4312,
                    z: -4648,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 492
                {
                    x: -4312,
                    z: -4120,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 493
                {
                    x: -4328,
                    z: -5896,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 494
                {
                    x: -4392,
                    z: -5720,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 495
                {
                    x: -4392,
                    z: -5048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 496
                {
                    x: -4424,
                    z: -5256,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 497
                {
                    x: -4472,
                    z: -1480,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 498
                {
                    x: -4472,
                    z: 2344,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 499
                {
                    x: -4472,
                    z: 2104,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 500
                {
                    x: -4632,
                    z: -5656,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 501
                {
                    x: -4680,
                    z: -4424,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 502
                {
                    x: -4680,
                    z: 2264,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 503
                {
                    x: -4696,
                    z: -5912,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 504
                {
                    x: -4696,
                    z: -4680,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 505
                {
                    x: -4728,
                    z: -3752,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 506
                {
                    x: -4760,
                    z: -5288,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 507
                {
                    x: -4776,
                    z: -4152,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 508
                {
                    x: -4792,
                    z: -5048,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 509
                {
                    x: -4936,
                    z: -472,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 510
                {
                    x: -4984,
                    z: -4328,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 511
                {
                    x: -4984,
                    z: 5304,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 512
                {
                    x: -5000,
                    z: 5848,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 513
                {
                    x: -5016,
                    z: -1464,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 514
                {
                    x: -5032,
                    z: -3768,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 515
                {
                    x: -5048,
                    z: -5416,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 516
                {
                    x: -5064,
                    z: 728,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 517
                {
                    x: -5096,
                    z: -4152,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 518
                {
                    x: -5112,
                    z: -4936,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 519
                {
                    x: -5112,
                    z: -1736,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 520
                {
                    x: -5112,
                    z: -1176,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 521
                {
                    x: -5272,
                    z: -1880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 522
                {
                    x: -5320,
                    z: -5096,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 523
                {
                    x: -5336,
                    z: -1448,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 524
                {
                    x: -5368,
                    z: 5880,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 525
                {
                    x: -5368,
                    z: 5560,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 526
                {
                    x: -5416,
                    z: -2232,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 527
                {
                    x: -5432,
                    z: -1208,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 528
                {
                    x: -5576,
                    z: -5032,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 529
                {
                    x: -5640,
                    z: -488,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 530
                {
                    x: -5672,
                    z: -3496,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 531
                {
                    x: -5688,
                    z: -2696,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 532
                {
                    x: -5688,
                    z: 5944,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 533
                {
                    x: -5704,
                    z: -888,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 534
                {
                    x: -5720,
                    z: -2520,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 535
                {
                    x: -5720,
                    z: 5608,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 536
                {
                    x: -5896,
                    z: -3400,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 537
                {
                    x: -5928,
                    z: -2088,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 538
                {
                    x: -5976,
                    z: -2488,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 539
                {
                    x: -5992,
                    z: 1320,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 540
                {
                    x: -6040,
                    z: -2808,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Ruin 541
                {
                    x: -6040,
                    z: -1192,
                    image: "playerimages/Ocean_Ruin.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        //Ocean Monument
            //Ocean Monument 1
                {
                    x: 5912,
                    z: 5256,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 2
                {
                    x: 5880,
                    z: -1208,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 3
                {
                    x: 5800,
                    z: -376,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 4
                {
                    x: 5736,
                    z: -744,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 5
                {
                    x: 5336,
                    z: -648,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 6
                {
                    x: 5272,
                    z: 1800,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 7
                {
                    x: 4296,
                    z: 1784,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 8
                {
                    x: 3864,
                    z: 2328,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 9
                {
                    x: 3832,
                    z: 1784,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 10
                {
                    x: 3784,
                    z: -4344,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 11
                {
                    x: 3656,
                    z: 3416,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 12
                {
                    x: 3640,
                    z: 5240,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 13
                {
                    x: 3320,
                    z: 1336,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 14
                {
                    x: 2744,
                    z: 1288,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 15
                {
                    x: 2728,
                    z: -1800,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 16
                {
                    x: 2712,
                    z: 5288,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 17
                {
                    x: 2664,
                    z: 1784,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 18
                {
                    x: 2360,
                    z: 5944,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 19
                {
                    x: 2216,
                    z: 5416,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 20
                {
                    x: 1880,
                    z: 4712,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 21
                {
                    x: 1800,
                    z: 5256,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 22
                {
                    x: 1752,
                    z: -312,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 23
                {
                    x: 1672,
                    z: 1320,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 24
                {
                    x: 1656,
                    z: 5848,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 25
                {
                    x: 1624,
                    z: 648,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 26
                {
                    x: 1560,
                    z: -824,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 27
                {
                    x: 1352,
                    z: -872,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 28
                {
                    x: 1304,
                    z: -2232,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 29
                {
                    x: 1304,
                    z: 5960,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 30
                {
                    x: 1272,
                    z: -200,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 31
                {
                    x: 1224,
                    z: 248,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 32
                {
                    x: 1176,
                    z: 5400,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 33
                {
                    x: 1112,
                    z: -1672,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 34
                {
                    x: 1112,
                    z: -1432,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 35
                {
                    x: 920,
                    z: -1336,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 36
                {
                    x: 712,
                    z: 776,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 37
                {
                    x: 648,
                    z: -888,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 38
                {
                    x: 616,
                    z: -2248,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 39
                {
                    x: 600,
                    z: -1736,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 40
                {
                    x: 344,
                    z: -2152,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 41
                {
                    x: 328,
                    z: 1128,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 42
                {
                    x: 296,
                    z: -1720,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 43
                {
                    x: 296,
                    z: -792,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 44
                {
                    x: 248,
                    z: -1368,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 45
                {
                    x: 232,
                    z: -2840,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 46
                {
                    x: 56,
                    z: -6040,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 47
                {
                    x: -280,
                    z: -6040,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 48
                {
                    x: -376,
                    z: -1864,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 49
                {
                    x: -1368,
                    z: 3768,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 50
                {
                    x: -1480,
                    z: 5784,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 51
                {
                    x: -1752,
                    z: 3688,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 52
                {
                    x: -1752,
                    z: 3240,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 53
                {
                    x: -1800,
                    z: 4792,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 54
                {
                    x: -1864,
                    z: 1848,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 55
                {
                    x: -1912,
                    z: 4264,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 56
                {
                    x: -1912,
                    z: 2760,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 57
                {
                    x: -1960,
                    z: 2360,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 58
                {
                    x: -2280,
                    z: 4392,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 59
                {
                    x: -2312,
                    z: 2696,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 60
                {
                    x: -2328,
                    z: 2264,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 61
                {
                    x: -2456,
                    z: -1256,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 62
                {
                    x: -2472,
                    z: -2856,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 63
                {
                    x: -2488,
                    z: 4888,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 64
                {
                    x: -3288,
                    z: 3384,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 65
                {
                    x: -3416,
                    z: 3816,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 66
                {
                    x: -3768,
                    z: -376,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 67
                {
                    x: -3944,
                    z: -5912,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 68
                {
                    x: -4312,
                    z: -5384,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 69
                {
                    x: -4824,
                    z: -4360,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 70
                {
                    x: -4936,
                    z: -5432,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            //Ocean Monument 71
                {
                    x: -5976,
                    z: 1704,
                    image: "playerimages/Ocean_Monument.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
    // do not delete the following two closing brackets
    ]
};


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
UnminedCustomPillager = {
    isEnabled: true,

    pillager: [
        // Pillager Outpost
            // Pillager 1
                {
                    x: 5656,
                    z: 3016,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pillager 2
                {
                    x: 5640,
                    z: -2136,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pillager 3
                {
                    x: -5528,
                    z: 584,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pillager 4
                {
                    x: 5192,
                    z: -4824,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 5
                {
                    x: 4408,
                    z: -456,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 6
                {
                    x: 4392,
                    z: -568,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 7
                {
                    x: 4280,
                    z: -4744,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 8
                {
                    x: 3960,
                    z: -2264,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 9
                {
                    x: 2952,
                    z: 344,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 10
                {
                    x: 696,
                    z: 1928,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 11
                {
                    x: -504,
                    z: 4248,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 12
                {
                    x: -824,
                    z: -856,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 13
                {
                    x: -3336,
                    z: -5400,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 14
                {
                    x: -3560,
                    z: 1864,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 15
                {
                    x: -4376,
                    z: 3144,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 16
                {
                    x: -4536,
                    z: 3496,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 17
                {
                    x: -5048,
                    z: -2120,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 18
                {
                    x: -5832,
                    z: 4568,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 19
                {
                    x: -5864,
                    z: -3608,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 20
                {
                    x: -6008,
                    z: -4824,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 21
                {
                    x: -6040,
                    z: 408,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Pillager 22
                {
                    x: -6056,
                    z: -5864,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        // Swamp Hut
			// Swamp Hut 1
                {
                    x: -5000,
                    z: 2856,
                    image: "playerimages/WitchFace.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        // Woodland Mansion
    // do not delete the following two closing brackets
    ]
};
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
    // Structure
        // Desert Pyramid
            // Pyramid 1
                {
                    x: -3576,
                    z: -2744,
                    image: "playerimages/Desert_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pyramid 2
                {
                    x: 2216,
                    z: 3592,
                    image: "playerimages/Desert_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pyramid 3
                {
                    x: -5976,
                    z: 4328,
                    image: "playerimages/Desert_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        // Desert Well
            // Desert Well 1
                {
                    x: 3347,
                    z: -2979,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Desert Well 2
                {
                    x: 3246,
                    z: -2606,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Desert Well 3
                {
                    x: -3476,
                    z: -1589,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Desert Well 4
                {
                    x: 776,
                    z: 2906,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Desert Well 5
                {
                    x: 793,
                    z: 2915,
                    image: "playerimages/Desert_Well.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        // Jungle Pyramid
            // Jungle 1
                {
                    x: 4152,
                    z: -5864,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 2
                {
                    x: 3736,
                    z: -5880,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 3
                {
                    x: 4888,
                    z: -4834,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 4
                {
                    x: -4296,
                    z: -1816,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 5
                {
                    x: -4232,
                    z: -1320,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 6
                {
                    x: -824,
                    z: 2408,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 7
                {
                    x: -744,
                    z: 2872,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 8
                {
                    x: -392,
                    z: 3624,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 9
                {
                    x: 3592,
                    z: 4376,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Jungle 10
                {
                    x: 4776,
                    z: 2680,
                    image: "playerimages/Jungle_Pyramid.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
    // do not delete the following two closing brackets
    ]
};


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
                    x: 5556,
                    z: 1236,
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
                    x: 5556,
                    z: 1236,
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
    // do not delete the following two closing brackets
    ]
};
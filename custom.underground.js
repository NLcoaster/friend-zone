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
			// Trail Ruin 1
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 2
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 3
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 4
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 5
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 6
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 7
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 8
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 9
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 10
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 11
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 12
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 13
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 14
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 15
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 16
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 17
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 18
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 19
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 20
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 21
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 22
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 23
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 24
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 25
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 26
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 27
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 28
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 29
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },						
			// Trail Ruin 30
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 31
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 32
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 33
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 34
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 35
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 36
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 37
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 38
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 39
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 40
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 41
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 42
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 43
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 44
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 45
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 46
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 47
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 48
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 49
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 50
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 51
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 52
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 53
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 54
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 55
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 56
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 57
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 58
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 59
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 60
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 61
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 62
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 63
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 64
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 65
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 66
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 67
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 68
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 69
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 70
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },			
			// Trail Ruin 71
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 72
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 73
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 74
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 75
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 76
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 77
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 78
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 79
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 80
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 81
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 82
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 83
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 84
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 85
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 86
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 87
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 88
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 89
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 90
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 91
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 92
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 93
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 94
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 95
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 96
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 97
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 98
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 99
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 100
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 101
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 102
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 103
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 104
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 105
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 106
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 107
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 108
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 109
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 110
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 111
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 112
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 113
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 114
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 115
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 116
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 117
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 118
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 119
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 120
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 121
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 122
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 123
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 124
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 125
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 126
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 127
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 128
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 129
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 130
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 131
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 132
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 133
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 134
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 135
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 136
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 137
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 138
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 139
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 140
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 141
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 142
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 143
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 144
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 145
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 146
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 147
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 148
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 149
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 150
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 151
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 152
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 153
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 154
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 155
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 156
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 157
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 158
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 159
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 160
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 161
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 162
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 163
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 164
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 165
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 166
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 167
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 168
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 169
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 170
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 171
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 172
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 173
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 174
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 175
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 176
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 177
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 178
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 179
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 180
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 181
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 182
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 183
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 184
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 185
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 186
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 187
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 188
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 189
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 190
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 191
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 192
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 193
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 194
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 195
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 196
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 197
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 198
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 199
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 200
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 201
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 202
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 203
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 204
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 205
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 206
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 207
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 208
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 209
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 210
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 211
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 212
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 213
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 214
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 215
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 216
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 217
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 218
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 219
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 220
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 221
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 222
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 223
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 224
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 225
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 226
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 227
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 228
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 229
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },						
			// Trail Ruin 230
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 231
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 232
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 233
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 234
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 235
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 236
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 237
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 238
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 239
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 240
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 241
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 242
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 243
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 244
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 245
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 246
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 247
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 248
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 249
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 250
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 251
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 252
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 253
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 254
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 255
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 256
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 257
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 258
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 259
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 260
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 261
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 262
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 263
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 264
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 265
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 266
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 267
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 268
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 269
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 270
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },			
			// Trail Ruin 271
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 272
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 273
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 274
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 275
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 276
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 277
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 278
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 279
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 280
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 281
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 282
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 283
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 284
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 285
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 286
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 287
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 288
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 289
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 290
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 291
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 292
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 293
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 294
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 295
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 296
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 297
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 298
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 299
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 300
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 301
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 302
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 303
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 304
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 305
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 306
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 307
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 308
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 309
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 310
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 311
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 312
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 313
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 314
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 315
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 316
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 317
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 318
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 319
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 320
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 321
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 322
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 323
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 324
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 325
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 326
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 327
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 328
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 329
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 330
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 331
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 332
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 333
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 334
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 335
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 336
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 337
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 338
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 339
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 340
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 341
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 342
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 343
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 344
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 345
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 346
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 347
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 348
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 349
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 350
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 351
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 352
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 353
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 354
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 355
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 356
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 357
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 358
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 359
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 360
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 361
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 362
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 363
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 364
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 365
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 366
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 367
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 368
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 369
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 370
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 371
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 372
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 373
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 374
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 375
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 376
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 377
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 378
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 379
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 380
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 381
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 382
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 383
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 384
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 385
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 386
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 387
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 388
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 389
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 390
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 391
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 392
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 393
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 394
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },	
			// Trail Ruin 395
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 396
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 397
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 398
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 399
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 400
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 401
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 402
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 403
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 404
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 405
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 406
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 407
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 408
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 409
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 410
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 411
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 412
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 413
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 414
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 415
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 416
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 417
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 418
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 419
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 420
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 421
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 422
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 423
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 424
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 425
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 426
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 427
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 428
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 429
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },						
			// Trail Ruin 430
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 431
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 432
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 433
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 434
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 435
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 436
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 437
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 438
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 439
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 440
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 441
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 442
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 443
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 444
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 445
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 446
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },					
			// Trail Ruin 447
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 448
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 449
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 450
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 451
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 452
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 453
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 454
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 455
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 456
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 457
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 458
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 459
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 460
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 461
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 462
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 463
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 464
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 465
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 466
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 467
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 468
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 469
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			// Trail Ruin 470
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },			
			// Trail Ruin 471
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 472
                {
                    x: 5556,
                    z: 1236,
                    image: "playerimages/Trial_Chamber.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },		
			// Trail Ruin 473
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
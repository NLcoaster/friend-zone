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
                },
    // do not delete the following two closing brackets
    ]
};
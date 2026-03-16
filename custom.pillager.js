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
                    x: -824,
                    z: -856,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pillager 2
                {
                    x: -5048,
                    z: -2120,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pillager 3
                {
                    x: -5864,
                    z: -3608,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
            // Pillager 4
                {
                    x: -4536,
                    z: -3496,
                    image: "playerimages/Pillager_Outpost.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
        // Swamp Hut
        // Woodland Mansion
		// Zombie Village
			//Zombie Village 1
                {
                    x: -952,
                    z: -4184,
                    image: "playerimages/ZombieVillagerFace.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Zombie Village 2
                {
                    x: -3992,
                    z: -1592,
                    image: "playerimages/ZombieVillagerFace.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Zombie Village 3
                {
                    x: -5048,
                    z: -280,
                    image: "playerimages/ZombieVillagerFace.pngg",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                },
			//Zombie Village 4
                {
                    x: -296,
                    z: -2296,
                    image: "playerimages/ZombieVillagerFace.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.3,
                }
    // do not delete the following two closing brackets
    ]
};
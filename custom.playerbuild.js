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
UnminedCustomPlayerbuild = {
    isEnabled: true,

    playerbuild: [
    //add your markers here
        //utilities
            //Map room 1
                {
                    x: -33,
                    z: -174,
                    image: "playerimages/world.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.25,
                    text: "Map Room",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //Map room 2
                {
                    x: -1495,
                    z: 352,
                    image: "playerimages/world.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.25,
                    text: "Map Room",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //library 1
                {
                    x: -70,
                    z: -138,
                    image: "playerimages/book enchanted.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.25,
                    text: "Library",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
        //station's
            //station Green keep
                {
                    x: -1916,
                    z: -1384,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station 26
                {
                    x: -1550,
                    z: -1206,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station 26",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station pilager tower
                {
                    x: -841,
                    z: -828,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station ",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station 12
                {
                    x: -331,
                    z: -923,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station 12",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station chery
                {
                    x: -101,
                    z: -706,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station chery",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station spawn
                {
                    x: -5,
                    z: -426,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station 3
                {
                    x: -1104,
                    z: -305,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station 3",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station 10
                {
                    x: -1479,
                    z: 423,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station 10",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station 11
                {
                    x: -1910,
                    z: 194,
                    image: "playerimages/riding.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "station 11",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 10px Calibri,sans serif",
                },
            //station 5
                {
                    x: -2140,
                    z: -501,
                    image: "playerimages/riding.png",
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
                    image: "playerimages/Red_Bed_2D.png",
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
                    image: "playerimages/item.png",
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
                    image: "playerimages/item.png",
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
                    image: "playerimages/item.png",
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
                    image: "playerimages/item.png",
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
                    image: "playerimages/item.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "Daarook's Hut",
                    textColor: "yellow",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 20px Calibri,sans serif",
                },
            //Green Keep
                {
                    x: -2000,
                    z: -1509,
                    image: "playerimages/item.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "Green Keep",
                    textColor: "yellow",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 20px Calibri,sans serif",
                },
            //copper harbor
                {
                    x: -2144,
                    z: -1300,
                    text: "Copper Harbor",
                    textColor: "black",
                    offsetX: 0,
                    offsetY: 0,
                    font: "bold 12px Calibri,sans serif",
                },
        // quests
            //prison
                {
                    x: -716,
                    z: 362,
                    image: "playerimages/quest.png",
                    imageAnchor: [0.5, 1],
                    imageScale: 0.5,
                    text: "Prison",
                    textColor: "cyan",
                    offsetX: 0,
                    offsetY: 20,
                    font: "bold 20px Calibri,sans serif",
                },
    // do not delete the following two closing brackets
    ]
};


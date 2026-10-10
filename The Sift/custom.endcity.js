UnminedCustomEndcity = {
    isEnabled: true,

    Endcity: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const end_cityCoords = [
            // End City 1
            [ 2968,    40],
            // End City 2
            [ 2648, -2792],
            // End City 3
            [ 2648,  1944],
            // End City 4
            [ 2632, -1512],
            // End City 5
            [ 2632,  -552],
            // End City 6
            [ 2632,  2648],
            // End City 7
            [ 2296, -2760],
            // End City 8
            [ 2296,  1336],
            // End City 9
            [ 1656,  1368],
            // End City 10
            [ 1640,   760],
            // End City 11
            [ 1384, -1880],
            // End City 12
            [ 1000,  2024],
            // End City 13
            [  728,  1000],
            // End City 14
            [  712, -2184],
            // End City 15
            [  696, -1496],
            // End City 16
            [  680,  1656],
            // End City 17
            [  440,  1000],
            // End City 18
            [ -248,  1688],
            // End City 19
            [ -264,  2648],
            // End City 20
            [ -520, -1576],
            // End City 21
            [ -584, -2504],
            // End City 22
            [ -584,  2328],
            // End City 23
            [ -632, -1224],
            // End City 24
            [ -840,  2632],
            // End City 25
            [ -872,  1704],
            // End City 26
            [-1192,  -904],
            // End City 27
            [-1192,  -232],
            // End City 28
            [-1224, -2520],
            // End City 29
            [-1480,  2296],
            // End City 30
            [-1496,  1672],
            // End City 31
            [-1496,   376],
            // End City 32
            [-1528,  1992],
            // End City 33
            [-1832,  -584],
            // End City 34
            [-1864, -2504],
            // End City 35
            [-2152,   680],
            // End City 36
            [-2168, -2808],
            // End City 37
            [-2168,  2008],
            // End City 38
            [-2168,   984],
            // End City 39
            [-2504, -1816],
            // End City 40
            [-2504,   696],
            // End City 41
            [-2520,  -872],
            // End City 42
            [-2520,  2344],
            // End City 43
            [-2776, -2504],
            // End City 44
            [-2776,  1064],
        ];

        return [
            ...end_cityCoords.map(toMarker('../playerimages/End_City.png', 0.3)),
        ];
    })()
};

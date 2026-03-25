UnminedCustomPillager = {
    isEnabled: true,

    pillager: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const pillager_outpostCoords = [
            // Pillager 1
            [5656, 3016],
            // Pillager 2
            [5640, -2136],
            // Pillager 3
            [-5528, 584],
            // Pillager 4
            [5192, -4824],
            // Pillager 5
            [4408, -456],
            // Pillager 6
            [4392, -568],
            // Pillager 7
            [4280, -4744],
            // Pillager 8
            [3960, -2264],
            // Pillager 9
            [2952, 344],
            // Pillager 10
            [696, 1928],
            // Pillager 11
            [-504, 4248],
            // Pillager 12
            [-824, -856],
            // Pillager 13
            [-3336, -5400],
            // Pillager 14
            [-3560, 1864],
            // Pillager 15
            [-4376, 3144],
            // Pillager 16
            [-4536, 3496],
            // Pillager 17
            [-5048, -2120],
            // Pillager 18
            [-5832, 4568],
            // Pillager 19
            [-5864, -3608],
            // Pillager 20
            [-6008, -4824],
            // Pillager 21
            [-6040, 408],
            // Pillager 22
            [-6056, -5864],
        ];

        const witchfaceCoords = [
            // Swamp Hut 1
            [-5000, 2856],
        ];

        return [
            ...pillager_outpostCoords.map(toMarker('playerimages/Pillager_Outpost.png', 0.3)),
            ...witchfaceCoords.map(toMarker('playerimages/WitchFace.png', 0.3)),
        ];
    })()
};

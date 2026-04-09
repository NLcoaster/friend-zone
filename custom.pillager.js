UnminedCustomPillager = {
    isEnabled: true,

    getByType: () => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const pillager_outpostCoords = [
            // Pillager Outpost 1
            [5656, 3016],
            // Pillager Outpost 2
            [5640, -2136],
            // Pillager Outpost 3
            [-5528, 584],
            // Pillager Outpost 4
            [5192, -4824],
            // Pillager Outpost 5
            [4408, -456],
            // Pillager Outpost 6
            [4392, -568],
            // Pillager Outpost 7
            [4280, -4744],
            // Pillager Outpost 8
            [3960, -2264],
            // Pillager Outpost 9
            [2952, 344],
            // Pillager Outpost 10
            [696, 1928],
            // Pillager Outpost 11
            [-504, 4248],
            // Pillager Outpost 12
            [-824, -856],
            // Pillager Outpost 13
            [-3336, -5400],
            // Pillager Outpost 14
            [-3560, 1864],
            // Pillager Outpost 15
            [-4376, 3144],
            // Pillager Outpost 16
            [-4536, 3496],
            // Pillager Outpost 17
            [-5048, -2120],
            // Pillager Outpost 18
            [-5832, 4568],
            // Pillager Outpost 19
            [-5864, -3608],
            // Pillager Outpost 20
            [-6008, -4824],
            // Pillager Outpost 21
            [-6040, 408],
            // Pillager Outpost 22
            [-6056, -5864],
        ];

        const witchfaceCoords = [
            // Witch Hut 1
            [-5000, 2856],
        ];

        return {
            pillager_outpost: pillager_outpostCoords.map(toMarker('playerimages/Pillager_Outpost.png', 0.3)),
            witch_hut:        witchfaceCoords.map(toMarker('playerimages/WitchFace.png', 0.3)),
        };
    }
};

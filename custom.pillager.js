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
            [5656, 3016], [5640, -2136], [-5528, 584], [5192, -4824],
            [4408, -456], [4392, -568], [4280, -4744], [3960, -2264],
            [2952, 344], [696, 1928], [-504, 4248], [-824, -856],
            [-3336, -5400], [-3560, 1864], [-4376, 3144], [-4536, 3496],
            [-5048, -2120], [-5832, 4568], [-5864, -3608], [-6008, -4824],
            [-6040, 408], [-6056, -5864],
        ];

        const witchfaceCoords = [
            [-5000, 2856],
        ];

        return {
            pillager_outpost: pillager_outpostCoords.map(toMarker('playerimages/Pillager_Outpost.png', 0.3)),
            witch_hut:        witchfaceCoords.map(toMarker('playerimages/WitchFace.png', 0.3)),
        };
    }
};

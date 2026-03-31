UnminedCustomNetherFortress = {
    isEnabled: true,

    Nether Fortress: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const Nether_FortressCoords = [
            // broken portal 1
            [126, -429],
            // broken portal 2
            [-1722, -444],
            // broken portal 3
            [-1063, -940],
        ];

        return [
            ...Nether_FortressCoords.map(toMarker('playerimages/Fortress.png', 0.3)),
        ];
    })()
};

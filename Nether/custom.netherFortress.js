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
            // nether fortress 1
            [126, -429],
        ];

        return [
            ...Nether_FortressCoords.map(toMarker('playerimages/Fortress.png', 0.3)),
        ];
    })()
};

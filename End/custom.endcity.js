UnminedCustomPortals = {
    isEnabled: true,

    portals: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const nether_portalCoords = [
            // portal nether 1
            [-46, -77],
            // portal nether 2
            [-1566, 424],
        ];

        const ruined_portalCoords = [
            // broken portal 1
            [126, -429],
            // broken portal 2
            [-1722, -444],
            // broken portal 3
            [-1063, -940],
        ];

        const end_portalCoords = [
            // portal end 1
            [-52, -78],
        ];

        return [
            ...nether_portalCoords.map(toMarker('playerimages/Nether_Portal.png', 0.3)),
            ...ruined_portalCoords.map(toMarker('playerimages/Ruined_Portal.png', 0.3)),
            ...end_portalCoords.map(toMarker('playerimages/End_Portal.png', 0.3)),
        ];
    })()
};

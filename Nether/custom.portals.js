UnminedCustomPortals = {
    isEnabled: true,

    Ruined Portals: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const ruined_portalCoords = [
            // broken portal 1
            [126, -429],
            // broken portal 2
            [-1722, -444],
            // broken portal 3
            [-1063, -940],
        ];

        return [
            ...ruined_portalCoords.map(toMarker('playerimages/Ruined_Portal.png', 0.3)),
        ];
    })()
};

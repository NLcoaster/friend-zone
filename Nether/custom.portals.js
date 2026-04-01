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
            // Ruined portal 1
            [126, -429],
        ];

        return [
            ...ruined_portalCoords.map(toMarker('playerimages/Ruined_Portal.png', 0.3)),
        ];
    })()
};

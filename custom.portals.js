UnminedCustomPortals = {
    isEnabled: true,

    getByType: () => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const nether_portalCoords = [
            [-46, -77],
            [-1566, 424],
        ];

        const ruined_portalCoords = [
            [126, -429],
            [-1722, -444],
            [-1063, -940],
        ];

        const end_portalCoords = [
            [-52, -78],
        ];

        return {
            nether_portal: nether_portalCoords.map(toMarker('playerimages/Nether_Portal.png', 0.3)),
            ruined_portal: ruined_portalCoords.map(toMarker('playerimages/Ruined_Portal.png', 0.3)),
            end_portal:    end_portalCoords.map(toMarker('playerimages/End_Portal.png', 0.3)),
        };
    }
};

UnminedCustombastion = {
    isEnabled: true,

    Bastion: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const bastionCoords = [
            // bastion 1
            [126, -429],
        ];

        return [
            ...bastionCoords.map(toMarker('playerimages/bastion.png', 0.3)),
        ];
    })()
};

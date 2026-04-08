UnminedCustomEndcity = {
    isEnabled: true,

    Endcity: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const end_cityCoords = [
            // End City 1
            [-46, -77],
            // portal nether 2
            [-1566, 424],
        ];

        return [
            ...end_cityCoordsCoords.map(toMarker('playerimages/end_city.png', 0.3)),
        ];
    })()
};

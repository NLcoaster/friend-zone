UnminedCustomPortals = {
    isEnabled: true,

    portals: (() => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const end_gatewayCoords = [
            // End Gateway 1
            [ 2977, -2394],
            // End Gateway 2
            [ 2866,  1515],
            // End Gateway 3
            [ 2685,  1543],
            // End Gateway 4
            [ 2681,  1856],
            // End Gateway 5
            [ 2629, -1476],
            // End Gateway 6
            [ 2019,  2210],
            // End Gateway 7
            [ 1985, -1735],
            // End Gateway 8
            [ 1762,  2539],
            // End Gateway 9
            [ 1653,   943],
            // End Gateway 10
            [ 1528,  2076],
            // End Gateway 11
            [ 1457, -1808],
            // End Gateway 12
            [ 1323,  -642],
            // End Gateway 13
            [  563,  2556],
            // End Gateway 14
            [  500,  2296],
            // End Gateway 15
            [  493, -1092],
            // End Gateway 16
            [  -87,  1847],
            // End Gateway 17
            [ -257, -1559],
            // End Gateway 18
            [ -502, -2787],
            // End Gateway 19
            [ -658,  2125],
            // End Gateway 20
            [ -660, -1621],
            // End Gateway 21
            [ -662, -1109],
            // End Gateway 22
            [ -679, -1627],
            // End Gateway 23
            [ -772,   823],
            // End Gateway 24
            [ -894, -1417],
            // End Gateway 25
            [-1146,  -118],
            // End Gateway 26
            [-1182, -2342],
            // End Gateway 27
            [-1678, -2529],
            // End Gateway 28
            [-1739,   456],
        ];

        return [
            ...end_gatewayCoords.map(toMarker('../playerimages/End_Gateway.png', 0.3)),
        ];
    })()
};

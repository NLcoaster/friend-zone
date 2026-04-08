UnminedCustomVillages = {
    isEnabled: true,

// geeft een object terug met een aparte markers-array per subtype
    getByType: () => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const iglooCoords = [
            // igloo 1
            [-200, -1176],
            // igloo 2
            [-456, -968],
            // igloo 3
            [2760, -824],
            // igloo 4
            [3160, 40],
            // igloo 5
            [4360, -1336],
            // igloo 6
            [4360, -232],
            // igloo 7
            [4472, 216],
            // igloo 8
            [4760, -1720],
            // igloo 9
            [4808, 840],
            // igloo 10
            [5144, -1896],
            // igloo 11
            [-3272, 4952],
            // igloo 12
            [-3032, 5176],
            // igloo 13
            [-3432, 5816],
            // igloo 14
            [-3768, 5832],
            // igloo 15
            [-4232, 5848],
        ];

        const igloo_with_basementCoords = [
            // igloo with basement 1
            [2216, -840],
            // igloo with basement 2
            [2264, -136],
            // igloo with basement 3
            [2280, -152],
            // igloo with basement 4
            [3192, -456],
            // igloo with basement 5
            [3240, -952],
            // igloo with basement 6
            [3800, -1336],
            // igloo with basement 7
            [4120, -648],
            // igloo with basement 8
            [4648, -2248],
            // igloo with basement 9
            [4808, -488],
            // igloo with basement 10
            [4696, 312],
            // igloo with basement 11
            [5192, -2392],
            // igloo with basement 12
            [5944, -2504],
            // igloo with basement 13
            [-3736, 4968],
            // igloo with basement 14
            [-3512, 5432],
        ];

        const villagerfaceCoords = [
            // village 1
            [6120, -5240],
            // village 2
            [6040, -4600],
            // village 3
            [5784, -3560],
            // village 4
            [5656, -2168],
            // village 5
            [5624, 2872],
            // village 6
            [5592, 296],
            // village 7
            [5576, -2040],
            // village 8
            [5576, 1272],
            // village 9
            [5560, 4712],
            // village 10
            [5272, 4616],
            // village 11
            [5112, -4552],
            // village 12
            [5096, 4120],
            // village 13
            [5064, -1960],
            // village 14
            [5048, -184],
            // village 15
            [5016, -2456],
            // village 16
            [5000, 616],
            // village 17
            [4968, -3624],
            // village 18
            [4680, -1432],
            // village 19
            [4632, -5608],
            // village 20
            [4632, -3096],
            // village 21
            [4536, 664],
            // village 22
            [4488, 248],
            // village 23
            [4472, -1992],
            // village 24
            [4456, -2488],
            // village 25
            [4440, 4104],
            // village 26
            [4184, 200],
            // village 27
            [4136, 1288],
            // village 28
            [4024, -984],
            // village 29
            [4008, 648],
            // village 30
            [3976, -4136],
            // village 31
            [3960, -2152],
            // village 32
            [3944, 4984],
            // village 33
            [3880, -328],
            // village 34
            [3480, -5944],
            // village 35
            [3480, -456],
            // village 36
            [3432, -1416],
            // village 37
            [3352, 232],
            // village 38
            [3000, 2504],
            // village 39
            [2984, 136],
            // village 40
            [2952, 4552],
            // village 41
            [2936, -2984],
            // village 42
            [2776, -424],
            // village 43
            [2520, -3096],
            // village 44
            [2504, -392],
            // village 45
            [2424, 4040],
            // village 46
            [2392, -856],
            // village 47
            [2376, -1416],
            // village 48
            [2360, -3656],
            // village 49
            [2344, 40],
            // village 50
            [1832, -3112],
            // village 51
            [1768, -5160],
            // village 52
            [936, -5752],
            // village 53
            [792, 2968],
            // village 54
            [792, 6056],
            // village 55
            [776, 3560],
            // village 56
            [744, 2360],
            // village 57
            [712, 1944],
            // village 58
            [296, 4008],
            // village 59
            [232, 2456],
            // village 60
            [200, 4408],
            // village 61
            [-200, -4648],
            // village 62
            [-296, -2888],
            // village 63
            [-392, -968],
            // village 64
            [-936, 1816],
            // village 65
            [-1016, -1944],
            // village 66
            [-1352, -2088],
            // village 67
            [-1432, 1912],
            // village 68
            [-1544, -1256],
            // village 69
            [-1560, -4168],
            // village 70
            [-1896, 344],
            // village 71
            [-1896, 5784],
            // village 72
            [-2008, -4744],
            // village 73
            [-2392, -1896],
            // village 74
            [-2520, -4728],
            // village 75
            [-2520, -2440],
            // village 76
            [-2616, 4008],
            // village 77
            [-2920, 6040],
            // village 78
            [-3064, 5016],
            // village 79
            [-3240, -2584],
            // village 80
            [-3496, 2440],
            // village 81
            [-3576, 5544],
            // village 82
            [-3624, 1432],
            // village 83
            [-3720, 4920],
            // village 84
            [-3752, -5128],
            // village 85
            [-3768, 1848],
            // village 86
            [-3976, -2536],
            // village 87
            [-4136, -3032],
            // village 88
            [-4184, 5256],
            // village 89
            [-4248, 5656],
            // village 90
            [-4264, 2952],
            // village 91
            [-4344, -3528],
            // village 92
            [-4520, 5512],
            // village 93
            [-4600, 4632],
            // village 94
            [-4600, -312],
            // village 95
            [-4696, 3832],
            // village 96
            [-4728, 2760],
            // village 97
            [-4792, 3512],
            // village 98
            [-4808, 216],
            // village 99
            [-5064, 1352],
            // village 100
            [-5144, 3944],
            // village 101
            [-5208, 5016],
            // village 102
            [-5208, -5832],
            // village 103
            [-5224, -360],
            // village 104
            [-5288, -4120],
            // village 105
            [-5704, 4056],
            // village 106
            [-5736, 2920],
            // village 107
            [-5736, -1272],
            // village 108
            [-5752, 632],
            // village 109
            [-5960, 3336],
        ];

        const zombievillagerfaceCoords = [
            // Zombie Village 1
            [-952, -4184],
            // Zombie Village 2
            [-3992, -1592],
            // Zombie Village 3
            [-5048, -280],
            // Zombie Village 4
            [-296, -2296],
        ];

        return {
            igloo:        iglooCoords.map(toMarker('playerimages/igloo.png', 0.3)),
            iglooBasement: igloo_with_basementCoords.map(toMarker('playerimages/igloo with basement.png', 0.3)),
            village:      villagerfaceCoords.map(toMarker('playerimages/VillagerFace.png', 0.3)),
            zombieVillage: zombievillagerfaceCoords.map(toMarker('playerimages/ZombieVillagerFace.png', 0.3)),
        };
    }
};

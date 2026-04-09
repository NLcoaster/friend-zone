UnminedCustomShipwrecks = {
    isEnabled: true,

    getByType: () => {
        const toMarker = (image) => ([x, z]) => ({
            x, z,
            image: `playerimages/${image}`,
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
        });

        const shipwreckCoords = [
            // Shipwreck 1
            [6008, 5960],
            // Shipwreck 2
            [5944, -456],
            // Shipwreck 3
            [5896, 2168],
            // Shipwreck 4
            [5832, 5096],
            // Shipwreck 5
            [5800, 1256],
            // Shipwreck 6
            [5800, -152],
            // Shipwreck 7
            [5688, 5144],
            // Shipwreck 8
            [5672, 4328],
            // Shipwreck 9
            [5656, 5592],
            // Shipwreck 10
            [5608, 2072],
            // Shipwreck 11
            [5528, 1368],
            // Shipwreck 12
            [5416, -360],
            // Shipwreck 13
            [5384, 584],
            // Shipwreck 14
            [5096, -1000],
            // Shipwreck 15
            [5032, 1992],
            // Shipwreck 16
            [4744, 1672],
            // Shipwreck 17
            [4008, 2408],
            // Shipwreck 18
            [3960, 1848],
            // Shipwreck 19
            [3928, 3672],
            // Shipwreck 20
            [3912, 1976],
            // Shipwreck 21
            [3768, 4616],
            // Shipwreck 22
            [3720, 1432],
            // Shipwreck 23
            [3688, 2744],
            // Shipwreck 24
            [3656, 5640],
            // Shipwreck 25
            [3608, -4600],
            // Shipwreck 26
            [3560, 2600],
            // Shipwreck 27
            [3560, 1928],
            // Shipwreck 28
            [3560, -4200],
            // Shipwreck 29
            [3528, 1560],
            // Shipwreck 30
            [3528, -5576],
            // Shipwreck 31
            [3512, -2824],
            // Shipwreck 32
            [3480, 3368],
            // Shipwreck 33
            [3336, 5768],
            // Shipwreck 34
            [3320, 2808],
            // Shipwreck 35
            [3288, 2152],
            // Shipwreck 36
            [3272, 3112],
            // Shipwreck 37
            [3224, -2184],
            // Shipwreck 38
            [3208, 1352],
            // Shipwreck 39
            [3144, 4536],
            // Shipwreck 40
            [3144, 4040],
            // Shipwreck 41
            [3112, 4696],
            // Shipwreck 42
            [3096, -4728],
            // Shipwreck 43
            [3000, 5544],
            // Shipwreck 44
            [2968, 2760],
            // Shipwreck 45
            [2888, -1992],
            // Shipwreck 46
            [2888, -4904],
            // Shipwreck 47
            [2840, 3320],
            // Shipwreck 48
            [2808, 5880],
            // Shipwreck 49
            [2808, 1656],
            // Shipwreck 50
            [2776, 3544],
            // Shipwreck 51
            [2744, 3848],
            // Shipwreck 52
            [2712, 2104],
            // Shipwreck 53
            [2712, -4584],
            // Shipwreck 54
            [2696, -1880],
            // Shipwreck 55
            [2616, -2392],
            // Shipwreck 56
            [2520, 5672],
            // Shipwreck 57
            [2488, 2872],
            // Shipwreck 58
            [2456, -5352],
            // Shipwreck 59
            [2408, 1752],
            // Shipwreck 60
            [2392, 1976],
            // Shipwreck 61
            [2376, -2008],
            // Shipwreck 62
            [2360, 3192],
            // Shipwreck 63
            [2360, -328],
            // Shipwreck 64
            [2360, -4952],
            // Shipwreck 65
            [2344, 3608],
            // Shipwreck 66
            [2328, 5016],
            // Shipwreck 67
            [2328, 2552],
            // Shipwreck 68
            [2312, 4760],
            // Shipwreck 69
            [2216, 2712],
            // Shipwreck 70
            [2168, 5896],
            // Shipwreck 71
            [2168, 3752],
            // Shipwreck 72
            [2152, -1352],
            // Shipwreck 73
            [2136, 3880],
            // Shipwreck 74
            [2088, -728],
            // Shipwreck 75
            [2072, -232],
            // Shipwreck 76
            [2024, 3128],
            // Shipwreck 77
            [2024, 2408],
            // Shipwreck 78
            [2024, 1704],
            // Shipwreck 79
            [1992, 2184],
            // Shipwreck 80
            [1960, 4888],
            // Shipwreck 81
            [1960, 1240],
            // Shipwreck 82
            [1960, -2392],
            // Shipwreck 83
            [1928, 5128],
            // Shipwreck 84
            [1848, 4536],
            // Shipwreck 85
            [1784, 4776],
            // Shipwreck 86
            [1784, 1784],
            // Shipwreck 87
            [1784, 1320],
            // Shipwreck 88
            [1784, -2168],
            // Shipwreck 89
            [1752, -2952],
            // Shipwreck 90
            [1720, -5096],
            // Shipwreck 91
            [1672, -1912],
            // Shipwreck 92
            [1656, 776],
            // Shipwreck 93
            [1640, 280],
            // Shipwreck 94
            [1592, -1480],
            // Shipwreck 95
            [1560, -712],
            // Shipwreck 96
            [1464, 1272],
            // Shipwreck 97
            [1432, -5224],
            // Shipwreck 98
            [1416, 4424],
            // Shipwreck 99
            [1400, 72],
            // Shipwreck 100
            [1400, -2040],
            // Shipwreck 101
            [1384, 440],
            // Shipwreck 102
            [1304, 5624],
            // Shipwreck 103
            [1304, -984],
            // Shipwreck 104
            [1304, -1400],
            // Shipwreck 105
            [1272, 5288],
            // Shipwreck 106
            [1256, 904],
            // Shipwreck 107
            [1256, -1848],
            // Shipwreck 108
            [1256, -2952],
            // Shipwreck 109
            [1256, -3304],
            // Shipwreck 110
            [1224, -680],
            // Shipwreck 111
            [1208, 4104],
            // Shipwreck 112
            [1064, 5128],
            // Shipwreck 113
            [1048, -1816],
            // Shipwreck 114
            [1032, 648],
            // Shipwreck 115
            [1000, 5400],
            // Shipwreck 116
            [1000, -1496],
            // Shipwreck 117
            [1000, -2552],
            // Shipwreck 118
            [968, -2120],
            // Shipwreck 119
            [936, 4472],
            // Shipwreck 120
            [936, -3288],
            // Shipwreck 121
            [920, 5816],
            // Shipwreck 122
            [904, -1032],
            // Shipwreck 123
            [888, -5160],
            // Shipwreck 124
            [872, -376],
            // Shipwreck 125
            [872, -456],
            // Shipwreck 126
            [664, -4360],
            // Shipwreck 127
            [648, -3192],
            // Shipwreck 128
            [536, 1208],
            // Shipwreck 129
            [504, 5560],
            // Shipwreck 130
            [504, 968],
            // Shipwreck 131
            [504, -712],
            // Shipwreck 132
            [504, -4904],
            // Shipwreck 133
            [456, -3560],
            // Shipwreck 134
            [440, -968],
            // Shipwreck 135
            [424, -1496],
            // Shipwreck 136
            [424, -1608],
            // Shipwreck 137
            [392, -248],
            // Shipwreck 138
            [392, -2536],
            // Shipwreck 139
            [392, -5464],
            // Shipwreck 140
            [280, 24],
            // Shipwreck 141
            [216, -3144],
            // Shipwreck 142
            [216, -6056],
            // Shipwreck 143
            [200, 1208],
            // Shipwreck 144
            [184, -920],
            // Shipwreck 145
            [168, 1080],
            // Shipwreck 146
            [168, -2632],
            // Shipwreck 147
            [168, -5192],
            // Shipwreck 148
            [152, -1640],
            // Shipwreck 149
            [152, -3736],
            // Shipwreck 150
            [136, 5288],
            // Shipwreck 151
            [104, 600],
            // Shipwreck 152
            [8, -2952],
            // Shipwreck 153
            [-104, 824],
            // Shipwreck 154
            [-104, -5912],
            // Shipwreck 155
            [-200, -3320],
            // Shipwreck 156
            [-248, -1784],
            // Shipwreck 157
            [-248, -2488],
            // Shipwreck 158
            [-280, -5560],
            // Shipwreck 159
            [-488, 808],
            // Shipwreck 160
            [-520, 1928],
            // Shipwreck 161
            [-520, 1352],
            // Shipwreck 162
            [-536, -2088],
            // Shipwreck 163
            [-664, 72],
            // Shipwreck 164
            [-744, -1752],
            // Shipwreck 165
            [-856, 5128],
            // Shipwreck 166
            [-888, 1688],
            // Shipwreck 167
            [-968, 1016],
            // Shipwreck 168
            [-1000, 4328],
            // Shipwreck 169
            [-1016, 6008],
            // Shipwreck 170
            [-1016, 5464],
            // Shipwreck 171
            [-1112, 4856],
            // Shipwreck 172
            [-1112, -3864],
            // Shipwreck 173
            [-1224, -4408],
            // Shipwreck 174
            [-1240, -1320],
            // Shipwreck 175
            [-1272, 3096],
            // Shipwreck 176
            [-1272, -4872],
            // Shipwreck 177
            [-1384, 3576],
            // Shipwreck 178
            [-1448, 4232],
            // Shipwreck 179
            [-1480, 5304],
            // Shipwreck 180
            [-1480, -2168],
            // Shipwreck 181
            [-1512, 3912],
            // Shipwreck 182
            [-1528, -165],
            // Shipwreck 183
            [-1640, 2920],
            // Shipwreck 184
            [-1672, -4376],
            // Shipwreck 185
            [-1704, 3128],
            // Shipwreck 186
            [-1720, 4296],
            // Shipwreck 187
            [-1768, 5656],
            // Shipwreck 188
            [-1768, 2328],
            // Shipwreck 189
            [-1768, -2152],
            // Shipwreck 190
            [-1784, -1672],
            // Shipwreck 191
            [-1832, -5736],
            // Shipwreck 192
            [-1880, 3944],
            // Shipwreck 193
            [-1912, -904],
            // Shipwreck 194
            [-1992, -3048],
            // Shipwreck 195
            [-2040, -5192],
            // Shipwreck 196
            [-2040, 2360],
            // Shipwreck 197
            [-2072, -3448],
            // Shipwreck 198
            [-2120, 4072],
            // Shipwreck 199
            [-2152, -5576],
            // Shipwreck 200
            [-2200, 4616],
            // Shipwreck 201
            [-2216, 1784],
            // Shipwreck 202
            [-2264, -376],
            // Shipwreck 203
            [-2280, 5656],
            // Shipwreck 204
            [-2280, 4296],
            // Shipwreck 205
            [-2296, -1704],
            // Shipwreck 206
            [-2392, 5064],
            // Shipwreck 207
            [-2424, -2024],
            // Shipwreck 208
            [-2440, -1640],
            // Shipwreck 209
            [-2504, -344],
            // Shipwreck 210
            [-2520, 4808],
            // Shipwreck 211
            [-2520, -3048],
            // Shipwreck 212
            [-2520, -4952],
            // Shipwreck 213
            [-2536, 2712],
            // Shipwreck 214
            [-2552, 1704],
            // Shipwreck 215
            [-2600, -5464],
            // Shipwreck 216
            [-2632, 2616],
            // Shipwreck 217
            [-2664, -2248],
            // Shipwreck 218
            [-2840, -5304],
            // Shipwreck 219
            [-2856, 3544],
            // Shipwreck 220
            [-2904, 2136],
            // Shipwreck 221
            [-2920, -2760],
            // Shipwreck 222
            [-3048, -3640],
            // Shipwreck 223
            [-3144, 3512],
            // Shipwreck 224
            [-3144, -3592],
            // Shipwreck 225
            [-3400, 2808],
            // Shipwreck 226
            [-3448, 3240],
            // Shipwreck 227
            [-3560, 2872],
            // Shipwreck 228
            [-3560, -472],
            // Shipwreck 229
            [-3576, -3736],
            // Shipwreck 230
            [-3624, 3944],
            // Shipwreck 231
            [3672, -3432],
            // Shipwreck 232
            [3688, 3256],
            // Shipwreck 233
            [-3768, 3528],
            // Shipwreck 234
            [-3992, -6024],
            // Shipwreck 235
            [4088, 3240],
            // Shipwreck 236
            [-4296, -5576],
            // Shipwreck 237
            [-4408, -1416],
            // Shipwreck 238
            [-4408, -5368],
            // Shipwreck 239
            [4424, -5928],
            // Shipwreck 240
            [4440, 2232],
            // Shipwreck 241
            [-4536, -2056],
            // Shipwreck 242
            [-4600, -984],
            // Shipwreck 243
            [-4712, 2136],
            // Shipwreck 244
            [-4760, -4168],
            // Shipwreck 245
            [-4792, -5624],
            // Shipwreck 246
            [-4872, -744],
            // Shipwreck 247
            [-4952, -4488],
            // Shipwreck 248
            [-4968, 5640],
            // Shipwreck 249
            [-5080, 5464],
            // Shipwreck 250
            [-5128, -5536],
            // Shipwreck 251
            [-5160, -3560],
            // Shipwreck 252
            [-5208, -2184],
            // Shipwreck 253
            [-5640, -5096],
            // Shipwreck 254
            [-5520, -632],
            // Shipwreck 255
            [-5752, 5768],
            // Shipwreck 256
            [-5752, -5944],
            // Shipwreck 257
            [-5896, 1384],
            // Shipwreck 258
            [-5912, -6040],
            // Shipwreck 259
            [-5992, -2120],
        ];

        const treasureCoords = [
            // Treasure 1
            [5976, -1912],
            // Treasure 2
            [5960, 5576],
            // Treasure 3
            [5960, 1032],
            // Treasure 4
            [5960, -1848],
            // Treasure 5
            [5912, 5960],
            // Treasure 6
            [5896, 5704],
            // Treasure 7
            [5896, 5640],
            // Treasure 8
            [5896, 5576],
            // Treasure 9
            [5896, 5512],
            // Treasure 10
            [5896, 2824],
            // Treasure 11
            [5848, 5704],
            // Treasure 12
            [5848, -1784],
            // Treasure 13
            [5832, 2696],
            // Treasure 14
            [5832, 1288],
            // Treasure 15
            [5832, -5496],
            // Treasure 16
            [5784, -5432],
            // Treasure 17
            [5768, 1736],
            // Treasure 18
            [5768, 1624],
            // Treasure 19
            [5768, 328],
            // Treasure 20
            [5768, 264],
            // Treasure 21
            [5720, 264],
            // Treasure 22
            [5704, 2584],
            // Treasure 23
            [5704, 1736],
            // Treasure 24
            [5704, 1608],
            // Treasure 25
            [5704, 1176],
            // Treasure 26
            [5704, 328],
            // Treasure 27
            [5656, 1608],
            // Treasure 28
            [5656, 392],
            // Treasure 29
            [5640, 4168],
            // Treasure 30
            [5640, 1736],
            // Treasure 31
            [5640, 1544],
            // Treasure 32
            [5640, 1160],
            // Treasure 33
            [5640, 584],
            // Treasure 34
            [5640, 520],
            // Treasure 35
            [5640, 264],
            // Treasure 36
            [5640, -1448],
            // Treasure 37
            [5592, 4168],
            // Treasure 38
            [5592, 520],
            // Treasure 39
            [5576, 5640],
            // Treasure 40
            [5576, 1672],
            // Treasure 41
            [5576, 584],
            // Treasure 42
            [5576, -1464],
            // Treasure 43
            [5528, 5592],
            // Treasure 44
            [5528, 456],
            // Treasure 45
            [5464, 2440],
            // Treasure 46
            [5464, 840],
            // Treasure 47
            [5448, 2376],
            // Treasure 48
            [5448, 328],
            // Treasure 49
            [5448, -1336],
            // Treasure 50
            [5400, -120],
            // Treasure 51
            [5384, 776],
            // Treasure 52
            [5320, 2312],
            // Treasure 53
            [5320, 280],
            // Treasure 54
            [5320, -168],
            // Treasure 55
            [5256, 1224],
            // Treasure 56
            [5256, 1176],
            // Treasure 57
            [5256, -1336],
            // Treasure 58
            [5208, 328],
            // Treasure 59
            [5192, -168],
            // Treasure 60
            [5192, -248],
            // Treasure 61
            [5128, 4376],
            // Treasure 62
            [5128, 4232],
            // Treasure 63
            [5128, 4184],
            // Treasure 64
            [5128, 3608],
            // Treasure 65
            [5128, 2376],
            // Treasure 66
            [5128, -1272],
            // Treasure 67
            [5080, 4296],
            // Treasure 68
            [5064, 4424],
            // Treasure 69
            [5064, 4376],
            // Treasure 70
            [5064, 3976],
            // Treasure 71
            [5064, 3928],
            // Treasure 72
            [5064, 3848],
            // Treasure 73
            [5064, 3592],
            // Treasure 74
            [5064, 1160],
            // Treasure 75
            [5064, 904],
            // Treasure 76
            [5016, 4232],
            // Treasure 77
            [5016, 3528],
            // Treasure 78
            [5000, -1400],
            // Treasure 79
            [4952, 3288],
            // Treasure 80
            [4952, 1288],
            // Treasure 81
            [4936, 5512],
            // Treasure 82
            [4936, 24],
            // Treasure 83
            [4888, 3784],
            // Treasure 84
            [4872, 5576],
            // Treasure 85
            [4872, 3848],
            // Treasure 86
            [4872, 1240],
            // Treasure 87
            [4872, -184],
            // Treasure 88
            [4824, 5592],
            // Treasure 89
            [4824, 1240],
            // Treasure 90
            [4808, 712],
            // Treasure 91
            [4760, 5656],
            // Treasure 92
            [4744, 5592],
            // Treasure 93
            [4744, -744],
            // Treasure 94
            [4696, 200],
            // Treasure 95
            [4680, 2440],
            // Treasure 96
            [4680, -5816],
            // Treasure 97
            [4632, -5864],
            // Treasure 98
            [4616, 3544],
            // Treasure 99
            [4616, 3336],
            // Treasure 100
            [4616, 136],
            // Treasure 101
            [4568, 5576],
            // Treasure 102
            [4552, 392],
            // Treasure 103
            [4552, 328],
            // Treasure 104
            [4552, 264],
            // Treasure 105
            [4552, -5496],
            // Treasure 106
            [4552, -5560],
            // Treasure 107
            [4552, -5944],
            // Treasure 108
            [4504, 5064],
            // Treasure 109
            [4504, 5000],
            // Treasure 110
            [4504, 3464],
            // Treasure 111
            [4504, -5816],
            // Treasure 112
            [4504, -5944],
            // Treasure 113
            [4488, 5512],
            // Treasure 114
            [4488, 4808],
            // Treasure 115
            [4488, 4744],
            // Treasure 116
            [4488, -5752],
            // Treasure 117
            [4488, -5880],
            // Treasure 118
            [4440, 5064],
            // Treasure 119
            [4424, 2376],
            // Treasure 120
            [4424, 2328],
            // Treasure 121
            [4424, -5560],
            // Treasure 122
            [4424, -5752],
            // Treasure 123
            [4424, -5880],
            // Treasure 124
            [4376, 5064],
            // Treasure 125
            [4376, -5560],
            // Treasure 126
            [4360, 5000],
            // Treasure 127
            [4360, 4760],
            // Treasure 128
            [4360, 2376],
            // Treasure 129
            [4360, 2328],
            // Treasure 130
            [4360, 1496],
            // Treasure 131
            [4360, -5624],
            // Treasure 132
            [4312, 2888],
            // Treasure 133
            [4296, 5512],
            // Treasure 134
            [4296, 4760],
            // Treasure 135
            [4296, 2840],
            // Treasure 136
            [4296, 2248],
            // Treasure 137
            [4296, 1496],
            // Treasure 138
            [4296, 1432],
            // Treasure 139
            [4248, 2248],
            // Treasure 140
            [4232, 4760],
            // Treasure 141
            [4232, 1480],
            // Treasure 142
            [4168, 2696],
            // Treasure 143
            [4168, 2312],
            // Treasure 144
            [4168, 2248],
            // Treasure 145
            [4168, 1416],
            // Treasure 146
            [4104, 5512],
            // Treasure 147
            [4104, 1432],
            // Treasure 148
            [4056, 5576],
            // Treasure 149
            [4056, -2552],
            // Treasure 150
            [4056, -2616],
            // Treasure 151
            [4056, -5432],
            // Treasure 152
            [4040, 5640],
            // Treasure 153
            [4040, 3400],
            // Treasure 154
            [4040, 1416],
            // Treasure 155
            [4040, -760],
            // Treasure 156
            [3992, -4664],
            // Treasure 157
            [3976, -2552],
            // Treasure 158
            [3976, -4280],
            // Treasure 159
            [3976, -5560],
            // Treasure 160
            [3928, 5000],
            // Treasure 161
            [3928, 4552],
            // Treasure 162
            [3928, 3976],
            // Treasure 163
            [3928, -2552],
            // Treasure 164
            [3912, 5576],
            // Treasure 165
            [3912, 3912],
            // Treasure 166
            [3912, -4216],
            // Treasure 167
            [3912, -5608],
            // Treasure 168
            [3864, 3912],
            // Treasure 169
            [3848, 4744],
            // Treasure 170
            [3848, 4440],
            // Treasure 171
            [3848, 3848],
            // Treasure 172
            [3848, -2680],
            // Treasure 173
            [3848, -4792],
            // Treasure 174
            [3800, 5592],
            // Treasure 175
            [3800, 5448],
            // Treasure 176
            [3800, 4488],
            // Treasure 177
            [3800, -5688],
            // Treasure 178
            [3784, 5656],
            // Treasure 179
            [3736, -2808],
            // Treasure 180
            [3720, 5960],
            // Treasure 181
            [3720, 5640],
            // Treasure 182
            [3720, 5448],
            // Treasure 183
            [3720, 4552],
            // Treasure 184
            [3720, 3848],
            // Treasure 185
            [3672, 5960],
            // Treasure 186
            [3672, -2296],
            // Treasure 187
            [3672, -2744],
            // Treasure 188
            [3656, 5912],
            // Treasure 189
            [3656, 5576],
            // Treasure 190
            [3656, 4680],
            // Treasure 191
            [3656, -824],
            // Treasure 192
            [3656, -2808],
            // Treasure 193
            [3656, -3064],
            // Treasure 194
            [3656, -3128],
            // Treasure 195
            [3656, -3176],
            // Treasure 196
            [3608, 5832],
            // Treasure 197
            [3592, 5784],
            // Treasure 198
            [3592, 4680],
            // Treasure 199
            [3592, 3912],
            // Treasure 200
            [3592, -2680],
            // Treasure 201
            [3592, -2744],
            // Treasure 202
            [3592, -2808],
            // Treasure 203
            [3592, -3000],
            // Treasure 204
            [3592, -3256],
            // Treasure 205
            [3592, -5688],
            // Treasure 206
            [3544, 3848],
            // Treasure 207
            [3544, -2296],
            // Treasure 208
            [3544, -5048],
            // Treasure 209
            [3528, 5832],
            // Treasure 210
            [3528, 4744],
            // Treasure 211
            [3528, 4680],
            // Treasure 212
            [3528, -2680],
            // Treasure 213
            [3528, -2744],
            // Treasure 214
            [3528, -3048],
            // Treasure 215
            [3528, -3112],
            // Treasure 216
            [3528, -3960],
            // Treasure 217
            [3480, 5848],
            // Treasure 218
            [3480, -2232],
            // Treasure 219
            [3480, -3048],
            // Treasure 220
            [3464, 4104],
            // Treasure 221
            [3464, 1096],
            // Treasure 222
            [3464, -824],
            // Treasure 223
            [3464, -3128],
            // Treasure 224
            [3416, -824],
            // Treasure 225
            [3400, -1080],
            // Treasure 226
            [3400, -1128],
            // Treasure 227
            [3400, -2168],
            // Treasure 228
            [3400, -5496],
            // Treasure 229
            [3352, -2040],
            // Treasure 230
            [3336, -888],
            // Treasure 231
            [3336, -952],
            // Treasure 232
            [3336, -1016],
            // Treasure 233
            [3336, -1912],
            // Treasure 234
            [3336, -4024],
            // Treasure 235
            [3288, -1832],
            // Treasure 236
            [3272, 2520],
            // Treasure 237
            [3272, 1112],
            // Treasure 238
            [3272, -296],
            // Treasure 239
            [3272, -1336],
            // Treasure 240
            [3272, -1464],
            // Treasure 241
            [3272, -2984],
            // Treasure 242
            [3224, -1272],
            // Treasure 243
            [3208, 5960],
            // Treasure 244
            [3208, -2920],
            // Treasure 245
            [3208, -3064],
            // Treasure 246
            [3160, 5896],
            // Treasure 247
            [3160, 4360],
            // Treasure 248
            [3160, 1096],
            // Treasure 249
            [3160, -2936],
            // Treasure 250
            [3160, -3048],
            // Treasure 251
            [3144, 4680],
            // Treasure 252
            [3144, 4552],
            // Treasure 253
            [3144, 4504],
            // Treasure 254
            [3144, 4424],
            // Treasure 255
            [3144, 904],
            // Treasure 256
            [3144, -1080],
            // Treasure 257
            [3144, -1144],
            // Treasure 258
            [3144, -4200],
            // Treasure 259
            [3096, 4440],
            // Treasure 260
            [3096, -888],
            // Treasure 261
            [3096, -2808],
            // Treasure 262
            [3080, 4824],
            // Treasure 263
            [3080, 4744],
            // Treasure 264
            [3080, -616],
            // Treasure 265
            [3080, -1016],
            // Treasure 266
            [3080, -2856],
            // Treasure 267
            [3080, -2920],
            // Treasure 268
            [3032, 5960],
            // Treasure 269
            [3016, 1288],
            // Treasure 270
            [3016, 840],
            // Treasure 271
            [3016, -760],
            // Treasure 272
            [3016, -888],
            // Treasure 273
            [3016, -952],
            // Treasure 274
            [3016, -1016],
            // Treasure 275
            [3016, -1144],
            // Treasure 276
            [3016, -2872],
            // Treasure 277
            [3016, -2920],
            // Treasure 278
            [3016, -5240],
            // Treasure 279
            [2968, 4872],
            // Treasure 280
            [2968, -1144],
            // Treasure 281
            [2952, 1288],
            // Treasure 282
            [2952, -376],
            // Treasure 283
            [2952, -888],
            // Treasure 284
            [2952, -2936],
            // Treasure 285
            [2952, -5176],
            // Treasure 286
            [2888, 4936],
            // Treasure 287
            [2888, 4824],
            // Treasure 288
            [2888, 1240],
            // Treasure 289
            [2888, -2360],
            // Treasure 290
            [2888, -2936],
            // Treasure 291
            [2888, -5112],
            // Treasure 292
            [2840, -3064],
            // Treasure 293
            [2840, -5368],
            // Treasure 294
            [2824, 4824],
            // Treasure 295
            [2824, 4552],
            // Treasure 296
            [2824, -376],
            // Treasure 297
            [2824, -2344],
            // Treasure 298
            [2824, -2424],
            // Treasure 299
            [2824, -2488],
            // Treasure 300
            [2824, -2936],
            // Treasure 301
            [2824, -3000],
            // Treasure 302
            [2824, -3128],
            // Treasure 303
            [2776, -2936],
            // Treasure 304
            [2760, -504],
            // Treasure 305
            [2760, -2360],
            // Treasure 306
            [2760, -2488],
            // Treasure 307
            [2760, -2552],
            // Treasure 308
            [2712, -376],
            // Treasure 309
            [2712, -2360],
            // Treasure 310
            [2712, -2424],
            // Treasure 311
            [2696, -568],
            // Treasure 312
            [2696, -744],
            // Treasure 313
            [2696, -1208],
            // Treasure 314
            [2696, -2488],
            // Treasure 315
            [2632, -2728],
            // Treasure 316
            [2632, -4664],
            // Treasure 317
            [2568, -184],
            // Treasure 318
            [2568, -2744],
            // Treasure 319
            [2568, -4600],
            // Treasure 320
            [2520, -2488],
            // Treasure 321
            [2504, -120],
            // Treasure 322
            [2504, -2680],
            // Treasure 323
            [2504, -2744],
            // Treasure 324
            [2456, -552],
            // Treasure 325
            [2456, -2664],
            // Treasure 326
            [2456, -5736],
            // Treasure 327
            [2440, 4680],
            // Treasure 328
            [2440, -5800],
            // Treasure 329
            [2392, -440],
            // Treasure 330
            [2392, -5752],
            // Treasure 331
            [2392, -5880],
            // Treasure 332
            [2376, 4680],
            // Treasure 333
            [2312, -1080],
            // Treasure 334
            [2312, -1144],
            // Treasure 335
            [2312, -2744],
            // Treasure 336
            [2312, -4728],
            // Treasure 337
            [2312, -5224],
            // Treasure 338
            [2312, -5736],
            // Treasure 339
            [2248, -760],
            // Treasure 340
            [2248, -1016],
            // Treasure 341
            [2248, -1960],
            // Treasure 342
            [2248, -5736],
            // Treasure 343
            [2200, -1000],
            // Treasure 344
            [2200, -5304],
            // Treasure 345
            [2184, 776],
            // Treasure 346
            [2184, 728],
            // Treasure 347
            [2184, 600],
            // Treasure 348
            [2184, -1848],
            // Treasure 349
            [2184, -5624],
            // Treasure 350
            [2184, -5928],
            // Treasure 351
            [2136, 1544],
            // Treasure 352
            [2136, -760],
            // Treasure 353
            [2136, -5688],
            // Treasure 354
            [2136, -5800],
            // Treasure 355
            [2136, -5880],
            // Treasure 356
            [2136, -5944],
            // Treasure 357
            [2120, -168],
            // Treasure 358
            [2120, -1768],
            // Treasure 359
            [2120, -2664],
            // Treasure 360
            [2120, -5624],
            // Treasure 361
            [2120, -5736],
            // Treasure 362
            [2072, -1784],
            // Treasure 363
            [2056, 1352],
            // Treasure 364
            [2056, -4920],
            // Treasure 365
            [2056, -5624],
            // Treasure 366
            [2056, -5944],
            // Treasure 367
            [2008, 1432],
            // Treasure 368
            [1992, 1352],
            // Treasure 369
            [1992, 8],
            // Treasure 370
            [1992, -4920],
            // Treasure 371
            [1928, 3336],
            // Treasure 372
            [1928, -4856],
            // Treasure 373
            [1864, 3080],
            // Treasure 374
            [1864, -1528],
            // Treasure 375
            [1864, -4840],
            // Treasure 376
            [1816, 2904],
            // Treasure 377
            [1800, 5640],
            // Treasure 378
            [1800, -3000],
            // Treasure 379
            [1800, -4856],
            // Treasure 380
            [1752, 3464],
            // Treasure 381
            [1752, 3400],
            // Treasure 382
            [1752, -5112],
            // Treasure 383
            [1736, 2760],
            // Treasure 384
            [1736, -2664],
            // Treasure 385
            [1736, -4856],
            // Treasure 386
            [1688, 3464],
            // Treasure 387
            [1688, 3400],
            // Treasure 388
            [1688, 2760],
            // Treasure 389
            [1688, -2616],
            // Treasure 390
            [1672, 3352],
            // Treasure 391
            [1624, 3592],
            // Treasure 392
            [1624, 3528],
            // Treasure 393
            [1608, 3400],
            // Treasure 394
            [1608, 2952],
            // Treasure 395
            [1608, -4984],
            // Treasure 396
            [1608, -5352],
            // Treasure 397
            [1560, 3656],
            // Treasure 398
            [1560, 2952],
            // Treasure 399
            [1544, 3160],
            // Treasure 400
            [1544, 3016],
            // Treasure 401
            [1544, 2888],
            // Treasure 402
            [1496, 3016],
            // Treasure 403
            [1496, 2248],
            // Treasure 404
            [1480, 4120],
            // Treasure 405
            [1480, 3080],
            // Treasure 406
            [1480, 2952],
            // Treasure 407
            [1480, 2888],
            // Treasure 408
            [1480, 2632],
            // Treasure 409
            [1480, 2520],
            // Treasure 410
            [1416, 4104],
            // Treasure 411
            [1416, 4056],
            // Treasure 412
            [1416, 3736],
            // Treasure 413
            [1416, 2200],
            // Treasure 414
            [1416, 1800],
            // Treasure 415
            [1416, 1736],
            // Treasure 416
            [1416, -3128],
            // Treasure 417
            [1368, 4680],
            // Treasure 418
            [1368, -5368],
            // Treasure 419
            [1352, 4808],
            // Treasure 420
            [1352, 1800],
            // Treasure 421
            [1352, 1752],
            // Treasure 422
            [1352, 1672],
            // Treasure 423
            [1352, -3112],
            // Treasure 424
            [1352, -3320],
            // Treasure 425
            [1304, 1800],
            // Treasure 426
            [1304, -3176],
            // Treasure 427
            [1288, 4744],
            // Treasure 428
            [1288, 984],
            // Treasure 429
            [1288, -3048],
            // Treasure 430
            [1288, -3384],
            // Treasure 431
            [1288, -4984],
            // Treasure 432
            [1240, 3016],
            // Treasure 433
            [1240, -2808],
            // Treasure 434
            [1224, 3080],
            // Treasure 435
            [1224, 2056],
            // Treasure 436
            [1224, 1112],
            // Treasure 437
            [1224, -4984],
            // Treasure 438
            [1224, -5096],
            // Treasure 439
            [1176, 4248],
            // Treasure 440
            [1176, 2952],
            // Treasure 441
            [1176, 920],
            // Treasure 442
            [1160, 2440],
            // Treasure 443
            [1160, 2056],
            // Treasure 444
            [1160, 840],
            // Treasure 445
            [1160, -2808],
            // Treasure 446
            [1160, -2856],
            // Treasure 447
            [1112, 2312],
            // Treasure 448
            [1112, 1928],
            // Treasure 449
            [1112, 1864],
            // Treasure 450
            [1112, -2792],
            // Treasure 451
            [1112, -2856],
            // Treasure 452
            [1096, 4488],
            // Treasure 453
            [1096, 4424],
            // Treasure 454
            [1096, 4360],
            // Treasure 455
            [1096, 4184],
            // Treasure 456
            [1096, 2264],
            // Treasure 457
            [1096, -5176],
            // Treasure 458
            [1048, 1544],
            // Treasure 459
            [1048, -3496],
            // Treasure 460
            [1032, 4296],
            // Treasure 461
            [1032, -2616],
            // Treasure 462
            [1032, -5160],
            // Treasure 463
            [984, -5944],
            // Treasure 464
            [968, 3272],
            // Treasure 465
            [968, 3224],
            // Treasure 466
            [968, -2600],
            // Treasure 467
            [968, -3688],
            // Treasure 468
            [968, -5240],
            // Treasure 469
            [968, -5560],
            // Treasure 470
            [968, -5880],
            // Treasure 471
            [920, 3592],
            // Treasure 472
            [920, 3544],
            // Treasure 473
            [904, 3784],
            // Treasure 474
            [904, 2248],
            // Treasure 475
            [904, 1480],
            // Treasure 476
            [904, -2664],
            // Treasure 477
            [904, -5560],
            // Treasure 478
            [856, -2856],
            // Treasure 479
            [856, -5928],
            // Treasure 480
            [840, 3976],
            // Treasure 481
            [840, 3864],
            // Treasure 482
            [840, 3208],
            // Treasure 483
            [840, -3176],
            // Treasure 484
            [840, -3768],
            // Treasure 485
            [792, -1400],
            // Treasure 486
            [776, 4040],
            // Treasure 487
            [776, 3864],
            // Treasure 488
            [776, 3720],
            // Treasure 489
            [776, -1448],
            // Treasure 490
            [776, -4408],
            // Treasure 491
            [776, -4472],
            // Treasure 492
            [776, -4536],
            // Treasure 493
            [776, -4600],
            // Treasure 494
            [728, 4104],
            // Treasure 495
            [728, -2856],
            // Treasure 496
            [728, -4280],
            // Treasure 497
            [712, -1336],
            // Treasure 498
            [712, -4216],
            // Treasure 499
            [712, -5432],
            // Treasure 500
            [664, -1336],
            // Treasure 501
            [664, -5480],
            // Treasure 502
            [648, 2696],
            // Treasure 503
            [648, -1208],
            // Treasure 504
            [648, -1464],
            // Treasure 505
            [648, -5432],
            // Treasure 506
            [600, 3336],
            // Treasure 507
            [600, 3208],
            // Treasure 508
            [600, -1272],
            // Treasure 509
            [600, -4024],
            // Treasure 510
            [584, -1144],
            // Treasure 511
            [584, -1336],
            // Treasure 512
            [584, -1400],
            // Treasure 513
            [584, -5624],
            // Treasure 514
            [536, 1416],
            // Treasure 515
            [536, -4920],
            // Treasure 516
            [520, 5128],
            // Treasure 517
            [520, -1192],
            // Treasure 518
            [520, -1256],
            // Treasure 519
            [520, -3768],
            // Treasure 520
            [520, -5048],
            // Treasure 521
            [520, -5624],
            // Treasure 522
            [520, -5688],
            // Treasure 523
            [472, 1608],
            // Treasure 524
            [456, 1544],
            // Treasure 525
            [456, 1480],
            // Treasure 526
            [456, -5496],
            // Treasure 527
            [456, -5608],
            // Treasure 528
            [456, -5688],
            // Treasure 529
            [456, -5736],
            // Treasure 530
            [456, -5800],
            // Treasure 531
            [408, -4920],
            // Treasure 532
            [392, 1736],
            // Treasure 533
            [392, -5304],
            // Treasure 534
            [392, -5688],
            // Treasure 535
            [392, -5752],
            // Treasure 536
            [392, -5816],
            // Treasure 537
            [344, 4360],
            // Treasure 538
            [344, 1800],
            // Treasure 539
            [328, 5272],
            // Treasure 540
            [328, 2056],
            // Treasure 541
            [328, 1736],
            // Treasure 542
            [280, 5064],
            // Treasure 543
            [280, 1736],
            // Treasure 544
            [280, -4792],
            // Treasure 545
            [264, 5384],
            // Treasure 546
            [264, 5320],
            // Treasure 547
            [264, 4808],
            // Treasure 548
            [264, -5496],
            // Treasure 549
            [216, 4168],
            // Treasure 550
            [216, -5304],
            // Treasure 551
            [200, 5336],
            // Treasure 552
            [200, 5064],
            // Treasure 553
            [200, 1624],
            // Treasure 554
            [200, -4600],
            // Treasure 555
            [200, -4728],
            // Treasure 556
            [200, -5368],
            // Treasure 557
            [200, -5480],
            // Treasure 558
            [200, -5544],
            // Treasure 559
            [152, 4488],
            // Treasure 560
            [152, 968],
            // Treasure 561
            [152, -1192],
            // Treasure 562
            [152, -5288],
            // Treasure 563
            [136, 2504],
            // Treasure 564
            [136, -3704],
            // Treasure 565
            [136, -3768],
            // Treasure 566
            [136, -3832],
            // Treasure 567
            [136, -5368],
            // Treasure 568
            [88, 2440],
            // Treasure 569
            [72, -4152],
            // Treasure 570
            [72, -4920],
            // Treasure 571
            [8, 5272],
            // Treasure 572
            [8, -104],
            // Treasure 573
            [-40, 8],
            // Treasure 574
            [-40, -56],
            // Treasure 575
            [-56, -120],
            // Treasure 576
            [-56, -3576],
            // Treasure 577
            [-56, -4840],
            // Treasure 578
            [-120, 1352],
            // Treasure 579
            [-120, -4904],
            // Treasure 580
            [-168, -1464],
            // Treasure 581
            [-184, 1288],
            // Treasure 582
            [-184, 200],
            // Treasure 583
            [-184, 136],
            // Treasure 584
            [-184, 88],
            // Treasure 585
            [-184, 8],
            // Treasure 586
            [-184, -1528],
            // Treasure 587
            [-248, 1928],
            // Treasure 588
            [-248, 1224],
            // Treasure 589
            [-248, 344],
            // Treasure 590
            [-248, -1448],
            // Treasure 591
            [-248, -4920],
            // Treasure 592
            [-296, -1464],
            // Treasure 593
            [-312, 2392],
            // Treasure 594
            [-312, 2328],
            // Treasure 595
            [-312, 1224],
            // Treasure 596
            [-312, -2424],
            // Treasure 597
            [-312, -3192],
            // Treasure 598
            [-312, -3256],
            // Treasure 599
            [-360, 1544],
            // Treasure 600
            [-376, 1240],
            // Treasure 601
            [-376, 72],
            // Treasure 602
            [-376, 24],
            // Treasure 603
            [-376, -1464],
            // Treasure 604
            [-376, -3192],
            // Treasure 605
            [-376, -4984],
            // Treasure 606
            [-424, -3128],
            // Treasure 607
            [-440, 1544],
            // Treasure 608
            [-440, 1224],
            // Treasure 609
            [-440, 968],
            // Treasure 610
            [-440, -1464],
            // Treasure 611
            [-440, -3192],
            // Treasure 612
            [-440, -5800],
            // Treasure 613
            [-504, 1240],
            // Treasure 614
            [-504, -1464],
            // Treasure 615
            [-504, -2744],
            // Treasure 616
            [-504, -5752],
            // Treasure 617
            [-504, -5816],
            // Treasure 618
            [-568, 4168],
            // Treasure 619
            [-568, 2568],
            // Treasure 620
            [-568, 1160],
            // Treasure 621
            [-568, 136],
            // Treasure 622
            [-568, -56],
            // Treasure 623
            [-616, -56],
            // Treasure 624
            [-632, 5064],
            // Treasure 625
            [-632, 4360],
            // Treasure 626
            [-632, -2168],
            // Treasure 627
            [-632, -2728],
            // Treasure 628
            [-632, -3128],
            // Treasure 629
            [-680, 4232],
            // Treasure 630
            [-680, 2376],
            // Treasure 631
            [-680, -2168],
            // Treasure 632
            [-680, -2936],
            // Treasure 633
            [-680, -3064],
            // Treasure 634
            [-680, -4712],
            // Treasure 635
            [-696, 4168],
            // Treasure 636
            [-696, 2328],
            // Treasure 637
            [-696, 1224],
            // Treasure 638
            [-696, 968],
            // Treasure 639
            [-696, 600],
            // Treasure 640
            [-696, -2728],
            // Treasure 641
            [-696, -3000],
            // Treasure 642
            [-696, -5880],
            // Treasure 643
            [-744, 2184],
            // Treasure 644
            [-760, 5448],
            // Treasure 645
            [-760, 4232],
            // Treasure 646
            [-760, 4168],
            // Treasure 647
            [-760, 1160],
            // Treasure 648
            [-760, 1112],
            // Treasure 649
            [-760, 776],
            // Treasure 650
            [-760, 648],
            // Treasure 651
            [-760, 584],
            // Treasure 652
            [-760, 520],
            // Treasure 653
            [-760, -2168],
            // Treasure 654
            [-808, 216],
            // Treasure 655
            [-808, -5176],
            // Treasure 656
            [-824, 4104],
            // Treasure 657
            [-824, 2136],
            // Treasure 658
            [-824, 584],
            // Treasure 659
            [-824, 520],
            // Treasure 660
            [-824, 264],
            // Treasure 661
            [-824, -1720],
            // Treasure 662
            [-824, -1896],
            // Treasure 663
            [-824, -2232],
            // Treasure 664
            [-872, -568],
            // Treasure 665
            [-888, 5960],
            // Treasure 666
            [-888, 5896],
            // Treasure 667
            [-888, 5832],
            // Treasure 668
            [-888, 1992],
            // Treasure 669
            [-888, 1928],
            // Treasure 670
            [-888, 1240],
            // Treasure 671
            [-888, 1032],
            // Treasure 672
            [-888, 264],
            // Treasure 673
            [-888, -616],
            // Treasure 674
            [-888, -696],
            // Treasure 675
            [-888, -1640],
            // Treasure 676
            [-888, -2232],
            // Treasure 677
            [-936, 5848],
            // Treasure 678
            [-936, 2184],
            // Treasure 679
            [-936, 1944],
            // Treasure 680
            [-936, 1352],
            // Treasure 681
            [-936, -824],
            // Treasure 682
            [-952, 5704],
            // Treasure 683
            [-952, 4104],
            // Treasure 684
            [-952, 3336],
            // Treasure 685
            [-952, 1432],
            // Treasure 686
            [-952, 1224],
            // Treasure 687
            [-952, 1096],
            // Treasure 688
            [-952, 392],
            // Treasure 689
            [-952, 216],
            // Treasure 690
            [-952, -504],
            // Treasure 691
            [-952, -872],
            // Treasure 692
            [-952, -2296],
            // Treasure 693
            [-952, -2360],
            // Treasure 694
            [-1000, 1560],
            // Treasure 695
            [-1000, -1592],
            // Treasure 696
            [-1016, 4168],
            // Treasure 697
            [-1016, 3272],
            // Treasure 698
            [-1016, 2184],
            // Treasure 699
            [-1016, 200],
            // Treasure 700
            [-1016, -312],
            // Treasure 701
            [-1016, -376],
            // Treasure 702
            [-1016, -696],
            // Treasure 703
            [-1016, -808],
            // Treasure 704
            [-1016, -888],
            // Treasure 705
            [-1016, -952],
            // Treasure 706
            [-1016, -4344],
            // Treasure 707
            [-1016, -4728],
            // Treasure 708
            [-1064, 3912],
            // Treasure 709
            [-1064, 2184],
            // Treasure 710
            [-1064, 1608],
            // Treasure 711
            [-1064, -952],
            // Treasure 712
            [-1064, -5032],
            // Treasure 713
            [-1080, 2248],
            // Treasure 714
            [-1080, 1928],
            // Treasure 715
            [-1080, -56],
            // Treasure 716
            [-1080, -248],
            // Treasure 717
            [-1080, -760],
            // Treasure 718
            [-1080, -4792],
            // Treasure 719
            [-1144, 4168],
            // Treasure 720
            [-1144, 3976],
            // Treasure 721
            [-1144, -184],
            // Treasure 722
            [-1144, -1656],
            // Treasure 723
            [-1144, -4280],
            // Treasure 724
            [-1144, -4344],
            // Treasure 725
            [-1144, -4728],
            // Treasure 726
            [-1192, 4104],
            // Treasure 727
            [-1192, -5096],
            // Treasure 728
            [-1208, 3016],
            // Treasure 729
            [-1208, 584],
            // Treasure 730
            [-1208, 520],
            // Treasure 731
            [-1208, -1720],
            // Treasure 732
            [-1208, -4152],
            // Treasure 733
            [-1256, -5608],
            // Treasure 734
            [-1272, 1944],
            // Treasure 735
            [-1336, 1112],
            // Treasure 736
            [-1336, -1272],
            // Treasure 737
            [-1384, -760],
            // Treasure 738
            [-1400, 1992],
            // Treasure 739
            [-1400, -696],
            // Treasure 740
            [-1400, -1272],
            // Treasure 741
            [-1400, -2360],
            // Treasure 742
            [-1400, -2472],
            // Treasure 743
            [-1400, -5624],
            // Treasure 744
            [-1448, 1480],
            // Treasure 745
            [-1448, -2168],
            // Treasure 746
            [-1448, -2552],
            // Treasure 747
            [-1464, 5192],
            // Treasure 748
            [-1464, 1112],
            // Treasure 749
            [-1464, -2296],
            // Treasure 750
            [-1464, -2616],
            // Treasure 751
            [-1464, -5688],
            // Treasure 752
            [-1464, -5752],
            // Treasure 753
            [-1464, -5800],
            // Treasure 754
            [-1512, 1032],
            // Treasure 755
            [-1512, -2232],
            // Treasure 756
            [-1512, -2536],
            // Treasure 757
            [-1576, 1560],
            // Treasure 758
            [-1576, -1208],
            // Treasure 759
            [-1576, -4776],
            // Treasure 760
            [-1576, -4904],
            // Treasure 761
            [-1592, 840],
            // Treasure 762
            [-1592, -4728],
            // Treasure 763
            [-1592, -4968],
            // Treasure 764
            [-1640, 1608],
            // Treasure 765
            [-1640, -1272],
            // Treasure 766
            [-1640, -4536],
            // Treasure 767
            [-1656, 1688],
            // Treasure 768
            [-1656, -5240],
            // Treasure 769
            [-1656, -5736],
            // Treasure 770
            [-1720, 792],
            // Treasure 771
            [-1720, -2424],
            // Treasure 772
            [-1720, -5176],
            // Treasure 773
            [-1784, -2232],
            // Treasure 774
            [-1784, -5048],
            // Treasure 775
            [-1784, -5816],
            // Treasure 776
            [-1848, 5960],
            // Treasure 777
            [-1848, 5832],
            // Treasure 778
            [-1848, 5784],
            // Treasure 779
            [-1848, -1912],
            // Treasure 780
            [-1848, -2408],
            // Treasure 781
            [-1848, -2936],
            // Treasure 782
            [-1848, -5880],
            // Treasure 783
            [-1896, -2872],
            // Treasure 784
            [-1912, -1016],
            // Treasure 785
            [-1912, -3000],
            // Treasure 786
            [-1960, -4648],
            // Treasure 787
            [-1960, -4856],
            // Treasure 788
            [-1976, 5640],
            // Treasure 789
            [-1976, -2936],
            // Treasure 790
            [-1976, -3448],
            // Treasure 791
            [-1976, -3576],
            // Treasure 792
            [-1976, -4536],
            // Treasure 793
            [-1976, -4600],
            // Treasure 794
            [-2024, 5640],
            // Treasure 795
            [-2024, -2472],
            // Treasure 796
            [-2040, -2680],
            // Treasure 797
            [-2040, -2808],
            // Treasure 798
            [-2104, -1256],
            // Treasure 799
            [-2104, -2040],
            // Treasure 800
            [-2104, -2104],
            // Treasure 801
            [-2104, -2424],
            // Treasure 802
            [-2152, 5512],
            // Treasure 803
            [-2168, 5576],
            // Treasure 804
            [-2168, 5464],
            // Treasure 805
            [-2168, 1352],
            // Treasure 806
            [-2168, -1512],
            // Treasure 807
            [-2168, -4520],
            // Treasure 808
            [-2168, -5992],
            // Treasure 809
            [-2216, 5512],
            // Treasure 810
            [-2216, 200],
            // Treasure 811
            [-2216, -1592],
            // Treasure 812
            [-2232, 5640],
            // Treasure 813
            [-2232, 5448],
            // Treasure 814
            [-2232, 5400],
            // Treasure 815
            [-2232, 3928],
            // Treasure 816
            [-2232, 3720],
            // Treasure 817
            [-2232, -1400],
            // Treasure 818
            [-2232, -1912],
            // Treasure 819
            [-2232, -2552],
            // Treasure 820
            [-2232, -3768],
            // Treasure 821
            [-2232, -4792],
            // Treasure 822
            [-2280, 5320],
            // Treasure 823
            [-2280, 3848],
            // Treasure 824
            [-2280, -1592],
            // Treasure 825
            [-2280, -4904],
            // Treasure 826
            [-2280, -5224],
            // Treasure 827
            [-2296, 5656],
            // Treasure 828
            [-2296, 5528],
            // Treasure 829
            [-2296, 5384],
            // Treasure 830
            [-2296, 584],
            // Treasure 831
            [-2296, -1064],
            // Treasure 832
            [-2296, -1464],
            // Treasure 833
            [-2296, -1512],
            // Treasure 834
            [-2296, -1656],
            // Treasure 835
            [-2296, -1720],
            // Treasure 836
            [-2296, -3832],
            // Treasure 837
            [-2296, -3880],
            // Treasure 838
            [-2296, -4792],
            // Treasure 839
            [-2344, 5464],
            // Treasure 840
            [-2344, 5320],
            // Treasure 841
            [-2344, -4792],
            // Treasure 842
            [-2360, 3992],
            // Treasure 843
            [-2360, 3848],
            // Treasure 844
            [-2360, 3800],
            // Treasure 845
            [-2360, 216],
            // Treasure 846
            [-2360, -2024],
            // Treasure 847
            [-2360, -4856],
            // Treasure 848
            [-2408, 5704],
            // Treasure 849
            [-2408, -56],
            // Treasure 850
            [-2408, -4840],
            // Treasure 851
            [-2424, 4168],
            // Treasure 852
            [-2424, 3336],
            // Treasure 853
            [-2424, -2024],
            // Treasure 854
            [-2424, -4088],
            // Treasure 855
            [-2424, -4904],
            // Treasure 856
            [-2472, 5704],
            // Treasure 857
            [-2472, 4168],
            // Treasure 858
            [-2472, 3336],
            // Treasure 859
            [-2472, -4088],
            // Treasure 860
            [-2488, 3720],
            // Treasure 861
            [-2488, 1672],
            // Treasure 862
            [-2488, 8],
            // Treasure 863
            [-2488, -56],
            // Treasure 864
            [-2488, -1016],
            // Treasure 865
            [-2488, -2040],
            // Treasure 866
            [-2552, 4168],
            // Treasure 867
            [-2552, 1736],
            // Treasure 868
            [-2552, 88],
            // Treasure 869
            [-2552, -1976],
            // Treasure 870
            [-2552, -4088],
            // Treasure 871
            [-2600, 1864],
            // Treasure 872
            [-2600, -1144],
            // Treasure 873
            [-2600, -2104],
            // Treasure 874
            [-2616, 5256],
            // Treasure 875
            [-2616, 5208],
            // Treasure 876
            [-2616, 4168],
            // Treasure 877
            [-2616, 1800],
            // Treasure 878
            [-2616, 136],
            // Treasure 879
            [-2616, -1528],
            // Treasure 880
            [-2616, -2040],
            // Treasure 881
            [-2616, -2232],
            // Treasure 882
            [-2616, -4920],
            // Treasure 883
            [-2616, -4968],
            // Treasure 884
            [-2664, -1512],
            // Treasure 885
            [-2664, -2168],
            // Treasure 886
            [-2680, 5272],
            // Treasure 887
            [-2680, 4424],
            // Treasure 888
            [-2680, 4104],
            // Treasure 889
            [-2680, 3912],
            // Treasure 890
            [-2680, 1928],
            // Treasure 891
            [-2680, 1864],
            // Treasure 892
            [-2680, 1800],
            // Treasure 893
            [-2680, 200],
            // Treasure 894
            [-2680, -1464],
            // Treasure 895
            [-2680, -2232],
            // Treasure 896
            [-2680, -4088],
            // Treasure 897
            [-2680, -4856],
            // Treasure 898
            [-2680, -4920],
            // Treasure 899
            [-2680, -5944],
            // Treasure 900
            [-2728, 3976],
            // Treasure 901
            [-2728, -5944],
            // Treasure 902
            [-2744, 4744],
            // Treasure 903
            [-2744, 4680],
            // Treasure 904
            [-2744, 4568],
            // Treasure 905
            [-2744, 3032],
            // Treasure 906
            [-2744, -232],
            // Treasure 907
            [-2744, -4920],
            // Treasure 908
            [-2808, 2568],
            // Treasure 909
            [-2808, 1816],
            // Treasure 910
            [-2808, 1736],
            // Treasure 911
            [-2808, 200],
            // Treasure 912
            [-2808, -1400],
            // Treasure 913
            [-2808, -4024],
            // Treasure 914
            [-2808, -5944],
            // Treasure 915
            [-2856, -4024],
            // Treasure 916
            [-2872, 4120],
            // Treasure 917
            [-2872, 1864],
            // Treasure 918
            [-2872, 1736],
            // Treasure 919
            [-2872, -5880],
            // Treasure 920
            [-2920, -5672],
            // Treasure 921
            [-2920, -5992],
            // Treasure 922
            [-2936, 4120],
            // Treasure 923
            [-2936, 4040],
            // Treasure 924
            [-2936, 1928],
            // Treasure 925
            [-2936, 1736],
            // Treasure 926
            [-2984, 2120],
            // Treasure 927
            [-2984, 1544],
            // Treasure 928
            [-2984, -4904],
            // Treasure 929
            [-2984, -5416],
            // Treasure 930
            [-2984, -5880],
            // Treasure 931
            [-3000, 3976],
            // Treasure 932
            [-3000, 3080],
            // Treasure 933
            [-3000, 3016],
            // Treasure 934
            [-3000, 200],
            // Treasure 935
            [-3000, -696],
            // Treasure 936
            [-3000, -5224],
            // Treasure 937
            [-3000, -5304],
            // Treasure 938
            [-3048, 3912],
            // Treasure 939
            [-3048, 1688],
            // Treasure 940
            [-3048, -4088],
            // Treasure 941
            [-3048, -5112],
            // Treasure 942
            [-3048, -5880],
            // Treasure 943
            [-3064, 4168],
            // Treasure 944
            [-3064, 4120],
            // Treasure 945
            [-3064, 3144],
            // Treasure 946
            [-3064, 1816],
            // Treasure 947
            [-3064, -4984],
            // Treasure 948
            [-3064, -5304],
            // Treasure 949
            [-3112, -5368],
            // Treasure 950
            [-3128, 2696],
            // Treasure 951
            [-3128, 88],
            // Treasure 952
            [-3128, -56],
            // Treasure 953
            [-3128, -936],
            // Treasure 954
            [-3128, -1016],
            // Treasure 955
            [-3192, 2760],
            // Treasure 956
            [-3192, -312],
            // Treasure 957
            [-3240, -696],
            // Treasure 958
            [-3240, -4072],
            // Treasure 959
            [-3256, 2824],
            // Treasure 960
            [-3256, 280],
            // Treasure 961
            [-3304, 264],
            // Treasure 962
            [-3320, 3144],
            // Treasure 963
            [-3368, 2904],
            // Treasure 964
            [-3384, 2504],
            // Treasure 965
            [-3384, -1016],
            // Treasure 966
            [-3448, 2520],
            // Treasure 967
            [-3448, 328],
            // Treasure 968
            [-3496, 328],
            // Treasure 969
            [-3512, 3976],
            // Treasure 970
            [-3512, 88],
            // Treasure 971
            [-3560, 72],
            // Treasure 972
            [-3560, -3896],
            // Treasure 973
            [-3576, 328],
            // Treasure 974
            [-3576, -232],
            // Treasure 975
            [-3640, 200],
            // Treasure 976
            [-3640, -5688],
            // Treasure 977
            [-3704, -104],
            // Treasure 978
            [-3704, -5688],
            // Treasure 979
            [-3752, -3704],
            // Treasure 980
            [-3768, -184],
            // Treasure 981
            [-3768, -3752],
            // Treasure 982
            [-3816, -5688],
            // Treasure 983
            [-3832, -120],
            // Treasure 984
            [-3880, 3016],
            // Treasure 985
            [-3880, -3240],
            // Treasure 986
            [-3896, -248],
            // Treasure 987
            [-3944, -3432],
            // Treasure 988
            [-3960, -4856],
            // Treasure 989
            [-4024, -5560],
            // Treasure 990
            [-4088, 2824],
            // Treasure 991
            [-4088, -360],
            // Treasure 992
            [-4136, 5640],
            // Treasure 993
            [-4136, 3272],
            // Treasure 994
            [-4152, -360],
            // Treasure 995
            [-4200, 5576],
            // Treasure 996
            [-4216, -1464],
            // Treasure 997
            [-4264, 2136],
            // Treasure 998
            [-4264, 2072],
            // Treasure 999
            [-4264, -3768],
            // Treasure 1000
            [-4264, -3960],
            // Treasure 1001
            [-4328, 8],
            // Treasure 1002
            [-4328, -3768],
            // Treasure 1003
            [-4328, -3880],
            // Treasure 1004
            [-4344, 5576],
            // Treasure 1005
            [-4344, 3032],
            // Treasure 1006
            [-4344, 2968],
            // Treasure 1007
            [-4344, -56],
            // Treasure 1008
            [-4344, -120],
            // Treasure 1009
            [-4344, -184],
            // Treasure 1010
            [-4344, -616],
            // Treasure 1011
            [-4344, -1144],
            // Treasure 1012
            [-4392, 2120],
            // Treasure 1013
            [-4392, -1272],
            // Treasure 1014
            [-4392, -3768],
            // Treasure 1015
            [-4408, 2696],
            // Treasure 1016
            [-4408, 8],
            // Treasure 1017
            [-4408, -184],
            // Treasure 1018
            [-4408, -3896],
            // Treasure 1019
            [-4472, -312],
            // Treasure 1020
            [-4472, -568],
            // Treasure 1021
            [-4472, -1144],
            // Treasure 1022
            [-4472, -2152],
            // Treasure 1023
            [-4472, -3752],
            // Treasure 1024
            [-4472, -3816],
            // Treasure 1025
            [-4472, -3896],
            // Treasure 1026
            [-4520, -3832],
            // Treasure 1027
            [-4520, -5944],
            // Treasure 1028
            [-4536, 2584],
            // Treasure 1029
            [-4536, -568],
            // Treasure 1030
            [-4536, -1976],
            // Treasure 1031
            [-4536, -3768],
            // Treasure 1032
            [-4536, -3880],
            // Treasure 1033
            [-4584, -3832],
            // Treasure 1034
            [-4600, 5784],
            // Treasure 1035
            [-4600, 5704],
            // Treasure 1036
            [-4600, 2440],
            // Treasure 1037
            [-4600, -376],
            // Treasure 1038
            [-4600, -1144],
            // Treasure 1039
            [-4600, -1192],
            // Treasure 1040
            [-4600, -1448],
            // Treasure 1041
            [-4600, -3704],
            // Treasure 1042
            [-4600, -3768],
            // Treasure 1043
            [-4600, -5944],
            // Treasure 1044
            [-4648, -1400],
            // Treasure 1045
            [-4648, -3816],
            // Treasure 1046
            [-4664, 5704],
            // Treasure 1047
            [-4664, 5640],
            // Treasure 1048
            [-4664, 2632],
            // Treasure 1049
            [-4664, 2568],
            // Treasure 1050
            [-4664, -1144],
            // Treasure 1051
            [-4664, -1192],
            // Treasure 1052
            [-4664, -2424],
            // Treasure 1053
            [-4664, -3576],
            // Treasure 1054
            [-4664, -3624],
            // Treasure 1055
            [-4664, -5944],
            // Treasure 1056
            [-4712, 2632],
            // Treasure 1057
            [-4728, 5656],
            // Treasure 1058
            [-4728, -632],
            // Treasure 1059
            [-4728, -2408],
            // Treasure 1060
            [-4728, -3576],
            // Treasure 1061
            [-4792, 5896],
            // Treasure 1062
            [-4792, 5320],
            // Treasure 1063
            [-4792, -440],
            // Treasure 1064
            [-4792, -760],
            // Treasure 1065
            [-4792, -888],
            // Treasure 1066
            [-4792, -952],
            // Treasure 1067
            [-4792, -3320],
            // Treasure 1068
            [-4792, -3384],
            // Treasure 1069
            [-4792, -3512],
            // Treasure 1070
            [-4840, -5624],
            // Treasure 1071
            [-4840, -5752],
            // Treasure 1072
            [-4856, 5768],
            // Treasure 1073
            [-4856, 2632],
            // Treasure 1074
            [-4856, -440],
            // Treasure 1075
            [-4856, -1656],
            // Treasure 1076
            [-4856, -5816],
            // Treasure 1077
            [-4904, 5768],
            // Treasure 1078
            [-4904, 728],
            // Treasure 1079
            [-4904, -440],
            // Treasure 1080
            [-4904, -4024],
            // Treasure 1081
            [-4920, 5704],
            // Treasure 1082
            [-4920, 5576],
            // Treasure 1083
            [-4920, 2456],
            // Treasure 1084
            [-4920, 2376],
            // Treasure 1085
            [-4968, 2328],
            // Treasure 1086
            [-4984, 5464],
            // Treasure 1087
            [-4984, 648],
            // Treasure 1088
            [-4984, -1848],
            // Treasure 1089
            [-4984, -1912],
            // Treasure 1090
            [-4984, -3896],
            // Treasure 1091
            [-5032, -744],
            // Treasure 1092
            [-5032, -4728],
            // Treasure 1093
            [-5048, 2264],
            // Treasure 1094
            [-5048, 2184],
            // Treasure 1095
            [-5048, -696],
            // Treasure 1096
            [-5048, -1320],
            // Treasure 1097
            [-5048, -1400],
            // Treasure 1098
            [-5048, -4648],
            // Treasure 1099
            [-5048, -5608],
            // Treasure 1100
            [-5096, 5960],
            // Treasure 1101
            [-5112, 1032],
            // Treasure 1102
            [-5112, -1272],
            // Treasure 1103
            [-5112, -4024],
            // Treasure 1104
            [-5112, -4088],
            // Treasure 1105
            [-5112, -4408],
            // Treasure 1106
            [-5112, -4584],
            // Treasure 1107
            [-5176, 520],
            // Treasure 1108
            [-5176, -1144],
            // Treasure 1109
            [-5176, -2280],
            // Treasure 1110
            [-5176, -3512],
            // Treasure 1111
            [-5176, -4200],
            // Treasure 1112
            [-5176, -4472],
            // Treasure 1113
            [-5176, -4840],
            // Treasure 1114
            [-5176, -5432],
            // Treasure 1115
            [-5240, 5320],
            // Treasure 1116
            [-5240, 2120],
            // Treasure 1117
            [-5240, 664],
            // Treasure 1118
            [-5240, 520],
            // Treasure 1119
            [-5240, -1144],
            // Treasure 1120
            [-5240, -4344],
            // Treasure 1121
            [-5240, -4392],
            // Treasure 1122
            [-5240, -4792],
            // Treasure 1123
            [-5288, 536],
            // Treasure 1124
            [-5288, -1144],
            // Treasure 1125
            [-5304, -952],
            // Treasure 1126
            [-5304, -1000],
            // Treasure 1127
            [-5304, -4664],
            // Treasure 1128
            [-5304, -4856],
            // Treasure 1129
            [-5368, 456],
            // Treasure 1130
            [-5368, -1960],
            // Treasure 1131
            [-5368, -3960],
            // Treasure 1132
            [-5368, -4600],
            // Treasure 1133
            [-5368, -4648],
            // Treasure 1134
            [-5368, -4712],
            // Treasure 1135
            [-5368, -4856],
            // Treasure 1136
            [-5416, 5384],
            // Treasure 1137
            [-5416, -4728],
            // Treasure 1138
            [-5432, 648],
            // Treasure 1139
            [-5432, -2168],
            // Treasure 1140
            [-5432, -4600],
            // Treasure 1141
            [-5432, -4664],
            // Treasure 1142
            [-5480, -2728],
            // Treasure 1143
            [-5496, -1128],
            // Treasure 1144
            [-5496, -1400],
            // Treasure 1145
            [-5496, -1848],
            // Treasure 1146
            [-5496, -2552],
            // Treasure 1147
            [-5496, -4088],
            // Treasure 1148
            [-5544, -1768],
            // Treasure 1149
            [-5560, 584],
            // Treasure 1150
            [-5560, -1064],
            // Treasure 1151
            [-5560, -1144],
            // Treasure 1152
            [-5560, -1336],
            // Treasure 1153
            [-5560, -3960],
            // Treasure 1154
            [-5560, -4088],
            // Treasure 1155
            [-5560, -4152],
            // Treasure 1156
            [-5624, 5512],
            // Treasure 1157
            [-5624, -1144],
            // Treasure 1158
            [-5624, -3960],
            // Treasure 1159
            [-5624, -4600],
            // Treasure 1160
            [-5672, 5576],
            // Treasure 1161
            [-5688, 1672],
            // Treasure 1162
            [-5688, -3640],
            // Treasure 1163
            [-5688, -3832],
            // Treasure 1164
            [-5688, -3880],
            // Treasure 1165
            [-5688, -4472],
            // Treasure 1166
            [-5752, 5832],
            // Treasure 1167
            [-5752, 5528],
            // Treasure 1168
            [-5752, 1880],
            // Treasure 1169
            [-5752, 1608],
            // Treasure 1170
            [-5752, 1416],
            // Treasure 1171
            [-5752, -3896],
            // Treasure 1172
            [-5752, -4600],
            // Treasure 1173
            [-5752, -4840],
            // Treasure 1174
            [-5752, -5224],
            // Treasure 1175
            [-5800, 5576],
            // Treasure 1176
            [-5800, -4088],
            // Treasure 1177
            [-5816, 1304],
            // Treasure 1178
            [-5816, -3304],
            // Treasure 1179
            [-5816, -4664],
            // Treasure 1180
            [-5816, -4728],
            // Treasure 1181
            [-5816, -5304],
            // Treasure 1182
            [-5816, -5416],
            // Treasure 1183
            [-5864, 2056],
            // Treasure 1184
            [-5864, -184],
            // Treasure 1185
            [-5864, -3320],
            // Treasure 1186
            [-5864, -4792],
            // Treasure 1187
            [-5880, 5592],
            // Treasure 1188
            [-5880, -2104],
            // Treasure 1189
            [-5880, -2808],
            // Treasure 1190
            [-5880, -4088],
            // Treasure 1191
            [-5880, -4712],
            // Treasure 1192
            [-5880, -5304],
            // Treasure 1193
            [-5880, -5688],
            // Treasure 1194
            [-5880, -5752],
            // Treasure 1195
            [-5928, -2040],
            // Treasure 1196
            [-5944, 5640],
            // Treasure 1197
            [-5944, 1992],
            // Treasure 1198
            [-5944, -3704],
            // Treasure 1199
            [-5944, -5624],
            // Treasure 1200
            [-5992, -3112],
            // Treasure 1201
            [-5992, -3240],
            // Treasure 1202
            [-5992, -3704],
            // Treasure 1203
            [-5992, -5688],
        ];

        return {
            shipwreck: shipwreckCoords.map(toMarker('shipwreck.png')),
            treasure:  treasureCoords.map(toMarker('chest.png')),
        };
    }
};

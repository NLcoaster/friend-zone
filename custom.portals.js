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
            // Nether Portal 1
            [-46, -77],
            // Nether Portal 2
            [-1566, 424],
        ];

        const ruined_portalCoords = [
            // Ruined Portal 1
            [126, -429],
            // Ruined Portal 2
            [-1722, -444],
            // Ruined Portal 3
            [-1063, -940],
            // Ruined Portal 4
            [5992, -4984],
            // Ruined Portal 5
            [5880, 4040],
            // Ruined Portal 6
            [5848, -2344],
            // Ruined Portal 7
            [5800, 5480],
            // Ruined Portal 8
            [5784, 2184],
            // Ruined Portal 9
            [5784, -360],
            // Ruined Portal 10
            [5768, 1640],
            // Ruined Portal 11
            [5768, -3512],
            // Ruined Portal 12
            [5768, 648],
            // Ruined Portal 13
            [5512, -5080],
            // Ruined Portal 14
            [5496, 4232],
            // Ruined Portal 15
            [5496, 5960],
            // Ruined Portal 16
            [5448, 2664],
            // Ruined Portal 17
            [5416, 1560],
            // Ruined Portal 18
            [5384, -2840],
            // Ruined Portal 19
            [5368, 2232],
            // Ruined Portal 20
            [5352, -424],
            // Ruined Portal 21
            [5336, 3336],
            // Ruined Portal 22
            [5320, 5288],
            // Ruined Portal 23
            [5320, -1768],
            // Ruined Portal 24
            [5320, -1000],
            // Ruined Portal 25
            [5304, -5688],
            // Ruined Portal 26
            [5304, -2344],
            // Ruined Portal 27
            [5256, 4632],
            // Ruined Portal 28
            [5176, 664],
            // Ruined Portal 29
            [5160, -3768],
            // Ruined Portal 30
            [5144, 200],
            // Ruined Portal 31
            [5128, -4328],
            // Ruined Portal 32
            [4872, -5656],
            // Ruined Portal 33
            [4872, -2520],
            // Ruined Portal 34
            [4856, -4168],
            // Ruined Portal 35
            [4856, 1000],
            // Ruined Portal 36
            [4840, 3240],
            // Ruined Portal 37
            [4824, 2296],
            // Ruined Portal 38
            [4744, 2904],
            // Ruined Portal 39
            [4744, 1544],
            // Ruined Portal 40
            [4744, -4872],
            // Ruined Portal 41
            [4744, -504],
            // Ruined Portal 42
            [4664, 3976],
            // Ruined Portal 43
            [4648, -3816],
            // Ruined Portal 44
            [4648, 312],
            // Ruined Portal 45
            [4552, -1736],
            // Ruined Portal 46
            [4552, -2968],
            // Ruined Portal 47
            [4520, 5176],
            // Ruined Portal 48
            [4504, 4712],
            // Ruined Portal 49
            [4504, -1208],
            // Ruined Portal 50
            [4232, -5480],
            // Ruined Portal 51
            [4216, 392],
            // Ruined Portal 52
            [4200, 4488],
            // Ruined Portal 53
            [4168, 3896],
            // Ruined Portal 54
            [4120, -4232],
            // Ruined Portal 55
            [4120, -2552],
            // Ruined Portal 56
            [4104, -2920],
            // Ruined Portal 57
            [4104, -952],
            // Ruined Portal 58
            [4088, 5304],
            // Ruined Portal 59
            [4056, 1336],
            // Ruined Portal 60
            [3976, 2200],
            // Ruined Portal 61
            [3976, 5960],
            // Ruined Portal 62
            [3944, -264],
            // Ruined Portal 63
            [3928, 3272],
            // Ruined Portal 64
            [3912, -5080],
            // Ruined Portal 65
            [3912, 904],
            // Ruined Portal 66
            [3896, 2776],
            // Ruined Portal 67
            [3896, -3544],
            // Ruined Portal 68
            [3848, -1688],
            // Ruined Portal 69
            [3512, 2920],
            // Ruined Portal 70
            [3496, 2232],
            // Ruined Portal 71
            [3496, -4344],
            // Ruined Portal 72
            [3480, -2360],
            // Ruined Portal 73
            [3448, 744],
            // Ruined Portal 74
            [3432, 1624],
            // Ruined Portal 75
            [3432, -5096],
            // Ruined Portal 76
            [3416, 3496],
            // Ruined Portal 77
            [3416, 4776],
            // Ruined Portal 78
            [3416, -1096],
            // Ruined Portal 79
            [3384, 4136],
            // Ruined Portal 80
            [3336, 5384],
            // Ruined Portal 81
            [3320, -1832],
            // Ruined Portal 82
            [3304, -2904],
            // Ruined Portal 83
            [3288, -5528],
            // Ruined Portal 84
            [3256, -3512],
            // Ruined Portal 85
            [3240, 120],
            // Ruined Portal 86
            [3224, -328],
            // Ruined Portal 87
            [2952, 24],
            // Ruined Portal 88
            [2936, 3592],
            // Ruined Portal 89
            [2936, 1576],
            // Ruined Portal 90
            [2920, -3608],
            // Ruined Portal 91
            [2904, 5992],
            // Ruined Portal 92
            [2904, -1048],
            // Ruined Portal 93
            [2872, 2216],
            // Ruined Portal 94
            [2856, 3992],
            // Ruined Portal 95
            [2792, 5192],
            // Ruined Portal 96
            [2792, -5512],
            // Ruined Portal 97
            [2792, -1624],
            // Ruined Portal 98
            [2760, 4488],
            // Ruined Portal 99
            [2744, -600],
            // Ruined Portal 100
            [2728, 2728],
            // Ruined Portal 101
            [2680, -3080],
            // Ruined Portal 102
            [2648, -4920],
            // Ruined Portal 103
            [2600, 904],
            // Ruined Portal 104
            [2584, -4264],
            // Ruined Portal 105
            [2584, -2424],
            // Ruined Portal 106
            [2296, 120],
            // Ruined Portal 107
            [2248, 5400],
            // Ruined Portal 108
            [2248, 1480],
            // Ruined Portal 109
            [2200, 2888],
            // Ruined Portal 110
            [2168, -2536],
            // Ruined Portal 111
            [2152, -5448],
            // Ruined Portal 112
            [2152, -344],
            // Ruined Portal 113
            [2120, 4616],
            // Ruined Portal 114
            [2120, 4072],
            // Ruined Portal 115
            [2104, 2168],
            // Ruined Portal 116
            [2072, 3288],
            // Ruined Portal 117
            [2072, -4920],
            // Ruined Portal 118
            [2056, 968],
            // Ruined Portal 119
            [2008, -4264],
            // Ruined Portal 120
            [2008, -3064],
            // Ruined Portal 121
            [1992, 5848],
            // Ruined Portal 122
            [1976, -1800],
            // Ruined Portal 123
            [1976, -904],
            // Ruined Portal 124
            [1960, -3496],
            // Ruined Portal 125
            [1672, -4248],
            // Ruined Portal 126
            [1672, -3064],
            // Ruined Portal 127
            [1672, 1608],
            // Ruined Portal 128
            [1640, 3240],
            // Ruined Portal 129
            [1624, 2584],
            // Ruined Portal 130
            [1592, 40],
            // Ruined Portal 131
            [1576, -1160],
            // Ruined Portal 132
            [1544, -3512],
            // Ruined Portal 133
            [1512, 5400],
            // Ruined Portal 134
            [1512, 5960],
            // Ruined Portal 135
            [1480, 4152],
            // Ruined Portal 136
            [1480, -2552],
            // Ruined Portal 137
            [1480, 2264],
            // Ruined Portal 138
            [1464, 4712],
            // Ruined Portal 139
            [1400, -1688],
            // Ruined Portal 140
            [1384, -5048],
            // Ruined Portal 141
            [1384, -5528],
            // Ruined Portal 142
            [1336, 744],
            // Ruined Portal 143
            [1320, -264],
            // Ruined Portal 144
            [1016, 920],
            // Ruined Portal 145
            [952, 2120],
            // Ruined Portal 146
            [936, 152],
            // Ruined Portal 147
            [920, -1752],
            // Ruined Portal 148
            [888, 5928],
            // Ruined Portal 149
            [888, -4872],
            // Ruined Portal 150
            [872, 4776],
            // Ruined Portal 151
            [872, -3560],
            // Ruined Portal 152
            [856, 1368],
            // Ruined Portal 153
            [840, -4264],
            // Ruined Portal 154
            [824, 3960],
            // Ruined Portal 155
            [808, -280],
            // Ruined Portal 156
            [792, -5560],
            // Ruined Portal 157
            [712, -2872],
            // Ruined Portal 158
            [712, -1016],
            // Ruined Portal 159
            [696, 3288],
            // Ruined Portal 160
            [680, -2296],
            // Ruined Portal 161
            [680, 2744],
            // Ruined Portal 162
            [664, 5288],
            // Ruined Portal 163
            [376, 4776],
            // Ruined Portal 164
            [376, -2856],
            // Ruined Portal 165
            [360, 2648],
            // Ruined Portal 166
            [312, 1624],
            // Ruined Portal 167
            [296, -4136],
            // Ruined Portal 168
            [280, -5112],
            // Ruined Portal 169
            [248, -5720],
            // Ruined Portal 170
            [248, -2408],
            // Ruined Portal 171
            [232, 5400],
            // Ruined Portal 172
            [232, 5912],
            // Ruined Portal 173
            [216, 4120],
            // Ruined Portal 174
            [200, -3688],
            // Ruined Portal 175
            [136, -424],
            // Ruined Portal 176
            [104, -968],
            // Ruined Portal 177
            [72, 3512],
            // Ruined Portal 178
            [72, -1896],
            // Ruined Portal 179
            [56, 184],
            // Ruined Portal 180
            [40, 2312],
            // Ruined Portal 181
            [24, 648],
            // Ruined Portal 182
            [-248, -616],
            // Ruined Portal 183
            [-264, 1608],
            // Ruined Portal 184
            [-296, 184],
            // Ruined Portal 185
            [-312, -3192],
            // Ruined Portal 186
            [-344, -4376],
            // Ruined Portal 187
            [-360, 4792],
            // Ruined Portal 188
            [-376, 2936],
            // Ruined Portal 189
            [-408, 2312],
            // Ruined Portal 190
            [-408, -1656],
            // Ruined Portal 191
            [-408, -2312],
            // Ruined Portal 192
            [-424, -3576],
            // Ruined Portal 193
            [-488, 3240],
            // Ruined Portal 194
            [-552, -4888],
            // Ruined Portal 195
            [-584, -1192],
            // Ruined Portal 196
            [-600, 5288],
            // Ruined Portal 197
            [-600, 4024],
            // Ruined Portal 198
            [-616, -5640],
            // Ruined Portal 199
            [-632, 648],
            // Ruined Portal 200
            [-920, 872],
            // Ruined Portal 201
            [-920, -3688],
            // Ruined Portal 202
            [-936, 5912],
            // Ruined Portal 203
            [-936, 1640],
            // Ruined Portal 204
            [-936, 40],
            // Ruined Portal 205
            [-1000, 5432],
            // Ruined Portal 206
            [-1000, 3480],
            // Ruined Portal 207
            [-1048, -936],
            // Ruined Portal 208
            [-1048, -3128],
            // Ruined Portal 209
            [-1048, -4744],
            // Ruined Portal 210
            [-1080, -2232],
            // Ruined Portal 211
            [-1080, -4232],
            // Ruined Portal 212
            [-1096, -424],
            // Ruined Portal 213
            [-1144, -1688],
            // Ruined Portal 214
            [-1160, 2744],
            // Ruined Portal 215
            [-1176, 4792],
            // Ruined Portal 216
            [-1192, 1992],
            // Ruined Portal 217
            [-1240, 3848],
            // Ruined Portal 218
            [-1256, -5688],
            // Ruined Portal 219
            [-1544, 5464],
            // Ruined Portal 220
            [-1544, 2200],
            // Ruined Portal 221
            [-1576, 744],
            // Ruined Portal 222
            [-1656, 4552],
            // Ruined Portal 223
            [-1656, 3848],
            // Ruined Portal 224
            [-1656, -1736],
            // Ruined Portal 225
            [-1672, -5592],
            // Ruined Portal 226
            [-1704, 2728],
            // Ruined Portal 227
            [-1704, -4904],
            // Ruined Portal 228
            [-1720, -440],
            // Ruined Portal 229
            [-1720, 152],
            // Ruined Portal 230
            [-1720, -2808],
            // Ruined Portal 231
            [-1736, -3768],
            // Ruined Portal 232
            [-1752, -4152],
            // Ruined Portal 233
            [-1768, -968],
            // Ruined Portal 234
            [-1800, 1368],
            // Ruined Portal 235
            [-1832, -2360],
            // Ruined Portal 236
            [-1864, 3288],
            // Ruined Portal 237
            [-2168, 3352],
            // Ruined Portal 238
            [-2184, -1784],
            // Ruined Portal 239
            [-2184, -3192],
            // Ruined Portal 240
            [-2216, 1656],
            // Ruined Portal 241
            [-2232, 3864],
            // Ruined Portal 242
            [-2264, -344],
            // Ruined Portal 243
            [-2328, -4776],
            // Ruined Portal 244
            [-2344, 5224],
            // Ruined Portal 245
            [-2344, -3656],
            // Ruined Portal 246
            [-2392, 2232],
            // Ruined Portal 247
            [-2424, 104],
            // Ruined Portal 248
            [-2440, -1256],
            // Ruined Portal 249
            [-2488, -2536],
            // Ruined Portal 250
            [-2504, 888],
            // Ruined Portal 251
            [-2520, -5480],
            // Ruined Portal 252
            [-2520, -4344],
            // Ruined Portal 253
            [-2536, 4872],
            // Ruined Portal 254
            [-2552, 2824],
            // Ruined Portal 255
            [-2824, 2008],
            // Ruined Portal 256
            [-2824, -5608],
            // Ruined Portal 257
            [-2888, 3480],
            // Ruined Portal 258
            [-2888, -2424],
            // Ruined Portal 259
            [-2920, 4872],
            // Ruined Portal 260
            [-2952, 216],
            // Ruined Portal 261
            [-2984, 5224],
            // Ruined Portal 262
            [-2984, 4136],
            // Ruined Portal 263
            [-3016, -1656],
            // Ruined Portal 264
            [-3032, -1272],
            // Ruined Portal 265
            [-3048, -3752],
            // Ruined Portal 266
            [-3064, -4216],
            // Ruined Portal 267
            [-3096, -3112],
            // Ruined Portal 268
            [-3112, 1608],
            // Ruined Portal 269
            [-3128, 5912],
            // Ruined Portal 270
            [-3128, -4904],
            // Ruined Portal 271
            [-3144, 920],
            // Ruined Portal 272
            [-3160, -456],
            // Ruined Portal 273
            [-3176, 2952],
            // Ruined Portal 274
            [-3464, 56],
            // Ruined Portal 275
            [-3480, 4152],
            // Ruined Portal 276
            [-3480, -1048],
            // Ruined Portal 277
            [-3496, 2824],
            // Ruined Portal 278
            [-3512, -4136],
            // Ruined Portal 279
            [-3528, -2952],
            // Ruined Portal 280
            [-3544, 2296],
            // Ruined Portal 281
            [-3608, -5368],
            // Ruined Portal 282
            [-3656, -568],
            // Ruined Portal 283
            [-3656, -1768],
            // Ruined Portal 284
            [-3672, 4776],
            // Ruined Portal 285
            [-3688, -4776],
            // Ruined Portal 286
            [-3704, 1464],
            // Ruined Portal 287
            [-3720, 3368],
            // Ruined Portal 288
            [-3720, -2200],
            // Ruined Portal 289
            [-3720, -3816],
            // Ruined Portal 290
            [-3736, 5368],
            // Ruined Portal 291
            [-3816, 808],
            // Ruined Portal 292
            [-4104, -1832],
            // Ruined Portal 293
            [-4104, -3032],
            // Ruined Portal 294
            [-4136, 3560],
            // Ruined Portal 295
            [-4136, -1080],
            // Ruined Portal 296
            [-4152, 2008],
            // Ruined Portal 297
            [-4200, 2856],
            // Ruined Portal 298
            [-4200, 1448],
            // Ruined Portal 299
            [-4232, 5304],
            // Ruined Portal 300
            [-4232, 920],
            // Ruined Portal 301
            [-4264, -5064],
            // Ruined Portal 302
            [-4296, 4088],
            // Ruined Portal 303
            [-4312, -5528],
            // Ruined Portal 304
            [-4328, -2488],
            // Ruined Portal 305
            [-4376, 4536],
            // Ruined Portal 306
            [-4376, -4408],
            // Ruined Portal 307
            [-4408, -3640],
            // Ruined Portal 308
            [-4424, 104],
            // Ruined Portal 309
            [-4456, -424],
            // Ruined Portal 310
            [-4744, -2264],
            // Ruined Portal 311
            [-4744, -2888],
            // Ruined Portal 312
            [-4760, 3336],
            // Ruined Portal 313
            [-4776, 5896],
            // Ruined Portal 314
            [-4824, 728],
            // Ruined Portal 315
            [-4840, 5288],
            // Ruined Portal 316
            [-4888, -1144],
            // Ruined Portal 317
            [-4904, -1720],
            // Ruined Portal 318
            [-4936, 2824],
            // Ruined Portal 319
            [-4952, 2168],
            // Ruined Portal 320
            [-4968, 4744],
            // Ruined Portal 321
            [-4968, -5688],
            // Ruined Portal 322
            [-5032, 3976],
            // Ruined Portal 323
            [-5032, 264],
            // Ruined Portal 324
            [-5048, -3544],
            // Ruined Portal 325
            [-5064, -4856],
            // Ruined Portal 326
            [-5080, 1608],
            // Ruined Portal 327
            [-5096, -4440],
            // Ruined Portal 328
            [-5112, -456],
            // Ruined Portal 329
            [-5368, 728],
            // Ruined Portal 330
            [-5384, -3672],
            // Ruined Portal 331
            [-5416, -2408],
            // Ruined Portal 332
            [-5432, -408],
            // Ruined Portal 333
            [-5448, 2936],
            // Ruined Portal 334
            [-5480, 2216],
            // Ruined Portal 335
            [-5480, -3176],
            // Ruined Portal 336
            [-5528, 24],
            // Ruined Portal 337
            [-5528, -1624],
            // Ruined Portal 338
            [-5544, 4792],
            // Ruined Portal 339
            [-5576, -4920],
            // Ruined Portal 340
            [-5592, -1144],
            // Ruined Portal 341
            [-5608, 1464],
            // Ruined Portal 342
            [-5656, 5800],
            // Ruined Portal 343
            [-5656, 5336],
            // Ruined Portal 344
            [-5656, 3208],
            // Ruined Portal 345
            [-5656, -5736],
            // Ruined Portal 346
            [-5704, -4360],
            // Ruined Portal 347
            [-5720, 4104],
        ];

        const end_portalCoords = [
            // End Portal 1
            [-52, -78],
        ];

        return {
            nether_portal: nether_portalCoords.map(toMarker('playerimages/Nether_Portal.png', 0.3)),
            ruined_portal: ruined_portalCoords.map(toMarker('playerimages/Ruined_Portal.png', 0.3)),
            end_portal:    end_portalCoords.map(toMarker('playerimages/End_Portal.png', 0.3)),
        };
    }
};

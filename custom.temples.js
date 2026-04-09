UnminedCustomTemples = {
    isEnabled: true,

    getByType: () => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const desert_pyramidCoords = [
            // Desert Pyramid 1
            [-3576, -2744],
            // Desert Pyramid 2
            [2216, 3592],
            // Desert Pyramid 3
            [-5976, 4328],
        ];

        const desert_wellCoords = [
            // Desert Well 1
            [3347, -2979],
            // Desert Well 2
            [3246, -2606],
            // Desert Well 3
            [-3476, -1589],
            // Desert Well 4
            [776, 2906],
            // Desert Well 5
            [793, 2915],
        ];

        const jungle_pyramidCoords = [
            // Jungle Pyramid 1
            [4152, -5864],
            // Jungle Pyramid 2
            [3736, -5880],
            // Jungle Pyramid 3
            [4888, -4834],
            // Jungle Pyramid 4
            [-4296, -1816],
            // Jungle Pyramid 5
            [-4232, -1320],
            // Jungle Pyramid 6
            [-824, 2408],
            // Jungle Pyramid 7
            [-744, 2872],
            // Jungle Pyramid 8
            [-392, 3624],
            // Jungle Pyramid 9
            [3592, 4376],
            // Jungle Pyramid 10
            [4776, 2680],
        ];

        const ocean_ruinCoords = [
            // Ocean Ruin 1
            [5944, 104],
            // Ocean Ruin 2
            [5944, 2312],
            // Ocean Ruin 3
            [5944, 4872],
            // Ocean Ruin 4
            [5912, -552],
            // Ocean Ruin 5
            [5912, 1976],
            // Ocean Ruin 6
            [5912, 1784],
            // Ocean Ruin 7
            [5880, -168],
            // Ocean Ruin 8
            [5880, 2600],
            // Ocean Ruin 9
            [5864, 1384],
            // Ocean Ruin 10
            [5832, 728],
            // Ocean Ruin 11
            [5816, 5160],
            // Ocean Ruin 12
            [5784, 392],
            // Ocean Ruin 13
            [5624, 1288],
            // Ocean Ruin 14
            [5624, 5464],
            // Ocean Ruin 15
            [5560, -520],
            // Ocean Ruin 16
            [5560, -184],
            // Ocean Ruin 17
            [5512, 2376],
            // Ocean Ruin 18
            [5496, 4984],
            // Ocean Ruin 19
            [5480, 5288],
            // Ocean Ruin 20
            [5464, -936],
            // Ocean Ruin 21
            [5464, 40],
            // Ocean Ruin 22
            [5464, 1688],
            // Ocean Ruin 23
            [5464, 2104],
            // Ocean Ruin 24
            [5448, -1144],
            // Ocean Ruin 25
            [5448, 648],
            // Ocean Ruin 26
            [5304, 2264],
            // Ocean Ruin 27
            [5304, 1640],
            // Ocean Ruin 28
            [5272, 1464],
            // Ocean Ruin 29
            [5256, -920],
            // Ocean Ruin 30
            [5256, -280],
            // Ocean Ruin 31
            [5256, 1960],
            // Ocean Ruin 32
            [5176, 712],
            // Ocean Ruin 33
            [5144, -552],
            // Ocean Ruin 34
            [4968, 2296],
            // Ocean Ruin 35
            [4968, 1704],
            // Ocean Ruin 36
            [4968, 2040],
            // Ocean Ruin 37
            [4920, -792],
            // Ocean Ruin 38
            [4824, 56],
            // Ocean Ruin 39
            [4648, 2104],
            // Ocean Ruin 40
            [4648, 1736],
            // Ocean Ruin 41
            [4632, 3368],
            // Ocean Ruin 42
            [4616, 1368],
            // Ocean Ruin 43
            [4504, 5176],
            // Ocean Ruin 44
            [4344, 2008],
            // Ocean Ruin 45
            [4312, 5240],
            // Ocean Ruin 46
            [4280, 1640],
            // Ocean Ruin 47
            [3992, 2376],
            // Ocean Ruin 48
            [3976, 3672],
            // Ocean Ruin 49
            [3960, 1752],
            // Ocean Ruin 50
            [3960, 2712],
            // Ocean Ruin 51
            [3960, 5144],
            // Ocean Ruin 52
            [3928, 3048],
            // Ocean Ruin 53
            [3896, 1960],
            // Ocean Ruin 54
            [3896, 3288],
            // Ocean Ruin 55
            [3896, 5512],
            // Ocean Ruin 56
            [3880, -5400],
            // Ocean Ruin 57
            [3848, -4952],
            // Ocean Ruin 58
            [3672, -5336],
            // Ocean Ruin 59
            [3672, -4936],
            // Ocean Ruin 60
            [3672, 5160],
            // Ocean Ruin 61
            [3656, 3000],
            // Ocean Ruin 62
            [3640, -5576],
            // Ocean Ruin 63
            [3624, -4456],
            // Ocean Ruin 64
            [3624, 2696],
            // Ocean Ruin 65
            [3624, 3608],
            // Ocean Ruin 66
            [3608, 1304],
            // Ocean Ruin 67
            [3608, 1752],
            // Ocean Ruin 68
            [3608, 4856],
            // Ocean Ruin 69
            [3576, -4680],
            // Ocean Ruin 70
            [3576, 2376],
            // Ocean Ruin 71
            [3560, 3336],
            // Ocean Ruin 72
            [3560, 5624],
            // Ocean Ruin 73
            [3528, -2808],
            // Ocean Ruin 74
            [3528, 1080],
            // Ocean Ruin 75
            [3528, 2072],
            // Ocean Ruin 76
            [3384, 5768],
            // Ocean Ruin 77
            [3384, 5128],
            // Ocean Ruin 78
            [3368, -4136],
            // Ocean Ruin 79
            [3352, -4696],
            // Ocean Ruin 80
            [3352, -2200],
            // Ocean Ruin 81
            [3352, 3224],
            // Ocean Ruin 82
            [3336, 2280],
            // Ocean Ruin 83
            [3336, 3000],
            // Ocean Ruin 84
            [3336, 3960],
            // Ocean Ruin 85
            [3320, -5096],
            // Ocean Ruin 86
            [3304, 1448],
            // Ocean Ruin 87
            [3304, 1608],
            // Ocean Ruin 88
            [3304, 5480],
            // Ocean Ruin 89
            [3224, -5288],
            // Ocean Ruin 90
            [3224, -2760],
            // Ocean Ruin 91
            [3224, 1976],
            // Ocean Ruin 92
            [3208, -4360],
            // Ocean Ruin 93
            [3208, -2552],
            // Ocean Ruin 94
            [3064, -1480],
            // Ocean Ruin 95
            [3064, 1368],
            // Ocean Ruin 96
            [3048, 2328],
            // Ocean Ruin 97
            [3032, 5160],
            // Ocean Ruin 98
            [3016, 1976],
            // Ocean Ruin 99
            [3000, -1880],
            // Ocean Ruin 100
            [3000, 3048],
            // Ocean Ruin 101
            [3000, 3384],
            // Ocean Ruin 102
            [2984, 2728],
            // Ocean Ruin 103
            [2984, 4968],
            // Ocean Ruin 104
            [2968, 4008],
            // Ocean Ruin 105
            [2952, -4760],
            // Ocean Ruin 106
            [2952, -2216],
            // Ocean Ruin 107
            [2936, 1672],
            // Ocean Ruin 108
            [2936, 5880],
            // Ocean Ruin 109
            [2920, -5064],
            // Ocean Ruin 110
            [2920, 5512],
            // Ocean Ruin 111
            [2904, -2504],
            // Ocean Ruin 112
            [2744, 3352],
            // Ocean Ruin 113
            [2744, 2376],
            // Ocean Ruin 114
            [2728, -5112],
            // Ocean Ruin 115
            [2728, 2744],
            // Ocean Ruin 116
            [2728, 2904],
            // Ocean Ruin 117
            [2728, 3960],
            // Ocean Ruin 118
            [2664, 1688],
            // Ocean Ruin 119
            [2648, 5464],
            // Ocean Ruin 120
            [2648, 5912],
            // Ocean Ruin 121
            [2632, -5304],
            // Ocean Ruin 122
            [2632, 1976],
            // Ocean Ruin 123
            [2632, 3704],
            // Ocean Ruin 124
            [2616, -4632],
            // Ocean Ruin 125
            [2616, -1576],
            // Ocean Ruin 126
            [2616, -2056],
            // Ocean Ruin 127
            [2600, -1848],
            // Ocean Ruin 128
            [2584, 1352],
            // Ocean Ruin 129
            [2584, 4824],
            // Ocean Ruin 130
            [2568, 5240],
            // Ocean Ruin 131
            [2424, -216],
            // Ocean Ruin 132
            [2424, 1432],
            // Ocean Ruin 133
            [2424, 3048],
            // Ocean Ruin 134
            [2424, 4984],
            // Ocean Ruin 135
            [2408, -2392],
            // Ocean Ruin 136
            [2408, -2184],
            // Ocean Ruin 137
            [2408, -1912],
            // Ocean Ruin 138
            [2392, 1688],
            // Ocean Ruin 139
            [2376, -5704],
            // Ocean Ruin 140
            [2376, 2392],
            // Ocean Ruin 141
            [2344, -584],
            // Ocean Ruin 142
            [2344, 3640],
            // Ocean Ruin 143
            [2344, 5272],
            // Ocean Ruin 144
            [2328, 1128],
            // Ocean Ruin 145
            [2312, -4776],
            // Ocean Ruin 146
            [2312, 2616],
            // Ocean Ruin 147
            [2312, 5448],
            // Ocean Ruin 148
            [2296, -1208],
            // Ocean Ruin 149
            [2280, 4584],
            // Ocean Ruin 150
            [2280, 5800],
            // Ocean Ruin 151
            [2264, 3352],
            // Ocean Ruin 152
            [2264, 2056],
            // Ocean Ruin 153
            [2104, 1128],
            // Ocean Ruin 154
            [2104, 4296],
            // Ocean Ruin 155
            [2104, 4536],
            // Ocean Ruin 156
            [2072, -184],
            // Ocean Ruin 157
            [2072, 2424],
            // Ocean Ruin 158
            [2056, -1256],
            // Ocean Ruin 159
            [2056, 3000],
            // Ocean Ruin 160
            [2040, 5768],
            // Ocean Ruin 161
            [2024, -456],
            // Ocean Ruin 162
            [2024, 3624],
            // Ocean Ruin 163
            [2024, 5160],
            // Ocean Ruin 164
            [2008, -2104],
            // Ocean Ruin 165
            [2008, 2744],
            // Ocean Ruin 166
            [2008, 2088],
            // Ocean Ruin 167
            [2008, 4984],
            // Ocean Ruin 168
            [2008, 5608],
            // Ocean Ruin 169
            [1992, 728],
            // Ocean Ruin 170
            [1992, 3864],
            // Ocean Ruin 171
            [1976, -1432],
            // Ocean Ruin 172
            [1960, -920],
            // Ocean Ruin 173
            [1960, 1656],
            // Ocean Ruin 174
            [1960, 3256],
            // Ocean Ruin 175
            [1944, 1416],
            // Ocean Ruin 176
            [1928, -2472],
            // Ocean Ruin 177
            [1784, 1752],
            // Ocean Ruin 178
            [1784, 5784],
            // Ocean Ruin 179
            [1768, -136],
            // Ocean Ruin 180
            [1736, -488],
            // Ocean Ruin 181
            [1736, 408],
            // Ocean Ruin 182
            [1720, -2216],
            // Ocean Ruin 183
            [1720, 3272],
            // Ocean Ruin 184
            [1720, 2024],
            // Ocean Ruin 185
            [1720, 4264],
            // Ocean Ruin 186
            [1704, -2376],
            // Ocean Ruin 187
            [1704, 1144],
            // Ocean Ruin 188
            [1704, 3672],
            // Ocean Ruin 189
            [1688, -2856],
            // Ocean Ruin 190
            [1688, 4616],
            // Ocean Ruin 191
            [1672, -3016],
            // Ocean Ruin 192
            [1672, 2680],
            // Ocean Ruin 193
            [1672, 2248],
            // Ocean Ruin 194
            [1672, 4808],
            // Ocean Ruin 195
            [1656, -792],
            // Ocean Ruin 196
            [1656, -1128],
            // Ocean Ruin 197
            [1624, -1432],
            // Ocean Ruin 198
            [1624, 120],
            // Ocean Ruin 199
            [1624, 5144],
            // Ocean Ruin 200
            [1608, -1880],
            // Ocean Ruin 201
            [1608, 808],
            // Ocean Ruin 202
            [1608, 3896],
            // Ocean Ruin 203
            [1608, 5496],
            // Ocean Ruin 204
            [1448, -2440],
            // Ocean Ruin 205
            [1448, -2232],
            // Ocean Ruin 206
            [1448, 5128],
            // Ocean Ruin 207
            [1432, 5832],
            // Ocean Ruin 208
            [1416, 1016],
            // Ocean Ruin 209
            [1400, 504],
            // Ocean Ruin 210
            [1400, 5592],
            // Ocean Ruin 211
            [1384, -168],
            // Ocean Ruin 212
            [1384, 4280],
            // Ocean Ruin 213
            [1368, -616],
            // Ocean Ruin 214
            [1368, 4584],
            // Ocean Ruin 215
            [1352, -5064],
            // Ocean Ruin 216
            [1352, -1896],
            // Ocean Ruin 217
            [1352, -776],
            // Ocean Ruin 218
            [1352, 760],
            // Ocean Ruin 219
            [1352, 3912],
            // Ocean Ruin 220
            [1352, 4936],
            // Ocean Ruin 221
            [1336, -1448],
            // Ocean Ruin 222
            [1336, -1096],
            // Ocean Ruin 223
            [1320, 56],
            // Ocean Ruin 224
            [1304, -2792],
            // Ocean Ruin 225
            [1304, 1976],
            // Ocean Ruin 226
            [1144, 3032],
            // Ocean Ruin 227
            [1128, -1528],
            // Ocean Ruin 228
            [1128, -904],
            // Ocean Ruin 229
            [1128, 3960],
            // Ocean Ruin 230
            [1128, 4568],
            // Ocean Ruin 231
            [1112, -3016],
            // Ocean Ruin 232
            [1112, 328],
            // Ocean Ruin 233
            [1096, -2536],
            // Ocean Ruin 234
            [1096, -1896],
            // Ocean Ruin 235
            [1080, -3448],
            // Ocean Ruin 236
            [1080, 4840],
            // Ocean Ruin 237
            [1064, 664],
            // Ocean Ruin 238
            [1048, -5080],
            // Ocean Ruin 239
            [1048, 1064],
            // Ocean Ruin 240
            [1048, 1288],
            // Ocean Ruin 241
            [1032, -1192],
            // Ocean Ruin 242
            [1032, -600],
            // Ocean Ruin 243
            [1032, 2296],
            // Ocean Ruin 244
            [1016, 5560],
            // Ocean Ruin 245
            [1000, 5896],
            // Ocean Ruin 246
            [968, -2088],
            // Ocean Ruin 247
            [968, 5176],
            // Ocean Ruin 248
            [808, -904],
            // Ocean Ruin 249
            [792, 424],
            // Ocean Ruin 250
            [792, 984],
            // Ocean Ruin 251
            [792, 1352],
            // Ocean Ruin 252
            [792, 5192],
            // Ocean Ruin 253
            [776, -2392],
            // Ocean Ruin 254
            [776, -296],
            // Ocean Ruin 255
            [776, 4216],
            // Ocean Ruin 256
            [776, 5512],
            // Ocean Ruin 257
            [760, -3768],
            // Ocean Ruin 258
            [760, -568],
            // Ocean Ruin 259
            [744, -2712],
            // Ocean Ruin 260
            [744, 4600],
            // Ocean Ruin 261
            [728, -4984],
            // Ocean Ruin 262
            [728, -4440],
            // Ocean Ruin 263
            [728, -3464],
            // Ocean Ruin 264
            [728, 2984],
            // Ocean Ruin 265
            [728, 5880],
            // Ocean Ruin 266
            [712, -2184],
            // Ocean Ruin 267
            [696, -6024],
            // Ocean Ruin 268
            [696, -1864],
            // Ocean Ruin 269
            [696, -1128],
            // Ocean Ruin 270
            [680, -3016],
            // Ocean Ruin 271
            [648, -5608],
            // Ocean Ruin 272
            [648, -4632],
            // Ocean Ruin 273
            [472, -1896],
            // Ocean Ruin 274
            [472, -1480],
            // Ocean Ruin 275
            [472, 4664],
            // Ocean Ruin 276
            [456, -4712],
            // Ocean Ruin 277
            [456, -3976],
            // Ocean Ruin 278
            [456, -2760],
            // Ocean Ruin 279
            [456, -872],
            // Ocean Ruin 280
            [440, -1256],
            // Ocean Ruin 281
            [440, 1288],
            // Ocean Ruin 282
            [440, 5304],
            // Ocean Ruin 283
            [440, 5944],
            // Ocean Ruin 284
            [408, -4456],
            // Ocean Ruin 285
            [408, -3176],
            // Ocean Ruin 286
            [408, -600],
            // Ocean Ruin 287
            [408, 5496],
            // Ocean Ruin 288
            [392, -3512],
            // Ocean Ruin 289
            [392, 328],
            // Ocean Ruin 290
            [360, -2552],
            // Ocean Ruin 291
            [360, 728],
            // Ocean Ruin 292
            [360, 1032],
            // Ocean Ruin 293
            [344, -136],
            // Ocean Ruin 294
            [344, 168],
            // Ocean Ruin 295
            [328, -5928],
            // Ocean Ruin 296
            [184, -5080],
            // Ocean Ruin 297
            [168, -3352],
            // Ocean Ruin 298
            [168, -776],
            // Ocean Ruin 299
            [152, -1416],
            // Ocean Ruin 300
            [152, 1064],
            // Ocean Ruin 301
            [136, -4136],
            // Ocean Ruin 302
            [104, -2392],
            // Ocean Ruin 303
            [88, -1752],
            // Ocean Ruin 304
            [88, 1400],
            // Ocean Ruin 305
            [72, -216],
            // Ocean Ruin 306
            [72, 776],
            // Ocean Ruin 307
            [56, -3176],
            // Ocean Ruin 308
            [56, 360],
            // Ocean Ruin 309
            [40, -5752],
            // Ocean Ruin 310
            [40, -2104],
            // Ocean Ruin 311
            [40, 120],
            // Ocean Ruin 312
            [8, -2760],
            // Ocean Ruin 313
            [-136, -5720],
            // Ocean Ruin 314
            [-152, -5320],
            // Ocean Ruin 315
            [-152, 792],
            // Ocean Ruin 316
            [-168, -1768],
            // Ocean Ruin 317
            [-168, -3192],
            // Ocean Ruin 318
            [-200, -2232],
            // Ocean Ruin 319
            [-296, -2376],
            // Ocean Ruin 320
            [-312, 1112],
            // Ocean Ruin 321
            [-456, 792],
            // Ocean Ruin 322
            [-488, 1144],
            // Ocean Ruin 323
            [-504, -3080],
            // Ocean Ruin 324
            [-504, -2856],
            // Ocean Ruin 325
            [-504, -1912],
            // Ocean Ruin 326
            [-504, -2088],
            // Ocean Ruin 327
            [-536, -6056],
            // Ocean Ruin 328
            [-536, -1592],
            // Ocean Ruin 329
            [-568, 2024],
            // Ocean Ruin 330
            [-600, 1704],
            // Ocean Ruin 331
            [-600, 2280],
            // Ocean Ruin 332
            [-776, 152],
            // Ocean Ruin 333
            [-792, 5480],
            // Ocean Ruin 334
            [-824, 1656],
            // Ocean Ruin 335
            [-840, -5032],
            // Ocean Ruin 336
            [-840, 4616],
            // Ocean Ruin 337
            [-840, 5192],
            // Ocean Ruin 338
            [-904, 4168],
            // Ocean Ruin 339
            [-920, 1384],
            // Ocean Ruin 340
            [-936, 792],
            // Ocean Ruin 341
            [-952, 5912],
            // Ocean Ruin 342
            [-1128, 1304],
            // Ocean Ruin 343
            [-1128, 4952],
            // Ocean Ruin 344
            [-1160, -1416],
            // Ocean Ruin 345
            [-1160, 3672],
            // Ocean Ruin 346
            [-1176, -4648],
            // Ocean Ruin 347
            [-1176, 1048],
            // Ocean Ruin 348
            [-1176, 1992],
            // Ocean Ruin 349
            [-1176, 4616],
            // Ocean Ruin 350
            [-1192, 5224],
            // Ocean Ruin 351
            [-1224, -4936],
            // Ocean Ruin 352
            [-1224, 776],
            // Ocean Ruin 353
            [-1240, 3928],
            // Ocean Ruin 354
            [-1240, 5448],
            // Ocean Ruin 355
            [-1256, -4344],
            // Ocean Ruin 356
            [-1256, 4328],
            // Ocean Ruin 357
            [-1272, 5848],
            // Ocean Ruin 358
            [-1432, 4008],
            // Ocean Ruin 359
            [-1432, 3624],
            // Ocean Ruin 360
            [-1464, -5048],
            // Ocean Ruin 361
            [-1464, 5544],
            // Ocean Ruin 362
            [-1496, -1480],
            // Ocean Ruin 363
            [-1496, 2584],
            // Ocean Ruin 364
            [-1512, -1752],
            // Ocean Ruin 365
            [-1528, -2104],
            // Ocean Ruin 366
            [-1528, 1400],
            // Ocean Ruin 367
            [-1528, 4200],
            // Ocean Ruin 368
            [-1544, -4648],
            // Ocean Ruin 369
            [-1544, 2408],
            // Ocean Ruin 370
            [-1544, 3384],
            // Ocean Ruin 371
            [-1560, 4632],
            // Ocean Ruin 372
            [-1576, 5128],
            // Ocean Ruin 373
            [-1592, 2040],
            // Ocean Ruin 374
            [-1592, 3032],
            // Ocean Ruin 375
            [-1592, 4872],
            // Ocean Ruin 376
            [-1752, -1416],
            // Ocean Ruin 377
            [-1752, 2376],
            // Ocean Ruin 378
            [-1752, 5896],
            // Ocean Ruin 379
            [-1768, 4200],
            // Ocean Ruin 380
            [-1784, 1640],
            // Ocean Ruin 381
            [-1800, 3336],
            // Ocean Ruin 382
            [-1800, 4968],
            // Ocean Ruin 383
            [-1816, -5640],
            // Ocean Ruin 384
            [-1832, -1272],
            // Ocean Ruin 385
            [-1832, 2056],
            // Ocean Ruin 386
            [-1832, 3576],
            // Ocean Ruin 387
            [-1848, -2136],
            // Ocean Ruin 388
            [-1864, -888],
            // Ocean Ruin 389
            [-1880, -4952],
            // Ocean Ruin 390
            [-1880, 1448],
            // Ocean Ruin 391
            [-1880, 5224],
            // Ocean Ruin 392
            [-1896, 3880],
            // Ocean Ruin 393
            [-1896, 3032],
            // Ocean Ruin 394
            [-1896, 5448],
            // Ocean Ruin 395
            [-1912, -5272],
            // Ocean Ruin 396
            [-1912, 1144],
            // Ocean Ruin 397
            [-1912, 4616],
            // Ocean Ruin 398
            [-2056, 1768],
            // Ocean Ruin 399
            [-2056, 3704],
            // Ocean Ruin 400
            [-2072, 2056],
            // Ocean Ruin 401
            [-2088, 4216],
            // Ocean Ruin 402
            [-2104, -5592],
            // Ocean Ruin 403
            [-2104, -5096],
            // Ocean Ruin 404
            [-2104, -3080],
            // Ocean Ruin 405
            [-2104, 1352],
            // Ocean Ruin 406
            [-2120, -3368],
            // Ocean Ruin 407
            [-2136, -1160],
            // Ocean Ruin 408
            [-2136, 2632],
            // Ocean Ruin 409
            [-2152, 2360],
            // Ocean Ruin 410
            [-2152, 3896],
            // Ocean Ruin 411
            [-2152, 3352],
            // Ocean Ruin 412
            [-2168, 4824],
            // Ocean Ruin 413
            [-2184, -2872],
            // Ocean Ruin 414
            [-2184, 4536],
            // Ocean Ruin 415
            [-2216, 360],
            // Ocean Ruin 416
            [-2216, 2984],
            // Ocean Ruin 417
            [-2232, -5416],
            // Ocean Ruin 418
            [-2376, 4344],
            // Ocean Ruin 419
            [-2376, 4520],
            // Ocean Ruin 420
            [-2392, -5576],
            // Ocean Ruin 421
            [-2424, 1944],
            // Ocean Ruin 422
            [-2440, -5368],
            // Ocean Ruin 423
            [-2440, -3480],
            // Ocean Ruin 424
            [-2440, -1432],
            // Ocean Ruin 425
            [-2440, 4984],
            // Ocean Ruin 426
            [-2456, -3016],
            // Ocean Ruin 427
            [-2472, -5080],
            // Ocean Ruin 428
            [-2472, 3256],
            // Ocean Ruin 429
            [-2488, 2296],
            // Ocean Ruin 430
            [-2488, 3000],
            // Ocean Ruin 431
            [-2504, -5960],
            // Ocean Ruin 432
            [-2504, -1160],
            // Ocean Ruin 433
            [-2504, 3528],
            // Ocean Ruin 434
            [-2504, 2744],
            // Ocean Ruin 435
            [-2520, -3736],
            // Ocean Ruin 436
            [-2520, -232],
            // Ocean Ruin 437
            [-2536, -3992],
            // Ocean Ruin 438
            [-2552, -456],
            // Ocean Ruin 439
            [-2552, 5240],
            // Ocean Ruin 440
            [-2696, -136],
            // Ocean Ruin 441
            [-2696, 4840],
            // Ocean Ruin 442
            [-2712, 3576],
            // Ocean Ruin 443
            [-2760, 88],
            // Ocean Ruin 444
            [-2792, -3816],
            // Ocean Ruin 445
            [-2808, -5352],
            // Ocean Ruin 446
            [-2808, -5080],
            // Ocean Ruin 447
            [-2808, 3896],
            // Ocean Ruin 448
            [-2824, -5640],
            // Ocean Ruin 449
            [-2824, -2776],
            // Ocean Ruin 450
            [-2840, -616],
            // Ocean Ruin 451
            [-2840, 2072],
            // Ocean Ruin 452
            [-2840, 2728],
            // Ocean Ruin 453
            [-2856, 3384],
            // Ocean Ruin 454
            [-2872, -3128],
            // Ocean Ruin 455
            [-2872, -920],
            // Ocean Ruin 456
            [-3032, -584],
            // Ocean Ruin 457
            [-3048, 3656],
            // Ocean Ruin 458
            [-3064, 2648],
            // Ocean Ruin 459
            [-3096, -3096],
            // Ocean Ruin 460
            [-3096, 40],
            // Ocean Ruin 461
            [-3112, -6024],
            // Ocean Ruin 462
            [-3160, -4024],
            // Ocean Ruin 463
            [-3160, 3368],
            // Ocean Ruin 464
            [-3176, -3800],
            // Ocean Ruin 465
            [-3352, -600],
            // Ocean Ruin 466
            [-3384, -3112],
            // Ocean Ruin 467
            [-3416, -3384],
            // Ocean Ruin 468
            [-3416, -3736],
            // Ocean Ruin 469
            [-3416, 2584],
            // Ocean Ruin 470
            [-3416, 3208],
            // Ocean Ruin 471
            [-3416, 3640],
            // Ocean Ruin 472
            [-3448, -3976],
            // Ocean Ruin 473
            [-3464, -6040],
            // Ocean Ruin 474
            [-3512, 3880],
            // Ocean Ruin 475
            [-3688, -6008],
            // Ocean Ruin 476
            [-3688, -3496],
            // Ocean Ruin 477
            [-3688, 3640],
            // Ocean Ruin 478
            [-3720, 3384],
            // Ocean Ruin 479
            [-3800, -552],
            // Ocean Ruin 480
            [-3816, 2952],
            // Ocean Ruin 481
            [-3992, -520],
            // Ocean Ruin 482
            [-3992, 3240],
            // Ocean Ruin 483
            [-4008, -4456],
            // Ocean Ruin 484
            [-4024, -5336],
            // Ocean Ruin 485
            [-4040, -5576],
            // Ocean Ruin 486
            [-4056, -4648],
            // Ocean Ruin 487
            [-4088, -4056],
            // Ocean Ruin 488
            [-4104, -840],
            // Ocean Ruin 489
            [-4152, -6040],
            // Ocean Ruin 490
            [-4296, -4328],
            // Ocean Ruin 491
            [-4312, -4648],
            // Ocean Ruin 492
            [-4312, -4120],
            // Ocean Ruin 493
            [-4328, -5896],
            // Ocean Ruin 494
            [-4392, -5720],
            // Ocean Ruin 495
            [-4392, -5048],
            // Ocean Ruin 496
            [-4424, -5256],
            // Ocean Ruin 497
            [-4472, -1480],
            // Ocean Ruin 498
            [-4472, 2344],
            // Ocean Ruin 499
            [-4472, 2104],
            // Ocean Ruin 500
            [-4632, -5656],
            // Ocean Ruin 501
            [-4680, -4424],
            // Ocean Ruin 502
            [-4680, 2264],
            // Ocean Ruin 503
            [-4696, -5912],
            // Ocean Ruin 504
            [-4696, -4680],
            // Ocean Ruin 505
            [-4728, -3752],
            // Ocean Ruin 506
            [-4760, -5288],
            // Ocean Ruin 507
            [-4776, -4152],
            // Ocean Ruin 508
            [-4792, -5048],
            // Ocean Ruin 509
            [-4936, -472],
            // Ocean Ruin 510
            [-4984, -4328],
            // Ocean Ruin 511
            [-4984, 5304],
            // Ocean Ruin 512
            [-5000, 5848],
            // Ocean Ruin 513
            [-5016, -1464],
            // Ocean Ruin 514
            [-5032, -3768],
            // Ocean Ruin 515
            [-5048, -5416],
            // Ocean Ruin 516
            [-5064, 728],
            // Ocean Ruin 517
            [-5096, -4152],
            // Ocean Ruin 518
            [-5112, -4936],
            // Ocean Ruin 519
            [-5112, -1736],
            // Ocean Ruin 520
            [-5112, -1176],
            // Ocean Ruin 521
            [-5272, -1880],
            // Ocean Ruin 522
            [-5320, -5096],
            // Ocean Ruin 523
            [-5336, -1448],
            // Ocean Ruin 524
            [-5368, 5880],
            // Ocean Ruin 525
            [-5368, 5560],
            // Ocean Ruin 526
            [-5416, -2232],
            // Ocean Ruin 527
            [-5432, -1208],
            // Ocean Ruin 528
            [-5576, -5032],
            // Ocean Ruin 529
            [-5640, -488],
            // Ocean Ruin 530
            [-5672, -3496],
            // Ocean Ruin 531
            [-5688, -2696],
            // Ocean Ruin 532
            [-5688, 5944],
            // Ocean Ruin 533
            [-5704, -888],
            // Ocean Ruin 534
            [-5720, -2520],
            // Ocean Ruin 535
            [-5720, 5608],
            // Ocean Ruin 536
            [-5896, -3400],
            // Ocean Ruin 537
            [-5928, -2088],
            // Ocean Ruin 538
            [-5976, -2488],
            // Ocean Ruin 539
            [-5992, 1320],
            // Ocean Ruin 540
            [-6040, -2808],
            // Ocean Ruin 541
            [-6040, -1192],
        ];

        const ocean_monumentCoords = [
            // Ocean Monument 1
            [5912, 5256],
            // Ocean Monument 2
            [5880, -1208],
            // Ocean Monument 3
            [5800, -376],
            // Ocean Monument 4
            [5736, -744],
            // Ocean Monument 5
            [5336, -648],
            // Ocean Monument 6
            [5272, 1800],
            // Ocean Monument 7
            [4296, 1784],
            // Ocean Monument 8
            [3864, 2328],
            // Ocean Monument 9
            [3832, 1784],
            // Ocean Monument 10
            [3784, -4344],
            // Ocean Monument 11
            [3656, 3416],
            // Ocean Monument 12
            [3640, 5240],
            // Ocean Monument 13
            [3320, 1336],
            // Ocean Monument 14
            [2744, 1288],
            // Ocean Monument 15
            [2728, -1800],
            // Ocean Monument 16
            [2712, 5288],
            // Ocean Monument 17
            [2664, 1784],
            // Ocean Monument 18
            [2360, 5944],
            // Ocean Monument 19
            [2216, 5416],
            // Ocean Monument 20
            [1880, 4712],
            // Ocean Monument 21
            [1800, 5256],
            // Ocean Monument 22
            [1752, -312],
            // Ocean Monument 23
            [1672, 1320],
            // Ocean Monument 24
            [1656, 5848],
            // Ocean Monument 25
            [1624, 648],
            // Ocean Monument 26
            [1560, -824],
            // Ocean Monument 27
            [1352, -872],
            // Ocean Monument 28
            [1304, -2232],
            // Ocean Monument 29
            [1304, 5960],
            // Ocean Monument 30
            [1272, -200],
            // Ocean Monument 31
            [1224, 248],
            // Ocean Monument 32
            [1176, 5400],
            // Ocean Monument 33
            [1112, -1672],
            // Ocean Monument 34
            [1112, -1432],
            // Ocean Monument 35
            [920, -1336],
            // Ocean Monument 36
            [712, 776],
            // Ocean Monument 37
            [648, -888],
            // Ocean Monument 38
            [616, -2248],
            // Ocean Monument 39
            [600, -1736],
            // Ocean Monument 40
            [344, -2152],
            // Ocean Monument 41
            [328, 1128],
            // Ocean Monument 42
            [296, -1720],
            // Ocean Monument 43
            [296, -792],
            // Ocean Monument 44
            [248, -1368],
            // Ocean Monument 45
            [232, -2840],
            // Ocean Monument 46
            [56, -6040],
            // Ocean Monument 47
            [-280, -6040],
            // Ocean Monument 48
            [-376, -1864],
            // Ocean Monument 49
            [-1368, 3768],
            // Ocean Monument 50
            [-1480, 5784],
            // Ocean Monument 51
            [-1752, 3688],
            // Ocean Monument 52
            [-1752, 3240],
            // Ocean Monument 53
            [-1800, 4792],
            // Ocean Monument 54
            [-1864, 1848],
            // Ocean Monument 55
            [-1912, 4264],
            // Ocean Monument 56
            [-1912, 2760],
            // Ocean Monument 57
            [-1960, 2360],
            // Ocean Monument 58
            [-2280, 4392],
            // Ocean Monument 59
            [-2312, 2696],
            // Ocean Monument 60
            [-2328, 2264],
            // Ocean Monument 61
            [-2456, -1256],
            // Ocean Monument 62
            [-2472, -2856],
            // Ocean Monument 63
            [-2488, 4888],
            // Ocean Monument 64
            [-3288, 3384],
            // Ocean Monument 65
            [-3416, 3816],
            // Ocean Monument 66
            [-3768, -376],
            // Ocean Monument 67
            [-3944, -5912],
            // Ocean Monument 68
            [-4312, -5384],
            // Ocean Monument 69
            [-4824, -4360],
            // Ocean Monument 70
            [-4936, -5432],
            // Ocean Monument 71
            [-5976, 1704],
        ];

        return {
            desert_pyramid:  desert_pyramidCoords.map(toMarker('playerimages/Desert_Pyramid.png', 0.3)),
            desert_well:     desert_wellCoords.map(toMarker('playerimages/Desert_Well.png', 0.3)),
            jungle_pyramid:  jungle_pyramidCoords.map(toMarker('playerimages/Jungle_Pyramid.png', 0.3)),
            ocean_ruin:      ocean_ruinCoords.map(toMarker('playerimages/Ocean_Ruin.png', 0.3)),
            ocean_monument:  ocean_monumentCoords.map(toMarker('playerimages/Ocean_Monument.png', 0.3)),
        };
    }
};

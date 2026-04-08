UnminedCustomUnderground = {
    isEnabled: true,

    getByType: () => {
        const toMarker = (image, scale) => ([x, z]) => ({
            x, z,
            image,
            imageAnchor: [0.5, 1],
            imageScale: scale,
        });

        const ancient_cityCoords = [
            // Ancient City 1
            [5128, 2920],
            // Ancient City 2
            [3960, -3000],
            // Ancient City 3
            [3928, -2216],
            // Ancient City 4
            [3592, -1800],
            // Ancient City 5
            [2856, -3704],
            // Ancient City 6
            [2824, -3320],
            // Ancient City 7
            [-774, -184],
            // Ancient City 8
            [-1816, 152],
            // Ancient City 9
            [-2184, 904],
            // Ancient City 10
            [-3704, 5464],
            // Ancient City 11
            [-3800, -4856],
            // Ancient City 12
            [-3816, 5816],
            // Ancient City 13
            [-4520, 1640],
            // Ancient City 14
            [-4568, 488],
            // Ancient City 15
            [-5272, -2568],
            // Ancient City 16
            [-5656, -3000],
        ];

        const abandoned_mineshaftCoords = [
            // Mineshaft 1
            [-5992, -3864],
            // Mineshaft 2
            [-5992, -3656],
            // Mineshaft 3
            [-5992, 2168],
            // Mineshaft 4
            [-5592, 2296],
            // Mineshaft 5
            [-5992, 5528],
            // Mineshaft 6
            [-5992, 5224],
            // Mineshaft 7
            [-5976, -5544],
            // Mineshaft 8
            [-5976, 2456],
            // Mineshaft 9
            [-5976, 3976],
            // Mineshaft 10
            [-5960, -2200],
            // Mineshaft 11
            [-5960, 2712],
            // Mineshaft 12
            [-5960, 3416],
            // Mineshaft 13
            [-5944, -328],
            // Mineshaft 14
            [-5944, 1800],
            // Mineshaft 15
            [-5944, 3144],
            // Mineshaft 16
            [-5944, 3816],
            // Mineshaft 17
            [-5928, -5768],
            // Mineshaft 18
            [-5928, -3528],
            // Mineshaft 19
            [-5928, -2568],
            // Mineshaft 20
            [-5928, -2216],
            // Mineshaft 21
            [-5864, -4904],
            // Mineshaft 22
            [-5864, -3928],
            // Mineshaft 23
            [-5848, -2200],
            // Mineshaft 24
            [-5848, -648],
            // Mineshaft 25
            [-5848, 648],
            // Mineshaft 26
            [-5848, 3560],
            // Mineshaft 27
            [-5832, -5320],
            // Mineshaft 28
            [-5832, -3240],
            // Mineshaft 29
            [-5832, -3080],
            // Mineshaft 30
            [-5832, -1576],
            // Mineshaft 31
            [-5832, 136],
            // Mineshaft 32
            [-5832, 328],
            // Mineshaft 33
            [-5832, 2952],
            // Mineshaft 34
            [-5832, 3192],
            // Mineshaft 35
            [-5832, 4104],
            // Mineshaft 36
            [-5816, -200],
            // Mineshaft 37
            [-5816, 392],
            // Mineshaft 38
            [-5800, -1784],
            // Mineshaft 39
            [-5800, 1752],
            // Mineshaft 40
            [-5784, -5112],
            // Mineshaft 41
            [-5784, -1224],
            // Mineshaft 42
            [-5784, 5688],
            // Mineshaft 43
            [-5768, -5416],
            // Mineshaft 44
            [-5768, -3704],
            // Mineshaft 45
            [-5752, -3800],
            // Mineshaft 46
            [-5752, -3112],
            // Mineshaft 47
            [-5752, 3336],
            // Mineshaft 48
            [-5752, 3432],
            // Mineshaft 49
            [-5736, 3048],
            // Mineshaft 50
            [-5736, 5080],
            // Mineshaft 51
            [-5736, 4840],
            // Mineshaft 52
            [-5720, -568],
            // Mineshaft 53
            [-5720, 4664],
            // Mineshaft 54
            [-5704, -1112],
            // Mineshaft 55
            [-5688, -5032],
            // Mineshaft 56
            [-5688, -2328],
            // Mineshaft 57
            [-5688, -3544],
            // Mineshaft 58
            [-5688, -1848],
            // Mineshaft 59
            [-5688, 2680],
            // Mineshaft 60
            [-5672, 5160],
            // Mineshaft 61
            [-5672, -5016],
            // Mineshaft 62
            [-5672, -360],
            // Mineshaft 63
            [-5672, 4824],
            // Mineshaft 64
            [-5656, 3992],
            // Mineshaft 65
            [-5640, -1240],
            // Mineshaft 66
            [-5624, -1640],
            // Mineshaft 67
            [-5624, 2296],
            // Mineshaft 68
            [-5608, -4296],
            // Mineshaft 69
            [-5608, -2680],
            // Mineshaft 70
            [-5608, -3400],
            // Mineshaft 71
            [-5608, -1816],
            // Mineshaft 72
            [-5608, -664],
            // Mineshaft 73
            [-5608, 1624],
            // Mineshaft 74
            [-5608, 4072],
            // Mineshaft 75
            [-5608, 4024],
            // Mineshaft 76
            [-5608, 4968],
            // Mineshaft 77
            [-5592, -4408],
            // Mineshaft 78
            [-5592, -2648],
            // Mineshaft 79
            [-5592, 3528],
            // Mineshaft 80
            [-5576, -3464],
            // Mineshaft 81
            [-5576, 200],
            // Mineshaft 82
            [-5576, 1528],
            // Mineshaft 83
            [-5576, 3176],
            // Mineshaft 84
            [-5560, -952],
            // Mineshaft 85
            [-5560, 2984],
            // Mineshaft 86
            [-5560, 3048],
            // Mineshaft 87
            [-5544, -1208],
            // Mineshaft 88
            [-5544, -24],
            // Mineshaft 89
            [-5544, 4008],
            // Mineshaft 90
            [-5528, -4296],
            // Mineshaft 91
            [-5512, -904],
            // Mineshaft 92
            [-5512, 4424],
            // Mineshaft 93
            [-5512, 5384],
            // Mineshaft 94
            [-5512, 5560],
            // Mineshaft 95
            [-5496, -344],
            // Mineshaft 96
            [-5496, 1288],
            // Mineshaft 97
            [-5480, -872],
            // Mineshaft 98
            [-5480, 2328],
            // Mineshaft 99
            [-5464, -1208],
            // Mineshaft 100
            [-5464, -600],
            // Mineshaft 101
            [-5464, 4008],
            // Mineshaft 102
            [-5464, 5464],
            // Mineshaft 103
            [-5448, -1176],
            // Mineshaft 104
            [-5448, -568],
            // Mineshaft 105
            [-5448, -280],
            // Mineshaft 106
            [-5432, -5928],
            // Mineshaft 107
            [-5432, -2392],
            // Mineshaft 108
            [-5432, -1896],
            // Mineshaft 109
            [-5432, 5784],
            // Mineshaft 110
            [-5416, -4200],
            // Mineshaft 111
            [-5416, -920],
            // Mineshaft 112
            [-5416, 4776],
            // Mineshaft 113
            [-5400, -5640],
            // Mineshaft 114
            [-5400, 3976],
            // Mineshaft 115
            [-5400, 5544],
            // Mineshaft 116
            [-5384, 2120],
            // Mineshaft 117
            [-5384, 1896],
            // Mineshaft 118
            [-5368, -2456],
            // Mineshaft 119
            [-5368, -648],
            // Mineshaft 120
            [-5352, -5784],
            // Mineshaft 121
            [-5352, -2504],
            // Mineshaft 122
            [-5336, -1656],
            // Mineshaft 123
            [-5336, -2184],
            // Mineshaft 124
            [-5336, -2232],
            // Mineshaft 125
            [-5336, 3992],
            // Mineshaft 126
            [-5320, -4296],
            // Mineshaft 127
            [-5320, 1976],
            // Mineshaft 128
            [-5320, 1928],
            // Mineshaft 129
            [-5320, 3576],
            // Mineshaft 130
            [-5320, 3384],
            // Mineshaft 131
            [-5320, 4280],
            // Mineshaft 132
            [-5304, -1016],
            // Mineshaft 133
            [-5304, -312],
            // Mineshaft 134
            [-5288, -5448],
            // Mineshaft 135
            [-5288, -4456],
            // Mineshaft 136
            [-5288, -3352],
            // Mineshaft 137
            [-5288, 824],
            // Mineshaft 138
            [-5288, 3384],
            // Mineshaft 139
            [-5272, -3752],
            // Mineshaft 140
            [-5272, -2216],
            // Mineshaft 141
            [-5272, 88],
            // Mineshaft 142
            [-5272, 1432],
            // Mineshaft 143
            [-5272, 3288],
            // Mineshaft 144
            [-5256, -1448],
            // Mineshaft 145
            [-5240, -200],
            // Mineshaft 146
            [-5240, 3336],
            // Mineshaft 147
            [-5224, -4760],
            // Mineshaft 148
            [-5208, -4872],
            // Mineshaft 149
            [-5208, -2648],
            // Mineshaft 150
            [-5208, -984],
            // Mineshaft 151
            [-5208, 2088],
            // Mineshaft 152
            [-5208, 744],
            // Mineshaft 153
            [-5192, -5864],
            // Mineshaft 154
            [-5176, -5176],
            // Mineshaft 155
            [-5176, 5240],
            // Mineshaft 156
            [-5160, -2520],
            // Mineshaft 157
            [-5160, -1352],
            // Mineshaft 158
            [-5160, 2152],
            // Mineshaft 159
            [-5160, 5512],
            // Mineshaft 160
            [-5144, 552],
            // Mineshaft 161
            [-5128, -5208],
            // Mineshaft 162
            [-5128, -5640],
            // Mineshaft 163
            [-5128, -1160],
            // Mineshaft 164
            [-5128, 4888],
            // Mineshaft 165
            [-5112, -2856],
            // Mineshaft 166
            [-5112, -2072],
            // Mineshaft 167
            [-5112, 5736],
            // Mineshaft 168
            [-5096, -5864],
            // Mineshaft 169
            [-5096, -3832],
            // Mineshaft 170
            [-5096, 232],
            // Mineshaft 171
            [-5080, -2472],
            // Mineshaft 172
            [-5080, 504],
            // Mineshaft 173
            [-5064, -1176],
            // Mineshaft 174
            [-5048, -2568],
            // Mineshaft 175
            [-5048, -2136],
            // Mineshaft 176
            [-5048, 4984],
            // Mineshaft 177
            [-5032, -5128],
            // Mineshaft 178
            [-5032, -5832],
            // Mineshaft 179
            [-5032, -4232],
            // Mineshaft 180
            [-5032, -2920],
            // Mineshaft 181
            [-5032, 3400],
            // Mineshaft 182
            [-5016, -5464],
            // Mineshaft 183
            [-5016, -5688],
            // Mineshaft 184
            [-5016, -4392],
            // Mineshaft 185
            [-5016, -2520],
            // Mineshaft 186
            [-5016, -136],
            // Mineshaft 187
            [-5016, 1720],
            // Mineshaft 188
            [-5016, 3512],
            // Mineshaft 189
            [-5016, 2872],
            // Mineshaft 190
            [-5016, 4344],
            // Mineshaft 191
            [-5016, 5544],
            // Mineshaft 192
            [-5000, 296],
            // Mineshaft 193
            [-4984, 200],
            // Mineshaft 194
            [-4984, 5832],
            // Mineshaft 195
            [-4984, 5560],
            // Mineshaft 196
            [-4968, 1912],
            // Mineshaft 197
            [-4968, 1496],
            // Mineshaft 198
            [-4952, -5976],
            // Mineshaft 199
            [-4952, -4504],
            // Mineshaft 200
            [-4952, 1976],
            // Mineshaft 201
            [-4936, -5560],
            // Mineshaft 202
            [-4936, -2984],
            // Mineshaft 203
            [-4936, -4024],
            // Mineshaft 204
            [-4936, 4312],
            // Mineshaft 205
            [-4920, -3560],
            // Mineshaft 206
            [-4920, -1080],
            // Mineshaft 207
            [-4904, -5720],
            // Mineshaft 208
            [-4904, 4568],
            // Mineshaft 209
            [-4888, -5864],
            // Mineshaft 210
            [-4888, -4808],
            // Mineshaft 211
            [-4888, 4104],
            // Mineshaft 212
            [-4872, -2968],
            // Mineshaft 213
            [-4872, -744],
            // Mineshaft 214
            [-4872, -184],
            // Mineshaft 215
            [-4856, 88],
            // Mineshaft 216
            [-4856, 5224],
            // Mineshaft 217
            [-4840, -984],
            // Mineshaft 218
            [-4840, 1560],
            // Mineshaft 219
            [-4824, -3928],
            // Mineshaft 220
            [-4824, 3288],
            // Mineshaft 221
            [-4824, 5624],
            // Mineshaft 222
            [-4808, 5176],
            // Mineshaft 223
            [-4808, 5352],
            // Mineshaft 224
            [-4792, 4904],
            // Mineshaft 225
            [-4776, -1448],
            // Mineshaft 226
            [-4776, 1128],
            // Mineshaft 227
            [-4760, -5608],
            // Mineshaft 228
            [-4760, -5928],
            // Mineshaft 229
            [-4760, 3656],
            // Mineshaft 230
            [-4744, -5416],
            // Mineshaft 231
            [-4744, -3624],
            // Mineshaft 232
            [-4744, -1624],
            // Mineshaft 233
            [-4728, 920],
            // Mineshaft 234
            [-4728, 1016],
            // Mineshaft 235
            [-4728, 4440],
            // Mineshaft 236
            [-4712, -3128],
            // Mineshaft 237
            [-4712, 5400],
            // Mineshaft 238
            [-4696, 4424],
            // Mineshaft 239
            [-4680, -4584],
            // Mineshaft 240
            [-4680, -968],
            // Mineshaft 241
            [-4680, 3080],
            // Mineshaft 242
            [-4680, 3560],
            // Mineshaft 243
            [-4664, -5368],
            // Mineshaft 244
            [-4664, -2040],
            // Mineshaft 245
            [-4664, 4040],
            // Mineshaft 246
            [-4648, -1096],
            // Mineshaft 247
            [-4648, 248],
            // Mineshaft 248
            [-4648, 4632],
            // Mineshaft 249
            [-4632, -3080],
            // Mineshaft 250
            [-4632, 4008],
            // Mineshaft 251
            [-4632, 5544],
            // Mineshaft 252
            [-4616, 2792],
            // Mineshaft 253
            [-4616, 3768],
            // Mineshaft 254
            [-4600, -5880],
            // Mineshaft 255
            [-4600, -4728],
            // Mineshaft 256
            [-4600, -4520],
            // Mineshaft 257
            [-4600, 5384],
            // Mineshaft 258
            [-4584, -5768],
            // Mineshaft 259
            [-4584, -3016],
            // Mineshaft 260
            [-4584, 40],
            // Mineshaft 261
            [-4568, -728],
            // Mineshaft 262
            [-4568, -88],
            // Mineshaft 263
            [-4568, 5384],
            // Mineshaft 264
            [-4536, 2376],
            // Mineshaft 265
            [-4536, 3304],
            // Mineshaft 266
            [-4520, -3144],
            // Mineshaft 267
            [-4520, -296],
            // Mineshaft 268
            [-4520, 5160],
            // Mineshaft 269
            [-4520, 5512],
            // Mineshaft 270
            [-4504, -5864],
            // Mineshaft 271
            [-4488, -1048],
            // Mineshaft 272
            [-4488, 5432],
            // Mineshaft 273
            [-4472, -5144],
            // Mineshaft 274
            [-4472, -2184],
            // Mineshaft 275
            [-4472, -616],
            // Mineshaft 276
            [-4472, 232],
            // Mineshaft 277
            [-4472, 4856],
            // Mineshaft 278
            [-4472, 3736],
            // Mineshaft 279
            [-4456, -824],
            // Mineshaft 280
            [-4440, -5976],
            // Mineshaft 281
            [-4440, -2840],
            // Mineshaft 282
            [-4440, 1144],
            // Mineshaft 283
            [-4440, 2536],
            // Mineshaft 284
            [-4440, 4360],
            // Mineshaft 285
            [-4424, 1496],
            // Mineshaft 286
            [-4408, -744],
            // Mineshaft 287
            [-4408, 4488],
            // Mineshaft 288
            [-4408, 5608],
            // Mineshaft 289
            [-4408, 3752],
            // Mineshaft 290
            [-4376, -4712],
            // Mineshaft 291
            [-4376, -2472],
            // Mineshaft 292
            [-4360, -1800],
            // Mineshaft 293
            [-4360, -456],
            // Mineshaft 294
            [-4360, 792],
            // Mineshaft 295
            [-4360, 440],
            // Mineshaft 296
            [-4360, 1608],
            // Mineshaft 297
            [-4360, 3112],
            // Mineshaft 298
            [-4360, 5400],
            // Mineshaft 299
            [-4344, -3912],
            // Mineshaft 300
            [-4344, -3208],
            // Mineshaft 301
            [-4344, -360],
            // Mineshaft 302
            [-4344, -456],
            // Mineshaft 303
            [-4344, 5400],
            // Mineshaft 304
            [-4328, -5880],
            // Mineshaft 305
            [-4328, -5800],
            // Mineshaft 306
            [-4328, -2744],
            // Mineshaft 307
            [-4328, -2312],
            // Mineshaft 308
            [-4312, -4840],
            // Mineshaft 309
            [-4312, -4312],
            // Mineshaft 310
            [-4312, -3816],
            // Mineshaft 311
            [-4312, -3208],
            // Mineshaft 312
            [-4312, 5032],
            // Mineshaft 313
            [-4296, -5544],
            // Mineshaft 314
            [-4296, -3016],
            // Mineshaft 315
            [-4280, -312],
            // Mineshaft 316
            [-4280, 5336],
            // Mineshaft 317
            [-4264, -2680],
            // Mineshaft 318
            [-4264, -2568],
            // Mineshaft 319
            [-4264, 2200],
            // Mineshaft 320
            [-4264, 5064],
            // Mineshaft 321
            [-4248, -5912],
            // Mineshaft 322
            [-4248, -2968],
            // Mineshaft 323
            [-4248, 1096],
            // Mineshaft 324
            [-4248, 2536],
            // Mineshaft 325
            [-4232, -5800],
            // Mineshaft 326
            [-4232, -424],
            // Mineshaft 327
            [-4232, 3480],
            // Mineshaft 328
            [-4184, 5064],
            // Mineshaft 329
            [-4184, 3912],
            // Mineshaft 330
            [-4168, -5000],
            // Mineshaft 331
            [-4168, -1656],
            // Mineshaft 332
            [-4168, -248],
            // Mineshaft 317
            [-4264, -2680],
            // Mineshaft 318
            [-4264, -2568],
            // Mineshaft 319
            [-4264, 2200],
            // Mineshaft 320
            [-4264, 5064],
            // Mineshaft 321
            [-4248, -5912],
            // Mineshaft 322
            [-4248, -2968],
            // Mineshaft 323
            [-4248, 1096],
            // Mineshaft 324
            [-4248, 2536],
            // Mineshaft 325
            [-4232, -5800],
            // Mineshaft 326
            [-4232, -424],
            // Mineshaft 327
            [-4232, 3480],
            // Mineshaft 328
            [-4184, 5064],
            // Mineshaft 329
            [-4184, 3912],
            // Mineshaft 330
            [-4168, -5000],
            // Mineshaft 331
            [-4168, -1656],
            // Mineshaft 332
            [-4168, -248],
            // Mineshaft 333
            [-4168, -3112],
            // Mineshaft 334
            [-4168, 4072],
            // Mineshaft 335
            [-4152, -3352],
            // Mineshaft 336
            [-4152, -1320],
            // Mineshaft 337
            [-4152, -904],
            // Mineshaft 338
            [-4152, -2712],
            // Mineshaft 339
            [-4152, 4680],
            // Mineshaft 340
            [-4136, -4504],
            // Mineshaft 341
            [-4136, -472],
            // Mineshaft 342
            [-4136, 3752],
            // Mineshaft 343
            [-4136, 4760],
            // Mineshaft 344
            [-4136, 5768],
            // Mineshaft 345
            [-4120, 56],
            // Mineshaft 346
            [-4104, 1672],
            // Mineshaft 347
            [-4088, -664],
            // Mineshaft 348
            [-4088, -56],
            // Mineshaft 349
            [-4088, 2296],
            // Mineshaft 350
            [-4072, -3032],
            // Mineshaft 351
            [-4072, -392],
            // Mineshaft 352
            [-4072, 808],
            // Mineshaft 353
            [-4072, 3448],
            // Mineshaft 354
            [-4056, -3544],
            // Mineshaft 355
            [-4056, 1096],
            // Mineshaft 356
            [-4056, 3224],
            // Mineshaft 357
            [-4040, -5416],
            // Mineshaft 358
            [-4040, -1192],
            // Mineshaft 359
            [-4040, -2664],
            // Mineshaft 360
            [-4040, 1576],
            // Mineshaft 361
            [-4024, -5560],
            // Mineshaft 362
            [-4024, -1464],
            // Mineshaft 363
            [-4024, -680],
            // Mineshaft 364
            [-4024, -296],
            // Mineshaft 365
            [-4024, -2600],
            // Mineshaft 366
            [-4024, -4760],
            // Mineshaft 367
            [-4024, 1576],
            // Mineshaft 368
            [-4024, 2024],
            // Mineshaft 369
            [-4008, 2552],
            // Mineshaft 370
            [-4008, 5352],
            // Mineshaft 371
            [-4008, 4264],
            // Mineshaft 372
            [-3992, 4616],
            // Mineshaft 373
            [-3992, 5432],
            // Mineshaft 374
            [-3976, 536],
            // Mineshaft 375
            [-3976, 4824],
            // Mineshaft 376
            [-3976, 3464],
            // Mineshaft 377
            [-3960, -2728],
            // Mineshaft 378
            [-3960, 2600],
            // Mineshaft 379
            [-3960, 4936],
            // Mineshaft 380
            [-3960, 3576],
            // Mineshaft 381
            [-3944, -872],
            // Mineshaft 382
            [-3944, -4088],
            // Mineshaft 383
            [-3944, 5992],
            // Mineshaft 384
            [-3944, 4168],
            // Mineshaft 385
            [-3928, -920],
            // Mineshaft 386
            [-3928, -3800],
            // Mineshaft 387
            [-3928, 1800],
            // Mineshaft 388
            [-3928, 4312],
            // Mineshaft 389
            [-3912, -5832],
            // Mineshaft 390
            [-3912, -4536],
            // Mineshaft 391
            [-3912, 872],
            // Mineshaft 392
            [-3896, -4632],
            // Mineshaft 393
            [-3896, 1496],
            // Mineshaft 394
            [-3880, -5816],
            // Mineshaft 395
            [-3880, -4728],
            // Mineshaft 396
            [-3880, 1304],
            // Mineshaft 397
            [-3864, -664],
            // Mineshaft 398
            [-3864, 5176],
            // Mineshaft 399
            [-3848, -424],
            // Mineshaft 400
            [-3848, -5544],
            // Mineshaft 401
            [-3848, 1112],
            // Mineshaft 402
            [-3832, -1832],
            // Mineshaft 403
            [-3832, -2344],
            // Mineshaft 404
            [-3832, -4264],
            // Mineshaft 405
            [-3832, 2360],
            // Mineshaft 406
            [-3816, -1208],
            // Mineshaft 407
            [-3816, -5512],
            // Mineshaft 408
            [-3816, 3400],
            // Mineshaft 409
            [-3800, -744],
            // Mineshaft 410
            [-3800, -2424],
            // Mineshaft 411
            [-3800, -5416],
            // Mineshaft 412
            [-3800, 536],
            // Mineshaft 413
            [-3800, 5128],
            // Mineshaft 414
            [-3800, 4520],
            // Mineshaft 415
            [-3800, 4312],
            // Mineshaft 416
            [-3784, -3464],
            // Mineshaft 417
            [-3784, -3608],
            // Mineshaft 418
            [-3784, -5384],
            // Mineshaft 419
            [-3784, 5176],
            // Mineshaft 420
            [-3784, 4408],
            // Mineshaft 421
            [-3768, -3960],
            // Mineshaft 422
            [-3768, 2648],
            // Mineshaft 423
            [-3768, 4952],
            // Mineshaft 424
            [-3752, -3432],
            // Mineshaft 425
            [-3752, 1512],
            // Mineshaft 426
            [-3752, 1720],
            // Mineshaft 427
            [-3752, 5864],
            // Mineshaft 428
            [-3736, -5720],
            // Mineshaft 429
            [-3736, -1048],
            // Mineshaft 430
            [-3736, -4696],
            // Mineshaft 431
            [-3736, 488],
            // Mineshaft 432
            [-3720, -5416],
            // Mineshaft 433
            [-3720, 136],
            // Mineshaft 434
            [-3720, 4392],
            // Mineshaft 435
            [-3720, 3304],
            // Mineshaft 436
            [-3704, -3592],
            // Mineshaft 437
            [-3704, 4136],
            // Mineshaft 438
            [-3688, -3144],
            // Mineshaft 439
            [-3688, -5160],
            // Mineshaft 440
            [-3688, 1864],
            // Mineshaft 441
            [-3688, 4632],
            // Mineshaft 442
            [-3672, -360],
            // Minesshaft 443
            [-3672, -4968],
            // Mineshaft 444
            [-3672, 136],
            // Mineshaft 445
            [-3672, 2488],
            // Minesshaft 446
            [-3672, 4232],
            // Mineshaft 447
            [-3656, 4136],
            // Minesshaft 448
            [-3640, -4936],
            // Minesshaft 449
            [-3640, -5560],
            // Minesshaft 450
            [-3640, 984],
            // Minesshaft 451
            [-3624, -2136],
            // Minesshaft 452
            [-3624, -3880],
            // Minesshaft 453
            [-3624, 3016],
            // Minesshaft 454
            [-3608, -5960],
            // Minesshaft 455
            [-3608, -2360],
            // Minesshaft 456
            [-3608, -3448],
            // Minesshaft 457
            [-3608, -4376],
            // Minesshaft 458
            [-3608, -5160],
            // Minesshaft 459
            [-3608, -5480],
            // Minesshaft 460
            [-3592, -488],
            // Minesshaft 461
            [-3592, -1448],
            // Minesshaft 462
            [-3592, -5352],
            // Minesshaft 463
            [-3576, -1048],
            // Minesshaft 464
            [-3576, -4984],
            // Minesshaft 465
            [-3576, -5400],
            // Minesshaft 466
            [-3560, 1064],
            // Minesshaft 467
            [-3560, 4248],
            // Minesshaft 468
            [-3544, -4584],
            // Minesshaft 469
            [-3544, -4744],
            // Minesshaft 470
            [-3544, 4568],
            // Minesshaft 471
            [-3544, 4376],
            // Minesshaft 472
            [-3528, -5640],
            // Minesshaft 473
            [-3528, 1720],
            // Minesshaft 474
            [-3528, 2264],
            // Minesshaft 475
            [-3528, 2328],
            // Minesshaft 476
            [-3528, 4904],
            // Minesshaft 477
            [-3512, -1320],
            // Minesshaft 478
            [-3512, -4984],
            // Minesshaft 479
            [-3512, 5208],
            // Minesshaft 480
            [-3496, -2632],
            // Minesshaft 481
            [-3496, -4744],
            // Minesshaft 482
            [-3496, 504],
            // Minesshaft 483
            [-3496, 840],
            // Minesshaft 484
            [-3496, 1400],
            // Minesshaft 485
            [-3496, 5000],
            // Minesshaft 486
            [-3480, -216],
            // Minesshaft 487
            [-3480, -824],
            // Minesshaft 488
            [-3480, -2504],
            // Minesshaft 489
            [-3480, 1480],
            // Minesshaft 490
            [-3480, 2008],
            // Minesshaft 491
            [-3480, 2168],
            // Minesshaft 492
            [-3464, -2248],
            // Minesshaft 493
            [-3464, 408],
            // Minesshaft 494
            [-3464, 3320],
            // Minesshaft 495
            [-3448, -520],
            // Minesshaft 496
            [-3448, 424],
            // Minesshaft 497
            [-3448, 3208],
            // Minesshaft 498
            [-3432, -1576],
            // Minesshaft 499
            [-3432, -1688],
            // Minesshaft 500
            [-3432, -5624],
            // Mineshaft 501
            [-3432, -5400],
            // Mineshaft 502
            [-3432, 5528],
            // Mineshaft 503
            [-3416, -872],
            // Mineshaft 504
            [-3416, 1672],
            // Mineshaft 505
            [-3400, -3016],
            // Mineshaft 506
            [-3400, 3128],
            // Mineshaft 507
            [-3384, 1880],
            // Mineshaft 508
            [-3384, 5240],
            // Mineshaft 509
            [-3384, 4984],
            // Mineshaft 510
            [-3384, 4104],
            // Mineshaft 511
            [-3368, -2936],
            // Mineshaft 512
            [-3368, -4392],
            // Mineshaft 513
            [-3368, 536],
            // Mineshaft 514
            [-3368, 1912],
            // Mineshaft 515
            [-3368, 3000],
            // Mineshaft 516
            [-3368, 3128],
            // Mineshaft 517
            [-3352, -616],
            // Mineshaft 518
            [-3352, -2136],
            // Mineshaft 519
            [-3352, -4952],
            // Mineshaft 520
            [-3352, 1656],
            // Mineshaft 521
            [-3352, 4904],
            // Mineshaft 522
            [-3352, 2856],
            // Mineshaft 523
            [-3336, -200],
            // Mineshaft 524
            [-3336, -3944],
            // Mineshaft 525
            [-3336, -5320],
            // Mineshaft 526
            [-3320, -3304],
            // Mineshaft 527
            [-3320, -4280],
            // Mineshaft 528
            [-3320, 1032],
            // Mineshaft 529
            [-3304, -2984],
            // Mineshaft 530
            [-3288, -4584],
            // Mineshaft 531
            [-3272, -4296],
            // Mineshaft 532
            [-3272, 4536],
            // Mineshaft 533
            [-3256, -2824],
            // Mineshaft 534
            [-3256, -4888],
            // Mineshaft 535
            [-3256, -5128],
            // Mineshaft 536
            [-3256, 264],
            // Mineshaft 537
            [-3240, -5784],
            // Mineshaft 538
            [-3240, 2568],
            // Mineshaft 539
            [-3224, -4264],
            // Mineshaft 540
            [-3224, 760],
            // Mineshaft 541
            [-3224, 5704],
            // Mineshaft 542
            [-3208, -424],
            // Mineshaft 543
            [-3208, 4888],
            // Mineshaft 544
            [-3208, 2936],
            // Mineshaft 545
            [-3192, -3352],
            // Mineshaft 546
            [-3192, 3944],
            // Mineshaft 547
            [-3176, -2360],
            // Mineshaft 548
            [-3176, -2968],
            // Mineshaft 549
            [-3176, 5592],
            // Mineshaft 550
            [-3160, 5768],
            // Mineshaft 551
            [-3144, -520],
            // Mineshaft 552
            [-3144, -5384],
            // Mineshaft 553
            [-3144, 5832],
            // Mineshaft 554
            [-3128, -2680],
            // Mineshaft 555
            [-3128, -5224],
            // Mineshaft 556
            [-3128, 1512],
            // Mineshaft 557
            [-3128, 2344],
            // Mineshaft 558
            [-3128, 2280],
            // Mineshaft 559
            [-3128, 4776],
            // Mineshaft 560
            [-3112, -1208],
            // Mineshaft 561
            [-3112, 120],
            // Mineshaft 562
            [-3112, 2264],
            // Mineshaft 563
            [-3112, 4472],
            // Mineshaft 564
            [-3096, -5096],
            // Mineshaft 565
            [-3096, 5464],
            // Mineshaft 566
            [-3064, -4440],
            // Mineshaft 567
            [-3064, 3128],
            // Mineshaft 568
            [-3048, 104],
            // Mineshaft 569
            [-3048, 5160],
            // Mineshaft 570
            [-3048, 4616],
            // Mineshaft 571
            [-3032, 4232],
            // Mineshaft 572
            [-3032, 3400],
            // Mineshaft 573
            [-3000, -3976],
            // Mineshaft 574
            [-3000, 232],
            // Mineshaft 575
            [-2984, -600],
            // Mineshaft 576
            [-2984, -4424],
            // Mineshaft 577
            [-2984, 2856],
            // Mineshaft 578
            [-2968, -1432],
            // Mineshaft 579
            [-2968, -2408],
            // Mineshaft 580
            [-2968, 1080],
            // Mineshaft 581
            [-2968, 3080],
            // Mineshaft 582
            [-2952, -1880],
            // Mineshaft 583
            [-2952, -4296],
            // Mineshaft 584
            [-2952, 696],
            // Mineshaft 585
            [-2936, -3144],
            // Mineshaft 586
            [-2936, -5288],
            // Mineshaft 587
            [-2920, -3928],
            // Mineshaft 588
            [-2920, 1784],
            // Mineshaft 589
            [-2904, -3960],
            // Mineshaft 590
            [-2904, 5608],
            // Mineshaft 591
            [-2904, 3768],
            // Mineshaft 592
            [-2888, -984],
            // Mineshaft 593
            [-2888, -1832],
            // Mineshaft 594
            [-2888, -4968],
            // Mineshaft 595
            [-2888, 952],
            // Mineshaft 596
            [-2872, -4824],
            // Mineshaft 597
            [-2872, 3064],
            // Mineshaft 598
            [-2856, 4712],
            // Mineshaft 599
            [-2840, -1432],
            // Mineshaft 600
            [-2840, -1480],
            // Mineshaft 601
            [-2840, -3080],
            // Mineshaft 602
            [-2840, -3160],
            // Mineshaft 603
            [-2824, -1096],
            // Mineshaft 604
            [-2824, -3640],
            // Mineshaft 605
            [-2824, -5144],
            // Mineshaft 606
            [-2824, -2360],
            // Mineshaft 607
            [-2824, 5960],
            // Mineshaft 608
            [-2808, -536],
            // Mineshaft 609
            [-2808, -1064],
            // Mineshaft 610
            [-2808, -1192],
            // Mineshaft 611
            [-2808, -1800],
            // Mineshaft 612
            [-2808, 840],
            // Mineshaft 613
            [-2808, 1768],
            // Mineshaft 614
            [-2808, 4312],
            // Mineshaft 615
            [-2792, -2728],
            // Mineshaft 616
            [-2792, 5400],
            // Mineshaft 617
            [-2792, 3544],
            // Mineshaft 618
            [-2776, -1144],
            // Mineshaft 619
            [-2776, -2360],
            // Mineshaft 620
            [-2776, 664],
            // Mineshaft 621
            [-2776, 648],
            // Mineshaft 622
            [-2760, -1784],
            // Mineshaft 623
            [-2760, -5000],
            // Mineshaft 624
            [-2760, -4952],
            // Mineshaft 625
            [-2760, -2328],
            // Mineshaft 626
            [-2744, -2456],
            // Mineshaft 627
            [-2744, 4568],
            // Mineshaft 628
            [-2728, -5864],
            // Mineshaft 629
            [-2728, -200],
            // Mineshaft 630
            [-2728, -2008],
            // Mineshaft 631
            [-2728, -4488],
            // Mineshaft 632
            [-2728, 904],
            // Mineshaft 633
            [-2728, 5512],
            // Mineshaft 634
            [-2696, -3976],
            // Mineshaft 635
            [-2696, 1560],
            // Mineshaft 636
            [-2696, 2504],
            // Mineshaft 637
            [-2696, 2584],
            // Mineshaft 638
            [-2696, 2648],
            // Mineshaft 639
            [-2680, -1368],
            // Mineshaft 640
            [-2664, -1048],
            // Mineshaft 641
            [-2664, -2920],
            // Mineshaft 642
            [-2664, -3160],
            // Mineshaft 643
            [-2664, -4072],
            // Mineshaft 644
            [-2664, 1384],
            // Mineshaft 645
            [-2648, 1144],
            // Mineshaft 646
            [-2648, 1320],
            // Mineshaft 647
            [-2632, -1992],
            // Mineshaft 648
            [-2616, -1448],
            // Mineshaft 649
            [-2616, -4344],
            // Mineshaft 650
            [-2616, 3896],
            // Mineshaft 651
            [-2616, 3896],
            // Mineshaft 652
            [-2600, -2376],
            // Mineshaft 653
            [-2584, 424],
            // Mineshaft 654
            [-2568, -4888],
            // Mineshaft 655
            [-2568, -4552],
            // Mineshaft 656
            [-2568, -2248],
            // Mineshaft 657
            [-2568, 3064],
            // Mineshaft 658
            [-2552, -5384],
            // Mineshaft 659
            [-2552, -4072],
            // Mineshaft 660
            [-2552, -2712],
            // Mineshaft 661
            [-2552, 3864],
            // Mineshaft 662
            [-2536, -3144],
            // Mineshaft 663
            [-2536, -4216],
            // Mineshaft 664
            [-2536, 2568],
            // Mineshaft 665
            [-2520, -5640],
            // Mineshaft 666
            [-2504, -3368],
            // Mineshaft 667
            [-2504, -5000],
            // Mineshaft 668
            [-2488, -1368],
            // Mineshaft 669
            [-2488, -1784],
            // Mineshaft 670
            [-2488, -3912],
            // Mineshaft 671
            [-2440, -5816],
            // Mineshaft 672
            [-2440, -232],
            // Mineshaft 673
            [-2440, -744],
            // Mineshaft 674
            [-2440, -3832],
            // Mineshaft 675
            [-2440, 5544],
            // Mineshaft 676
            [-2424, -5048],
            // Mineshaft 677
            [-2408, -5880],
            // Mineshaft 678
            [-2408, -3576],
            // Mineshaft 679
            [-2408, -2600],
            // Mineshaft 680
            [-2392, -1960],
            // Mineshaft 681
            [-2392, 1976],
            // Mineshaft 682
            [-2376, 4936],
            // Mineshaft 683
            [-2376, 3848],
            // Mineshaft 684
            [-2360, -520],
            // Mineshaft 685
            [-2360, -4424],
            // Mineshaft 686
            [-2360, 4136],
            // Mineshaft 687
            [-2360, 3576],
            // Mineshaft 688
            [-2344, -4216],
            // Mineshaft 689
            [-2344, 2184],
            // Mineshaft 690
            [-2344, 3016],
            // Mineshaft 691
            [-2328, 536],
            // Mineshaft 692
            [-2312, -5736],
            // Mineshaft 693
            [-2312, -1144],
            // Mineshaft 694
            [-2312, -2808],
            // Mineshaft 695
            [-2312, 1352],
            // Mineshaft 696
            [-2296, -3816],
            // Mineshaft 697
            [-2296, -4328],
            // Mineshaft 698
            [-2296, 1128],
            // Mineshaft 699
            [-2296, 3176],
            // Mineshaft 800
            [-1784, -600],
            // Mineshaft 801
            [-1752, 5960],
            // Mineshaft 802
            [-1752, 2648],
            // Mineshaft 803
            [-1752, 1272],
            // Mineshaft 804
            [-1736, 5000],
            // Mineshaft 805
            [-1720, -5752],
            // Mineshaft 806
            [-1720, -5656],
            // Mineshaft 807
            [-1720, -2280],
            // Mineshaft 808
            [-1720, 2776],
            // Mineshaft 809
            [-1720, 1576],
            // Mineshaft 810
            [-1704, -3272],
            // Mineshaft 811
            [-1688, -1592],
            // Mineshaft 812
            [-1688, -3608],
            // Mineshaft 813
            [-1672, -5176],
            // Mineshaft 814
            [-1672, -4680],
            // Mineshaft 815
            [-1672, 2840],
            // Mineshaft 816
            [-1672, 2568],
            // Mineshaft 817
            [-1672, 504],
            // Mineshaft 818
            [-1672, 648],
            // Mineshaft 819
            [-1656, -2888],
            // Mineshaft 820
            [-1656, 4760],
            // Mineshaft 821
            [-1656, 2728],
            // Mineshaft 822
            [-1656, 1160],
            // Mineshaft 823
            [-1640, -312],
            // Mineshaft 824
            [-1640, -5000],
            // Mineshaft 825
            [-1640, 3480],
            // Mineshaft 826
            [-1640, 936],
            // Mineshaft 827
            [-1624, -696],
            // Mineshaft 828
            [-1624, -2312],
            // Mineshaft 829
            [-1624, 1720],
            // Mineshaft 830
            [-1624, 2472],
            // Mineshaft 831
            [-1608, -5448],
            // Mineshaft 832
            [-1608, -584],
            // Mineshaft 833
            [-1608, -4456],
            // Mineshaft 834
            [-1608, -2408],
            // Mineshaft 835
            [-1608, 5304],
            // Mineshaft 836
            [-1592, 5656],
            // Mineshaft 837
            [-1592, 3208],
            // Mineshaft 838
            [-1576, -2216],
            // Mineshaft 839
            [-1576, 680],
            // Mineshaft 840
            [-1560, -3480],
            // Mineshaft 841
            [-1560, -3272],
            // Mineshaft 842
            [-1560, 2488],
            // Mineshaft 843
            [-1544, 8],
            // Mineshaft 844
            [-1544, 2120],
            // Mineshaft 845
            [-1528, -1288],
            // Mineshaft 846
            [-1528, -3384],
            // Mineshaft 847
            [-1528, -2168],
            // Mineshaft 848
            [-1512, -5864],
            // Mineshaft 849
            [-1496, -5112],
            // Mineshaft 850
            [-1496, -2792],
            // Mineshaft 851
            [-1496, 5864],
            // Mineshaft 852
            [-1496, 3928],
            // Mineshaft 853
            [-1496, 712],
            // Mineshaft 854
            [-1496, 2104],
            // Mineshaft 855
            [-1480, -3144],
            // Mineshaft 856
            [-1480, -2136],
            // Mineshaft 857
            [-1480, 1176],
            // Mineshaft 858
            [-1464, -136],
            // Mineshaft 859
            [-1464, -1304],
            // Mineshaft 860
            [-1464, 3544],
            // Mineshaft 861
            [-1448, 5512],
            // Mineshaft 862
            [-1448, 1288],
            // Mineshaft 863
            [-1432, -4840],
            // Mineshaft 864
            [-1432, -1912],
            // Mineshaft 865
            [-1432, 3608],
            // Mineshaft 866
            [-1432, 632],
            // Mineshaft 867
            [-1432, 2200],
            // Mineshaft 868
            [-1416, -2824],
            // Mineshaft 869
            [-1416, -1944],
            // Mineshaft 870
            [-1416, 2664],
            // Mineshaft 871
            [-1416, 1448],
            // Mineshaft 872
            [-1400, -4840],
            // Mineshaft 873
            [-1400, -2872],
            // Mineshaft 874
            [-1400, 1144],
            // Mineshaft 875
            [-1384, -5080],
            // Mineshaft 876
            [-1384, 3736],
            // Mineshaft 877
            [-1384, 808],
            // Mineshaft 878
            [-1384, 56],
            // Mineshaft 879
            [-1368, -552],
            // Mineshaft 880
            [-1368, -5864],
            // Mineshaft 881
            [-1368, -4184],
            // Mineshaft 882
            [-1368, -2152],
            // Mineshaft 883
            [-1368, 4856],
            // Mineshaft 884
            [-1368, 4376],
            // Mineshaft 885
            [-1368, 1864],
            // Mineshaft 886
            [-1352, -4344],
            // Mineshaft 887
            [-1352, -3528],
            // Mineshaft 888
            [-1336, -5896],
            // Mineshaft 889
            [-1336, -4008],
            // Mineshaft 890
            [-1336, -3384],
            // Mineshaft 891
            [-1336, -2840],
            // Mineshaft 892
            [-1336, -1976],
            // Mineshaft 893
            [-1336, 2872],
            // Mineshaft 894
            [-1336, 1288],
            // Mineshaft 895
            [-1320, -5960],
            // Mineshaft 896
            [-1320, -3240],
            // Mineshaft 897
            [-1320, -2616],
            // Mineshaft 898
            [-1320, 5256],
            // Mineshaft 899
            [-1320, 4248],
            // Mineshaft 900
            [-1320, 2968],
            // Mineshaft 901
            [-1304, 4984],
            // Mineshaft 902
            [-1304, 3432],
            // Mineshaft 903
            [-1288, -5784],
            // Mineshaft 904
            [-1288, -3976],
            // Mineshaft 905
            [-1272, -952],
            // Mineshaft 906
            [-1272, 5640],
            // Mineshaft 907
            [-1272, 2712],
            // Mineshaft 908
            [-1272, 520],
            // Mineshaft 909
            [-1256, 4664],
            // Mineshaft 910
            [-1256, 1704],
            // Mineshaft 911
            [-1240, 5752],
            // Mineshaft 912
            [-1240, 104],
            // Mineshaft 913
            [-1224, -1864],
            // Mineshaft 914
            [-1224, 4552],
            // Mineshaft 915
            [-1224, 3304],
            // Mineshaft 916
            [-1224, 2104],
            // Mineshaft 917
            [-1208, -968],
            // Mineshaft 918
            [-1160, -216],
            // Mineshaft 919
            [-1160, -4456],
            // Mineshaft 920
            [-1160, 3832],
            // Mineshaft 921
            [-1144, -3800],
            // Mineshaft 922
            [-1144, 4520],
            // Mineshaft 923
            [-1128, -1128],
            // Mineshaft 924
            [-1128, 5624],
            // Mineshaft 925
            [-1128, 3336],
            // Mineshaft 926
            [-1128, 2968],
            // Mineshaft 927
            [-1128, 328],
            // Mineshaft 928
            [-1112, -5528],
            // Mineshaft 929
            [-1112, -4040],
            // Mineshaft 930
            [-1112, -1288],
            // Mineshaft 931
            [-1112, -2024],
            // Mineshaft 932
            [-1112, 4952],
            // Mineshaft 933
            [-1112, 5016],
            // Mineshaft 934
            [-1112, 4056],
            // Mineshaft 935
            [-1112, 3720],
            // Mineshaft 936
            [-1112, 1800],
            // Mineshaft 937
            [-1096, -5800],
            // Mineshaft 938
            [-1096, -4568],
            // Mineshaft 939
            [-1096, -760],
            // Mineshaft 940
            [-1096, -1992],
            // Mineshaft 941
            [-1096, -2248],
            // Mineshaft 942
            [-1080, -1608],
            // Mineshaft 943
            [-1080, 4840],
            // Mineshaft 944
            [-1080, 1944],
            // Mineshaft 945
            [-1080, 2104],
            // Mineshaft 946
            [-1064, -5416],
            // Mineshaft 947
            [-1064, -5608],
            // Mineshaft 948
            [-1064, -4168],
            // Mineshaft 949
            [-1064, -296],
            // Mineshaft 950
            [-1048, -4856],
            // Mineshaft 951
            [-1048, 4136],
            // Mineshaft 952
            [-1032, -3176],
            // Mineshaft 953
            [-1032, 4216],
            // Mineshaft 954
            [-1032, 2344],
            // Mineshaft 955
            [-1032, 2664],
            // Mineshaft 956
            [-1016, -5704],
            // Mineshaft 957
            [-1016, -1112],
            // Mineshaft 958
            [-1016, 2888],
            // Mineshaft 959
            [-1000, -2632],
            // Mineshaft 960
            [-1000, -2184],
            // Mineshaft 961
            [-984, 3208],
            // Mineshaft 962
            [-968, -4168],
            // Mineshaft 963
            [-968, -2904],
            // Mineshaft 964
            [-968, -824],
            // Mineshaft 965
            [-968, -1032],
            // Mineshaft 966
            [-968, 1096],
            // Mineshaft 967
            [-952, -5528],
            // Mineshaft 968
            [-952, 392],
            // Mineshaft 969
            [-952, 1720],
            // Mineshaft 970
            [-952, 2088],
            // Mineshaft 971
            [-936, -200],
            // Mineshaft 972
            [-936, -120],
            // Mineshaft 973
            [-920, -5768],
            // Mineshaft 974
            [-920, -5160],
            // Mineshaft 975
            [-920, -1160],
            // Mineshaft 976
            [-920, 600],
            // Mineshaft 977
            [-920, 2296],
            // Mineshaft 978
            [-920, 2456],
            // Mineshaft 979
            [-904, -3048],
            // Mineshaft 980
            [-904, -2856],
            // Mineshaft 981
            [-904, 5544],
            // Mineshaft 982
            [-904, 2872],
            // Mineshaft 983
            [-904, 1272],
            // Mineshaft 984
            [-888, -4536],
            // Mineshaft 985
            [-888, 168],
            // Mineshaft 986
            [-888, 2568],
            // Mineshaft 987
            [-888, 2856],
            // Mineshaft 988
            [-872, 5336],
            // Mineshaft 989
            [-872, 5256],
            // Mineshaft 990
            [-856, -4616],
            // Mineshaft 991
            [-856, -1128],
            // Mineshaft 992
            [-840, -440],
            // Mineshaft 993
            [-840, -1192],
            // Mineshaft 994
            [-840, -1672],
            // Mineshaft 995
            [-840, -1784],
            // Mineshaft 996
            [-840, 5240],
            // Mineshaft 997
            [-840, 4136],
            // Mineshaft 998
            [-824, -5128],
            // Mineshaft 999
            [-824, 2776],
            // Mineshaft 1000
            [-808, 3048],
            // Mineshaft 1001
            [-792, -4792],
            // Mineshaft 1002
            [-792, 5192],
            // Mineshaft 1003
            [-792, 1160],
            // Mineshaft 1004
            [-792, 2632],
            // Mineshaft 1005
            [-792, 2696],
            // Mineshaft 1006
            [-776, -3240],
            // Mineshaft 1007
            [-776, -2376],
            // Mineshaft 1008
            [-776, 4344],
            // Mineshaft 1009
            [-776, 264],
            // Mineshaft 1010
            [-760, -280],
            // Mineshaft 1011
            [-760, -1656],
            // Mineshaft 1012
            [-760, -1400],
            // Mineshaft 1013
            [-760, 5224],
            // Mineshaft 1014
            [-760, 4504],
            // Mineshaft 1015
            [-760, 3560],
            // Mineshaft 1016
            [-760, 2168],
            // Mineshaft 1017
            [-744, -4776],
            // Mineshaft 1018
            [-744, -2008],
            // Mineshaft 1019
            [-728, -5480],
            // Mineshaft 1020
            [-696, -968],
            // Mineshaft 1021
            [-696, 4568],
            // Mineshaft 1022
            [-696, 408],
            // Mineshaft 1023
            [-680, -4808],
            // Mineshaft 1024
            [-680, 3720],
            // Mineshaft 1025
            [-664, -5864],
            // Mineshaft 1026
            [-664, -3896],
            // Mineshaft 1027
            [-664, 2920],
            // Mineshaft 1028
            [-664, 808],
            // Mineshaft 1029
            [-648, -4440],
            // Mineshaft 1030
            [-648, -3064],
            // Mineshaft 1031
            [-648, 4616],
            // Mineshaft 1032
            [-648, 3064],
            // Mineshaft 1033
            [-632, -4248],
            // Mineshaft 1034
            [-632, -1160],
            // Mineshaft 1035
            [-632, -1864],
            // Mineshaft 1036
            [-632, -2440],
            // Mineshaft 1037
            [-616, -5496],
            // Mineshaft 1038
            [-616, -3912],
            // Mineshaft 1039
            [-616, -2696],
            // Mineshaft 1040
            [-616, 2392],
            // Mineshaft 1041
            [-600, -4568],
            // Mineshaft 1042
            [-600, -2680],
            // Mineshaft 1043
            [-600, 5272],
            // Mineshaft 1044
            [-600, 2536],
            // Mineshaft 1045
            [-600, 3016],
            // Mineshaft 1046
            [-584, -104],
            // Mineshaft 1047
            [-584, 5512],
            // Mineshaft 1048
            [-584, 2552],
            // Mineshaft 1049
            [-568, 5800],
            // Mineshaft 1050
            [-552, -5384],
            // Mineshaft 1051
            [-552, -1832],
            // Mineshaft 1052
            [-552, -2088],
            // Mineshaft 1053
            [-552, 4392],
            // Mineshaft 1054
            [-536, 5176],
            // Mineshaft 1055
            [-536, 440],
            // Mineshaft 1056
            [-520, -296],
            // Mineshaft 1057
            [-520, -2344],
            // Mineshaft 1058
            [-520, 4904],
            // Mineshaft 1059
            [-504, -1064],
            // Mineshaft 1060
            [-504, 5112],
            // Mineshaft 1061
            [-504, 4760],
            // Mineshaft 1062
            [-504, 4344],
            // Mineshaft 1063
            [-504, 2776],
            // Mineshaft 1064
            [-488, -5496],
            // Mineshaft 1065
            [-488, -2520],
            // Mineshaft 1066
            [-488, 3336],
            // Mineshaft 1067
            [-472, -5944],
            // Mineshaft 1068
            [-472, -2728],
            // Mineshaft 1069
            [-472, 2312],
            // Mineshaft 1070
            [-456, -5464],
            // Mineshaft 1071
            [-456, 1928],
            // Mineshaft 1072
            [-456, 2600],
            // Mineshaft 1073
            [-440, -4248],
            // Mineshaft 1074
            [-440, -3992],
            // Mineshaft 1075
            [-424, -1912],
            // Mineshaft 1076
            [-424, 744],
            // Mineshaft 1077
            [-408, -2488],
            // Mineshaft 1078
            [-408, 5624],
            // Mineshaft 1079
            [-408, 4024],
            // Mineshaft 1080
            [-408, 1960],
            // Mineshaft 1081
            [-392, -3432],
            // Mineshaft 1082
            [-392, -952],
            // Mineshaft 1083
            [-360, -2968],
            // Mineshaft 1084
            [-360, -840],
            // Mineshaft 1085
            [-344, -5336],
            // Mineshaft 1086
            [-344, -2376],
            // Mineshaft 1087
            [-344, -2488],
            // Mineshaft 1088
            [-344, 5720],
            // Mineshaft 1089
            [-344, 4344],
            // Mineshaft 1090
            [-328, 5960],
            // Mineshaft 1091
            [-328, 5112],
            // Mineshaft 1092
            [-296, -5816],
            // Mineshaft 1093
            [-296, 4536],
            // Mineshaft 1094
            [-296, 4344],
            // Mineshaft 1095
            [-296, 3880],
            // Mineshaft 1096
            [-296, 456],
            // Mineshaft 1097
            [-296, 2152],
            // Mineshaft 1098
            [-296, 3592],
            // Mineshaft 1099
            [-280, -4952],
            // Mineshaft 1100
            [-280, -744],
            // Mineshaft 1101
            [-280, 3096],
            // Mineshaft 1102
            [-280, 3000],
            // Mineshaft 1103
            [-264, -5432],
            // Mineshaft 1104
            [-264, 1688],
            // Mineshaft 1105
            [-264, 3480],
            // Mineshaft 1106
            [-264, 3576],
            // Mineshaft 1107
            [-248, -3384],
            // Mineshaft 1108
            [-248, 5816],
            // Mineshaft 1109
            [-248, 4344],
            // Mineshaft 1110
            [-248, 3272],
            // Mineshaft 1111
            [-248, 2968],
            // Mineshaft 1112
            [-232, 5064],
            // Mineshaft 1113
            [-216, -3944],
            // Mineshaft 1114
            [-216, 2056],
            // Mineshaft 1115
            [-200, -5816],
            // Mineshaft 1116
            [-200, 4680],
            // Mineshaft 1117
            [-200, 1816],
            // Mineshaft 1118
            [-184, 1848],
            // Mineshaft 1119
            [-168, -2392],
            // Mineshaft 1120
            [-168, 616],
            // Mineshaft 1121
            [-152, 3800],
            // Mineshaft 1122
            [-152, 2344],
            // Mineshaft 1123
            [-120, -3432],
            // Mineshaft 1124
            [-120, -296],
            // Mineshaft 1125
            [-104, 1992],
            // Mineshaft 1126
            [-104, 3096],
            // Mineshaft 1127
            [-88, 5864],
            // Mineshaft 1128
            [-88, 5768],
            // Mineshaft 1129
            [-88, 5976],
            // Mineshaft 1130
            [-88, 872],
            // Mineshaft 1131
            [-88, 2760],
            // Mineshaft 1132
            [-72, 3800],
            // Mineshaft 1133
            [-72, 4264],
            // Mineshaft 1134
            [-56, 5944],
            // Mineshaft 1135
            [-56, 4488],
            // Mineshaft 1136
            [-56, 4328],
            // Mineshaft 1137
            [-40, 3736],
            // Mineshaft 1138
            [-24, -2568],
            // Mineshaft 1139
            [-24, 4408],
            // Mineshaft 1140
            [-8, -4360],
            // Mineshaft 1141
            [-8, -3320],
            // Mineshaft 1142
            [-8, 5656],
            // Mineshaft 1143
            [-8, 856],
            // Mineshaft 1144
            [8, -3064],
            // Mineshaft 1145
            [8, -1640],
            // Mineshaft 1146
            [8, 3624],
            // Mineshaft 1147
            [24, 5496],
            // Mineshaft 1148
            [24, 2136],
            // Mineshaft 1149
            [40, -4728],
            // Mineshaft 1150
            [40, 4984],
            // Mineshaft 1151
            [40, 4648],
            // Mineshaft 1152
            [40, 4152],
            // Mineshaft 1153
            [40, 2600],
            // Mineshaft 1154
            [56, -2056],
            // Mineshaft 1155
            [56, 5320],
            // Mineshaft 1156
            [56, 4520],
            // Mineshaft 1157
            [72, -5928],
            // Mineshaft 1158
            [72, -4184],
            // Mineshaft 1159
            [72, -3192],
            // Mineshaft 1160
            [88, 1608],
            // Mineshaft 1161
            [104, -5480],
            // Mineshaft 1162
            [104, -1016],
            // Mineshaft 1163
            [104, 5720],
            // Mineshaft 1164
            [104, 4872],
            // Mineshaft 1165
            [104, 4408],
            // Mineshaft 1166
            [104, 1704],
            // Mineshaft 1167
            [104, 2520],
            // Mineshaft 1168
            [104, 3336],
            // Mineshaft 1169
            [120, -3192],
            // Mineshaft 1170
            [120, 3880],
            // Mineshaft 1171
            [136, 5176],
            // Mineshaft 1172
            [136, 1080],
            // Mineshaft 1173
            [152, -3720],
            // Mineshaft 1174
            [168, -4568],
            // Mineshaft 1175
            [184, 5944],
            // Mineshaft 1176
            [184, 4920],
            // Mineshaft 1177
            [200, -1832],
            // Mineshaft 1178
            [200, 4200],
            // Mineshaft 1179
            [200, 2120],
            // Mineshaft 1180
            [216, -4680],
            // Mineshaft 1181
            [216, -4552],
            // Mineshaft 1182
            [216, -1336],
            // Mineshaft 1183
            [232, -4968],
            // Mineshaft 1184
            [232, -4104],
            // Mineshaft 1185
            [232, -4024],
            // Mineshaft 1186
            [232, 5112],
            // Mineshaft 1187
            [232, 1992],
            // Mineshaft 1188
            [248, -3912],
            // Mineshaft 1189
            [248, 3624],
            // Mineshaft 1190
            [248, 2296],
            // Mineshaft 1191
            [264, -3256],
            // Mineshaft 1192
            [264, 4728],
            // Mineshaft 1193
            [264, 3400],
            // Mineshaft 1194
            [280, -4376],
            // Mineshaft 1195
            [280, -2264],
            // Mineshaft 1196
            [280, 2264],
            // Mineshaft 1197
            [312, -4504],
            // Mineshaft 1198
            [312, -3560],
            // Mineshaft 1199
            [312, 4952],
            // Mineshaft 1200
            [328, -3064],
            // Mineshaft 1201
            [344, 5928],
            // Mineshaft 1202
            [360, -5032],
            // Mineshaft 1203
            [360, 5496],
            // Mineshaft 1204
            [360, 5272],
            // Mineshaft 1205
            [376, 4248],
            // Mineshaft 1206
            [408, -600],
            // Mineshaft 1207
            [424, -5848],
            // Mineshaft 1208
            [424, -4296],
            // Mineshaft 1209
            [424, 2792],
            // Mineshaft 1210
            [440, -2952],
            // Mineshaft 1211
            [440, 8],
            // Mineshaft 1212
            [456, -3544],
            // Mineshaft 1213
            [472, -5384],
            // Mineshaft 1214
            [472, -5464],
            // Mineshaft 1215
            [472, 4680],
            // Mineshaft 1216
            [472, 3512],
            // Mineshaft 1217
            [472, 4040],
            // Mineshaft 1218
            [472, 2200],
            // Mineshaft 1219
            [472, 2808],
            // Mineshaft 1220
            [488, -4392],
            // Mineshaft 1221
            [488, -2072],
            // Mineshaft 1222
            [488, -296],
            // Mineshaft 1223
            [488, 5176],
            // Mineshaft 1224
            [488, 4680],
            // Mineshaft 1225
            [504, -3896],
            // Mineshaft 1226
            [520, -5432],
            // Mineshaft 1227
            [520, -3416],
            // Mineshaft 1228
            [520, -2216],
            // Mineshaft 1229
            [520, 5048],
            // Mineshaft 1230
            [520, 4920],
            // Mineshaft 1231
            [536, -5112],
            // Mineshaft 1232
            [536, -5128],
            // Mineshaft 1233
            [552, -2328],
            // Mineshaft 1234
            [552, 4712],
            // Mineshaft 1235
            [568, -3672],
            // Mineshaft 1236
            [568, 1208],
            // Mineshaft 1237
            [568, 1704],
            // Mineshaft 1238
            [584, -1592],
            // Mineshaft 1239
            [584, 4232],
            // Mineshaft 1240
            [600, -4056],
            // Mineshaft 1241
            [600, -2616],
            // Mineshaft 1242
            [600, 4600],
            // Mineshaft 1243
            [600, 4440],
            // Mineshaft 1244
            [600, 3992],
            // Mineshaft 1245
            [600, 3512],
            // Mineshaft 1246
            [616, -1768],
            // Mineshaft 1247
            [616, 1352],
            // Mineshaft 1248
            [616, 1768],
            // Mineshaft 1249
            [616, 3288],
            // Mineshaft 1250
            [632, -5000],
            // Mineshaft 1251
            [632, -1336],
            // Mineshaft 1252
            [632, 5144],
            // Mineshaft 1253
            [632, 3960],
            // Mineshaft 1254
            [632, 2264],
            // Mineshaft 1255
            [632, 3480],
            // Mineshaft 1256
            [648, -2888],
            // Mineshaft 1257
            [648, -2120],
            // Mineshaft 1258
            [648, 4264],
            // Mineshaft 1259
            [664, -4520],
            // Mineshaft 1260
            [664, -3464],
            // Mineshaft 1261
            [664, -968],
            // Mineshaft 1262
            [664, 2856],
            // Mineshaft 1263
            [680, -600],
            // Mineshaft 1264
            [680, -1800],
            // Mineshaft 1265
            [680, 728],
            // Mineshaft 1266
            [696, -2216],
            // Mineshaft 1267
            [712, -4552],
            // Mineshaft 1268
            [712, -392],
            // Mineshaft 1269
            [712, 984],
            // Mineshaft 1270
            [728, -4328],
            // Mineshaft 1271
            [728, 1688],
            // Mineshaft 1272
            [744, -1656],
            // Mineshaft 1273
            [744, 5128],
            // Mineshaft 1274
            [760, -4952],
            // Mineshaft 1275
            [760, -2312],
            // Mineshaft 1276
            [760, 5864],
            // Mineshaft 1277
            [760, 5000],
            // Mineshaft 1278
            [760, 424],
            // Mineshaft 1279
            [760, 4264],
            // Mineshaft 1280
            [776, -4984],
            // Mineshaft 1281
            [776, -1432],
            // Mineshaft 1282
            [776, 856],
            // Mineshaft 1283
            [792, 1976],
            // Mineshaft 1284
            [792, 3560],
            // Mineshaft 1285
            [808, 1320],
            // Mineshaft 1286
            [808, 4232],
            // Mineshaft 1287
            [824, -2024],
            // Mineshaft 1288
            [840, -5496],
            // Mineshaft 1289
            [840, -2760],
            // Mineshaft 1290
            [840, -792],
            // Mineshaft 1291
            [840, 5144],
            // Mineshaft 1292
            [856, -3592],
            // Mineshaft 1293
            [856, 2168],
            // Mineshaft 1294
            [888, -5816],
            // Mineshaft 1295
            [888, 5448],
            // Mineshaft 1296
            [888, 4744],
            // Mineshaft 1297
            [904, -2840],
            // Mineshaft 1298
            [904, -152],
            // Mineshaft 1299
            [920, -5240],
            // Mineshaft 1300
            [920, -3480],
            // Mineshaft 1301
            [920, 2280],
            // Mineshaft 1302
            [920, 3224],
            // Mineshaft 1303
            [936, -5960],
            // Mineshaft 1304
            [936, -4056],
            // Mineshaft 1305
            [936, -2984],
            // Mineshaft 1306
            [936, 3768],
            // Mineshaft 1307
            [952, -2200],
            // Mineshaft 1308
            [952, 1800],
            // Mineshaft 1309
            [952, 2792],
            // Mineshaft 1310
            [968, -1704],
            // Mineshaft 1311
            [968, 4936],
            // Mineshaft 1312
            [984, 1784],
            // Mineshaft 1313
            [984, 3656],
            // Mineshaft 1314
            [1000, -4120],
            // Mineshaft 1315
            [1016, -4936],
            // Mineshaft 1316
            [1016, -5128],
            // Mineshaft 1317
            [1016, -5128],
            // Mineshaft 1318
            [1016, -1080],
            // Mineshaft 1319
            [1016, -2104],
            // Mineshaft 1320
            [1016, 328],
            // Mineshaft 1321
            [1032, 1432],
            // Mineshaft 1322
            [1048, -5208],
            // Mineshaft 1323
            [1048, -2552],
            // Mineshaft 1324
            [1048, -1432],
            // Mineshaft 1325
            [1048, 616],
            // Mineshaft 1326
            [1048, 264],
            // Mineshaft 1327
            [1064, -3016],
            // Mineshaft 1328
            [1064, -3288],
            // Mineshaft 1329
            [1064, -1432],
            // Mineshaft 1330
            [1064, -1896],
            // Mineshaft 1331
            [1064, 2760],
            // Mineshaft 1332
            [1096, -1928],
            // Mineshaft 1333
            [1096, -2088],
            // Mineshaft 1334
            [1096, 1624],
            // Mineshaft 1335
            [1112, -5864],
            // Mineshaft 1336
            [1112, -2360],
            // Mineshaft 1337
            [1112, 5016],
            // Mineshaft 1338
            [1128, -3080],
            // Mineshaft 1339
            [1144, -4008],
            // Mineshaft 1340
            [1144, -2712],
            // Mineshaft 1341
            [1144, -1272],
            // Mineshaft 1342
            [1144, 2920],
            // Mineshaft 1343
            [1160, -4504],
            // Mineshaft 1344
            [1160, 1432],
            // Mineshaft 1345
            [1160, 3336],
            // Mineshaft 1346
            [1160, 3384],
            // Mineshaft 1347
            [1160, 3816],
            // Mineshaft 1348
            [1176, -4872],
            // Mineshaft 1349
            [1176, -2456],
            // Mineshaft 1350
            [1176, -936],
            // Mineshaft 1351
            [1176, 824],
            // Mineshaft 1352
            [1176, 3816],
            // Mineshaft 1353
            [1176, 5592],
            // Mineshaft 1354
            [1192, 1960],
            // Mineshaft 1355
            [1208, 4296],
            // Mineshaft 1356
            [1208, 5656],
            // Mineshaft 1357
            [1224, 984],
            // Mineshaft 1358
            [1240, -5320],
            // Mineshaft 1359
            [1240, -2808],
            // Mineshaft 1360
            [1256, 1288],
            // Mineshaft 1361
            [1256, 1496],
            // Mineshaft 1362
            [1256, 2344],
            // Mineshaft 1363
            [1272, -5800],
            // Mineshaft 1364
            [1272, -4024],
            // Mineshaft 1365
            [1272, -2376],
            // Mineshaft 1366
            [1288, 968],
            // Mineshaft 1367
            [1288, 1768],
            // Mineshaft 1368
            [1304, -1368],
            // Mineshaft 1369
            [1304, -424],
            // Mineshaft 1370
            [1304, 1688],
            // Mineshaft 1371
            [1320, -4312],
            // Mineshaft 1372
            [1320, -1320],
            // Mineshaft 1373
            [1320, -408],
            // Mineshaft 1374
            [1320, 3192],
            // Mineshaft 1375
            [1320, 5560],
            // Mineshaft 1376
            [1336, -2808],
            // Mineshaft 1377
            [1336, -2424],
            // Mineshaft 1378
            [1336, 4808],
            // Mineshaft 1379
            [1352, -2856],
            // Mineshaft 1380
            [1352, -248],
            // Mineshaft 1381
            [1352, 4024],
            // Mineshaft 1382
            [1352, 5912],
            // Mineshaft 1383
            [1368, -5224],
            // Mineshaft 1384
            [1368, -3560],
            // Mineshaft 1385
            [1384, 5112],
            // Mineshaft 1386
            [1400, -168],
            // Mineshaft 1387
            [1400, 5960],
            // Mineshaft 1388
            [1416, -1416],
            // Mineshaft 1389
            [1432, -2424],
            // Mineshaft 1390
            [1432, -264],
            // Mineshaft 1391
            [1432, 2456],
            // Mineshaft 1392
            [1432, 4360],
            // Mineshaft 1393
            [1448, -2840],
            // Mineshaft 1394
            [1448, 1464],
            // Mineshaft 1395
            [1464, -4392],
            // Mineshaft 1396
            [1464, -2824],
            // Mineshaft 1397
            [1464, 1032],
            // Mineshaft 1398
            [1464, 4536],
            // Mineshaft 1399
            [1480, -3528],
            // Mineshaft 1400
            [1480, -3608],
            // Mineshaft 1400
            [5556, 1236],
            // Mineshaft 1401
            [1480, -3224],
            // Mineshaft 1402
            [1480, 152],
            // Mineshaft 1403
            [1480, 5064],
            // Mineshaft 1404
            [1496, -2056],
            // Mineshaft 1405
            [1496, 5304],
            // Mineshaft 1406
            [1512, -984],
            // Mineshaft 1407
            [1512, 328],
            // Mineshaft 1408
            [1512, 3608],
            // Mineshaft 1409
            [1512, 5368],
            // Mineshaft 1410
            [1528, -4488],
            // Mineshaft 1411
            [1528, 4648],
            // Mineshaft 1412
            [1528, 1704],
            // Mineshaft 1413
            [1528, 2024],
            // Mineshaft 1414
            [1544, -5464],
            // Mineshaft 1415
            [1544, 2184],
            // Mineshaft 1416
            [1576, 4232],
            // Mineshaft 1417
            [1576, 5224],
            // Mineshaft 1418
            [1592, -3816],
            // Mineshaft 1419
            [1592, 248],
            // Mineshaft 1420
            [1608, -5640],
            // Mineshaft 1421
            [1608, -2968],
            // Mineshaft 1422
            [1608, 360],
            // Mineshaft 1423
            [1624, -2744],
            // Mineshaft 1424
            [1624, -984],
            // Mineshaft 1425
            [1624, 2184],
            // Mineshaft 1426
            [1624, 3432],
            // Mineshaft 1427
            [1624, 4872],
            // Mineshaft 1428
            [1624, 5480],
            // Mineshaft 1429
            [1640, -3688],
            // Mineshaft 1430
            [1640, -1576],
            // Mineshaft 1431
            [1656, -4504],
            // Mineshaft 1432
            [1656, -2072],
            // Mineshaft 1433
            [1656, 120],
            // Mineshaft 1434
            [1656, 5160],
            // Mineshaft 1435
            [1672, -2712],
            // Mineshaft 1436
            [1672, 1096],
            // Mineshaft 1437
            [1672, 4888],
            // Mineshaft 1438
            [1672, 5176],
            // Mineshaft 1439
            [1688, -5768],
            // Mineshaft 1440
            [1688, -1816],
            // Mineshaft 1441
            [1688, -664],
            // Mineshaft 1442
            [1688, 1864],
            // Mineshaft 1443
            [1704, -3704],
            // Mineshaft 1444
            [1704, -4104],
            // Mineshaft 1445
            [1704, -5704],
            // Mineshaft 1446
            [1704, 4696],
            // Mineshaft 1447
            [1720, -3048],
            // Mineshaft 1448
            [1736, -2760],
            // Mineshaft 1449
            [1736, -1208],
            // Mineshaft 1450
            [1736, 2296],
            // Mineshaft 1451
            [1752, -2392],
            // Mineshaft 1452
            [1752, -520],
            // Mineshaft 1453
            [1752, 3256],
            // Mineshaft 1454
            [1768, 3832],
            // Mineshaft 1455
            [1784, -2568],
            // Mineshaft 1456
            [1784, -1544],
            // Mineshaft 1457
            [1784, 56],
            // Mineshaft 1458
            [1784, 1752],
            // Mineshaft 1459
            [1784, 2568],
            // Mineshaft 1460
            [1800, -5000],
            // Mineshaft 1461
            [1800, -1272],
            // Mineshaft 1462
            [1800, 3368],
            // Mineshaft 1463
            [1816, -3768],
            // Mineshaft 1464
            [1816, -4440],
            // Mineshaft 1465
            [1816, -2840],
            // Mineshaft 1466
            [1816, 1080],
            // Mineshaft 1467
            [1816, 2792],
            // Mineshaft 1468
            [1832, -5368],
            // Mineshaft 1469
            [1832, -3016],
            // Mineshaft 1470
            [1832, -344],
            // Mineshaft 1471
            [1848, -4344],
            // Mineshaft 1472
            [1848, 5304],
            // Mineshaft 1473
            [1864, -4520],
            // Mineshaft 1474
            [1864, -1880],
            // Mineshaft 1475
            [1864, -1960],
            // Mineshaft 1476
            [1864, 312],
            // Mineshaft 1477
            [1864, 552],
            // Mineshaft 1478
            [1880, -4712],
            // Mineshaft 1479
            [1880, -5144],
            // Mineshaft 1480
            [1880, -5720],
            // Mineshaft 1481
            [1880, -1464],
            // Mineshaft 1482
            [1880, 3432],
            // Mineshaft 1483
            [1880, 4104],
            // Mineshaft 1484
            [1896, -1000],
            // Mineshaft 1485
            [1912, -4200],
            // Mineshaft 1486
            [1912, -4648],
            // Mineshaft 1487
            [1912, -2328],
            // Mineshaft 1488
            [1912, 5112],
            // Mineshaft 1489
            [1928, -3240],
            // Mineshaft 1490
            [1928, 8],
            // Mineshaft 1491
            [1944, -3784],
            // Mineshaft 1492
            [1944, 3752],
            // Mineshaft 1493
            [1944, 5048],
            // Mineshaft 1494
            [1944, 4824],
            // Mineshaft 1495
            [1960, -3384],
            // Mineshaft 1496
            [1960, 3848],
            // Mineshaft 1497
            [1960, 4792],
            // Mineshaft 1498
            [1976, 280],
            // Mineshaft 1499
            [1976, 3480],
            // Mineshaft 1500
            [1976, 3688],
            // Mineshaft 1501
            [1976, 4888],
            // Mineshaft 1502
            [1992, -1144],
            // Mineshaft 1503
            [1992, -1464],
            // Mineshaft 1504
            [1992, 2248],
            // Mineshaft 1505
            [1992, 3304],
            // Mineshaft 1506
            [1992, 4728],
            // Mineshaft 1507
            [2008, -2600],
            // Mineshaft 1508
            [2008, -2568],
            // Mineshaft 1509
            [2008, -1224],
            // Mineshaft 1510
            [2008, 1848],
            // Mineshaft 1511
            [2008, 4184],
            // Mineshaft 1512
            [2008, 5608],
            // Mineshaft 1513
            [2024, -1848],
            // Mineshaft 1514
            [2024, 2952],
            // Mineshaft 1515
            [2024, 3320],
            // Mineshaft 1516
            [2040, -5976],
            // Mineshaft 1517
            [2040, -56],
            // Mineshaft 1518
            [2056, -5016],
            // Mineshaft 1519
            [2072, -3048],
            // Mineshaft 1520
            [2072, 5704],
            // Mineshaft 1521
            [2088, -56],
            // Mineshaft 1522
            [2088, -264],
            // Mineshaft 1523
            [2088, 1032],
            // Mineshaft 1524
            [2088, 2504],
            // Mineshaft 1525
            [2088, 2632],
            // Mineshaft 1526
            [2088, 2696],
            // Mineshaft 1527
            [2088, 4232],
            // Mineshaft 1528
            [2104, 600],
            // Mineshaft 1529
            [2104, 968],
            // Mineshaft 1530
            [2120, 3960],
            // Mineshaft 1531
            [2136, 3640],
            // Mineshaft 1532
            [2136, 4584],
            // Mineshaft 1533
            [2152, -5736],
            // Mineshaft 1534
            [2152, -1672],
            // Mineshaft 1535
            [2152, 3640],
            // Mineshaft 1536
            [2152, 4696],
            // Mineshaft 1537
            [2152, 5960],
            // Mineshaft 1538
            [2152, 4888],
            // Mineshaft 1539
            [2168, -4120],
            // Mineshaft 1540
            [2168, -1560],
            // Mineshaft 1541
            [2168, 3272],
            // Mineshaft 1542
            [2168, 5864],
            // Mineshaft 1543
            [2168, 4840],
            // Mineshaft 1544
            [2184, 5208],
            // Mineshaft 1545
            [2200, -2376],
            // Mineshaft 1546
            [2200, -536],
            // Mineshaft 1547
            [2200, -1544],
            // Mineshaft 1548
            [2200, -2216],
            // Mineshaft 1549
            [2200, 1144],
            // Mineshaft 1550
            [2200, 2584],
            // Mineshaft 1551
            [2200, 3688],
            // Mineshaft 1552
            [2200, 4536],
            // Mineshaft 1553
            [2216, -984],
            // Mineshaft 1554
            [2216, -1912],
            // Mineshaft 1555
            [2216, 3096],
            // Mineshaft 1556
            [2248, -3416],
            // Mineshaft 1557
            [2248, 3688],
            // Mineshaft 1558
            [2248, 5496],
            // Mineshaft 1559
            [2264, -1640],
            // Mineshaft 1560
            [2264, 5224],
            // Mineshaft 1561
            [2280, 1448],
            // Mineshaft 1562
            [2296, -88],
            // Mineshaft 1563
            [2296, 152],
            // Mineshaft 1564
            [2312, -1480],
            // Mineshaft 1565
            [2312, -1816],
            // Mineshaft 1566
            [2312, 3816],
            // Mineshaft 1567
            [2328, -4664],
            // Mineshaft 1568
            [2328, -4696],
            // Mineshaft 1569
            [2328, -184],
            // Mineshaft 1570
            [2328, 3048],
            // Mineshaft 1571
            [2344, -2664],
            // Mineshaft 1572
            [2344, 2136],
            // Mineshaft 1573
            [2344, 3720],
            // Mineshaft 1574
            [2344, 4424],
            // Mineshaft 1575
            [2360, -5928],
            // Mineshaft 1576
            [2360, 840],
            // Mineshaft 1577
            [2360, 2344],
            // Mineshaft 1578
            [2360, 4376],
            // Mineshaft 1579
            [2360, 5960],
            // Mineshaft 1580
            [2376, -3560],
            // Mineshaft 1581
            [2376, -4056],
            // Mineshaft 1582
            [2376, -216],
            // Mineshaft 1583
            [2376, 536],
            // Mineshaft 1584
            [2376, 2664],
            // Mineshaft 1585
            [2376, 4440],
            // Mineshaft 1586
            [2392, -3752],
            // Mineshaft 1587
            [2392, -4312],
            // Mineshaft 1588
            [2392, -568],
            // Mineshaft 1589
            [2392, 1736],
            // Mineshaft 1590
            [2408, -1752],
            // Mineshaft 1591
            [2408, 520],
            // Mineshaft 1592
            [2408, 168],
            // Mineshaft 1593
            [2408, 2424],
            // Mineshaft 1594
            [2440, -5352],
            // Mineshaft 1595
            [2456, 520],
            // Mineshaft 1596
            [2456, 4456],
            // Mineshaft 1597
            [2456, 5704],
            // Mineshaft 1598
            [2472, -4232],
            // Mineshaft 1599
            [2472, -4248],
            // Mineshaft 1600
            [2472, -3112],
            // Mineshaft 1601
            [2472, 1864],
            // Mineshaft 1602
            [2472, 2184],
            // Mineshaft 1603
            [2472, 4168],
            // Mineshaft 1604
            [2488, -5496],
            // Mineshaft 1605
            [2488, 1208],
            // Mineshaft 1606
            [2488, 936],
            // Mineshaft 1607
            [2504, -3736],
            // Mineshaft 1608
            [2504, 1672],
            // Mineshaft 1609
            [2504, 1672],
            // Mineshaft 1610
            [2504, 3928],
            // Mineshaft 1611
            [2520, -3560],
            // Mineshaft 1612
            [2520, -4104],
            // Mineshaft 1613
            [2520, -5112],
            // Mineshaft 1614
            [2536, -3320],
            // Mineshaft 1615
            [2536, 72],
            // Mineshaft 1616
            [2536, 2328],
            // Mineshaft 1617
            [2536, 2792],
            // Mineshaft 1618
            [2552, -680],
            // Mineshaft 1619
            [2552, 5992],
            // Mineshaft 1620
            [2552, 4664],
            // Mineshaft 1621
            [2552, 4136],
            // Mineshaft 1622
            [2568, -4392],
            // Mineshaft 1623
            [2568, -1240],
            // Mineshaft 1624
            [2568, 1096],
            // Mineshaft 1625
            [2568, 1192],
            // Mineshaft 1626
            [2568, 1800],
            // Mineshaft 1627
            [2584, -2616],
            // Mineshaft 1628
            [2584, 4264],
            // Mineshaft 1629
            [2600, -3768],
            // Mineshaft 1630
            [2600, -2632],
            // Mineshaft 1631
            [2600, -1944],
            // Mineshaft 1632
            [2600, 1576],
            // Mineshaft 1633
            [2600, 5544],
            // Mineshaft 1634
            [2600, 4616],
            // Mineshaft 1635
            [2616, -4904],
            // Mineshaft 1636
            [2616, -3176],
            // Mineshaft 1637
            [2632, -3880],
            // Mineshaft 1638
            [2632, -568],
            // Mineshaft 1639
            [2632, -1176],
            // Mineshaft 1640
            [2632, 1464],
            // Mineshaft 1641
            [2648, 184],
            // Mineshaft 1642
            [2648, 2296],
            // Mineshaft 1643
            [2648, 3064],
            // Mineshaft 1644
            [2664, -4184],
            // Mineshaft 1645
            [2664, 536],
            // Mineshaft 1646
            [2664, 3752],
            // Mineshaft 1647
            [2680, -2216],
            // Mineshaft 1648
            [2680, 1000],
            // Mineshaft 1649
            [2696, 1384],
            // Mineshaft 1650
            [2712, -2296],
            // Mineshaft 1651
            [2712, -2360],
            // Mineshaft 1652
            [2712, 968],
            // Mineshaft 1653
            [2712, 712],
            // Mineshaft 1654
            [2712, 5304],
            // Mineshaft 1655
            [2712, 4520],
            // Mineshaft 1656
            [2728, -1736],
            // Mineshaft 1657
            [2728, 1896],
            // Mineshaft 1658
            [2744, -5464],
            // Mineshaft 1659
            [2744, -2504],
            // Mineshaft 1660
            [2744, 984],
            // Mineshaft 1661
            [2744, 840],
            // Mineshaft 1662
            [2744, 168],
            // Mineshaft 1663
            [2744, 1544],
            // Mineshaft 1664
            [2760, -4552],
            // Mineshaft 1665
            [2776, -3544],
            // Mineshaft 1666
            [2776, -3640],
            // Mineshaft 1667
            [2776, -2056],
            // Mineshaft 1668
            [2776, -2552],
            // Mineshaft 1669
            [2776, 5208],
            // Mineshaft 1670
            [2792, -4344],
            // Mineshaft 1671
            [2792, -4408],
            // Mineshaft 1672
            [2792, -2440],
            // Mineshaft 1673
            [2792, 3336],
            // Mineshaft 1674
            [2792, 2744],
            // Mineshaft 1675
            [2808, -5320],
            // Mineshaft 1676
            [2808, 1224],
            // Mineshaft 1677
            [2808, 5048],
            // Mineshaft 1678
            [2808, 5928],
            // Mineshaft 1679
            [2808, 3144],
            // Mineshaft 1680
            [2808, 520],
            // Mineshaft 1681
            [2824, -5080],
            // Mineshaft 1682
            [2824, -5208],
            // Mineshaft 1683
            [2824, -824],
            // Mineshaft 1684
            [2840, -2328],
            // Mineshaft 1685
            [2840, 5736],
            // Mineshaft 1686
            [2840, 4552],
            // Mineshaft 1687
            [2856, 4792],
            // Mineshaft 1688
            [2856, 1656],
            // Mineshaft 1689
            [2872, -3480],
            // Mineshaft 1690
            [2872, -5304],
            // Mineshaft 1691
            [2872, -5400],
            // Mineshaft 1692
            [2872, 4456],
            // Mineshaft 1693
            [2888, -5176],
            // Mineshaft 1694
            [2888, -3048],
            // Mineshaft 1695
            [2888, 1960],
            // Mineshaft 1696
            [2888, 1128],
            // Mineshaft 1697
            [2904, -1944],
            // Mineshaft 1698
            [2904, 328],
            // Mineshaft 1699
            [2920, -3704],
            // Mineshaft 1701
            [2920, -5432],
            // Mineshaft 1702
            [2920, -5832],
            // Mineshaft 1703
            [2920, -2216],
            // Mineshaft 1704
            [2920, 1144],
            // Mineshaft 1705
            [2936, -3560],
            // Mineshaft 1706
            [2936, -1080],
            // Mineshaft 1707
            [2936, 3608],
            // Mineshaft 1708
            [2936, 1256],
            // Mineshaft 1709
            [2968, -5160],
            // Mineshaft 1710
            [2968, -408],
            // Mineshaft 1711
            [2968, 2920],
            // Mineshaft 1712
            [2984, -5960],
            // Mineshaft 1713
            [3000, -3656],
            // Mineshaft 1714
            [3016, 5000],
            // Mineshaft 1715
            [3016, 4552],
            // Mineshaft 1716
            [3016, 3992],
            // Mineshaft 1717
            [3032, -4936],
            // Mineshaft 1718
            [3032, -2984],
            // Mineshaft 1719
            [3032, 2264],
            // Mineshaft 1720
            [3032, 360],
            // Mineshaft 1721
            [3048, -1288],
            // Mineshaft 1722
            [3048, -1848],
            // Mineshaft 1723
            [3048, 5768],
            // Mineshaft 1724
            [3064, -4504],
            // Mineshaft 1725
            [3064, -5976],
            // Mineshaft 1726
            [3064, 3944],
            // Mineshaft 1727
            [3064, 2728],
            // Mineshaft 1728
            [3080, -1496],
            // Mineshaft 1729
            [3080, -2600],
            // Mineshaft 1730
            [3096, -3112],
            // Mineshaft 1731
            [3096, -952],
            // Mineshaft 1732
            [3096, 136],
            // Mineshaft 1733
            [3096, 1320],
            // Mineshaft 1734
            [3112, -5176],
            // Mineshaft 1735
            [3112, 4296],
            // Mineshaft 1736
            [3112, 3704],
            // Mineshaft 1737
            [3112, 504],
            // Mineshaft 1738
            [3128, -3320],
            // Mineshaft 1739
            [3128, -5288],
            // Mineshaft 1740
            [3128, 5592],
            // Mineshaft 1741
            [3128, 1512],
            // Mineshaft 1742
            [3144, 5240],
            // Mineshaft 1743
            [3160, -424],
            // Mineshaft 1744
            [3160, -872],
            // Mineshaft 1745
            [3160, -2008],
            // Mineshaft 1746
            [3176, -4680],
            // Mineshaft 1747
            [3176, -5736],
            // Mineshaft 1748
            [3176, -296],
            // Mineshaft 1749
            [3192, -5160],
            // Mineshaft 1750
            [3192, 152],
            // Mineshaft 1751
            [3208, -3928],
            // Mineshaft 1752
            [3208, -2616],
            // Mineshaft 1753
            [3208, 3368],
            // Mineshaft 1754
            [3224, -4520],
            // Mineshaft 1755
            [3224, 1592],
            // Mineshaft 1756
            [3240, -4904],
            // Mineshaft 1757
            [3240, 5272],
            // Mineshaft 1758
            [3240, 776],
            // Mineshaft 1759
            [3240, 1560],
            // Mineshaft 1760
            [3256, -3688],
            // Mineshaft 1761
            [3256, -3784],
            // Mineshaft 1762
            [3256, -440],
            // Mineshaft 1763
            [3272, 5144],
            // Mineshaft 1764
            [3272, 4328],
            // Mineshaft 1765
            [3272, 2840],
            // Mineshaft 1766
            [3288, 5624],
            // Mineshaft 1767
            [3288, 5080],
            // Mineshaft 1768
            [3288, 3768],
            // Mineshaft 1769
            [3288, 1192],
            // Mineshaft 1770
            [3304, -3704],
            // Mineshaft 1771
            [3304, -808],
            // Mineshaft 1772
            [3304, -2200],
            // Mineshaft 1773
            [3304, 5368],
            // Mineshaft 1774
            [3304, 4776],
            // Mineshaft 1775
            [3304, 4360],
            // Mineshaft 1776
            [3304, 4344],
            // Mineshaft 1777
            [3304, 1816],
            // Mineshaft 1778
            [3320, 4648],
            // Mineshaft 1779
            [3320, 3912],
            // Mineshaft 1780
            [3320, 3784],
            // Mineshaft 1781
            [3320, 696],
            // Mineshaft 1782
            [3336, 4296],
            // Mineshaft 1783
            [3352, 5336],
            // Mineshaft 1784
            [3368, -5000],
            // Mineshaft 1785
            [3368, -1032],
            // Mineshaft 1786
            [3368, 24],
            // Mineshaft 1787
            [3384, 5336],
            // Mineshaft 1788
            [3384, 424],
            // Mineshaft 1789
            [3384, 760],
            // Mineshaft 1790
            [3400, -4968],
            // Mineshaft 1791
            [3400, -5224],
            // Mineshaft 1792
            [3400, -1864],
            // Mineshaft 1793
            [3400, -2712],
            // Mineshaft 1794
            [3400, -2008],
            // Mineshaft 1795
            [3400, 4232],
            // Mineshaft 1796
            [3400, 2728],
            // Mineshaft 1797
            [3416, -4920],
            // Mineshaft 1798
            [3416, -824],
            // Mineshaft 1799
            [3432, -328],
            // Mineshaft 1800
            [3448, -3384],
            // Mineshaft 1801
            [3448, -2632],
            // Mineshaft 1802
            [3448, -2072],
            // Mineshaft 1803
            [3448, 4392],
            // Mineshaft 1804
            [3448, 712],
            // Mineshaft 1805
            [3448, 760],
            // Mineshaft 1806
            [3464, -4088],
            // Mineshaft 1807
            [3464, -408],
            // Mineshaft 1808
            [3464, -744],
            // Mineshaft 1809
            [3464, -2152],
            // Mineshaft 1810
            [3480, -3816],
            // Mineshaft 1811
            [3480, 4904],
            // Mineshaft 1812
            [3480, 4856],
            // Mineshaft 1813
            [3480, 4168],
            // Mineshaft 1814
            [3480, 3240],
            // Mineshaft 1815
            [3496, -4584],
            // Mineshaft 1816
            [3496, -1448],
            // Mineshaft 1817
            [3512, -4280],
            // Mineshaft 1818
            [3512, -5768],
            // Mineshaft 1819
            [3512, -1240],
            // Mineshaft 1820
            [3512, -2360],
            // Mineshaft 1821
            [3512, -2632],
            // Mineshaft 1822
            [3512, 376],
            // Mineshaft 1823
            [3512, 56],
            // Mineshaft 1824
            [3512, 1832],
            // Mineshaft 1825
            [3528, -5192],
            // Mineshaft 1826
            [3528, 3144],
            // Mineshaft 1827
            [3528, 72],
            // Mineshaft 1828
            [3528, 1032],
            // Mineshaft 1829
            [3528, 1336],
            // Mineshaft 1830
            [3544, -5864],
            // Mineshaft 1831
            [3544, -2488],
            // Mineshaft 1832
            [3544, -2968],
            // Mineshaft 1833
            [3544, -2984],
            // Mineshaft 1834
            [3544, 5800],
            // Mineshaft 1835
            [3544, 2264],
            // Mineshaft 1836
            [3576, -3992],
            // Mineshaft 1837
            [3576, -40],
            // Mineshaft 1838
            [3576, -1368],
            // Mineshaft 1839
            [3576, -2072],
            // Mineshaft 1840
            [3576, 5336],
            // Mineshaft 1841
            [3576, 2200],
            // Mineshaft 1842
            [3576, 1384],
            // Mineshaft 1843
            [3592, -744],
            // Mineshaft 1844
            [3592, 5000],
            // Mineshaft 1845
            [3592, 4072],
            // Mineshaft 1846
            [3608, -1336],
            // Mineshaft 1847
            [3608, 5944],
            // Mineshaft 1848
            [3608, 4728],
            // Mineshaft 1849
            [3624, -4392],
            // Mineshaft 1850
            [3624, -2840],
            // Mineshaft 1851
            [3624, 1880],
            // Mineshaft 1852
            [3640, -3800],
            // Mineshaft 1853
            [3640, -4584],
            // Mineshaft 1854
            [3640, -5752],
            // Mineshaft 1855
            [3640, 4184],
            // Mineshaft 1856
            [3640, 792],
            // Mineshaft 1857
            [3656, -968],
            // Mineshaft 1858
            [3656, 4952],
            // Mineshaft 1859
            [3672, 3800],
            // Mineshaft 1860
            [3672, 3400],
            // Mineshaft 1861
            [3688, -2664],
            // Mineshaft 1862
            [3688, 2840],
            // Mineshaft 1863
            [3688, 3208],
            // Mineshaft 1864
            [3688, 1336],
            // Mineshaft 1865
            [3704, -2904],
            // Mineshaft 1866
            [3704, 5176],
            // Mineshaft 1867
            [3704, 4520],
            // Mineshaft 1868
            [3720, -4120],
            // Mineshaft 1869
            [3720, -328],
            // Mineshaft 1870
            [3720, 968],
            // Mineshaft 1871
            [3720, 1048],
            // Mineshaft 1872
            [3736, -4344],
            // Mineshaft 1873
            [3736, 5672],
            // Mineshaft 1874
            [3736, 1064],
            // Mineshaft 1875
            [3752, -2280],
            // Mineshaft 1876
            [3768, -2152],
            // Mineshaft 1877
            [3768, 4376],
            // Mineshaft 1878
            [3768, 1832],
            // Mineshaft 1879
            [3784, -4936],
            // Mineshaft 1880
            [3784, -2488],
            // Mineshaft 1881
            [3784, -2632],
            // Mineshaft 1882
            [3800, 4200],
            // Mineshaft 1883
            [3800, 2440],
            // Mineshaft 1884
            [3800, 584],
            // Mineshaft 1885
            [3800, 4088],
            // Mineshaft 1886
            [3800, 4136],
            // Mineshaft 1887
            [3816, 3320],
            // Mineshaft 1888
            [3832, 5912],
            // Mineshaft 1889
            [3832, 3448],
            // Mineshaft 1890
            [3848, -5480],
            // Mineshaft 1891
            [3848, 5384],
            // Mineshaft 1892
            [3864, -4456],
            // Mineshaft 1893
            [3864, 4536],
            // Mineshaft 1894
            [3864, 264],
            // Mineshaft 1895
            [3880, -4920],
            // Mineshaft 1896
            [3896, -2216],
            // Mineshaft 1897
            [3912, -2296],
            // Mineshaft 1898
            [3912, -1480],
            // Mineshaft 1899
            [3912, 5064],
            // Mineshaft 1900
            [3912, 1128],
            // Mineshaft 1901
            [3928, -2776],
            // Mineshaft 1902
            [3944, -648],
            // Mineshaft 1903
            [3944, 3464],
            // Mineshaft 1904
            [3960, -3512],
            // Mineshaft 1905
            [3960, -1224],
            // Mineshaft 1906
            [3960, 5448],
            // Mineshaft 1907
            [3976, -2584],
            // Mineshaft 1908
            [3976, 1592],
            // Mineshaft 1909
            [3976, 1672],
            // Mineshaft 1910
            [3976, 2056],
            // Mineshaft 1911
            [3976, 3544],
            // Mineshaft 1912
            [3992, -1048],
            // Mineshaft 1913
            [3992, 3288],
            // Mineshaft 1914
            [4008, -4760],
            // Mineshaft 1915
            [4008, -24],
            // Mineshaft 1916
            [4008, 1032],
            // Mineshaft 1917
            [4024, -3064],
            // Mineshaft 1918
            [4040, 2616],
            // Mineshaft 1919
            [4040, 312],
            // Mineshaft 1920
            [4040, 696],
            // Mineshaft 1921
            [4056, -4376],
            // Mineshaft 1922
            [4056, -1368],
            // Mineshaft 1923
            [4072, -3544],
            // Mineshaft 1924
            [4072, -5672],
            // Mineshaft 1925
            [4072, 4584],
            // Mineshaft 1926
            [4072, 2840],
            // Mineshaft 1927
            [4072, 3448],
            // Mineshaft 1928
            [4088, -3976],
            // Mineshaft 1929
            [4088, -728],
            // Mineshaft 1930
            [4104, -4808],
            // Mineshaft 1931
            [4104, -1832],
            // Mineshaft 1932
            [4104, -2200],
            // Mineshaft 1933
            [4104, -152],
            // Mineshaft 1934
            [4104, -72],
            // Mineshaft 1935
            [4120, -2200],
            // Mineshaft 1936
            [4120, 472],
            // Mineshaft 1937
            [4120, 2760],
            // Mineshaft 1938
            [4120, 4088],
            // Mineshaft 1939
            [4136, -4632],
            // Mineshaft 1940
            [4136, -488],
            // Mineshaft 1941
            [4136, -584],
            // Mineshaft 1942
            [4136, 2856],
            // Mineshaft 1943
            [4152, -5992],
            // Mineshaft 1944
            [4152, -1048],
            // Mineshaft 1945
            [4152, 4424],
            // Mineshaft 1946
            [4168, -3928],
            // Mineshaft 1947
            [4168, -568],
            // Mineshaft 1948
            [4168, 4584],
            // Mineshaft 1949
            [4168, 776],
            // Mineshaft 1950
            [4168, 920],
            // Mineshaft 1951
            [4184, -1240],
            // Mineshaft 1952
            [4184, -1272],
            // Mineshaft 1953
            [4184, 3064],
            // Mineshaft 1954
            [4184, 3496],
            // Mineshaft 1955
            [4200, 2440],
            // Mineshaft 1956
            [4216, -4808],
            // Mineshaft 1957
            [4216, -632],
            // Mineshaft 1958
            [4216, 4968],
            // Mineshaft 1959
            [4232, 1752],
            // Mineshaft 1960
            [4232, 2424],
            // Mineshaft 1961
            [4232, 3464],
            // Mineshaft 1962
            [4248, -5480],
            // Mineshaft 1963
            [4248, 5176],
            // Mineshaft 1964
            [4248, 2040],
            // Mineshaft 1965
            [4280, -3928],
            // Mineshaft 1966
            [4280, -4312],
            // Mineshaft 1967
            [4296, -5320],
            // Mineshaft 1968
            [4296, 5896],
            // Mineshaft 1969
            [4296, 1000],
            // Mineshaft 1970
            [4312, -2744],
            // Mineshaft 1971
            [4312, -696],
            // Mineshaft 1972
            [4312, 1464],
            // Mineshaft 1973
            [4312, 2072],
            // Mineshaft 1974
            [4312, 3064],
            // Mineshaft 1975
            [4328, -4376],
            // Mineshaft 1976
            [4328, 3880],
            // Mineshaft 1977
            [4344, -4440],
            // Mineshaft 1978
            [4344, -1384],
            // Mineshaft 1979
            [4344, -680],
            // Mineshaft 1980
            [4344, 1288],
            // Mineshaft 1981
            [4360, 5640],
            // Mineshaft 1982
            [4360, 5496],
            // Mineshaft 1983
            [4360, 5048],
            // Mineshaft 1984
            [4360, 3768],
            // Mineshaft 1985
            [4376, -4360],
            // Mineshaft 1986
            [4376, -2488],
            // Mineshaft 1987
            [4376, -376],
            // Mineshaft 1988
            [4376, 72],
            // Mineshaft 1989
            [4376, 4040],
            // Mineshaft 1990
            [4392, -4232],
            // Mineshaft 1991
            [4392, -1000],
            // Mineshaft 1992
            [4392, -1576],
            // Mineshaft 1993
            [4392, 5096],
            // Mineshaft 1994
            [4392, 3224],
            // Mineshaft 1995
            [4408, -5336],
            // Mineshaft 1996
            [4424, 520],
            // Mineshaft 1997
            [4424, 760],
            // Mineshaft 1998
            [4440, -5880],
            // Mineshaft 1999
            [4440, 5736],
            // Mineshaft 2000
            [4440, 3992],
            // Mineshaft 2001
            [4456, -2808],
            // Mineshaft 2002
            [4456, -1432],
            // Mineshaft 2003
            [4456, -456],
            // Mineshaft 2004
            [4456, 5048],
            // Mineshaft 2005
            [4456, 2408],
            // Mineshaft 2006
            [4456, 4296],
            // Mineshaft 2007
            [4488, -4264],
            // Mineshaft 2008
            [4488, -5288],
            // Mineshaft 2009
            [4488, -216],
            // Mineshaft 2010
            [4488, 5400],
            // Mineshaft 2011
            [4488, 5160],
            // Mineshaft 2012
            [4504, 4952],
            // Mineshaft 2013
            [4504, 4552],
            // Mineshaft 2014
            [4504, 696],
            // Mineshaft 2015
            [4536, -3896],
            // Mineshaft 2016
            [4536, 520],
            // Mineshaft 2017
            [4536, 3544],
            // Mineshaft 2018
            [4552, 1992],
            // Mineshaft 2019
            [4552, 2568],
            // Mineshaft 2020
            [4568, -4376],
            // Mineshaft 2021
            [4568, -5304],
            // Mineshaft 2022
            [4568, -5384],
            // Mineshaft 2023
            [4568, -2616],
            // Mineshaft 2024
            [4568, -2840],
            // Mineshaft 2025
            [4568, 4696],
            // Mineshaft 2026
            [4584, -5160],
            // Mineshaft 2027
            [4600, -2552],
            // Mineshaft 2028
            [4600, -3000],
            // Mineshaft 2029
            [4600, -552],
            // Mineshaft 2030
            [4600, 2232],
            // Mineshaft 2031
            [4616, -4536],
            // Mineshaft 2032
            [4616, 4744],
            // Mineshaft 2033
            [4616, 4328],
            // Mineshaft 2034
            [4632, -3528],
            // Mineshaft 2035
            [4632, -2952],
            // Mineshaft 2036
            [4632, -1576],
            // Mineshaft 2037
            [4632, -56],
            // Mineshaft 2038
            [4664, -3688],
            // Mineshaft 2039
            [4664, 200],
            // Mineshaft 2040
            [4664, 4024],
            // Mineshaft 2041
            [4696, -40],
            // Mineshaft 2042
            [4696, -216],
            // Mineshaft 2043
            [4696, 5256],
            // Mineshaft 2044
            [4696, 1912],
            // Mineshaft 2045
            [4696, 2760],
            // Mineshaft 2046
            [4712, -1496],
            // Mineshaft 2047
            [4712, -1032],
            // Mineshaft 2048
            [4712, 2264],
            // Mineshaft 2049
            [4728, -1224],
            // Mineshaft 2050
            [4728, -296],
            // Mineshaft 2051
            [4728, -152],
            // Mineshaft 2052
            [4728, 216],
            // Mineshaft 2053
            [4728, 792],
            // Mineshaft 2054
            [4744, -4072],
            // Mineshaft 2055
            [4760, 72],
            // Mineshaft 2056
            [4760, 1384],
            // Mineshaft 2057
            [4792, -3544],
            // Mineshaft 2058
            [4792, -2712],
            // Mineshaft 2059
            [4792, -1656],
            // Mineshaft 2060
            [4792, -392],
            // Mineshaft 2061
            [4792, -440],
            // Mineshaft 2062
            [4808, 936],
            // Mineshaft 2063
            [4808, 1576],
            // Mineshaft 2064
            [4824, -1768],
            // Mineshaft 2065
            [4824, 5704],
            // Mineshaft 2066
            [4824, 1160],
            // Mineshaft 2067
            [4840, 4792],
            // Mineshaft 2068
            [4840, 3144],
            // Mineshaft 2069
            [4840, 3800],
            // Mineshaft 2070
            [4856, 4184],
            // Mineshaft 2071
            [4856, 1128],
            // Mineshaft 2072
            [4856, 1544],
            // Mineshaft 2073
            [4872, -5896],
            // Mineshaft 2074
            [4872, 4232],
            // Mineshaft 2075
            [4888, -4968],
            // Mineshaft 2076
            [4888, 4504],
            // Mineshaft 2077
            [4888, 152],
            // Mineshaft 2078
            [4888, 3944],
            // Mineshaft 2079
            [4904, -5912],
            // Mineshaft 2080
            [4904, -1688],
            // Mineshaft 2081
            [4920, -2264],
            // Mineshaft 2082
            [4920, 4936],
            // Mineshaft 2083
            [4920, 4232],
            // Mineshaft 2084
            [4920, 1368],
            // Mineshaft 2085
            [4936, -4280],
            // Mineshaft 2086
            [4936, 4456],
            // Mineshaft 2087
            [4936, 3576],
            // Mineshaft 2088
            [4952, -2200],
            // Mineshaft 2089
            [4952, -1416],
            // Mineshaft 2090
            [4952, -1224],
            // Mineshaft 2091
            [4968, -728],
            // Mineshaft 2092
            [4984, -4440],
            // Mineshaft 2093
            [4984, -2888],
            // Mineshaft 2094
            [4984, -664],
            // Mineshaft 2095
            [4984, 4328],
            // Mineshaft 2096
            [5000, 5496],
            // Mineshaft 2097
            [5016, -4856],
            // Mineshaft 2098
            [5016, -5128],
            // Mineshaft 2099
            [5016, -1064],
            // Mineshaft 2100
            [5032, -4888],
            // Mineshaft 2101
            [5032, -1016],
            // Mineshaft 2102
            [5032, 5592],
            // Mineshaft 2103
            [5032, 5336],
            // Mineshaft 2104
            [5048, 456],
            // Mineshaft 2105
            [5064, -4968],
            // Mineshaft 2106
            [5064, 2584],
            // Mineshaft 2107
            [5080, -2856],
            // Mineshaft 2108
            [5080, -1896],
            // Mineshaft 2109
            [5080, 5224],
            // Mineshaft 2110
            [5080, 4168],
            // Mineshaft 2111
            [5096, -104],
            // Mineshaft 2112
            [5096, 696],
            // Mineshaft 2113
            [5096, 3144],
            // Mineshaft 2114
            [5096, 1592],
            // Mineshaft 2115
            [5128, -1288],
            // Mineshaft 2116
            [5128, 3624],
            // Mineshaft 2117
            [5144, -424],
            // Mineshaft 2118
            [5144, 5832],
            // Mineshaft 2119
            [5160, -3784],
            // Mineshaft 2120
            [5160, -4664],
            // Mineshaft 2121
            [5160, -2744],
            // Mineshaft 2122
            [5176, -4968],
            // Mineshaft 2123
            [5176, -2568],
            // Mineshaft 2124
            [5176, 2536],
            // Mineshaft 2125
            [5192, -5224],
            // Mineshaft 2126
            [5192, -1048],
            // Mineshaft 2127
            [5192, 4968],
            // Mineshaft 2128
            [5192, 4648],
            // Mineshaft 2129
            [5208, -2776],
            // Mineshaft 2130
            [5208, 4216],
            // Mineshaft 2131
            [5208, 3176],
            // Mineshaft 2132
            [5224, -4072],
            // Mineshaft 2133
            [5224, -5176],
            // Mineshaft 2134
            [5224, 2072],
            // Mineshaft 2135
            [5224, 2232],
            // Mineshaft 2136
            [5240, -1272],
            // Mineshaft 2137
            [5256, -4008],
            // Mineshaft 2138
            [5272, -2632],
            // Mineshaft 2139
            [5288, -3048],
            // Mineshaft 2140
            [5288, -5096],
            // Mineshaft 2141
            [5288, 4952],
            // Mineshaft 2142
            [5304, -3128],
            // Mineshaft 2143
            [5304, -4072],
            // Mineshaft 2144
            [5304, -4168],
            // Mineshaft 2145
            [5304, -4872],
            // Mineshaft 2146
            [5304, -1928],
            // Mineshaft 2147
            [5320, -5208],
            // Mineshaft 2148
            [5336, -4824],
            // Mineshaft 2149
            [5336, -2296],
            // Mineshaft 2150
            [5336, 2520],
            // Mineshaft 2151
            [5352, -3576],
            // Mineshaft 2152
            [5352, -4632],
            // Mineshaft 2153
            [5352, -4968],
            // Mineshaft 2154
            [5352, -1240],
            // Mineshaft 2155
            [5352, 4808],
            // Mineshaft 2156
            [5352, 4616],
            // Mineshaft 2157
            [5368, -3256],
            // Mineshaft 2158
            [5368, -5320],
            // Mineshaft 2159
            [5368, 4872],
            // Mineshaft 2160
            [5368, 520],
            // Mineshaft 2161
            [5384, -1816],
            // Mineshaft 2162
            [5384, 904],
            // Mineshaft 2163
            [5400, -5256],
            // Mineshaft 2164
            [5400, 5800],
            // Mineshaft 2165
            [5400, 776],
            // Mineshaft 2166
            [5400, 3656],
            // Mineshaft 2167
            [5416, -152],
            // Mineshaft 2168
            [5432, -2536],
            // Mineshaft 2169
            [5432, -1912],
            // Mineshaft 2170
            [5432, 1064],
            // Mineshaft 2171
            [5432, 2120],
            // Mineshaft 2172
            [5448, -2968],
            // Mineshaft 2173
            [5448, -5768],
            // Mineshaft 2174
            [5448, 5944],
            // Mineshaft 2175
            [5448, 1912],
            // Mineshaft 2176
            [5464, -3816],
            // Mineshaft 2178
            [5464, 5448],
            // Mineshaft 2179
            [5464, 8],
            // Mineshaft 2180
            [5464, 3000],
            // Mineshaft 2181
            [5480, -5848],
            // Mineshaft 2182
            [5480, -1896],
            // Mineshaft 2183
            [5480, 3384],
            // Mineshaft 2184
            [5512, -5064],
            // Mineshaft 2185
            [5512, 5944],
            // Mineshaft 2186
            [5512, 360],
            // Mineshaft 2187
            [5512, 2360],
            // Mineshaft 2188
            [5528, -4104],
            // Mineshaft 2189
            [5528, 5960],
            // Mineshaft 2190
            [5528, 4920],
            // Mineshaft 2191
            [5528, 4376],
            // Mineshaft 2192
            [5528, 4152],
            // Mineshaft 2193
            [5528, 184],
            // Mineshaft 2194
            [5544, 4328],
            // Mineshaft 2195
            [5544, 4120],
            // Mineshaft 2196
            [5544, 3688],
            // Mineshaft 2197
            [5560, -3912],
            // Mineshaft 2198
            [5560, -4488],
            // Mineshaft 2199
            [5592, -5016],
            // Mineshaft 2200
            [5592, -216],
            // Mineshaft 2201
            [5592, 5960],
            // Mineshaft 2202
            [5592, 3736],
            // Mineshaft 2203
            [5592, 3144],
            // Mineshaft 2204
            [5624, -3928],
            // Mineshaft 2205
            [5624, -1320],
            // Mineshaft 2206
            [5624, 1640],
            // Mineshaft 2207
            [5640, -5848],
            // Mineshaft 2208
            [5640, -168],
            // Mineshaft 2209
            [5640, 4216],
            // Mineshaft 2210
            [5640, 2312],
            // Mineshaft 2211
            [5640, 3656],
            // Mineshaft 2212
            [5656, -3272],
            // Mineshaft 2213
            [5656, 5160],
            // Mineshaft 2214
            [5672, -3720],
            // Mineshaft 2215
            [5672, -5784],
            // Mineshaft 2216
            [5672, -680],
            // Mineshaft 2217
            [5672, 5096],
            // Mineshaft 2218
            [5672, 3864],
            // Mineshaft 2219
            [5688, -5432],
            // Mineshaft 2220
            [5688, -2424],
            // Mineshaft 2221
            [5688, -2696],
            // Mineshaft 2222
            [5688, -1672],
            // Mineshaft 2223
            [5688, -1416],
            // Mineshaft 2224
            [5688, 5256],
            // Mineshaft 2225
            [5688, 4968],
            // Mineshaft 2226
            [5688, 4248],
            // Mineshaft 2227
            [5688, 152],
            // Mineshaft 2228
            [5688, 3208],
            // Mineshaft 2229
            [5704, -4632],
            // Mineshaft 2230
            [5704, -2664],
            // Mineshaft 2231
            [5704, 5048],
            // Mineshaft 2232
            [5720, -4168],
            // Mineshaft 2233
            [5720, 4120],
            // Mineshaft 2234
            [5720, 1432],
            // Mineshaft 2235
            [5736, -2808],
            // Mineshaft 2236
            [5752, -4024],
            // Mineshaft 2237
            [5752, -5112],
            // Mineshaft 2238
            [5752, 4728],
            // Mineshaft 2239
            [5752, 3096],
            // Mineshaft 2240
            [5768, -3416],
            // Mineshaft 2241
            [5768, 3816],
            // Mineshaft 2242
            [5784, -4072],
            // Mineshaft 2243
            [5784, -664],
            // Mineshaft 2244
            [5784, -456],
            // Mineshaft 2245
            [5784, 5560],
            // Mineshaft 2246
            [5800, -2392],
            // Mineshaft 2247
            [5800, 968],
            // Mineshaft 2248
            [5800, 2664],
            // Mineshaft 2249
            [5816, -4392],
            // Mineshaft 2250
            [5816, -1848],
            // Mineshaft 2251
            [5816, 4312],
            // Mineshaft 2252
            [5816, 2872],
            // Mineshaft 2253
            [5816, 2712],
            // Mineshaft 2254
            [5832, -4824],
            // Mineshaft 2255
            [5832, -5368],
            // Mineshaft 2256
            [5832, 104],
            // Mineshaft 2257
            [5832, 216],
            // Mineshaft 2258
            [5848, -5992],
            // Mineshaft 2259
            [5848, -2712],
            // Mineshaft 2260
            [5864, -3848],
            // Mineshaft 2261
            [5880, 1832],
            // Mineshaft 2262
            [5896, -5128],
            // Mineshaft 2263
            [5896, 4104],
            // Mineshaft 2264
            [5896, 744],
            // Mineshaft 2265
            [5912, -984],
            // Mineshaft 2266
            [5912, 3944],
            // Mineshaft 2267
            [5912, 2344],
            // Mineshaft 2268
            [5928, -3400],
            // Mineshaft 2269
            [5928, -4856],
            // Mineshaft 2270
            [5928, -2616],
            // Mineshaft 2271
            [5944, -5288],
            // Mineshaft 2272
            [5944, -1608],
            // Mineshaft 2273
            [5944, 3912],
            // Mineshaft 2274
            [5944, 1256],
            // Mineshaft 2275
            [5960, 3944],
            // Mineshaft 2276
            [5960, 344],
            // Mineshaft 2277
            [5976, -5432],
            // Mineshaft 2278
            [5976, -648],
            // Mineshaft 2279
            [5976, 4552],
            // Mineshaft 2280
            [5976, 2856],
            // Mineshaft 2281
            [5992, -2424],
        ];

        const strongholdCoords = [
            // Stronghold 1
            [5556, 1236],
            // Stronghold 2
            [4580, 4420],
            // Stronghold 3
            [-300, 2292],
            // Stronghold 4
            [-1324, -2156],
            // Stronghold 5
            [-1900, 340],
            // Stronghold 6
            [-4332, -4028],
            // Stronghold 7
            [-4588, -1276],
            // Stronghold 8
            [-4668, 1668],
        ];

        const trail_ruinCoords = [
            // Trail Ruin 1
            [5459, 301],
            // Trail Ruin 2
            [5027, -2451],
            // Trail Ruin 3
            [4942, -3214],
            // Trail Ruin 4
            [4594, -3602],
            // Trail Ruin 5
            [4526, 290],
            // Trail Ruin 6
            [4467, -829],
            // Trail Ruin 7
            [4451, 2419],
            // Trail Ruin 8
            [4366, 942],
            // Trail Ruin 9
            [4158, 830],
            // Trail Ruin 10
            [4157, -5667],
            // Trail Ruin 11
            [4066, -3042],
            // Trail Ruin 12
            [4061, 1117],
            // Trail Ruin 13
            [3986, 366],
            // Trail Ruin 14
            [3965, -277],
            // Trail Ruin 15
            [3870, -1618],
            // Trail Ruin 16
            [3539, 29],
            // Trail Ruin 17
            [3506, -1358],
            // Trail Ruin 18
            [3309, -5357],
            // Trail Ruin 19
            [3037, -3987],
            // Trail Ruin 20
            [2206, 222],
            // Trail Ruin 21
            [1826, -4078],
            // Trail Ruin 22
            [1218, 2562],
            // Trail Ruin 23
            [563, 1709],
            // Trail Ruin 24
            [-530, 3650],
            // Trail Ruin 25
            [-882, 2974],
            // Trail Ruin 26
            [-1277, -989],
            // Trail Ruin 27
            [-1902, -4334],
            // Trail Ruin 28
            [-2083, -813],
            // Trail Ruin 29
            [-2173, -317],
            // Trail Ruin 30
            [-2674, 738],
            // Trail Ruin 31
            [-2675, 5677],
            // Trail Ruin 32
            [-3005, 5683],
            // Trail Ruin 33
            [-3779, -1283],
            // Trail Ruin 34
            [-4322, -2018],
            // Trail Ruin 35
            [-5741, 1203],
        ];

        const trial_chamberCoords = [
            // Trail Chamber 1
            [5556, 1236],
            // Trail Chamber 2
            [5556, 1236],
            // Trail Chamber 3
            [5556, 1236],
            // Trail Chamber 4
            [5556, 1236],
            // Trail Chamber 5
            [5556, 1236],
            // Trail Chamber 6
            [5556, 1236],
            // Trail Chamber 7
            [5556, 1236],
            // Trail Chamber 8
            [5556, 1236],
            // Trail Chamber 9
            [5556, 1236],
            // Trail Chamber 10
            [5556, 1236],
            // Trail Chamber 11
            [5556, 1236],
            // Trail Chamber 12
            [5556, 1236],
            // Trail Chamber 13
            [5556, 1236],
            // Trail Chamber 14
            [5556, 1236],
            // Trail Chamber 15
            [5556, 1236],
            // Trail Chamber 16
            [5556, 1236],
            // Trail Chamber 17
            [5556, 1236],
            // Trail Chamber 18
            [5556, 1236],
            // Trail Chamber 19
            [5556, 1236],
            // Trail Chamber 20
            [5556, 1236],
            // Trail Chamber 21
            [5556, 1236],
            // Trail Chamber 22
            [5556, 1236],
            // Trail Chamber 23
            [5556, 1236],
            // Trail Chamber 24
            [5556, 1236],
            // Trail Chamber 25
            [5556, 1236],
            // Trail Chamber 26
            [5556, 1236],
            // Trail Chamber 27
            [5556, 1236],
            // Trail Chamber 28
            [5556, 1236],
            // Trail Chamber 29
            [5556, 1236],
            // Trail Chamber 30
            [5556, 1236],
            // Trail Chamber 31
            [5556, 1236],
            // Trail Chamber 32
            [5556, 1236],
            // Trail Chamber 33
            [5556, 1236],
            // Trail Chamber 34
            [5556, 1236],
            // Trail Chamber 35
            [5556, 1236],
            // Trail Chamber 36
            [5556, 1236],
            // Trail Chamber 37
            [5556, 1236],
            // Trail Chamber 38
            [5556, 1236],
            // Trail Chamber 39
            [5556, 1236],
            // Trail Chamber 40
            [5556, 1236],
            // Trail Chamber 41
            [5556, 1236],
            // Trail Chamber 42
            [5556, 1236],
            // Trail Chamber 43
            [5556, 1236],
            // Trail Chamber 44
            [5556, 1236],
            // Trail Chamber 45
            [5556, 1236],
            // Trail Chamber 46
            [5556, 1236],
            // Trail Chamber 47
            [5556, 1236],
            // Trail Chamber 48
            [5556, 1236],
            // Trail Chamber 49
            [5556, 1236],
            // Trail Chamber 50
            [5556, 1236],
            // Trail Chamber 51
            [5556, 1236],
            // Trail Chamber 52
            [5556, 1236],
            // Trail Chamber 53
            [5556, 1236],
            // Trail Chamber 54
            [5556, 1236],
            // Trail Chamber 55
            [5556, 1236],
            // Trail Chamber 56
            [5556, 1236],
            // Trail Chamber 57
            [5556, 1236],
            // Trail Chamber 58
            [5556, 1236],
            // Trail Chamber 59
            [5556, 1236],
            // Trail Chamber 60
            [5556, 1236],
            // Trail Chamber 61
            [5556, 1236],
            // Trail Chamber 62
            [5556, 1236],
            // Trail Chamber 63
            [5556, 1236],
            // Trail Chamber 64
            [5556, 1236],
            // Trail Chamber 65
            [5556, 1236],
            // Trail Chamber 66
            [5556, 1236],
            // Trail Chamber 67
            [5556, 1236],
            // Trail Chamber 68
            [5556, 1236],
            // Trail Chamber 69
            [5556, 1236],
            // Trail Chamber 70
            [5556, 1236],
            // Trail Chamber 71
            [5556, 1236],
            // Trail Chamber 72
            [5556, 1236],
            // Trail Chamber 73
            [5556, 1236],
            // Trail Chamber 74
            [5556, 1236],
            // Trail Chamber 75
            [5556, 1236],
            // Trail Chamber 76
            [5556, 1236],
            // Trail Chamber 77
            [5556, 1236],
            // Trail Chamber 78
            [5556, 1236],
            // Trail Chamber 79
            [5556, 1236],
            // Trail Chamber 80
            [5556, 1236],
            // Trail Chamber 81
            [5556, 1236],
            // Trail Chamber 82
            [5556, 1236],
            // Trail Chamber 83
            [5556, 1236],
            // Trail Chamber 84
            [5556, 1236],
            // Trail Chamber 85
            [5556, 1236],
            // Trail Chamber 86
            [5556, 1236],
            // Trail Chamber 87
            [5556, 1236],
            // Trail Chamber 88
            [5556, 1236],
            // Trail Chamber 89
            [5556, 1236],
            // Trail Chamber 90
            [5556, 1236],
            // Trail Chamber 91
            [5556, 1236],
            // Trail Chamber 92
            [5556, 1236],
            // Trail Chamber 93
            [5556, 1236],
            // Trail Chamber 94
            [5556, 1236],
            // Trail Chamber 95
            [5556, 1236],
            // Trail Chamber 96
            [5556, 1236],
            // Trail Chamber 97
            [5556, 1236],
            // Trail Chamber 98
            [5556, 1236],
            // Trail Chamber 99
            [5556, 1236],
            // Trail Chamber 100
            [5556, 1236],
            // Trail Chamber 101
            [5556, 1236],
            // Trail Chamber 102
            [5556, 1236],
            // Trail Chamber 103
            [5556, 1236],
            // Trail Chamber 104
            [5556, 1236],
            // Trail Chamber 105
            [5556, 1236],
            // Trail Chamber 106
            [5556, 1236],
            // Trail Chamber 107
            [5556, 1236],
            // Trail Chamber 108
            [5556, 1236],
            // Trail Chamber 109
            [5556, 1236],
            // Trail Chamber 110
            [5556, 1236],
            // Trail Chamber 111
            [5556, 1236],
            // Trail Chamber 112
            [5556, 1236],
            // Trail Chamber 113
            [5556, 1236],
            // Trail Chamber 114
            [5556, 1236],
            // Trail Chamber 115
            [5556, 1236],
            // Trail Chamber 116
            [5556, 1236],
            // Trail Chamber 117
            [5556, 1236],
            // Trail Chamber 118
            [5556, 1236],
            // Trail Chamber 119
            [5556, 1236],
            // Trail Chamber 120
            [5556, 1236],
            // Trail Chamber 121
            [5556, 1236],
            // Trail Chamber 122
            [5556, 1236],
            // Trail Chamber 123
            [5556, 1236],
            // Trail Chamber 124
            [5556, 1236],
            // Trail Chamber 125
            [5556, 1236],
            // Trail Chamber 126
            [5556, 1236],
            // Trail Chamber 127
            [5556, 1236],
            // Trail Chamber 128
            [5556, 1236],
            // Trail Chamber 129
            [5556, 1236],
            // Trail Chamber 130
            [5556, 1236],
            // Trail Chamber 131
            [5556, 1236],
            // Trail Chamber 132
            [5556, 1236],
            // Trail Chamber 133
            [5556, 1236],
            // Trail Chamber 134
            [5556, 1236],
            // Trail Chamber 135
            [5556, 1236],
            // Trail Chamber 136
            [5556, 1236],
            // Trail Chamber 137
            [5556, 1236],
            // Trail Chamber 138
            [5556, 1236],
            // Trail Chamber 139
            [5556, 1236],
            // Trail Chamber 140
            [5556, 1236],
            // Trail Chamber 141
            [5556, 1236],
            // Trail Chamber 142
            [5556, 1236],
            // Trail Chamber 143
            [5556, 1236],
            // Trail Chamber 144
            [5556, 1236],
            // Trail Chamber 145
            [5556, 1236],
            // Trail Chamber 146
            [5556, 1236],
            // Trail Chamber 147
            [5556, 1236],
            // Trail Chamber 148
            [5556, 1236],
            // Trail Chamber 149
            [5556, 1236],
            // Trail Chamber 150
            [5556, 1236],
            // Trail Chamber 151
            [5556, 1236],
            // Trail Chamber 152
            [5556, 1236],
            // Trail Chamber 153
            [5556, 1236],
            // Trail Chamber 154
            [5556, 1236],
            // Trail Chamber 155
            [5556, 1236],
            // Trail Chamber 156
            [5556, 1236],
            // Trail Chamber 157
            [5556, 1236],
            // Trail Chamber 158
            [5556, 1236],
            // Trail Chamber 159
            [5556, 1236],
            // Trail Chamber 160
            [5556, 1236],
            // Trail Chamber 161
            [5556, 1236],
            // Trail Chamber 162
            [5556, 1236],
            // Trail Chamber 163
            [5556, 1236],
            // Trail Chamber 164
            [5556, 1236],
            // Trail Chamber 165
            [5556, 1236],
            // Trail Chamber 166
            [5556, 1236],
            // Trail Chamber 167
            [5556, 1236],
            // Trail Chamber 168
            [5556, 1236],
            // Trail Chamber 169
            [5556, 1236],
            // Trail Chamber 170
            [5556, 1236],
            // Trail Chamber 171
            [5556, 1236],
            // Trail Chamber 172
            [5556, 1236],
            // Trail Chamber 173
            [5556, 1236],
            // Trail Chamber 174
            [5556, 1236],
            // Trail Chamber 175
            [5556, 1236],
            // Trail Chamber 176
            [5556, 1236],
            // Trail Chamber 177
            [5556, 1236],
            // Trail Chamber 178
            [5556, 1236],
            // Trail Chamber 179
            [5556, 1236],
            // Trail Chamber 180
            [5556, 1236],
            // Trail Chamber 181
            [5556, 1236],
            // Trail Chamber 182
            [5556, 1236],
            // Trail Chamber 183
            [5556, 1236],
            // Trail Chamber 184
            [5556, 1236],
            // Trail Chamber 185
            [5556, 1236],
            // Trail Chamber 186
            [5556, 1236],
            // Trail Chamber 187
            [5556, 1236],
            // Trail Chamber 188
            [5556, 1236],
            // Trail Chamber 189
            [5556, 1236],
            // Trail Chamber 190
            [5556, 1236],
            // Trail Chamber 191
            [5556, 1236],
            // Trail Chamber 192
            [5556, 1236],
            // Trail Chamber 193
            [5556, 1236],
            // Trail Chamber 194
            [5556, 1236],
            // Trail Chamber 195
            [5556, 1236],
            // Trail Chamber 196
            [5556, 1236],
            // Trail Chamber 197
            [5556, 1236],
            // Trail Chamber 198
            [5556, 1236],
            // Trail Chamber 199
            [5556, 1236],
            // Trail Chamber 200
            [5556, 1236],
            // Trail Chamber 201
            [5556, 1236],
            // Trail Chamber 202
            [5556, 1236],
            // Trail Chamber 203
            [5556, 1236],
            // Trail Chamber 204
            [5556, 1236],
            // Trail Chamber 205
            [5556, 1236],
            // Trail Chamber 206
            [5556, 1236],
            // Trail Chamber 207
            [5556, 1236],
            // Trail Chamber 208
            [5556, 1236],
            // Trail Chamber 209
            [5556, 1236],
            // Trail Chamber 210
            [5556, 1236],
            // Trail Chamber 211
            [5556, 1236],
            // Trail Chamber 212
            [5556, 1236],
            // Trail Chamber 213
            [5556, 1236],
            // Trail Chamber 214
            [5556, 1236],
            // Trail Chamber 215
            [5556, 1236],
            // Trail Chamber 216
            [5556, 1236],
            // Trail Chamber 217
            [5556, 1236],
            // Trail Chamber 218
            [5556, 1236],
            // Trail Chamber 219
            [5556, 1236],
            // Trail Chamber 220
            [5556, 1236],
            // Trail Chamber 221
            [5556, 1236],
            // Trail Chamber 222
            [5556, 1236],
            // Trail Chamber 223
            [5556, 1236],
            // Trail Chamber 224
            [5556, 1236],
            // Trail Chamber 225
            [5556, 1236],
            // Trail Chamber 226
            [5556, 1236],
            // Trail Chamber 227
            [5556, 1236],
            // Trail Chamber 228
            [5556, 1236],
            // Trail Chamber 229
            [5556, 1236],
            // Trail Chamber 230
            [5556, 1236],
            // Trail Chamber 231
            [5556, 1236],
            // Trail Chamber 232
            [5556, 1236],
            // Trail Chamber 233
            [5556, 1236],
            // Trail Chamber 234
            [5556, 1236],
            // Trail Chamber 235
            [5556, 1236],
            // Trail Chamber 236
            [5556, 1236],
            // Trail Chamber 237
            [5556, 1236],
            // Trail Chamber 238
            [5556, 1236],
            // Trail Chamber 239
            [5556, 1236],
            // Trail Chamber 240
            [5556, 1236],
            // Trail Chamber 241
            [5556, 1236],
            // Trail Chamber 242
            [5556, 1236],
            // Trail Chamber 243
            [5556, 1236],
            // Trail Chamber 244
            [5556, 1236],
            // Trail Chamber 245
            [5556, 1236],
            // Trail Chamber 246
            [5556, 1236],
            // Trail Chamber 247
            [5556, 1236],
            // Trail Chamber 248
            [5556, 1236],
            // Trail Chamber 249
            [5556, 1236],
            // Trail Chamber 250
            [5556, 1236],
            // Trail Chamber 251
            [5556, 1236],
            // Trail Chamber 252
            [5556, 1236],
            // Trail Chamber 253
            [5556, 1236],
            // Trail Chamber 254
            [5556, 1236],
            // Trail Chamber 255
            [5556, 1236],
            // Trail Chamber 256
            [5556, 1236],
            // Trail Chamber 257
            [5556, 1236],
            // Trail Chamber 258
            [5556, 1236],
            // Trail Chamber 259
            [5556, 1236],
            // Trail Chamber 260
            [5556, 1236],
            // Trail Chamber 261
            [5556, 1236],
            // Trail Chamber 262
            [5556, 1236],
            // Trail Chamber 263
            [5556, 1236],
            // Trail Chamber 264
            [5556, 1236],
            // Trail Chamber 265
            [5556, 1236],
            // Trail Chamber 266
            [5556, 1236],
            // Trail Chamber 267
            [5556, 1236],
            // Trail Chamber 268
            [5556, 1236],
            // Trail Chamber 269
            [5556, 1236],
            // Trail Chamber 270
            [5556, 1236],
            // Trail Chamber 271
            [5556, 1236],
            // Trail Chamber 272
            [5556, 1236],
            // Trail Chamber 273
            [5556, 1236],
            // Trail Chamber 274
            [5556, 1236],
            // Trail Chamber 275
            [5556, 1236],
            // Trail Chamber 276
            [5556, 1236],
            // Trail Chamber 277
            [5556, 1236],
            // Trail Chamber 278
            [5556, 1236],
            // Trail Chamber 279
            [5556, 1236],
            // Trail Chamber 280
            [5556, 1236],
            // Trail Chamber 281
            [5556, 1236],
            // Trail Chamber 282
            [5556, 1236],
            // Trail Chamber 283
            [5556, 1236],
            // Trail Chamber 284
            [5556, 1236],
            // Trail Chamber 285
            [5556, 1236],
            // Trail Chamber 286
            [5556, 1236],
            // Trail Chamber 287
            [5556, 1236],
            // Trail Chamber 288
            [5556, 1236],
            // Trail Chamber 289
            [5556, 1236],
            // Trail Chamber 290
            [5556, 1236],
            // Trail Chamber 291
            [5556, 1236],
            // Trail Chamber 292
            [5556, 1236],
            // Trail Chamber 293
            [5556, 1236],
            // Trail Chamber 294
            [5556, 1236],
            // Trail Chamber 295
            [5556, 1236],
            // Trail Chamber 296
            [5556, 1236],
            // Trail Chamber 297
            [5556, 1236],
            // Trail Chamber 298
            [5556, 1236],
            // Trail Chamber 299
            [5556, 1236],
            // Trail Chamber 300
            [5556, 1236],
            // Trail Chamber 301
            [5556, 1236],
            // Trail Chamber 302
            [5556, 1236],
            // Trail Chamber 303
            [5556, 1236],
            // Trail Chamber 304
            [5556, 1236],
            // Trail Chamber 305
            [5556, 1236],
            // Trail Chamber 306
            [5556, 1236],
            // Trail Chamber 307
            [5556, 1236],
            // Trail Chamber 308
            [5556, 1236],
            // Trail Chamber 309
            [5556, 1236],
            // Trail Chamber 310
            [5556, 1236],
            // Trail Chamber 311
            [5556, 1236],
            // Trail Chamber 312
            [5556, 1236],
            // Trail Chamber 313
            [5556, 1236],
            // Trail Chamber 314
            [5556, 1236],
            // Trail Chamber 315
            [5556, 1236],
            // Trail Chamber 316
            [5556, 1236],
            // Trail Chamber 317
            [5556, 1236],
            // Trail Chamber 318
            [5556, 1236],
            // Trail Chamber 319
            [5556, 1236],
            // Trail Chamber 320
            [5556, 1236],
            // Trail Chamber 321
            [5556, 1236],
            // Trail Chamber 322
            [5556, 1236],
            // Trail Chamber 323
            [5556, 1236],
            // Trail Chamber 324
            [5556, 1236],
            // Trail Chamber 325
            [5556, 1236],
            // Trail Chamber 326
            [5556, 1236],
            // Trail Chamber 327
            [5556, 1236],
            // Trail Chamber 328
            [5556, 1236],
            // Trail Chamber 329
            [5556, 1236],
            // Trail Chamber 330
            [5556, 1236],
            // Trail Chamber 331
            [5556, 1236],
            // Trail Chamber 332
            [5556, 1236],
            // Trail Chamber 333
            [5556, 1236],
            // Trail Chamber 334
            [5556, 1236],
            // Trail Chamber 335
            [5556, 1236],
            // Trail Chamber 336
            [5556, 1236],
            // Trail Chamber 337
            [5556, 1236],
            // Trail Chamber 338
            [5556, 1236],
            // Trail Chamber 339
            [5556, 1236],
            // Trail Chamber 340
            [5556, 1236],
            // Trail Chamber 341
            [5556, 1236],
            // Trail Chamber 342
            [5556, 1236],
            // Trail Chamber 343
            [5556, 1236],
            // Trail Chamber 344
            [5556, 1236],
            // Trail Chamber 345
            [5556, 1236],
            // Trail Chamber 346
            [5556, 1236],
            // Trail Chamber 347
            [5556, 1236],
            // Trail Chamber 348
            [5556, 1236],
            // Trail Chamber 349
            [5556, 1236],
            // Trail Chamber 350
            [5556, 1236],
            // Trail Chamber 351
            [5556, 1236],
            // Trail Chamber 352
            [5556, 1236],
            // Trail Chamber 353
            [5556, 1236],
            // Trail Chamber 354
            [5556, 1236],
            // Trail Chamber 355
            [5556, 1236],
            // Trail Chamber 356
            [5556, 1236],
            // Trail Chamber 357
            [5556, 1236],
            // Trail Chamber 358
            [5556, 1236],
            // Trail Chamber 359
            [5556, 1236],
            // Trail Chamber 360
            [5556, 1236],
            // Trail Chamber 361
            [5556, 1236],
            // Trail Chamber 362
            [5556, 1236],
            // Trail Chamber 363
            [5556, 1236],
            // Trail Chamber 364
            [5556, 1236],
            // Trail Chamber 365
            [5556, 1236],
            // Trail Chamber 366
            [5556, 1236],
            // Trail Chamber 367
            [5556, 1236],
            // Trail Chamber 368
            [5556, 1236],
            // Trail Chamber 369
            [5556, 1236],
            // Trail Chamber 370
            [5556, 1236],
            // Trail Chamber 371
            [5556, 1236],
            // Trail Chamber 372
            [5556, 1236],
            // Trail Chamber 373
            [5556, 1236],
            // Trail Chamber 374
            [5556, 1236],
            // Trail Chamber 375
            [5556, 1236],
            // Trail Chamber 376
            [5556, 1236],
            // Trail Chamber 377
            [5556, 1236],
            // Trail Chamber 378
            [5556, 1236],
            // Trail Chamber 379
            [5556, 1236],
            // Trail Chamber 380
            [5556, 1236],
            // Trail Chamber 381
            [5556, 1236],
            // Trail Chamber 382
            [5556, 1236],
            // Trail Chamber 383
            [5556, 1236],
            // Trail Chamber 384
            [5556, 1236],
            // Trail Chamber 385
            [5556, 1236],
            // Trail Chamber 386
            [5556, 1236],
            // Trail Chamber 387
            [5556, 1236],
            // Trail Chamber 388
            [5556, 1236],
            // Trail Chamber 389
            [5556, 1236],
            // Trail Chamber 390
            [5556, 1236],
            // Trail Chamber 391
            [5556, 1236],
            // Trail Chamber 392
            [5556, 1236],
            // Trail Chamber 393
            [5556, 1236],
            // Trail Chamber 394
            [5556, 1236],
            // Trail Chamber 395
            [5556, 1236],
            // Trail Chamber 396
            [5556, 1236],
            // Trail Chamber 397
            [5556, 1236],
            // Trail Chamber 398
            [5556, 1236],
            // Trail Chamber 399
            [5556, 1236],
            // Trail Chamber 400
            [5556, 1236],
            // Trail Chamber 401
            [5556, 1236],
            // Trail Chamber 402
            [5556, 1236],
            // Trail Chamber 403
            [5556, 1236],
            // Trail Chamber 404
            [5556, 1236],
            // Trail Chamber 405
            [5556, 1236],
            // Trail Chamber 406
            [5556, 1236],
            // Trail Chamber 407
            [5556, 1236],
            // Trail Chamber 408
            [5556, 1236],
            // Trail Chamber 409
            [5556, 1236],
            // Trail Chamber 410
            [5556, 1236],
            // Trail Chamber 411
            [5556, 1236],
            // Trail Chamber 412
            [5556, 1236],
            // Trail Chamber 413
            [5556, 1236],
            // Trail Chamber 414
            [5556, 1236],
            // Trail Chamber 415
            [5556, 1236],
            // Trail Chamber 416
            [5556, 1236],
            // Trail Chamber 417
            [5556, 1236],
            // Trail Chamber 418
            [5556, 1236],
            // Trail Chamber 419
            [5556, 1236],
            // Trail Chamber 420
            [5556, 1236],
            // Trail Chamber 421
            [5556, 1236],
            // Trail Chamber 422
            [5556, 1236],
            // Trail Chamber 423
            [5556, 1236],
            // Trail Chamber 424
            [5556, 1236],
            // Trail Chamber 425
            [5556, 1236],
            // Trail Chamber 426
            [5556, 1236],
            // Trail Chamber 427
            [5556, 1236],
            // Trail Chamber 428
            [5556, 1236],
            // Trail Chamber 429
            [5556, 1236],
            // Trail Chamber 430
            [5556, 1236],
            // Trail Chamber 431
            [5556, 1236],
            // Trail Chamber 432
            [5556, 1236],
            // Trail Chamber 433
            [5556, 1236],
            // Trail Chamber 434
            [5556, 1236],
            // Trail Chamber 435
            [5556, 1236],
            // Trail Chamber 436
            [5556, 1236],
            // Trail Chamber 437
            [5556, 1236],
            // Trail Chamber 438
            [5556, 1236],
            // Trail Chamber 439
            [5556, 1236],
            // Trail Chamber 440
            [5556, 1236],
            // Trail Chamber 441
            [5556, 1236],
            // Trail Chamber 442
            [5556, 1236],
            // Trail Chamber 443
            [5556, 1236],
            // Trail Chamber 444
            [5556, 1236],
            // Trail Chamber 445
            [5556, 1236],
            // Trail Chamber 446
            [5556, 1236],
            // Trail Chamber 447
            [5556, 1236],
            // Trail Chamber 448
            [5556, 1236],
            // Trail Chamber 449
            [5556, 1236],
            // Trail Chamber 450
            [5556, 1236],
            // Trail Chamber 451
            [5556, 1236],
            // Trail Chamber 452
            [5556, 1236],
            // Trail Chamber 453
            [5556, 1236],
            // Trail Chamber 454
            [5556, 1236],
            // Trail Chamber 455
            [5556, 1236],
            // Trail Chamber 456
            [5556, 1236],
            // Trail Chamber 457
            [5556, 1236],
            // Trail Chamber 458
            [5556, 1236],
            // Trail Chamber 459
            [5556, 1236],
            // Trail Chamber 460
            [5556, 1236],
            // Trail Chamber 461
            [5556, 1236],
            // Trail Chamber 462
            [5556, 1236],
            // Trail Chamber 463
            [5556, 1236],
            // Trail Chamber 464
            [5556, 1236],
            // Trail Chamber 465
            [5556, 1236],
            // Trail Chamber 466
            [5556, 1236],
            // Trail Chamber 467
            [5556, 1236],
            // Trail Chamber 468
            [5556, 1236],
            // Trail Chamber 469
            [5556, 1236],
            // Trail Chamber 470
            [5556, 1236],
            // Trail Chamber 471
            [5556, 1236],
            // Trail Chamber 472
            [5556, 1236],
            // Trail Chamber 473
            [5556, 1236],
        ];

        return {
            ancient_city:       ancient_cityCoords.map(toMarker('playerimages/Ancient_City.png', 0.3)),
            abandoned_mineshaft: abandoned_mineshaftCoords.map(toMarker('playerimages/Abandoned_Mineshaft.png', 0.3)),
            stronghold:         strongholdCoords.map(toMarker('playerimages/Stronghold.png', 0.3)),
            trail_ruin:         trail_ruinCoords.map(toMarker('playerimages/Trail_Ruin.png', 0.3)),
            trial_chamber:      trial_chamberCoords.map(toMarker('playerimages/Trial_Chamber.png', 0.3)),
        };
    }
};

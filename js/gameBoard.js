// gameBoard is a matrix which represent the board by numbers.
/** 
 * @description
 * This game board represent the values of each tile on the board. 
 * When the user mine/build tile the number in this matrix will change using bitwise operations.
 * All values should be power of 2, intermediate values will be present because of bitwise operations.
 * @values 
    0: sky

    1: cloud

    2 / 3: leaf

    4 / 5: rock

    8 / 9: wood

    16 / 17: grass

    32 / 33: dirt

    64 / 65: water

    128 / 129: lava

    256 / 257: basalt


*/
export const israel = [
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0,
        0, 0, 0,
    ],
    [
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0,
        0, 0, 0,
    ],
    [
        4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0,
        0, 0, 0,
    ],
    [
        4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0,
        0, 4, 4,
    ],

    [
        16, 16, 16, 64, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        16, 16, 16, 16, 16, 16, 16, 16, 16,
    ],
    [
        32, 32, 32, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32,
    ],
    [
        32, 32, 32, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32,
    ],
    [
        32, 32, 32, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32,
    ],
    [
        32, 32, 32, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 32, 32, 32, 32,
    ],
];

export const australia = [
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        0, 0, 0,
    ],
    [
        0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
        0, 0, 0,
    ],
    [
        0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1,
        0, 0, 0,
    ],
    [
        0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 2, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 2, 2, 4, 4, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 2, 2, 2, 4, 4, 0,
        0, 0, 0,
    ],

    [
        64, 64, 64, 64, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16,
        16, 16, 16, 16, 16, 64, 64, 64, 64,
    ],
    [
        64, 64, 64, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 64, 64, 64, 64,
    ],
    [
        64, 64, 64, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 64, 64, 64, 64,
    ],
    [
        64, 64, 64, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 64, 64, 64, 64,
    ],
    [
        64, 64, 64, 64, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32,
        32, 32, 32, 32, 32, 64, 64, 64, 64,
    ],
];

export const hawaii = [
    [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0,
    ],
    [
        0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
        0, 0, 0,
    ],
    [
        2, 2, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0,
        0, 0, 0,
    ],
    [
        2, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
        0, 0, 0,
    ],
    [
        2, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0,
        128, 128, 128, 128,
    ],
    [
        2, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        128, 256, 256, 256,
    ],
    [
        8, 8, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        128, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128,
        128, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 128,
        128, 256, 256, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 256, 256,
        256, 256, 256, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 128, 256, 256,
        256, 256, 256, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 256, 256, 256,
        256, 256, 256, 256, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 256, 256, 256, 256,
        256, 256, 256, 256, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 128, 256, 256, 256, 256,
        256, 256, 256, 256, 256, 256, 256, 256,
    ],
    [
        8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 256, 256, 256, 256, 256,
        256, 256, 256, 256, 256, 256, 256, 256,
    ],

    [
        16, 16, 16, 16, 64, 64, 64, 64, 64, 64, 64, 64, 64, 256, 256, 256, 256,
        256, 256, 256, 256, 256, 256, 256, 256, 256, 256,
    ],
    [
        32, 32, 32, 32, 64, 64, 64, 64, 64, 64, 64, 64, 64, 256, 256, 256, 256,
        256, 256, 256, 256, 256, 256, 256, 256, 256, 256,
    ],
    [
        32, 32, 32, 32, 64, 64, 64, 64, 64, 64, 64, 64, 64, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 4,
    ],
    [
        32, 32, 32, 32, 64, 64, 64, 64, 64, 64, 64, 64, 64, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 4,
    ],
    [
        32, 32, 32, 32, 64, 64, 64, 64, 64, 64, 64, 64, 64, 4, 4, 4, 4, 4, 4, 4,
        4, 4, 4, 4, 4, 4, 4,
    ],
];

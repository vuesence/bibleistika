import { testamentBooks } from "./nn-TestamentBooks.js";

const bookChapterVerseArray = [
  [
    1,
    1,
    31,
  ],
  [
    1,
    2,
    25,
  ],
  [
    1,
    3,
    24,
  ],
  [
    1,
    4,
    26,
  ],
  [
    1,
    5,
    32,
  ],
  [
    1,
    6,
    22,
  ],
  [
    1,
    7,
    24,
  ],
  [
    1,
    8,
    22,
  ],
  [
    1,
    9,
    29,
  ],
  [
    1,
    10,
    32,
  ],
  [
    1,
    11,
    32,
  ],
  [
    1,
    12,
    20,
  ],
  [
    1,
    13,
    18,
  ],
  [
    1,
    14,
    24,
  ],
  [
    1,
    15,
    21,
  ],
  [
    1,
    16,
    16,
  ],
  [
    1,
    17,
    27,
  ],
  [
    1,
    18,
    33,
  ],
  [
    1,
    19,
    38,
  ],
  [
    1,
    20,
    18,
  ],
  [
    1,
    21,
    34,
  ],
  [
    1,
    22,
    24,
  ],
  [
    1,
    23,
    20,
  ],
  [
    1,
    24,
    67,
  ],
  [
    1,
    25,
    34,
  ],
  [
    1,
    26,
    35,
  ],
  [
    1,
    27,
    46,
  ],
  [
    1,
    28,
    22,
  ],
  [
    1,
    29,
    35,
  ],
  [
    1,
    30,
    43,
  ],
  [
    1,
    31,
    55,
  ],
  [
    1,
    32,
    32,
  ],
  [
    1,
    33,
    20,
  ],
  [
    1,
    34,
    31,
  ],
  [
    1,
    35,
    29,
  ],
  [
    1,
    36,
    43,
  ],
  [
    1,
    37,
    36,
  ],
  [
    1,
    38,
    30,
  ],
  [
    1,
    39,
    23,
  ],
  [
    1,
    40,
    23,
  ],
  [
    1,
    41,
    57,
  ],
  [
    1,
    42,
    38,
  ],
  [
    1,
    43,
    34,
  ],
  [
    1,
    44,
    34,
  ],
  [
    1,
    45,
    28,
  ],
  [
    1,
    46,
    34,
  ],
  [
    1,
    47,
    31,
  ],
  [
    1,
    48,
    22,
  ],
  [
    1,
    49,
    33,
  ],
  [
    1,
    50,
    26,
  ],
  [
    2,
    1,
    22,
  ],
  [
    2,
    2,
    25,
  ],
  [
    2,
    3,
    22,
  ],
  [
    2,
    4,
    31,
  ],
  [
    2,
    5,
    23,
  ],
  [
    2,
    6,
    30,
  ],
  [
    2,
    7,
    25,
  ],
  [
    2,
    8,
    32,
  ],
  [
    2,
    9,
    35,
  ],
  [
    2,
    10,
    29,
  ],
  [
    2,
    11,
    10,
  ],
  [
    2,
    12,
    51,
  ],
  [
    2,
    13,
    22,
  ],
  [
    2,
    14,
    31,
  ],
  [
    2,
    15,
    27,
  ],
  [
    2,
    16,
    36,
  ],
  [
    2,
    17,
    16,
  ],
  [
    2,
    18,
    27,
  ],
  [
    2,
    19,
    25,
  ],
  [
    2,
    20,
    26,
  ],
  [
    2,
    21,
    36,
  ],
  [
    2,
    22,
    31,
  ],
  [
    2,
    23,
    33,
  ],
  [
    2,
    24,
    18,
  ],
  [
    2,
    25,
    40,
  ],
  [
    2,
    26,
    37,
  ],
  [
    2,
    27,
    21,
  ],
  [
    2,
    28,
    43,
  ],
  [
    2,
    29,
    46,
  ],
  [
    2,
    30,
    38,
  ],
  [
    2,
    31,
    18,
  ],
  [
    2,
    32,
    35,
  ],
  [
    2,
    33,
    23,
  ],
  [
    2,
    34,
    35,
  ],
  [
    2,
    35,
    35,
  ],
  [
    2,
    36,
    38,
  ],
  [
    2,
    37,
    29,
  ],
  [
    2,
    38,
    31,
  ],
  [
    2,
    39,
    43,
  ],
  [
    2,
    40,
    38,
  ],
  [
    3,
    1,
    17,
  ],
  [
    3,
    2,
    16,
  ],
  [
    3,
    3,
    17,
  ],
  [
    3,
    4,
    35,
  ],
  [
    3,
    5,
    19,
  ],
  [
    3,
    6,
    30,
  ],
  [
    3,
    7,
    38,
  ],
  [
    3,
    8,
    36,
  ],
  [
    3,
    9,
    24,
  ],
  [
    3,
    10,
    20,
  ],
  [
    3,
    11,
    47,
  ],
  [
    3,
    12,
    8,
  ],
  [
    3,
    13,
    59,
  ],
  [
    3,
    14,
    56,
  ],
  [
    3,
    15,
    33,
  ],
  [
    3,
    16,
    34,
  ],
  [
    3,
    17,
    16,
  ],
  [
    3,
    18,
    30,
  ],
  [
    3,
    19,
    37,
  ],
  [
    3,
    20,
    27,
  ],
  [
    3,
    21,
    24,
  ],
  [
    3,
    22,
    33,
  ],
  [
    3,
    23,
    44,
  ],
  [
    3,
    24,
    23,
  ],
  [
    3,
    25,
    55,
  ],
  [
    3,
    26,
    46,
  ],
  [
    3,
    27,
    34,
  ],
  [
    4,
    1,
    54,
  ],
  [
    4,
    2,
    34,
  ],
  [
    4,
    3,
    51,
  ],
  [
    4,
    4,
    49,
  ],
  [
    4,
    5,
    31,
  ],
  [
    4,
    6,
    27,
  ],
  [
    4,
    7,
    89,
  ],
  [
    4,
    8,
    26,
  ],
  [
    4,
    9,
    23,
  ],
  [
    4,
    10,
    36,
  ],
  [
    4,
    11,
    35,
  ],
  [
    4,
    12,
    15,
  ],
  [
    4,
    13,
    34,
  ],
  [
    4,
    14,
    45,
  ],
  [
    4,
    15,
    41,
  ],
  [
    4,
    16,
    50,
  ],
  [
    4,
    17,
    13,
  ],
  [
    4,
    18,
    32,
  ],
  [
    4,
    19,
    22,
  ],
  [
    4,
    20,
    29,
  ],
  [
    4,
    21,
    35,
  ],
  [
    4,
    22,
    41,
  ],
  [
    4,
    23,
    30,
  ],
  [
    4,
    24,
    25,
  ],
  [
    4,
    25,
    18,
  ],
  [
    4,
    26,
    65,
  ],
  [
    4,
    27,
    23,
  ],
  [
    4,
    28,
    31,
  ],
  [
    4,
    29,
    39,
  ],
  [
    4,
    30,
    17,
  ],
  [
    4,
    31,
    54,
  ],
  [
    4,
    32,
    42,
  ],
  [
    4,
    33,
    56,
  ],
  [
    4,
    34,
    29,
  ],
  [
    4,
    35,
    34,
  ],
  [
    4,
    36,
    13,
  ],
  [
    5,
    1,
    46,
  ],
  [
    5,
    2,
    37,
  ],
  [
    5,
    3,
    29,
  ],
  [
    5,
    4,
    49,
  ],
  [
    5,
    5,
    33,
  ],
  [
    5,
    6,
    25,
  ],
  [
    5,
    7,
    26,
  ],
  [
    5,
    8,
    20,
  ],
  [
    5,
    9,
    29,
  ],
  [
    5,
    10,
    22,
  ],
  [
    5,
    11,
    32,
  ],
  [
    5,
    12,
    32,
  ],
  [
    5,
    13,
    18,
  ],
  [
    5,
    14,
    29,
  ],
  [
    5,
    15,
    23,
  ],
  [
    5,
    16,
    22,
  ],
  [
    5,
    17,
    20,
  ],
  [
    5,
    18,
    22,
  ],
  [
    5,
    19,
    21,
  ],
  [
    5,
    20,
    20,
  ],
  [
    5,
    21,
    23,
  ],
  [
    5,
    22,
    30,
  ],
  [
    5,
    23,
    25,
  ],
  [
    5,
    24,
    22,
  ],
  [
    5,
    25,
    19,
  ],
  [
    5,
    26,
    19,
  ],
  [
    5,
    27,
    26,
  ],
  [
    5,
    28,
    68,
  ],
  [
    5,
    29,
    29,
  ],
  [
    5,
    30,
    20,
  ],
  [
    5,
    31,
    30,
  ],
  [
    5,
    32,
    52,
  ],
  [
    5,
    33,
    29,
  ],
  [
    5,
    34,
    12,
  ],
  [
    6,
    1,
    18,
  ],
  [
    6,
    2,
    24,
  ],
  [
    6,
    3,
    17,
  ],
  [
    6,
    4,
    24,
  ],
  [
    6,
    5,
    16,
  ],
  [
    6,
    6,
    26,
  ],
  [
    6,
    7,
    26,
  ],
  [
    6,
    8,
    35,
  ],
  [
    6,
    9,
    27,
  ],
  [
    6,
    10,
    43,
  ],
  [
    6,
    11,
    23,
  ],
  [
    6,
    12,
    24,
  ],
  [
    6,
    13,
    33,
  ],
  [
    6,
    14,
    15,
  ],
  [
    6,
    15,
    63,
  ],
  [
    6,
    16,
    10,
  ],
  [
    6,
    17,
    18,
  ],
  [
    6,
    18,
    28,
  ],
  [
    6,
    19,
    51,
  ],
  [
    6,
    20,
    9,
  ],
  [
    6,
    21,
    45,
  ],
  [
    6,
    22,
    34,
  ],
  [
    6,
    23,
    16,
  ],
  [
    6,
    24,
    33,
  ],
  [
    7,
    1,
    36,
  ],
  [
    7,
    2,
    23,
  ],
  [
    7,
    3,
    31,
  ],
  [
    7,
    4,
    24,
  ],
  [
    7,
    5,
    31,
  ],
  [
    7,
    6,
    40,
  ],
  [
    7,
    7,
    25,
  ],
  [
    7,
    8,
    35,
  ],
  [
    7,
    9,
    57,
  ],
  [
    7,
    10,
    18,
  ],
  [
    7,
    11,
    40,
  ],
  [
    7,
    12,
    15,
  ],
  [
    7,
    13,
    25,
  ],
  [
    7,
    14,
    20,
  ],
  [
    7,
    15,
    20,
  ],
  [
    7,
    16,
    31,
  ],
  [
    7,
    17,
    13,
  ],
  [
    7,
    18,
    31,
  ],
  [
    7,
    19,
    30,
  ],
  [
    7,
    20,
    48,
  ],
  [
    7,
    21,
    25,
  ],
  [
    8,
    1,
    22,
  ],
  [
    8,
    2,
    23,
  ],
  [
    8,
    3,
    18,
  ],
  [
    8,
    4,
    22,
  ],
  [
    9,
    1,
    28,
  ],
  [
    9,
    2,
    36,
  ],
  [
    9,
    3,
    21,
  ],
  [
    9,
    4,
    22,
  ],
  [
    9,
    5,
    12,
  ],
  [
    9,
    6,
    21,
  ],
  [
    9,
    7,
    17,
  ],
  [
    9,
    8,
    22,
  ],
  [
    9,
    9,
    27,
  ],
  [
    9,
    10,
    27,
  ],
  [
    9,
    11,
    15,
  ],
  [
    9,
    12,
    25,
  ],
  [
    9,
    13,
    23,
  ],
  [
    9,
    14,
    52,
  ],
  [
    9,
    15,
    35,
  ],
  [
    9,
    16,
    23,
  ],
  [
    9,
    17,
    58,
  ],
  [
    9,
    18,
    30,
  ],
  [
    9,
    19,
    24,
  ],
  [
    9,
    20,
    43,
  ],
  [
    9,
    21,
    15,
  ],
  [
    9,
    22,
    23,
  ],
  [
    9,
    23,
    28,
  ],
  [
    9,
    24,
    23,
  ],
  [
    9,
    25,
    44,
  ],
  [
    9,
    26,
    25,
  ],
  [
    9,
    27,
    12,
  ],
  [
    9,
    28,
    25,
  ],
  [
    9,
    29,
    11,
  ],
  [
    9,
    30,
    31,
  ],
  [
    9,
    31,
    13,
  ],
  [
    10,
    1,
    27,
  ],
  [
    10,
    2,
    32,
  ],
  [
    10,
    3,
    39,
  ],
  [
    10,
    4,
    12,
  ],
  [
    10,
    5,
    25,
  ],
  [
    10,
    6,
    23,
  ],
  [
    10,
    7,
    29,
  ],
  [
    10,
    8,
    18,
  ],
  [
    10,
    9,
    13,
  ],
  [
    10,
    10,
    19,
  ],
  [
    10,
    11,
    27,
  ],
  [
    10,
    12,
    31,
  ],
  [
    10,
    13,
    39,
  ],
  [
    10,
    14,
    33,
  ],
  [
    10,
    15,
    37,
  ],
  [
    10,
    16,
    23,
  ],
  [
    10,
    17,
    29,
  ],
  [
    10,
    18,
    33,
  ],
  [
    10,
    19,
    43,
  ],
  [
    10,
    20,
    26,
  ],
  [
    10,
    21,
    22,
  ],
  [
    10,
    22,
    51,
  ],
  [
    10,
    23,
    39,
  ],
  [
    10,
    24,
    25,
  ],
  [
    11,
    1,
    53,
  ],
  [
    11,
    2,
    46,
  ],
  [
    11,
    3,
    28,
  ],
  [
    11,
    4,
    34,
  ],
  [
    11,
    5,
    18,
  ],
  [
    11,
    6,
    38,
  ],
  [
    11,
    7,
    51,
  ],
  [
    11,
    8,
    66,
  ],
  [
    11,
    9,
    28,
  ],
  [
    11,
    10,
    29,
  ],
  [
    11,
    11,
    43,
  ],
  [
    11,
    12,
    33,
  ],
  [
    11,
    13,
    34,
  ],
  [
    11,
    14,
    31,
  ],
  [
    11,
    15,
    34,
  ],
  [
    11,
    16,
    34,
  ],
  [
    11,
    17,
    24,
  ],
  [
    11,
    18,
    46,
  ],
  [
    11,
    19,
    21,
  ],
  [
    11,
    20,
    43,
  ],
  [
    11,
    21,
    29,
  ],
  [
    11,
    22,
    53,
  ],
  [
    12,
    1,
    18,
  ],
  [
    12,
    2,
    25,
  ],
  [
    12,
    3,
    27,
  ],
  [
    12,
    4,
    44,
  ],
  [
    12,
    5,
    27,
  ],
  [
    12,
    6,
    33,
  ],
  [
    12,
    7,
    20,
  ],
  [
    12,
    8,
    29,
  ],
  [
    12,
    9,
    37,
  ],
  [
    12,
    10,
    36,
  ],
  [
    12,
    11,
    21,
  ],
  [
    12,
    12,
    21,
  ],
  [
    12,
    13,
    25,
  ],
  [
    12,
    14,
    29,
  ],
  [
    12,
    15,
    38,
  ],
  [
    12,
    16,
    20,
  ],
  [
    12,
    17,
    41,
  ],
  [
    12,
    18,
    37,
  ],
  [
    12,
    19,
    37,
  ],
  [
    12,
    20,
    21,
  ],
  [
    12,
    21,
    26,
  ],
  [
    12,
    22,
    20,
  ],
  [
    12,
    23,
    37,
  ],
  [
    12,
    24,
    20,
  ],
  [
    12,
    25,
    30,
  ],
  [
    13,
    1,
    54,
  ],
  [
    13,
    2,
    55,
  ],
  [
    13,
    3,
    24,
  ],
  [
    13,
    4,
    43,
  ],
  [
    13,
    5,
    26,
  ],
  [
    13,
    6,
    81,
  ],
  [
    13,
    7,
    40,
  ],
  [
    13,
    8,
    40,
  ],
  [
    13,
    9,
    44,
  ],
  [
    13,
    10,
    14,
  ],
  [
    13,
    11,
    47,
  ],
  [
    13,
    12,
    40,
  ],
  [
    13,
    13,
    14,
  ],
  [
    13,
    14,
    17,
  ],
  [
    13,
    15,
    29,
  ],
  [
    13,
    16,
    43,
  ],
  [
    13,
    17,
    27,
  ],
  [
    13,
    18,
    17,
  ],
  [
    13,
    19,
    19,
  ],
  [
    13,
    20,
    8,
  ],
  [
    13,
    21,
    30,
  ],
  [
    13,
    22,
    19,
  ],
  [
    13,
    23,
    32,
  ],
  [
    13,
    24,
    31,
  ],
  [
    13,
    25,
    31,
  ],
  [
    13,
    26,
    32,
  ],
  [
    13,
    27,
    34,
  ],
  [
    13,
    28,
    21,
  ],
  [
    13,
    29,
    30,
  ],
  [
    14,
    1,
    17,
  ],
  [
    14,
    2,
    18,
  ],
  [
    14,
    3,
    17,
  ],
  [
    14,
    4,
    22,
  ],
  [
    14,
    5,
    14,
  ],
  [
    14,
    6,
    42,
  ],
  [
    14,
    7,
    22,
  ],
  [
    14,
    8,
    18,
  ],
  [
    14,
    9,
    31,
  ],
  [
    14,
    10,
    19,
  ],
  [
    14,
    11,
    23,
  ],
  [
    14,
    12,
    16,
  ],
  [
    14,
    13,
    22,
  ],
  [
    14,
    14,
    15,
  ],
  [
    14,
    15,
    19,
  ],
  [
    14,
    16,
    14,
  ],
  [
    14,
    17,
    19,
  ],
  [
    14,
    18,
    34,
  ],
  [
    14,
    19,
    11,
  ],
  [
    14,
    20,
    37,
  ],
  [
    14,
    21,
    20,
  ],
  [
    14,
    22,
    12,
  ],
  [
    14,
    23,
    21,
  ],
  [
    14,
    24,
    27,
  ],
  [
    14,
    25,
    28,
  ],
  [
    14,
    26,
    23,
  ],
  [
    14,
    27,
    9,
  ],
  [
    14,
    28,
    27,
  ],
  [
    14,
    29,
    36,
  ],
  [
    14,
    30,
    27,
  ],
  [
    14,
    31,
    21,
  ],
  [
    14,
    32,
    33,
  ],
  [
    14,
    33,
    25,
  ],
  [
    14,
    34,
    33,
  ],
  [
    14,
    35,
    27,
  ],
  [
    14,
    36,
    23,
  ],
  [
    15,
    1,
    11,
  ],
  [
    15,
    2,
    70,
  ],
  [
    15,
    3,
    13,
  ],
  [
    15,
    4,
    24,
  ],
  [
    15,
    5,
    17,
  ],
  [
    15,
    6,
    22,
  ],
  [
    15,
    7,
    28,
  ],
  [
    15,
    8,
    36,
  ],
  [
    15,
    9,
    15,
  ],
  [
    15,
    10,
    44,
  ],
  [
    16,
    1,
    11,
  ],
  [
    16,
    2,
    20,
  ],
  [
    16,
    3,
    32,
  ],
  [
    16,
    4,
    23,
  ],
  [
    16,
    5,
    19,
  ],
  [
    16,
    6,
    19,
  ],
  [
    16,
    7,
    73,
  ],
  [
    16,
    8,
    18,
  ],
  [
    16,
    9,
    38,
  ],
  [
    16,
    10,
    39,
  ],
  [
    16,
    11,
    36,
  ],
  [
    16,
    12,
    47,
  ],
  [
    16,
    13,
    31,
  ],
  [
    17,
    1,
    22,
  ],
  [
    17,
    2,
    23,
  ],
  [
    17,
    3,
    15,
  ],
  [
    17,
    4,
    17,
  ],
  [
    17,
    5,
    14,
  ],
  [
    17,
    6,
    14,
  ],
  [
    17,
    7,
    10,
  ],
  [
    17,
    8,
    17,
  ],
  [
    17,
    9,
    32,
  ],
  [
    17,
    10,
    3,
  ],
  [
    18,
    1,
    22,
  ],
  [
    18,
    2,
    13,
  ],
  [
    18,
    3,
    26,
  ],
  [
    18,
    4,
    21,
  ],
  [
    18,
    5,
    27,
  ],
  [
    18,
    6,
    30,
  ],
  [
    18,
    7,
    21,
  ],
  [
    18,
    8,
    22,
  ],
  [
    18,
    9,
    35,
  ],
  [
    18,
    10,
    22,
  ],
  [
    18,
    11,
    20,
  ],
  [
    18,
    12,
    25,
  ],
  [
    18,
    13,
    28,
  ],
  [
    18,
    14,
    22,
  ],
  [
    18,
    15,
    35,
  ],
  [
    18,
    16,
    22,
  ],
  [
    18,
    17,
    16,
  ],
  [
    18,
    18,
    21,
  ],
  [
    18,
    19,
    29,
  ],
  [
    18,
    20,
    29,
  ],
  [
    18,
    21,
    34,
  ],
  [
    18,
    22,
    30,
  ],
  [
    18,
    23,
    17,
  ],
  [
    18,
    24,
    25,
  ],
  [
    18,
    25,
    6,
  ],
  [
    18,
    26,
    14,
  ],
  [
    18,
    27,
    23,
  ],
  [
    18,
    28,
    28,
  ],
  [
    18,
    29,
    25,
  ],
  [
    18,
    30,
    31,
  ],
  [
    18,
    31,
    40,
  ],
  [
    18,
    32,
    22,
  ],
  [
    18,
    33,
    33,
  ],
  [
    18,
    34,
    37,
  ],
  [
    18,
    35,
    16,
  ],
  [
    18,
    36,
    33,
  ],
  [
    18,
    37,
    24,
  ],
  [
    18,
    38,
    41,
  ],
  [
    18,
    39,
    35,
  ],
  [
    18,
    40,
    27,
  ],
  [
    18,
    41,
    26,
  ],
  [
    18,
    42,
    17,
  ],
  [
    19,
    1,
    6,
  ],
  [
    19,
    2,
    12,
  ],
  [
    19,
    3,
    9,
  ],
  [
    19,
    4,
    9,
  ],
  [
    19,
    5,
    13,
  ],
  [
    19,
    6,
    11,
  ],
  [
    19,
    7,
    18,
  ],
  [
    19,
    8,
    10,
  ],
  [
    19,
    9,
    39,
  ],
  [
    19,
    10,
    7,
  ],
  [
    19,
    11,
    9,
  ],
  [
    19,
    12,
    6,
  ],
  [
    19,
    13,
    7,
  ],
  [
    19,
    14,
    5,
  ],
  [
    19,
    15,
    11,
  ],
  [
    19,
    16,
    15,
  ],
  [
    19,
    17,
    51,
  ],
  [
    19,
    18,
    15,
  ],
  [
    19,
    19,
    10,
  ],
  [
    19,
    20,
    14,
  ],
  [
    19,
    21,
    32,
  ],
  [
    19,
    22,
    6,
  ],
  [
    19,
    23,
    10,
  ],
  [
    19,
    24,
    22,
  ],
  [
    19,
    25,
    12,
  ],
  [
    19,
    26,
    14,
  ],
  [
    19,
    27,
    9,
  ],
  [
    19,
    28,
    11,
  ],
  [
    19,
    29,
    13,
  ],
  [
    19,
    30,
    25,
  ],
  [
    19,
    31,
    11,
  ],
  [
    19,
    32,
    22,
  ],
  [
    19,
    33,
    23,
  ],
  [
    19,
    34,
    28,
  ],
  [
    19,
    35,
    13,
  ],
  [
    19,
    36,
    40,
  ],
  [
    19,
    37,
    23,
  ],
  [
    19,
    38,
    14,
  ],
  [
    19,
    39,
    18,
  ],
  [
    19,
    40,
    14,
  ],
  [
    19,
    41,
    12,
  ],
  [
    19,
    42,
    5,
  ],
  [
    19,
    43,
    27,
  ],
  [
    19,
    44,
    18,
  ],
  [
    19,
    45,
    12,
  ],
  [
    19,
    46,
    10,
  ],
  [
    19,
    47,
    15,
  ],
  [
    19,
    48,
    21,
  ],
  [
    19,
    49,
    23,
  ],
  [
    19,
    50,
    21,
  ],
  [
    19,
    51,
    11,
  ],
  [
    19,
    52,
    7,
  ],
  [
    19,
    53,
    9,
  ],
  [
    19,
    54,
    24,
  ],
  [
    19,
    55,
    14,
  ],
  [
    19,
    56,
    12,
  ],
  [
    19,
    57,
    12,
  ],
  [
    19,
    58,
    18,
  ],
  [
    19,
    59,
    14,
  ],
  [
    19,
    60,
    9,
  ],
  [
    19,
    61,
    13,
  ],
  [
    19,
    62,
    12,
  ],
  [
    19,
    63,
    11,
  ],
  [
    19,
    64,
    14,
  ],
  [
    19,
    65,
    20,
  ],
  [
    19,
    66,
    8,
  ],
  [
    19,
    67,
    36,
  ],
  [
    19,
    68,
    37,
  ],
  [
    19,
    69,
    6,
  ],
  [
    19,
    70,
    24,
  ],
  [
    19,
    71,
    20,
  ],
  [
    19,
    72,
    28,
  ],
  [
    19,
    73,
    23,
  ],
  [
    19,
    74,
    11,
  ],
  [
    19,
    75,
    13,
  ],
  [
    19,
    76,
    21,
  ],
  [
    19,
    77,
    72,
  ],
  [
    19,
    78,
    13,
  ],
  [
    19,
    79,
    20,
  ],
  [
    19,
    80,
    17,
  ],
  [
    19,
    81,
    8,
  ],
  [
    19,
    82,
    19,
  ],
  [
    19,
    83,
    13,
  ],
  [
    19,
    84,
    14,
  ],
  [
    19,
    85,
    17,
  ],
  [
    19,
    86,
    7,
  ],
  [
    19,
    87,
    19,
  ],
  [
    19,
    88,
    53,
  ],
  [
    19,
    89,
    17,
  ],
  [
    19,
    90,
    16,
  ],
  [
    19,
    91,
    16,
  ],
  [
    19,
    92,
    5,
  ],
  [
    19,
    93,
    23,
  ],
  [
    19,
    94,
    11,
  ],
  [
    19,
    95,
    13,
  ],
  [
    19,
    96,
    12,
  ],
  [
    19,
    97,
    9,
  ],
  [
    19,
    98,
    9,
  ],
  [
    19,
    99,
    5,
  ],
  [
    19,
    100,
    8,
  ],
  [
    19,
    101,
    29,
  ],
  [
    19,
    102,
    22,
  ],
  [
    19,
    103,
    35,
  ],
  [
    19,
    104,
    45,
  ],
  [
    19,
    105,
    48,
  ],
  [
    19,
    106,
    43,
  ],
  [
    19,
    107,
    14,
  ],
  [
    19,
    108,
    31,
  ],
  [
    19,
    109,
    7,
  ],
  [
    19,
    110,
    10,
  ],
  [
    19,
    111,
    10,
  ],
  [
    19,
    112,
    9,
  ],
  [
    19,
    113,
    26,
  ],
  [
    19,
    114,
    9,
  ],
  [
    19,
    115,
    10,
  ],
  [
    19,
    116,
    2,
  ],
  [
    19,
    117,
    29,
  ],
  [
    19,
    118,
    176,
  ],
  [
    19,
    119,
    7,
  ],
  [
    19,
    120,
    8,
  ],
  [
    19,
    121,
    9,
  ],
  [
    19,
    122,
    4,
  ],
  [
    19,
    123,
    8,
  ],
  [
    19,
    124,
    5,
  ],
  [
    19,
    125,
    6,
  ],
  [
    19,
    126,
    5,
  ],
  [
    19,
    127,
    6,
  ],
  [
    19,
    128,
    8,
  ],
  [
    19,
    129,
    8,
  ],
  [
    19,
    130,
    3,
  ],
  [
    19,
    131,
    18,
  ],
  [
    19,
    132,
    3,
  ],
  [
    19,
    133,
    3,
  ],
  [
    19,
    134,
    21,
  ],
  [
    19,
    135,
    26,
  ],
  [
    19,
    136,
    9,
  ],
  [
    19,
    137,
    8,
  ],
  [
    19,
    138,
    24,
  ],
  [
    19,
    139,
    14,
  ],
  [
    19,
    140,
    10,
  ],
  [
    19,
    141,
    7,
  ],
  [
    19,
    142,
    12,
  ],
  [
    19,
    143,
    15,
  ],
  [
    19,
    144,
    21,
  ],
  [
    19,
    145,
    10,
  ],
  [
    19,
    146,
    11,
  ],
  [
    19,
    147,
    9,
  ],
  [
    19,
    148,
    14,
  ],
  [
    19,
    149,
    9,
  ],
  [
    19,
    150,
    6,
  ],
  [
    20,
    1,
    33,
  ],
  [
    20,
    2,
    22,
  ],
  [
    20,
    3,
    35,
  ],
  [
    20,
    4,
    27,
  ],
  [
    20,
    5,
    23,
  ],
  [
    20,
    6,
    35,
  ],
  [
    20,
    7,
    27,
  ],
  [
    20,
    8,
    36,
  ],
  [
    20,
    9,
    18,
  ],
  [
    20,
    10,
    32,
  ],
  [
    20,
    11,
    31,
  ],
  [
    20,
    12,
    28,
  ],
  [
    20,
    13,
    25,
  ],
  [
    20,
    14,
    35,
  ],
  [
    20,
    15,
    33,
  ],
  [
    20,
    16,
    33,
  ],
  [
    20,
    17,
    28,
  ],
  [
    20,
    18,
    24,
  ],
  [
    20,
    19,
    29,
  ],
  [
    20,
    20,
    30,
  ],
  [
    20,
    21,
    31,
  ],
  [
    20,
    22,
    29,
  ],
  [
    20,
    23,
    35,
  ],
  [
    20,
    24,
    34,
  ],
  [
    20,
    25,
    28,
  ],
  [
    20,
    26,
    28,
  ],
  [
    20,
    27,
    27,
  ],
  [
    20,
    28,
    28,
  ],
  [
    20,
    29,
    27,
  ],
  [
    20,
    30,
    33,
  ],
  [
    20,
    31,
    31,
  ],
  [
    21,
    1,
    18,
  ],
  [
    21,
    2,
    26,
  ],
  [
    21,
    3,
    22,
  ],
  [
    21,
    4,
    17,
  ],
  [
    21,
    5,
    19,
  ],
  [
    21,
    6,
    12,
  ],
  [
    21,
    7,
    29,
  ],
  [
    21,
    8,
    17,
  ],
  [
    21,
    9,
    18,
  ],
  [
    21,
    10,
    20,
  ],
  [
    21,
    11,
    10,
  ],
  [
    21,
    12,
    14,
  ],
  [
    22,
    1,
    16,
  ],
  [
    22,
    2,
    17,
  ],
  [
    22,
    3,
    11,
  ],
  [
    22,
    4,
    16,
  ],
  [
    22,
    5,
    16,
  ],
  [
    22,
    6,
    12,
  ],
  [
    22,
    7,
    14,
  ],
  [
    22,
    8,
    14,
  ],
  [
    23,
    1,
    31,
  ],
  [
    23,
    2,
    22,
  ],
  [
    23,
    3,
    25,
  ],
  [
    23,
    4,
    6,
  ],
  [
    23,
    5,
    30,
  ],
  [
    23,
    6,
    13,
  ],
  [
    23,
    7,
    25,
  ],
  [
    23,
    8,
    22,
  ],
  [
    23,
    9,
    21,
  ],
  [
    23,
    10,
    34,
  ],
  [
    23,
    11,
    16,
  ],
  [
    23,
    12,
    6,
  ],
  [
    23,
    13,
    22,
  ],
  [
    23,
    14,
    32,
  ],
  [
    23,
    15,
    9,
  ],
  [
    23,
    16,
    14,
  ],
  [
    23,
    17,
    14,
  ],
  [
    23,
    18,
    7,
  ],
  [
    23,
    19,
    25,
  ],
  [
    23,
    20,
    6,
  ],
  [
    23,
    21,
    17,
  ],
  [
    23,
    22,
    25,
  ],
  [
    23,
    23,
    18,
  ],
  [
    23,
    24,
    23,
  ],
  [
    23,
    25,
    12,
  ],
  [
    23,
    26,
    21,
  ],
  [
    23,
    27,
    13,
  ],
  [
    23,
    28,
    29,
  ],
  [
    23,
    29,
    24,
  ],
  [
    23,
    30,
    33,
  ],
  [
    23,
    31,
    9,
  ],
  [
    23,
    32,
    20,
  ],
  [
    23,
    33,
    24,
  ],
  [
    23,
    34,
    17,
  ],
  [
    23,
    35,
    10,
  ],
  [
    23,
    36,
    22,
  ],
  [
    23,
    37,
    38,
  ],
  [
    23,
    38,
    22,
  ],
  [
    23,
    39,
    8,
  ],
  [
    23,
    40,
    31,
  ],
  [
    23,
    41,
    29,
  ],
  [
    23,
    42,
    25,
  ],
  [
    23,
    43,
    28,
  ],
  [
    23,
    44,
    28,
  ],
  [
    23,
    45,
    25,
  ],
  [
    23,
    46,
    13,
  ],
  [
    23,
    47,
    15,
  ],
  [
    23,
    48,
    22,
  ],
  [
    23,
    49,
    26,
  ],
  [
    23,
    50,
    11,
  ],
  [
    23,
    51,
    23,
  ],
  [
    23,
    52,
    15,
  ],
  [
    23,
    53,
    12,
  ],
  [
    23,
    54,
    17,
  ],
  [
    23,
    55,
    13,
  ],
  [
    23,
    56,
    12,
  ],
  [
    23,
    57,
    21,
  ],
  [
    23,
    58,
    14,
  ],
  [
    23,
    59,
    21,
  ],
  [
    23,
    60,
    22,
  ],
  [
    23,
    61,
    11,
  ],
  [
    23,
    62,
    12,
  ],
  [
    23,
    63,
    19,
  ],
  [
    23,
    64,
    12,
  ],
  [
    23,
    65,
    25,
  ],
  [
    23,
    66,
    24,
  ],
  [
    24,
    1,
    19,
  ],
  [
    24,
    2,
    37,
  ],
  [
    24,
    3,
    25,
  ],
  [
    24,
    4,
    31,
  ],
  [
    24,
    5,
    31,
  ],
  [
    24,
    6,
    30,
  ],
  [
    24,
    7,
    34,
  ],
  [
    24,
    8,
    22,
  ],
  [
    24,
    9,
    26,
  ],
  [
    24,
    10,
    25,
  ],
  [
    24,
    11,
    23,
  ],
  [
    24,
    12,
    17,
  ],
  [
    24,
    13,
    27,
  ],
  [
    24,
    14,
    22,
  ],
  [
    24,
    15,
    21,
  ],
  [
    24,
    16,
    21,
  ],
  [
    24,
    17,
    27,
  ],
  [
    24,
    18,
    23,
  ],
  [
    24,
    19,
    15,
  ],
  [
    24,
    20,
    18,
  ],
  [
    24,
    21,
    14,
  ],
  [
    24,
    22,
    30,
  ],
  [
    24,
    23,
    40,
  ],
  [
    24,
    24,
    10,
  ],
  [
    24,
    25,
    38,
  ],
  [
    24,
    26,
    24,
  ],
  [
    24,
    27,
    22,
  ],
  [
    24,
    28,
    17,
  ],
  [
    24,
    29,
    32,
  ],
  [
    24,
    30,
    24,
  ],
  [
    24,
    31,
    40,
  ],
  [
    24,
    32,
    44,
  ],
  [
    24,
    33,
    26,
  ],
  [
    24,
    34,
    22,
  ],
  [
    24,
    35,
    19,
  ],
  [
    24,
    36,
    32,
  ],
  [
    24,
    37,
    21,
  ],
  [
    24,
    38,
    28,
  ],
  [
    24,
    39,
    18,
  ],
  [
    24,
    40,
    16,
  ],
  [
    24,
    41,
    18,
  ],
  [
    24,
    42,
    22,
  ],
  [
    24,
    43,
    13,
  ],
  [
    24,
    44,
    30,
  ],
  [
    24,
    45,
    5,
  ],
  [
    24,
    46,
    28,
  ],
  [
    24,
    47,
    7,
  ],
  [
    24,
    48,
    47,
  ],
  [
    24,
    49,
    39,
  ],
  [
    24,
    50,
    46,
  ],
  [
    24,
    51,
    64,
  ],
  [
    24,
    52,
    34,
  ],
  [
    25,
    1,
    22,
  ],
  [
    25,
    2,
    22,
  ],
  [
    25,
    3,
    66,
  ],
  [
    25,
    4,
    22,
  ],
  [
    25,
    5,
    22,
  ],
  [
    26,
    1,
    28,
  ],
  [
    26,
    2,
    10,
  ],
  [
    26,
    3,
    27,
  ],
  [
    26,
    4,
    17,
  ],
  [
    26,
    5,
    17,
  ],
  [
    26,
    6,
    14,
  ],
  [
    26,
    7,
    27,
  ],
  [
    26,
    8,
    18,
  ],
  [
    26,
    9,
    11,
  ],
  [
    26,
    10,
    22,
  ],
  [
    26,
    11,
    25,
  ],
  [
    26,
    12,
    28,
  ],
  [
    26,
    13,
    23,
  ],
  [
    26,
    14,
    23,
  ],
  [
    26,
    15,
    8,
  ],
  [
    26,
    16,
    63,
  ],
  [
    26,
    17,
    24,
  ],
  [
    26,
    18,
    32,
  ],
  [
    26,
    19,
    14,
  ],
  [
    26,
    20,
    49,
  ],
  [
    26,
    21,
    32,
  ],
  [
    26,
    22,
    31,
  ],
  [
    26,
    23,
    49,
  ],
  [
    26,
    24,
    27,
  ],
  [
    26,
    25,
    17,
  ],
  [
    26,
    26,
    21,
  ],
  [
    26,
    27,
    36,
  ],
  [
    26,
    28,
    26,
  ],
  [
    26,
    29,
    21,
  ],
  [
    26,
    30,
    26,
  ],
  [
    26,
    31,
    18,
  ],
  [
    26,
    32,
    32,
  ],
  [
    26,
    33,
    33,
  ],
  [
    26,
    34,
    31,
  ],
  [
    26,
    35,
    15,
  ],
  [
    26,
    36,
    38,
  ],
  [
    26,
    37,
    28,
  ],
  [
    26,
    38,
    23,
  ],
  [
    26,
    39,
    29,
  ],
  [
    26,
    40,
    49,
  ],
  [
    26,
    41,
    26,
  ],
  [
    26,
    42,
    20,
  ],
  [
    26,
    43,
    27,
  ],
  [
    26,
    44,
    31,
  ],
  [
    26,
    45,
    25,
  ],
  [
    26,
    46,
    24,
  ],
  [
    26,
    47,
    23,
  ],
  [
    26,
    48,
    35,
  ],
  [
    27,
    1,
    21,
  ],
  [
    27,
    2,
    49,
  ],
  [
    27,
    3,
    33,
  ],
  [
    27,
    4,
    34,
  ],
  [
    27,
    5,
    31,
  ],
  [
    27,
    6,
    28,
  ],
  [
    27,
    7,
    28,
  ],
  [
    27,
    8,
    27,
  ],
  [
    27,
    9,
    27,
  ],
  [
    27,
    10,
    21,
  ],
  [
    27,
    11,
    45,
  ],
  [
    27,
    12,
    13,
  ],
  [
    28,
    1,
    11,
  ],
  [
    28,
    2,
    23,
  ],
  [
    28,
    3,
    5,
  ],
  [
    28,
    4,
    19,
  ],
  [
    28,
    5,
    15,
  ],
  [
    28,
    6,
    11,
  ],
  [
    28,
    7,
    16,
  ],
  [
    28,
    8,
    14,
  ],
  [
    28,
    9,
    17,
  ],
  [
    28,
    10,
    15,
  ],
  [
    28,
    11,
    12,
  ],
  [
    28,
    12,
    14,
  ],
  [
    28,
    13,
    15,
  ],
  [
    28,
    14,
    10,
  ],
  [
    29,
    1,
    20,
  ],
  [
    29,
    2,
    32,
  ],
  [
    29,
    3,
    21,
  ],
  [
    30,
    1,
    15,
  ],
  [
    30,
    2,
    16,
  ],
  [
    30,
    3,
    15,
  ],
  [
    30,
    4,
    13,
  ],
  [
    30,
    5,
    27,
  ],
  [
    30,
    6,
    14,
  ],
  [
    30,
    7,
    17,
  ],
  [
    30,
    8,
    14,
  ],
  [
    30,
    9,
    15,
  ],
  [
    31,
    1,
    21,
  ],
  [
    32,
    1,
    16,
  ],
  [
    32,
    2,
    11,
  ],
  [
    32,
    3,
    10,
  ],
  [
    32,
    4,
    11,
  ],
  [
    33,
    1,
    16,
  ],
  [
    33,
    2,
    13,
  ],
  [
    33,
    3,
    12,
  ],
  [
    33,
    4,
    13,
  ],
  [
    33,
    5,
    15,
  ],
  [
    33,
    6,
    16,
  ],
  [
    33,
    7,
    20,
  ],
  [
    34,
    1,
    15,
  ],
  [
    34,
    2,
    13,
  ],
  [
    34,
    3,
    19,
  ],
  [
    35,
    1,
    17,
  ],
  [
    35,
    2,
    20,
  ],
  [
    35,
    3,
    19,
  ],
  [
    36,
    1,
    18,
  ],
  [
    36,
    2,
    15,
  ],
  [
    36,
    3,
    20,
  ],
  [
    37,
    1,
    15,
  ],
  [
    37,
    2,
    23,
  ],
  [
    38,
    1,
    21,
  ],
  [
    38,
    2,
    13,
  ],
  [
    38,
    3,
    10,
  ],
  [
    38,
    4,
    14,
  ],
  [
    38,
    5,
    11,
  ],
  [
    38,
    6,
    15,
  ],
  [
    38,
    7,
    14,
  ],
  [
    38,
    8,
    23,
  ],
  [
    38,
    9,
    17,
  ],
  [
    38,
    10,
    12,
  ],
  [
    38,
    11,
    17,
  ],
  [
    38,
    12,
    14,
  ],
  [
    38,
    13,
    9,
  ],
  [
    38,
    14,
    21,
  ],
  [
    39,
    1,
    14,
  ],
  [
    39,
    2,
    17,
  ],
  [
    39,
    3,
    18,
  ],
  [
    39,
    4,
    6,
  ],
  [
    40,
    1,
    25,
  ],
  [
    40,
    2,
    23,
  ],
  [
    40,
    3,
    17,
  ],
  [
    40,
    4,
    25,
  ],
  [
    40,
    5,
    48,
  ],
  [
    40,
    6,
    34,
  ],
  [
    40,
    7,
    29,
  ],
  [
    40,
    8,
    34,
  ],
  [
    40,
    9,
    38,
  ],
  [
    40,
    10,
    42,
  ],
  [
    40,
    11,
    30,
  ],
  [
    40,
    12,
    50,
  ],
  [
    40,
    13,
    58,
  ],
  [
    40,
    14,
    36,
  ],
  [
    40,
    15,
    39,
  ],
  [
    40,
    16,
    28,
  ],
  [
    40,
    17,
    27,
  ],
  [
    40,
    18,
    35,
  ],
  [
    40,
    19,
    30,
  ],
  [
    40,
    20,
    34,
  ],
  [
    40,
    21,
    46,
  ],
  [
    40,
    22,
    46,
  ],
  [
    40,
    23,
    39,
  ],
  [
    40,
    24,
    51,
  ],
  [
    40,
    25,
    46,
  ],
  [
    40,
    26,
    75,
  ],
  [
    40,
    27,
    66,
  ],
  [
    40,
    28,
    20,
  ],
  [
    41,
    1,
    45,
  ],
  [
    41,
    2,
    28,
  ],
  [
    41,
    3,
    35,
  ],
  [
    41,
    4,
    41,
  ],
  [
    41,
    5,
    43,
  ],
  [
    41,
    6,
    56,
  ],
  [
    41,
    7,
    37,
  ],
  [
    41,
    8,
    38,
  ],
  [
    41,
    9,
    50,
  ],
  [
    41,
    10,
    52,
  ],
  [
    41,
    11,
    33,
  ],
  [
    41,
    12,
    44,
  ],
  [
    41,
    13,
    37,
  ],
  [
    41,
    14,
    72,
  ],
  [
    41,
    15,
    47,
  ],
  [
    41,
    16,
    20,
  ],
  [
    42,
    1,
    80,
  ],
  [
    42,
    2,
    52,
  ],
  [
    42,
    3,
    38,
  ],
  [
    42,
    4,
    44,
  ],
  [
    42,
    5,
    39,
  ],
  [
    42,
    6,
    49,
  ],
  [
    42,
    7,
    50,
  ],
  [
    42,
    8,
    56,
  ],
  [
    42,
    9,
    62,
  ],
  [
    42,
    10,
    42,
  ],
  [
    42,
    11,
    54,
  ],
  [
    42,
    12,
    59,
  ],
  [
    42,
    13,
    35,
  ],
  [
    42,
    14,
    35,
  ],
  [
    42,
    15,
    32,
  ],
  [
    42,
    16,
    31,
  ],
  [
    42,
    17,
    37,
  ],
  [
    42,
    18,
    43,
  ],
  [
    42,
    19,
    48,
  ],
  [
    42,
    20,
    47,
  ],
  [
    42,
    21,
    38,
  ],
  [
    42,
    22,
    71,
  ],
  [
    42,
    23,
    56,
  ],
  [
    42,
    24,
    53,
  ],
  [
    43,
    1,
    51,
  ],
  [
    43,
    2,
    25,
  ],
  [
    43,
    3,
    36,
  ],
  [
    43,
    4,
    54,
  ],
  [
    43,
    5,
    47,
  ],
  [
    43,
    6,
    71,
  ],
  [
    43,
    7,
    53,
  ],
  [
    43,
    8,
    59,
  ],
  [
    43,
    9,
    41,
  ],
  [
    43,
    10,
    42,
  ],
  [
    43,
    11,
    57,
  ],
  [
    43,
    12,
    50,
  ],
  [
    43,
    13,
    38,
  ],
  [
    43,
    14,
    31,
  ],
  [
    43,
    15,
    27,
  ],
  [
    43,
    16,
    33,
  ],
  [
    43,
    17,
    26,
  ],
  [
    43,
    18,
    40,
  ],
  [
    43,
    19,
    42,
  ],
  [
    43,
    20,
    31,
  ],
  [
    43,
    21,
    25,
  ],
  [
    44,
    1,
    26,
  ],
  [
    44,
    2,
    47,
  ],
  [
    44,
    3,
    26,
  ],
  [
    44,
    4,
    37,
  ],
  [
    44,
    5,
    42,
  ],
  [
    44,
    6,
    15,
  ],
  [
    44,
    7,
    60,
  ],
  [
    44,
    8,
    40,
  ],
  [
    44,
    9,
    43,
  ],
  [
    44,
    10,
    48,
  ],
  [
    44,
    11,
    30,
  ],
  [
    44,
    12,
    25,
  ],
  [
    44,
    13,
    52,
  ],
  [
    44,
    14,
    28,
  ],
  [
    44,
    15,
    41,
  ],
  [
    44,
    16,
    40,
  ],
  [
    44,
    17,
    34,
  ],
  [
    44,
    18,
    28,
  ],
  [
    44,
    19,
    40,
  ],
  [
    44,
    20,
    38,
  ],
  [
    44,
    21,
    40,
  ],
  [
    44,
    22,
    30,
  ],
  [
    44,
    23,
    35,
  ],
  [
    44,
    24,
    27,
  ],
  [
    44,
    25,
    27,
  ],
  [
    44,
    26,
    32,
  ],
  [
    44,
    27,
    44,
  ],
  [
    44,
    28,
    31,
  ],
  [
    45,
    1,
    27,
  ],
  [
    45,
    2,
    26,
  ],
  [
    45,
    3,
    18,
  ],
  [
    45,
    4,
    17,
  ],
  [
    45,
    5,
    20,
  ],
  [
    46,
    1,
    25,
  ],
  [
    46,
    2,
    25,
  ],
  [
    46,
    3,
    22,
  ],
  [
    46,
    4,
    19,
  ],
  [
    46,
    5,
    14,
  ],
  [
    47,
    1,
    21,
  ],
  [
    47,
    2,
    22,
  ],
  [
    47,
    3,
    18,
  ],
  [
    48,
    1,
    10,
  ],
  [
    48,
    2,
    29,
  ],
  [
    48,
    3,
    24,
  ],
  [
    48,
    4,
    21,
  ],
  [
    48,
    5,
    21,
  ],
  [
    49,
    1,
    13,
  ],
  [
    50,
    1,
    15,
  ],
  [
    51,
    1,
    25,
  ],
  [
    52,
    1,
    32,
  ],
  [
    52,
    2,
    29,
  ],
  [
    52,
    3,
    31,
  ],
  [
    52,
    4,
    25,
  ],
  [
    52,
    5,
    21,
  ],
  [
    52,
    6,
    23,
  ],
  [
    52,
    7,
    25,
  ],
  [
    52,
    8,
    39,
  ],
  [
    52,
    9,
    33,
  ],
  [
    52,
    10,
    21,
  ],
  [
    52,
    11,
    36,
  ],
  [
    52,
    12,
    21,
  ],
  [
    52,
    13,
    14,
  ],
  [
    52,
    14,
    26,
  ],
  [
    52,
    15,
    33,
  ],
  [
    52,
    16,
    24,
  ],
  [
    53,
    1,
    31,
  ],
  [
    53,
    2,
    16,
  ],
  [
    53,
    3,
    23,
  ],
  [
    53,
    4,
    21,
  ],
  [
    53,
    5,
    13,
  ],
  [
    53,
    6,
    20,
  ],
  [
    53,
    7,
    40,
  ],
  [
    53,
    8,
    13,
  ],
  [
    53,
    9,
    27,
  ],
  [
    53,
    10,
    33,
  ],
  [
    53,
    11,
    34,
  ],
  [
    53,
    12,
    31,
  ],
  [
    53,
    13,
    13,
  ],
  [
    53,
    14,
    40,
  ],
  [
    53,
    15,
    58,
  ],
  [
    53,
    16,
    24,
  ],
  [
    54,
    1,
    24,
  ],
  [
    54,
    2,
    17,
  ],
  [
    54,
    3,
    18,
  ],
  [
    54,
    4,
    18,
  ],
  [
    54,
    5,
    21,
  ],
  [
    54,
    6,
    18,
  ],
  [
    54,
    7,
    16,
  ],
  [
    54,
    8,
    24,
  ],
  [
    54,
    9,
    15,
  ],
  [
    54,
    10,
    18,
  ],
  [
    54,
    11,
    32,
  ],
  [
    54,
    12,
    21,
  ],
  [
    54,
    13,
    13,
  ],
  [
    55,
    1,
    24,
  ],
  [
    55,
    2,
    21,
  ],
  [
    55,
    3,
    29,
  ],
  [
    55,
    4,
    31,
  ],
  [
    55,
    5,
    26,
  ],
  [
    55,
    6,
    18,
  ],
  [
    56,
    1,
    23,
  ],
  [
    56,
    2,
    22,
  ],
  [
    56,
    3,
    21,
  ],
  [
    56,
    4,
    32,
  ],
  [
    56,
    5,
    33,
  ],
  [
    56,
    6,
    24,
  ],
  [
    57,
    1,
    30,
  ],
  [
    57,
    2,
    30,
  ],
  [
    57,
    3,
    21,
  ],
  [
    57,
    4,
    23,
  ],
  [
    58,
    1,
    29,
  ],
  [
    58,
    2,
    23,
  ],
  [
    58,
    3,
    25,
  ],
  [
    58,
    4,
    18,
  ],
  [
    59,
    1,
    10,
  ],
  [
    59,
    2,
    20,
  ],
  [
    59,
    3,
    13,
  ],
  [
    59,
    4,
    18,
  ],
  [
    59,
    5,
    28,
  ],
  [
    60,
    1,
    12,
  ],
  [
    60,
    2,
    17,
  ],
  [
    60,
    3,
    18,
  ],
  [
    61,
    1,
    20,
  ],
  [
    61,
    2,
    15,
  ],
  [
    61,
    3,
    16,
  ],
  [
    61,
    4,
    16,
  ],
  [
    61,
    5,
    25,
  ],
  [
    61,
    6,
    21,
  ],
  [
    62,
    1,
    18,
  ],
  [
    62,
    2,
    26,
  ],
  [
    62,
    3,
    17,
  ],
  [
    62,
    4,
    22,
  ],
  [
    63,
    1,
    16,
  ],
  [
    63,
    2,
    15,
  ],
  [
    63,
    3,
    15,
  ],
  [
    64,
    1,
    25,
  ],
  [
    65,
    1,
    14,
  ],
  [
    65,
    2,
    18,
  ],
  [
    65,
    3,
    19,
  ],
  [
    65,
    4,
    16,
  ],
  [
    65,
    5,
    14,
  ],
  [
    65,
    6,
    20,
  ],
  [
    65,
    7,
    28,
  ],
  [
    65,
    8,
    13,
  ],
  [
    65,
    9,
    28,
  ],
  [
    65,
    10,
    39,
  ],
  [
    65,
    11,
    40,
  ],
  [
    65,
    12,
    29,
  ],
  [
    65,
    13,
    25,
  ],
  [
    66,
    1,
    20,
  ],
  [
    66,
    2,
    29,
  ],
  [
    66,
    3,
    22,
  ],
  [
    66,
    4,
    11,
  ],
  [
    66,
    5,
    14,
  ],
  [
    66,
    6,
    17,
  ],
  [
    66,
    7,
    17,
  ],
  [
    66,
    8,
    13,
  ],
  [
    66,
    9,
    21,
  ],
  [
    66,
    10,
    11,
  ],
  [
    66,
    11,
    19,
  ],
  [
    66,
    12,
    17,
  ],
  [
    66,
    13,
    18,
  ],
  [
    66,
    14,
    20,
  ],
  [
    66,
    15,
    8,
  ],
  [
    66,
    16,
    21,
  ],
  [
    66,
    17,
    18,
  ],
  [
    66,
    18,
    24,
  ],
  [
    66,
    19,
    21,
  ],
  [
    66,
    20,
    15,
  ],
  [
    66,
    21,
    27,
  ],
  [
    66,
    22,
    21,
  ],
]
;

function createBooks() {
  const books = [];
  let currentBook = null;

  for (let i = 0; i < bookChapterVerseArray.length; i++) {
    const [book, chapter, verse] = bookChapterVerseArray[i];

    if (!currentBook || currentBook.id !== book) {
      currentBook = {
        id: book,
        name: testamentBooks[book],
        chapters: [],
      };
      books.push(currentBook);
    }

    if (!currentBook.chapters[chapter - 1]) {
      //   currentBook.chapters[chapter - 1] = [];
      //   currentBook.chapters[chapter - 1] = {
      //     chapter: chapter,
      //     verses: [],
      //   };
    }

    currentBook.chapters[chapter - 1] = verse;
  }

  //   books.forEach((book) => {
  //     book.name = testamentBooks[book.id];
  //   });

  return books;
}

// Usage
//   let bookChapterVerseArray = require('./book-chapter-verse.json');
const books = createBooks(bookChapterVerseArray);
console.log(JSON.stringify(books));
// console.log(JSON.stringify(books, null, 2));
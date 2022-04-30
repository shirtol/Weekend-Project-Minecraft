/**
 * @description check if tile is in the first row
 * @param {number} tileRow
 * @returns {boolean}
 */
export const isFirstRow = (tileRow) => tileRow === 0;

/**
 * @description check if tile is in the last row
 * @param {number} tileRow
 * @returns {boolean}
 */
export const isLastRow = (tileRow, gameBoard) => tileRow === gameBoard.length;

/**
 * @description check if tile has sky from bottom
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
export const hasEmptyBottom = (gameBoard, tileRow, tileCol) =>
    tileRow !== gameBoard.length - 1 &&
    gameBoard[tileRow + 1][tileCol] in [0, 1];

/**
 * @description check if tile has sky from top
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
export const hasEmptyTop = (gameBoard, tileRow, tileCol) =>
    !isFirstRow(tileRow) && gameBoard[tileRow - 1][tileCol] in [0, 1];

/**
 * @description check if tile has sky from left
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
export const hasEmptyLeft = (gameBoard, tileRow, tileCol) =>
    gameBoard[tileRow][tileCol - 1] in [0, 1];

/**
 * @description check if tile has sky from right
 * @param {number[][]} gameBoard
 * @param {number} tileRow
 * @param {number} tileCol
 * @returns {boolean}
 */
export const hasEmptyRight = (gameBoard, tileRow, tileCol) =>
    gameBoard[tileRow][tileCol + 1] in [0, 1];

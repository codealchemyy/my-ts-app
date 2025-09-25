"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickRandom = pickRandom;
// src/utils/index.ts
/**
 * Returns a random element from an array.
 */
function pickRandom(arr) {
    if (arr.length === 0)
        return undefined;
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../src/cli.js';

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

const generateProgression = () => {
    const length = getRandomIntInclusive(5, 10);
    const start = getRandomIntInclusive(0, 9);
    const step = getRandomIntInclusive(1, 5);
    const progression = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
        progression.push(start + i * step);
    }
    return progression;
}
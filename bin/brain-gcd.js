#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

const gcd = (a, b) => {
  while (b) {
    // eslint-disable-next-line no-param-reassign
    [a, b] = [b, a % b];
  }
  return a;
};

const main = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const num1 = randomInt(1, 100);
    const num2 = randomInt(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gcd(num1, num2).toString();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`let's try again, ${name}!`);
      return;
    }
  }

  console.log(`congratulations, ${name}!`);
};

main();

import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Please enter your name: ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default game;

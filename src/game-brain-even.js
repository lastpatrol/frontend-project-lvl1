import readlineSync from 'readline-sync';
import greetAndGetUser from './cli.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
const getRandom = (max) => Math.floor(Math.random() * max);

export default () => {
  const objective = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = 3;
  const maxNumber = 100;
  const userName = greetAndGetUser();
  console.log(objective);

  for (let i = 0; i < rounds; i += 1) {
    const number = getRandom(maxNumber);
    const correctAnswer = isEven(number);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question(`Your answer: `);

    const isUserCorrect = correctAnswer === userAnswer;

    if (isUserCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 1;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

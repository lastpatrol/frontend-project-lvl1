import readlineSync from 'readline-sync';
import greetAndGetName from './cli.js';
import { car, cdr } from './utils.js';

const rounds = 3;

const play = (game) => {
  const objective = car(game);
  const makeTask = cdr(game);
  const userName = greetAndGetName();
  console.log(objective);

  for (let i = 0; i < rounds; i += 1) {
    const task = makeTask();
    const question = car(task);
    const correctAnswer = cdr(task);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const answerCheck = correctAnswer === userAnswer;

    if (answerCheck) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return 1;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return 0;
};

export default play;

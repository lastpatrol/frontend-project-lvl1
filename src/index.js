import readlineSync from 'readline-sync';
import greetAndGetName from './cli.js';

const rounds = 3;

const play = (game) => {
  const { objective, makeTask } = game;
  const userName = greetAndGetName();
  console.log(objective);

  for (let i = 0; i < rounds; i += 1) {
    const task = makeTask();
    const { question } = task;
    const correctAnswer = task.answer;

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answerCheck = correctAnswer === userAnswer;

    if (answerCheck) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default play;

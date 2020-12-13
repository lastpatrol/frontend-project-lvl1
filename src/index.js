import readlineSync from 'readline-sync';

const rounds = 3;

const play = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const { description, makeTask } = game;
  console.log(description);

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
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default play;

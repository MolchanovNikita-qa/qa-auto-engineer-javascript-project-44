import runGame from '../index.js';
import { getRandomNumber } from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const primeNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(2, 100);
  const correctAnswer = primeNum(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};

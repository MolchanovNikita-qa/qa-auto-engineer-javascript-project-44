import runGame from '../index.js';
import { getRandomNumber, getLargestGeneralDivisor } from '../helper.js';

const description = 'Find the greatest common divisor of given numbers';

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNubmer = getRandomNumber(1, 100);

  const question = `${firstNumber} ${secondNubmer}`;
  const correctAnswer = String(getLargestGeneralDivisor(firstNumber, secondNubmer));

  return { question, correctAnswer };
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};

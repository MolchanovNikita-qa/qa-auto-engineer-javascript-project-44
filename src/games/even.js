import runGame from "../index.js";
import getRandomNumber from "../helper.js";

const isEven = (num) => num % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const getQuestionAndAnswer = () => {
  const questiond = getRandomNumber(1, 9);
  const correctAnswer = isEven(getRandomNumber) ? "yes" : "no";
  return { questiond, correctAnswer };
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
import runGame from "../index.js";
import { getRandomNumber, getProgression } from "../helper.js";

const progressLength = 10;
const description = "What number is missing in the progression?";

const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const randomIndex = getRandomNumber(0, progressLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = "..";
  const question = progression.join(" ");

  return { question, correctAnswer };
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};

import runGame from "../index.js";
import { getRandomNumber, getRandomOperationSymbol } from "../helper.js";

const operationSymbols = ["+", "-", "*"];
const description = "What is the result of the expression?";

const calcOperation = (symbol, firstValue, secondValue) => {
  let result = 0;

  switch (symbol) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    default:
      return null;
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const randomSymbol = getRandomOperationSymbol(operationSymbols);
  const firstNumber = getRandomNumber(0, 10);
  const secondNubmer = getRandomNumber(0, 10);
  const question = `${firstNumber} ${randomSymbol} ${secondNubmer}`;
  const correctAnswer = String(
    calcOperation(randomSymbol, firstNumber, secondNubmer)
  );

  return { question, correctAnswer };
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};

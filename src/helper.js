const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomOperationSymbol = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolsLength);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

//алгоритм Евклида
const getLargestGeneralDivisor = (firstNum, secondNum) => {
  if (firstNum === 0 || secondNum === 0) {
    return firstNum + secondNum;
  }
  if (firstNum > secondNum) {
    return getLargestGeneralDivisor(firstNum - secondNum, secondNum);
  }
  return getLargestGeneralDivisor(firstNum, secondNum - firstNum);
};

const progressLength = 10;

const getProgression = (length = 10) => {
  let progressNumber = getRandomNumber(1, 100);
  const step = getRandomNumber(1, 10);
  const progression = [];

  for (let i = 0; i < progressLength; i += 1) {
    progression.push(progressNumber);
    progressNumber += step;
  }
  return progression;
};

export {
  getLargestGeneralDivisor,
  getRandomOperationSymbol,
  getRandomNumber,
  getProgression,
};

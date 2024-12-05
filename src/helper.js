const getRandomNumber = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomOperationSymbol = (symbols) => {
  const symbolsLength = symbols.length;
  const randomIndex = getRandomNumber(0, symbolsLength);
  const randomSymbol = symbols[randomIndex];
  return randomSymbol;
};

export { getRandomOperationSymbol };
export { getRandomNumber };

import readlineSync, { question } from "readline-sync";

const countRound = 3;

const runGame = (gameName) => {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name?");
  console.log("Hello, " + name + "!");

  console.log(description);

  for (let i = 0; i < countRound; i++) {
    console.log("Question: " + getQuestionAndAnswer);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
    } else {
      console.log(
        userAnswer + "is wrong answer ;(. Correct answer was" + correctAnswer
      );
      console.log("Let's try again," + name + "!");
      return;
    }
    console.log("Congratulations," + name + "!");
  }
};

export default runGame;

import readlineSync from "readline-sync";

const greetingByName = () => {
  const name = readlineSync.question("May I have your name?");
  return console.log("Hello, " + name + "!");
};

export default greetingByName;
#!/usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";
import inquirer from "inquirer";
import open from "open";

const data = {
  name: chalk.cyan.bold("Louis Qian"),
  github: chalk.blue("https://github.com/louisunlimited"),
  linkedin: chalk.blue("https://linkedin.com/in/louis-qian"),
  twitter: chalk.blue("https://twitter.com/louis_unlimited"),
  web: chalk.blue.bold("https://louisunlimited.com"),
  card: chalk.bold("npx louisunlimited"),
};

console.log(
  boxen(
    `
.-----------------------.
|  Hi, I'm ${data.name}   |
'-----------------------'
        ^      (\\_/)
        '----- (O.0)
               (> <)

Nice to meet you! Here are some links to my profiles:

GitHub: ${data.github}
LinkedIn: ${data.linkedin}
Twitter: ${data.twitter}
Personal Website: ${data.web}

Card: ${data.card}
`,
    {
      float: "center",
      padding: 1,
      borderStyle: "single",
      borderColor: "blue",
    }
  )
);

console.log(
  `Tip: Try ${chalk.cyan.bold(
    "cmd/ctrl + click"
  )} on the links above to view my profiles!`
);

const questions = [
  {
    type: "list",
    name: "action",
    message: "What would you like to do?",
    choices: [
      {
        name: `Schedule a ${chalk.bold("meeting")} via ${chalk.blueBright.bold(
          "Calendly"
        )}?`,
        value: () => {
          open("https://calendly.com/louisqy26/meeting-with-louis");
          console.log("Can't wait to meet you!!!");
        },
      },
      {
        name: `Just ${chalk.greenBright.bold("Quit")}?`,
        value: () => {
          console.log("Goodbye! Hope to see you soon!");
        },
      },
    ],
  },
];

const prompt = inquirer.createPromptModule();
prompt(questions).then((answer) => answer.action());

"use strict";

const name = "Kati Johnson";
const age = 31;
const birthday = "August 29th";
const detroitGC = true;
const lifeEvents = [
  "I was born in Elkhart, Indiana.",
  "I went to Indiana University Bloomington.",
  "I served 2 years in the Americorps program City Year.",
  "Javascript makes me feel like a dumbie!",
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} and my birthday is ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} and my birthday is ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    {
      counter++;
    }
    {
      console.log(`${randomNumber} !== 5`);
    }
  } else if (randomNumber === 5) {
    {
      counter++;
    }
    {
      console.log(
        `${randomNumber} === 5. It took ${counter} iterations to randomly generate the number 5.`
      );
    }
    {
      break;
    }
  }
}

let hours = 50;
let wage = 10;

if (hours <= 40) {
  let paycheck = hours * wage;
  let weeks = Math.ceil(1000000 / paycheck);
  console.log(
    `With wage =${wage} and hours=${hours} it would take ${weeks} weeks.`
  );
} else {
  let overtime = (hours - 40) * (wage * 1.5);
  let paycheck = 40 * wage + overtime;
  let weeks = Math.ceil(1000000 / paycheck);
  console.log(
    `With wage =${wage} and hours=${hours} it would take ${weeks} weeks.`
  );
}

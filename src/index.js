import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/planetage.js';

function handleResults(e) {
  e.preventDefault;
  const nameInput = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;
  const expectancyInput = document.getElementById("expectancy").value;
  const planetInput = document.querySelector("input[name='planet']:checked").value;
  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");

  let user = new User(nameInput, ageInput, expectancyInput);

  h2.append("Order placed!");
  paragraph.append(`Hello ${nameInput}! Your age on ${planetInput} is ${user.getAge(planetInput)} years. Your estimated time left is ${user.getYearsLeft(planetInput)} ${planetInput} years. Thank you!`);
  document.body.append(h2, paragraph);
}
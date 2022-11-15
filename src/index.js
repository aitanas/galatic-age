import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/planetage.js';

function handleResults(e) {
  e.preventDefault();
  const nameInput = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;
  const expectancyInput = document.getElementById("expectancy").value;
  const planetInput = document.querySelector("input[name='planet']:checked");
  let planetInputArr = Array.from(planetInput);
  const planetArr = [];
  planetInputArr.forEach(function(element) {
    planetArr.push(element.value);
  });

  const planet = String(planetArr);

  const paragraph = document.createElement("p");
  const h2 = document.createElement("h2");

  let user = new User(nameInput, ageInput, expectancyInput);

  h2.append("Age calculated!");
  paragraph.append(`Hello ${nameInput}! Your age on ${planet} is ${user.getAge(planet)} years. Your estimated time left is ${user.getYearsLeft(planet)} ${planet} years. Thank you!`);
  document.body.append(h2, paragraph);
}

window.addEventListener("load", function () {
  document.querySelector("form#form").addEventListener("submit", handleResults);
});
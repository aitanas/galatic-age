export class User {
  constructor(name, age, expectancy) {
    this.name = name;
    this.age = age;
    this.expectancy = expectancy;
  }

  getAge(planet) {
    if (planet === 'mercury') {
      return this.age * .24;
    } else if (planet === 'venus') {
      return this.age * .62;
    } else if (planet === 'mars') {
      return this.age * 1.88;
    } else if (planet === 'jupiter') {
      return this.age * 11.86;
    }
  }

  getLifeExpectancy(planet) {
    if (planet === 'mercury') {
      return this.expectancy * .24;
    } else if (planet === 'venus') {
      return this.expectancy * .62;
    } else if (planet === 'mars') {
      return Math.round((this.expectancy * 1.88) * 10) / 10;
    } else if (planet === 'jupiter') {
      return Math.round((this.expectancy * 11.86) * 10) / 10;
    }
  }
}
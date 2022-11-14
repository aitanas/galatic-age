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
    }
  }

  marsLifeExpectancy() {
    const marsLifeExp = this.expectancy * 1.88;
    return Math.round(marsLifeExp * 10) / 10;
  }

  jupiterLifeExpectancy() {
    const jupiterLifeExp = this.expectancy * 11.86;
    return Math.round(jupiterLifeExp * 10) / 10;
  }
}
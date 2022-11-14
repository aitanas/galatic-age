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
    } else {
      return 0;
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
    } else {
      return 0;
    }
  }

  getYearsLeft(planet) {
    let spaceAge;
    let spaceExp;
    if (planet === 'mercury') {
      spaceAge = this.getAge('mercury');
      spaceExp = this.getLifeExpectancy('mercury');
      return Math.round(spaceExp - spaceAge);
    } else if (planet === 'venus') {
      spaceAge = this.getAge('venus');
      spaceExp = this.getLifeExpectancy('venus');
      return Math.round(spaceExp - spaceAge);
    } else if (planet === 'mars') {
      spaceAge = this.getAge('mars');
      spaceExp = this.getLifeExpectancy('mars');
      return Math.round(spaceExp - spaceAge);
    } else if (planet === 'jupiter') {
      spaceAge = this.getAge('jupiter');
      spaceExp = this.getLifeExpectancy('jupiter');
      return Math.round(spaceExp - spaceAge);
    }
  }
}
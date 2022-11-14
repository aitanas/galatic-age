export class User {
  constructor(name, age, expectancy) {
    this.name = name;
    this.age = age;
    this.expectancy = expectancy;
  }

  getAge(planet) {
    if (planet === 'mercury') {
      return Math.round(this.age / .24);
    } else if (planet === 'venus') {
      return Math.round(this.age / .62);
    } else if (planet === 'mars') {
      return Math.round(this.age / 1.88);
    } else if (planet === 'jupiter') {
      return Math.round(this.age / 11.86);
    } else {
      return 0;
    }
  }

  getLifeExpectancy(planet) {
    if (planet === 'mercury') {
      return Math.round(this.expectancy / .24);
    } else if (planet === 'venus') {
      return Math.round(this.expectancy / .62);
    } else if (planet === 'mars') {
      return Math.round(this.expectancy / 1.88);
    } else if (planet === 'jupiter') {
      return Math.round(this.expectancy / 11.86);
    } else {
      return 0;
    }
  }

  getYearsLeft(planet) {
    if (this.age >= this.expectancy) {
      if (planet === 'mercury') {
        return this.getAge('mercury') - this.getLifeExpectancy('mercury');
      } else if (planet === 'venus') {
        return this.getAge('venus') - this.getLifeExpectancy('venus');
      } else if (planet === 'mars') {
        return this.getAge('mars') - this.getLifeExpectancy('mars');
      } else if (planet === 'jupiter') {
        return this.getAge('jupiter') - this.getLifeExpectancy('jupiter');
      } else {
        return 0;
      }
    } else {
      if (planet === 'mercury') {
        let spaceAge = this.getAge('mercury');
        let spaceExp = this.getLifeExpectancy('mercury');
        return spaceExp - spaceAge;
      } else if (planet === 'venus') {
        let spaceAge = this.getAge('venus');
        let spaceExp = this.getLifeExpectancy('venus');
        return spaceExp - spaceAge;
      } else if (planet === 'mars') {
        let spaceAge = this.getAge('mars');
        let spaceExp = this.getLifeExpectancy('mars');
        return spaceExp - spaceAge;
      } else if (planet === 'jupiter') {
        let spaceAge = this.getAge('jupiter');
        let spaceExp = this.getLifeExpectancy('jupiter');
        return spaceExp - spaceAge;
      } else {
        return 0;
      }
    }
  }
}
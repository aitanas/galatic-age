export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.lifeExpectancy = 0;
  }

  mercuryAge() {
    return this.age * .24;
  }

  venusAge() {
    return this.age * .62;
  }

  marsAge() {
    return this.age * 1.88;
  }

  jupiterAge() {
    return this.age * 11.86;
  }

  getLifeExpectancy(avg) {
    this.lifeExpectancy = avg;
  }

  mercuryLifeExpectancy() {
    return this.lifeExpectancy * .24;
  }

  venusLifeExpectancy() {
    return this.lifeExpectancy * .62;
  }

  marsLifeExpectancy() {
    const marsLifeExp = this.lifeExpectancy * 1.88;
    return Math.round(marsLifeExp * 10) / 10;
  }

  jupiterLifeExpectancy() {
    const jupiterLifeExp = this.lifeExpectancy * 11.86;
    return Math.round(jupiterLifeExp * 10) / 10;
  }
}
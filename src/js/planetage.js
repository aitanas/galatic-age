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

}
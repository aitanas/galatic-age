import {User} from '../src/js/planetage.js'

describe('User', () => {
  let aitana;

  beforeEach(() => {
    aitana = new User("Aitana", 25, 85);
  });

  test("should create an object constructor with a user's name, age, and life expectancy", () => {
    expect(aitana).toEqual({name: "Aitana", age: 25, expectancy: 85});
  });

  test("should return user's age in Mercury years", () => {
    expect(aitana.getAge('mercury')).toEqual(6);
  });

  test("should return user's age in Venus years", () => {
    expect(aitana.getAge('venus')).toEqual(15.5);
  });

  test("should return user's age in Mars years", () => {
    expect(aitana.getAge('mars')).toEqual(47);
  });

  test("should return user's age in Jupiter years", () => {
    expect(aitana.getAge('jupiter')).toEqual(296.5);
  });

  test("should determine the user's life expectancy on Mercury", () => {
    expect(aitana.getLifeExpectancy(mercury)).toEqual(20.4);
  });

  test("should determine the user's life expectancy on Venus", () => {
    expect(aitana.venusLifeExpectancy()).toEqual(52.7);
  });

  test("should determine the user's life expectancy on Mars", () => {
    expect(aitana.marsLifeExpectancy()).toEqual(159.8);
  });

  test("should determine the user's life expectancy on Jupiter", () => {
    expect(aitana.jupiterLifeExpectancy()).toEqual(1008.1);
  });

})
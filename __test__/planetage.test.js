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
    expect(aitana.getLifeExpectancy('mercury')).toEqual(20.4);
  });

  test("should determine the user's life expectancy on Venus", () => {
    expect(aitana.getLifeExpectancy('venus')).toEqual(52.7);
  });

  test("should determine the user's life expectancy on Mars", () => {
    expect(aitana.getLifeExpectancy('mars')).toEqual(159.8);
  });

  test("should determine the user's life expectancy on Jupiter", () => {
    expect(aitana.getLifeExpectancy('jupiter')).toEqual(1008.1);
  });

  test("should return 0 if an invalid input is called into a method", () => {
    expect(aitana.getAge('hello')).toEqual(0);
    expect(aitana.getLifeExpectancy('hi')).toEqual(0);
  });

  test("should return the approximate number of years a user has left on Mercury", () => {
    expect(aitana.getYearsLeft('mercury')).toEqual(14);
  });

  test("should return the approximate number of years a user has left on Venus", () => {
    expect(aitana.getYearsLeft('venus')).toEqual(37);
  });

  test("should return the approximate number of years a user has left on Mars", () => {
    expect(aitana.getYearsLeft('mars')).toEqual(113);
  });

  test("should return the approximate number of years a user has left on Jupiter", () => {
    expect(aitana.getYearsLeft('jupiter')).toEqual(712);
  });

  test(" if user is over the average life expectancy on Mars, getYearsLeft method should instead return the number of years lived past avg expectancy", () => {
    let oldPerson = new User("joe", 88, 84);
    expect(oldPerson.getYearsLeft('mercury')).toEqual(1);
  })
})
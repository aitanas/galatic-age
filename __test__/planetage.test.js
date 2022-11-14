import {User} from '../src/js/planetage.js'

describe('User', () => {
  let aitana;
  let joe;

  beforeEach(() => {
    aitana = new User("Aitana", 25, 85);
    joe = new User("joe", 88, 84);
  });

  test("should create an object constructor with a user's name, age, and life expectancy", () => {
    expect(aitana).toEqual({name: "Aitana", age: 25, expectancy: 85});
  });

  test("should return user's age in Mercury years", () => {
    expect(aitana.getAge('mercury')).toEqual(104);
  });

  test("should return user's age in Venus years", () => {
    expect(aitana.getAge('venus')).toEqual(40);
  });

  test("should return user's age in Mars years", () => {
    expect(aitana.getAge('mars')).toEqual(13);
  });

  test("should return user's age in Jupiter years", () => {
    expect(aitana.getAge('jupiter')).toEqual(2);
  });

  test("should determine the user's life expectancy on Mercury", () => {
    expect(aitana.getLifeExpectancy('mercury')).toEqual(354);
  });

  test("should determine the user's life expectancy on Venus", () => {
    expect(aitana.getLifeExpectancy('venus')).toEqual(137);
  });

  test("should determine the user's life expectancy on Mars", () => {
    expect(aitana.getLifeExpectancy('mars')).toEqual(45);
  });

  test("should determine the user's life expectancy on Jupiter", () => {
    expect(aitana.getLifeExpectancy('jupiter')).toEqual(7);
  });

  test("should return 0 if an invalid input is called into a method", () => {
    expect(aitana.getAge('hello')).toEqual(0);
    expect(aitana.getLifeExpectancy('hi')).toEqual(0);
  });

  test("should return the approximate number of years a user has left on Mercury", () => {
    expect(aitana.getYearsLeft('mercury')).toEqual(250);
  });

  test("should return the approximate number of years a user has left on Venus", () => {
    expect(aitana.getYearsLeft('venus')).toEqual(97);
  });

  test("should return the approximate number of years a user has left on Mars", () => {
    expect(aitana.getYearsLeft('mars')).toEqual(32);
  });

  test("should return the approximate number of years a user has left on Jupiter", () => {
    expect(aitana.getYearsLeft('jupiter')).toEqual(5);
  });

  test("if user is over the average life expectancy on Mars, getYearsLeft method should instead return the number of years lived past avg expectancy", () => {
    expect(joe.getYearsLeft('mercury')).toEqual(17);
  });

  test("should return # of years surpassed on Venus if user's age is over their avg life expectancy", () => {
    expect(joe.getYearsLeft('venus')).toEqual(7);
  });

  test("should return # of years surpassed on Mars if user's age is over their avg life expectancy", () => {
    expect(joe.getYearsLeft('mars')).toEqual(2);
  });

  test("should return # of years surpassed on Jupiter if user's age is over their avg life expectancy", () => {
    expect(joe.getYearsLeft('jupiter')).toEqual(0);
  });

  test("should return 0 if invalid planet is entered into getYearsLeft method", () => {
    expect(joe.getYearsLeft('howdy')).toEqual(0);
    expect(aitana.getYearsLeft('howdy')).toEqual(0);
  });
})
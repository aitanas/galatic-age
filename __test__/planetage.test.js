import {User} from '../src/js/planetage.js'

describe('User', () => {
  let aitana;

  beforeEach(() => {
    aitana = new User("Aitana", 25);
  });

  test("should create an object constructor with a user's name and age", () => {
    expect(aitana).toEqual({name: "Aitana", age: 25});
  });

  test("should return user's age in Mercury years", () => {
    expect(aitana.mercuryAge()).toEqual(6);
  });

  test("should return user's age in Venus years", () => {
    expect(aitana.venusAge()).toEqual(15.5);
  });

  test("should return user's age in Mars years", () => {
    expect(aitana.marsAge()).toEqual(47);
  });

  test("should return user's age in Jupiter years", () => {
    expect(aitana.jupiterAge()).toEqual(296.5);
  });

  test("should return user's life expectancy", () => {
    expect(aitana.lifeExpectancy(85)).toEqual(85);
  });

  test("should assign the inputted user's life expectancy to property in user object", () => {
    aitana.lifeExpectancy(85);
    expect(aitana.lifeExpectancy).toEqual(85);
  })

})
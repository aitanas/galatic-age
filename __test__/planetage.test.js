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
  })
})
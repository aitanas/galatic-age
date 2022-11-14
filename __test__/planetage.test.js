import {User} from '../src/js/planetage.js'

describe('User', () => {
  let aitana;

  test("should create an object constructor with a user's name and age", () => {
  aitana = new User("Aitana", 25);
  expect(aitana).toEqual({name: "Aitana", age: 25});
  })
})
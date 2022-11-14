import {UserAge} from '../src/js/planetage.js'

describe('UserAge', () => {
  let aitana;

  test("should create an object constructor with a user's name and age", () => {
  aitana = new UserAge("Aitana", 25);
  expect(aitana).toEqual({name: "Aitana", age: 25});
  })
})
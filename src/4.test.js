import { createUser, createAdmin } from './4';

describe('homework-04', () => {
  describe('createUser', () => {
    const values = [
      [5, { name: 'John', age: 5 }],
      [-1, null],
      ['5', null],
    ];
    test.each(values)('user John with age %p is equal %p', (num, res) => {
      expect(createUser(num)).toEqual(res);
    });
  });

  describe('createAdmin', () => {
    const user = createUser(25);

    expect(createAdmin(user)).toStrictEqual({
      name: 'admin',
      age: user.age,
      role: 'admin',
    });
  });
});

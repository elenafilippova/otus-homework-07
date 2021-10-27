export function createUser(age) {
  if (typeof age !== 'number') {
    return null;
  }

  const ageNum = +age;

  if (ageNum < 0) {
    return null;
  }

  const user = {
    name: 'John',
    age: ageNum,
  };
  return user;
}

export function createAdmin(user) {
  const admin = { ...user };
  admin.name = 'admin';
  admin.role = 'admin';
  return admin;
}

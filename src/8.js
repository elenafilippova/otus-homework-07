export function logWeekDay() {
  const input = prompt('Введите дату в формате ДД.ММ.ГГГ');
  const [day, month, year] = input.split('.');
  const date = new Date(year, month - 1, day);
  const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  console.log(days[date.getDay()]);
}

export function getMinutesToday() {
  const today = new Date();
  const todayMinutes = today.getHours() * 60 + today.getMinutes();
  console.log(todayMinutes);
}

export function getYoungerPerson(birthDate1, birthDate2) {
  const [day1, month1, year1] = birthDate1.split('.');
  const date1 = new Date(year1, month1 - 1, day1);
  const [day2, month2, year2] = birthDate2.split('.');
  const date2 = new Date(year2, month2 - 1, day2);

  if (date1 < date2) {
    console.log('First user is yonger');
  } else {
    console.log('Second user is yonger');
  }
}

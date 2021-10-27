export default function isDateAddressEmail() {
  const data = prompt('Enter data', '');
  const date =
    // eslint-disable-next-line max-len
    /^(?:(?:31([.-])(?:0?[13578]|1[02]))\1|(?:(?:29|30)([.-])(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29([.-])0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\.|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.exec(
      data,
    );
  if (date) {
    console.log(`${data} is date`);
    return;
  }
  const email = /[a-zA-Z_.0-9]+@[a-z0-9]+\.[a-z]{2,5}/.exec(data);
  if (email) {
    console.log(`${data} is email`);
    return;
  }
  const tel = /^[+]\d[(]?[0-9]{1,4}[)]?[-0-9]*$/.exec(data);
  if (tel) {
    console.log(`${data} is telephone`);
    return;
  }
  console.log('Invalid data');
}

// const square = function(x) {
//   return x * x;
// };

const square = x => x * x;

console.log(square(3));
console.log(square(4));

const newEvent = {
  name: 'Birthday Party',
  guestList: ['me', 'test', 'lol'],
  printGuestList() {
    console.log('Guest list for ' + this.name);
    this.guestList.forEach(guest => {
      console.log(guest + ' is attending ' + this.name);
    });
  }
};

newEvent.printGuestList();

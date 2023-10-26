// function tambah(a,b){
//     return a+b
// }
// let hasil = tambah(5,2);
// console.log(hasil)
// function string (a,b){
//     return a + ' ' + b;
// }
// let jadi = string('halo', 'hai')
// console.log(jadi);
// function sapa(){
//     console.log('haiii')
// }
// sapa()
// let person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   let person1 = {
//     firstName: "Restuningrum Sekar",
//     lastName: "Melati"
//   }
//   let fullName = person.fullName.call(person1);
//   console.log(fullName);
// let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   let person1 = {
//     firstName: "Restuningrum Sekar",
//     lastName: "Melati"
//   }
  
//   let fullName = person.fullName.apply(person1, [" Semarang", "Jateng", " Indonesia"]);
//   console.log(fullName);
let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

let person = {
    name: 'Sekar ',
    city: 'Indonesia '
};

let greetingMessage = greet.bind(person);

console.log(greetingMessage());
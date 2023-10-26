//FUNCTION DEFINITION
function tambah (a, b) {
    return a + b
}
let hasil = tambah (4, 5);
console.log(hasil)

//FUNCTION PARAMETERS
function string(a, b) {
    return a + ' ' + b;
}
let jadi = string('Halo', 'via');
console.log(jadi);

// function sapa() {
//     console.log('Halo! Selamat datang.');
// }
// sapa();

// let person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   let person1 = {
//     firstName: "Via",
//     lastName: "Arum"
//   }
//   let fullName = person.fullName.call(person1);
//   console.log(fullName); 

// let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   let person1 = {
//     firstName: "Patricia",
//     lastName: "Ester"
//   }
  
//   let fullName = person.fullName.apply(person1, [" Bogor", " Indonesia"]);
//   console.log(fullName);

let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

let person = {
    name: 'Patricia ',
    city: 'Malaysia '
};

let greetingMessage = greet.bind(person);

console.log(greetingMessage());
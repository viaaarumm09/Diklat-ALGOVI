// function tambah(a,b) {
//     return a+b
// }
// let hasil=tambah(7,2);
//     console.log(hasil)

// function string(a,b) {
//     return a +' '+ b
// }
// let jadi=string('bwebwa','bwubwe')
// console.log(jadi)

// function sapa(){
//     console.log('hi')
// }
// sapa()

// let person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   let person1 = {
//     firstName: "Maureen",
//     lastName: "Natalie"
//   }
//   let fullName = person.fullName.call(person1);
//   console.log(fullName);

// let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   let person1 = {
//     firstName: "maurin",
//     lastName: "dul"
//   }
  
//   let fullName = person.fullName.apply(person1, [" jogja", " indOoOo"]);
//   console.log(fullName);

let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

let person = {
    name: 'moyen',
    city: 'Singapura'
};

let greetingMessage = greet.bind(person);

console.log(greetingMessage());
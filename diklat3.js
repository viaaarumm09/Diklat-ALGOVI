// function tambah(a,b){
//     return a+b
// }
// let hasil=tambah(8,9);
// console.log(hasil)

// function string(a,b){
//     return a+' '+b
// }
// let jadi=string('ketik','ulang');
// console.log(jadi)

// function sapa(){
//     console.log('chagiya')
// }
// sapa()

// let person={
//     fullName: function(){
//         return this.firstName+' '+this.lastName;
//     }
// }
// let person1 = {
//     firstName: 'Deri',
//     lastName: 'Sutiawan'
// }
// let fullName=
// person.fullName.call(person1);
// console.log(fullName);

// let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   let person1 = {
//     firstName: "Deri",
//     lastName: "Sutiawan"
//   }
  
//   let fullName = person.fullName.apply(person1, [" Jakarta", " Indonesia"]);
//   console.log(fullName);

let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

let person = {
    name: 'Baba Bily ',
    city: 'Turki '
};

let greetingMessage = greet.bind(person);

console.log(greetingMessage());
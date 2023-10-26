// function tambah (a,b){
//     return a+b
// }
// let hasil=tambah(1,23);
// //console.log(hasil)
// function string (a,b){
//     return a+' '+b
// }
// let jadi=string('come on','come on')
// //console.log(jadi)
// function sapa(){
//     console.log('lagi apa')
// }
// //sapa()
// let person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
//   let person1 = {
//     firstName: "Taylor",
//     lastName: "Swift"
//   }
//  // let fullName = person.fullName.call(person1);
//   //console.log(fullName);

//   let person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
  
//   let person1 = {
//     firstName: "Taylor",
//     lastName: "Swift"
//   }
  
//   let fullName = person.fullName.apply(person1, [" NewYork", " USA"]);
//   console.log(fullName);
  let greet = function() {
    return `Halo, ${this.name}! Selamat datang di ${this.city}.`;
};

let person = {
    name: 'Alu ',
    city: 'Indo '
};

let greetingMessage = greet.bind(person);

console.log(greetingMessage());
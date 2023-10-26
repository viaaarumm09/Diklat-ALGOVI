let firstName = "Aku"
let lastName = "Laper"
let fullName = firstName + " " +lastName;
//console.log(firstName);

let x = 356; // x adalah angka
let y = new Number (356); // y adalah objek
//console.log(typeof x);
//console.log(typeof y);

var a=56;
var b=9;
//console.log(a>b);

const negara = ["Australia", "Swiss", "Jepang", "Indonesia", "Singapur"];
//console.log(negara[2]);
//console.log(negara[4]);

const lagu = {
    penyanyi: "Taylor",
    judul: "TWILY",
    genre: "Happy",
}
//console.log(lagu);

/*
sebuah kendaraan melaju dengan kecepatan 60 km/jam, 
jika jarak antara kota A dengan B adalah 698 km, berapa lama kendaraan akan sampai ditempat tujuan?
selama perjalanan kendaraan tersebut melihat batas kecepatan bertuliskan 30 km/jam,
tentukan true or false kendaraan tersebut telah melampaui kecepatan
*/

var q = 60;
var p = 698;
var z = 30
console.log(p/q);
console.log(q>z);
if (q>z){
    console.log("melampaui batas kecepatan");
}
else {
    console.log("tidak melampaui batas kecepatan");
}
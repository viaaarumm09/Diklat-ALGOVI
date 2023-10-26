// Kecepatan kendaraan (dalam km/jam)
const kecepatankendaraan = 60;

// Jarak antara kota A dan B (dalam km)
const jarak = 698;

// Waktu yang diperlukan (dalam jam)
const waktu = jarak / kecepatankendaraan;

// Batas kecepatan (dalam km/jam)
const bataskecepatan = 30;

// Apakah kendaraan melampaui batas kecepatan?
const melampauibatas = kecepatankendaraan > bataskecepatan;

console.log(waktu);
console.log(kecepatankendaraan > bataskecepatan);

console.log(jarak / kecepatankendaraan);
console.log(melampauibatas);

console.log(waktu);
console.log(melampauibatas)

console.log("Waktu yang diperlukan untuk sampai ke tujuan: " + waktu + " jam");
console.log("Apakah kendaraan melampaui batas kecepatan?  " + melampauibatas);

console.log(`Waktu yang diperlukan untuk sampai ke tujuan: ${waktu} jam`);
console.log(`Apakah kendaraan melampaui batas kecepatan? ${melampauibatas}`);
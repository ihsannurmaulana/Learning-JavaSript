function biayaSewaRuangan(jamMasuk, jamKeluar) {
  // konversi jam masuk dan jam keluar menjadi menit
  var masuk = jamMasuk.split(":");
  var keluar = jamKeluar.split(":");
  var totalMenitMasuk = parseInt(masuk[0]) * 60 + parseInt(masuk[1]);
  var totalMenitKeluar = parseInt(keluar[0]) * 60 + parseInt(keluar[1]);

  // hitung lama sewa dalam menit
  var lamaSewa = totalMenitKeluar - totalMenitMasuk;

  // hitung biaya sewa
  var biaya = 0;
  if (lamaSewa <= 120) {
    biaya = 350000;
  } else if (lamaSewa <= 180) {
    biaya = 500000;
  } else {
    var tambahanMenit = lamaSewa - 180;
    var tambahanBiaya;
    if (totalMenitMasuk < 480) {
      // masuk sebelum jam 8
      tambahanBiaya = Math.ceil(tambahanMenit / 30) * 75000;
    } else {
      tambahanBiaya = Math.ceil(tambahanMenit / 30) * 100000;
    }
    biaya = 500000 + tambahanBiaya;
  }

  return biaya;
}

var jamMasuk = prompt("Masukkan jam masuk : ");
var jamKeluar = prompt("Masukkan jam keluar : ");

console.log("Biaya sewa ruangan: Rp " + biayaSewaRuangan(jamMasuk, jamKeluar));

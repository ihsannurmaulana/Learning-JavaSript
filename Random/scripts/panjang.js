function formatNilai(N, nilai) {
  var strNilai = nilai.toString();
  var jumlahNol = N - strNilai.length;
  var hasil = "";
  for (var i = 0; i < jumlahNol; i++) {
    hasil += "0";
  }
  hasil += strNilai;
  return hasil;
}

// Input Nilai
var N = 10;
var nilai = 350;
console.log(formatNilai(N, nilai));

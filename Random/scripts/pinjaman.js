function hitungPinjaman(pinjaman, tenor, bunga) {
  let nilaiBunga = (pinjaman / tenor) * bunga;
  let pinjamanPerbulan = pinjaman / tenor;
  let totalPinjaman = pinjamanPerbulan + nilaiBunga;
  return {
    pinjamanPerbulan: pinjamanPerbulan,
    bungaPerbulan: nilaiBunga,
    totalPinjaman: totalPinjaman,
  };
}

// Input jumlah
let pinjaman = 1200000;
let tenor = 12;
let bunga = 0.01;
let hasil = hitungPinjaman(pinjaman, tenor, bunga);
console.log(hasil);

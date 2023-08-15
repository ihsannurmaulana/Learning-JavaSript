function segitiga(panjang) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    for (let j = panjang; j > i; j--) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}
console.log(segitiga(5));

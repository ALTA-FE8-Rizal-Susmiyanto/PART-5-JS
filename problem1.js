function compare(a, b) {
  let hasil = " ";

  for (let i = 0; i < a.length; i++) {
    // jika hasil a sama dengan b, akan menghasilkan output di variable hasil
    if (a[i] == b[i]) {
      hasil += a[i];
    }
  }
  return hasil;
}

console.log(compare("AKA", "AKASHI")); //
console.log(compare("KANGAROO", "KANG")); //
console.log(compare("KI", "KIJANG")); //
console.log(compare("KUPU-KUPU", "KUPU")); //
console.log(compare("ILALANG", "ILA")); // ILA

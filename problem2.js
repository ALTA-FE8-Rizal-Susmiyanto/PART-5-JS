function caesar(str) {
  let solved = "";
  for (let i = 0; i < str.length; i++) {
    let asciNum = str[i].charCodeAt();
    if (asciNum >= 65 && asciNum <= 90) {
      solved += String.fromCharCode(asciNum + 13);
    }
  }
}

/*
 maish belum paham logicnya kak, tapi mengeerti 
cara kerjnya caesarChiper ini
*/

console.log(caesar(3, "abc")); // def
console.log(caesar(2, "alta")); // cnvc
console.log(caesar(10, "alterraacademy")); // kvdobbkkmknowi
console.log(caesar(1, "abcdefghijklmnopqrstuvwxyz"));
// bcdefghijklmnopqrstuvwxyza
console.log(caesar(1000, "abcdefghijklmnopqrstuvwxyz"));
// mnopqrstuvwxyzabcdefghijkl

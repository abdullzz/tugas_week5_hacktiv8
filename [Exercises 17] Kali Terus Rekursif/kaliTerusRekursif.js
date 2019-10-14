function kaliTerusRekursif(angka) {
    // you can only write your code here!
    angka = angka.toString()
    return (angka.length == 1) ? angka : kaliTerusRekursif(parseInt(angka.split('').reduce( (a,b) => a * b )))
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
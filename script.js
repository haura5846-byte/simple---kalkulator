function kalkulator(event) {
    event.preventDefault();
  let inputan1 = Number(document.getElementById("angka1").value);
  let inputan2 = Number(document.getElementById("angka2").value);
  let ambil_operator = document.getElementById("operator").value;
  let hasil = 0;
  // condition hitung operasi aritmatika
  if (ambil_operator === "+") {
    hasil = inputan1 + inputan2;
  } else if (ambil_operator === "*") {
    hasil = inputan1 * inputan2;
  } else if (ambil_operator === "-") {
    hasil = inputan1 - inputan2;
  } else if (ambil_operator === "/") {
    hasil = inputan1 / inputan2;
  }else if (ambil_operator ==="**"){
    hasil = inputan1 ** inputan2;
  }else if(ambil_operator ==="%"){
    hasil = inputan1 % inputan2;
  }else if(ambil_operator ==="Math.sqrt"){
    hasil = Math.sqrt(inputan1);
  }

  console.log("hasil perhitungan : " + hasil);
  document.getElementById("hasil").innerHTML = "hasil :" + hasil;
}
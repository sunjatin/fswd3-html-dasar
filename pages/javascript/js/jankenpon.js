var orang = prompt('pilih: batu, kertas, gunting');

var komputer = Math.random();
if (komputer < 0.34) {
  komputer = 'batu';
} else if (komputer >= 0.34 && komputer < 0.67) {
  komputer = 'kertas';
} else {
  komputer = 'gunting';
}

console.log(komputer);

//mapping data mahasiswa
// Create a Map
const nilai = new Map([
  ['Adnan', 50],
  ['Genta', 70],
  ['Lio', 85],
  ['Tio', 50],
  ['Tata', 70],
  ['Toto', 85],
]);

nilai.set('Genta', 70);

document.getElementById('demo').innerHTML = nilai.get('Genta');

// Buatlah program menggunakan method fetch untuk
// menampilkan semua name (hanya name nya saja) dari REST API
// dibawah ini

const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    json.forEach((element) => {
      const panggilNama = element.name;
      console.log(panggilNama);
    });
  })
  .catch((err) => {
    console.log('data tidak ditemukan');
  });

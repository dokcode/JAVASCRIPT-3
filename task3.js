//3.1
// const cekAbsen = (murid) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataMurid = ['brandon', 'iqbal', 'verdy', 'refa', 'ilham'];
//       let cek = dataMurid.find((item) => {
//         return item === murid;
//       });
//       if (cek) {
//         resolve('Ini talent mas zaki');
//       } else {
//         reject(new Error('Ini bukan talent mas zaki'));
//       }
//     }, 3000);
//   });
// };

// cekAbsen('wina')
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

// 3.2
const bilanganPrima = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let bagi = 0;
      for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
          bagi++;
        }
      }
      if (bagi == 2) {
        resolve(num + ' = bilangan prima');
      } else {
        reject(num + ' = bukan bilangan prima');
      }
    }, 2000);
  });
};

const cekBilanganPrima = async (num) => {
  try {
    const cek = await bilanganPrima(num);
    console.log(cek);
  } catch (err) {
    console.log(err);
  }
};
cekBilanganPrima(3);

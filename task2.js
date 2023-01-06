const getMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      const month = ['January', 'Febuary', 'Maret', 'April', 'Mei', 'Juni', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
      if (!error) {
        resolve(month);
      } else {
        reject(`Sorry Data Not Found`);
      }
    }, 1000);
  });
};

const tampil = async () => {
  try {
    const month = await getMonth();
    month.map((month) => console.log(month));
  } catch (err) {
    console.log(err);
  }
};
tampil();

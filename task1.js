const cekHariKerja = (day) => {
  try {
    if (Number(day)) throw 'Input harus berupa string';
  } catch (err) {
    console.log(err);
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject('Hari ini bukan hari kerja');
      }
    }, 1000);
  });
};

cekHariKerja('senin')
  .then((nilai) => {
    console.log(nilai);
  })
  .catch((err) => {
    console.log(err);
  });

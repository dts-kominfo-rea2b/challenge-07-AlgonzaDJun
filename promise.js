const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  const theaterIXX = await promiseTheaterIXX(emosi);
  const theaterVGC = await promiseTheaterVGC(emosi);
  
  if(emosi == 'marah') {
    return theaterIXX.filter(({hasil}) => hasil == 'marah').length + theaterVGC.filter(({hasil}) => hasil == 'marah').length
  } else {
    return theaterIXX.filter(({hasil}) => hasil == 'tidak marah').length + theaterVGC.filter(({hasil}) => hasil == 'tidak marah').length
  }
};

module.exports = {
  promiseOutput,
};
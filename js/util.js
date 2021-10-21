const getRandomNumber = function(min, max) {
  min = Math.ceil(Math.abs(min));
  max = Math.floor(Math.abs(max));
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

export {
  getRandomNumber
};

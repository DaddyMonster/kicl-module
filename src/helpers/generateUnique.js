const generateUnique = (digit, model, fieldName) => {
  return new Promise((res, rej) => {
    if (digit < 6) {
      rej("not-safe pow number");
    }
    const randomNumber = Math.floor(Math.random() * Math.pow(10, digit));
    model.findOne({ [fieldName]: randomNumber }).then((match) => {
      if (match) {
        generateUnique(digit, model, fieldName);
      } else {
        res(randomNumber);
      }
    });
  });
};

module.exports = generateUnique;

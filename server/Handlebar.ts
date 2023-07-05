const hb = require("handlebars");

// Register Handlebars helpers
hb.registerHelper("toUpperCase", function (str) {
  return str.toUpperCase();
});

hb.registerHelper("formatDate", function (today) {
  return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
});

hb.registerHelper('sum', function () {
    // Convert the arguments object to an array
    const numbers = Array.prototype.slice.call(arguments);
  
    // Perform the sum calculation
    const sum = numbers.reduce(function (accumulator, currentValue) {
        if (!isNaN(currentValue)) {
            return accumulator + currentValue;
          } else {
            return accumulator;
          }
    }, 0);

    console.log(sum);
  
    return sum;
  });

  hb.registerHelper('sumArray', function (numbers) {
  
    // Perform the sum calculation
    const sum = numbers.reduce(function (accumulator, currentValue) {
        if (!isNaN(currentValue)) {
            return parseInt(accumulator) +  parseInt(currentValue);
          } else {
            return accumulator;
          }
    }, 0);

    console.log(sum);
  
    return sum;
  });


  

module.exports = {hb};

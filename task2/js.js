/* input a value of questions in money converter */

var dollar = prompt ('Скільки долларів?', "Введіть суму");
var euro = prompt ('Скільки євро?', "Введіть суму");

/* Data of variables, which ready for counting*/

resultEuro = euro * 29.00;
resultdollar = dollar * 27.00;
resultadd = 1.074;

/* Then Alarm method Display results */

alert(euro+ ' євро вартує ' +resultEuro+ ' грн, ' +dollar+ ' $ вартує ' +resultdollar+ ', один євро вартує ' +resultadd+ ' долларів.')
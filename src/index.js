module.exports = function toReadable (number) {
  const Digits = {
    SINGLE_DIGITS: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], // 0 to 9
    DOUBLE_DIGITS: ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], //Exeption 10 to 13
    BIG_DOUBLE_DIGITS: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] // Exeption 20 or 30
  }

  const c_prefixTripleDigits = ' hundred';

  if (number < 0)
    number *= -1;

  let s_number = number.toString();

  switch (s_number.length) {
    case 1: return Digits.SINGLE_DIGITS[number];
    case 2:
      if (number < 20) 
        return Digits.DOUBLE_DIGITS[number - 10];
      else {
        let i = Math.floor(number / 10);
        let j = number % 10;
        return Digits.BIG_DOUBLE_DIGITS[i-2] + (j !== 0 ? ` ${toReadable(j)}`: '')
      }
    case 3: 
      let i = Math.floor(number / 100);
      let j = number % 100;
      return Digits.SINGLE_DIGITS[i] + c_prefixTripleDigits + ( j !== 0 ? ` ${toReadable(j)}` : '');
  }
}
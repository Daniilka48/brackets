module.exports = function check(str, bracketsConfig) {
  const Array = [];
  const Brackets = {};
  
  bracketsConfig.forEach(([open, close]) => {
    Brackets[open] = close;
  });

  function checkChar(char) {
    if (Brackets[char]) {
      if (char === Brackets[char] && Array[Array.length - 1] === char) {
        Array.pop();
      } else {
      Array.push(char);
      }
      } else {
      const last = Array.pop();
      if (Brackets[last] !== char) {
        Array.push(last);
      }
    }
  }
  str.split('').forEach(checkChar);
  return Array.length === 0;
}

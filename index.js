export default class StringCalculator {
    constructor() {
    }
  
    Add(numbers) {
      if (!numbers) return 0;
  
      const delimiterList = [',', '\n'];
      let delimiter = numbers.match(/^\/\/(\[.*\]|\D)\n/)

      if (delimiter) {
        const delimiterPart = delimiter[1]
        delimiterList.push(delimiterPart)
        numbers = numbers.slice(delimiter[0].length)
      }

      const regex = new RegExp(delimiterList.join('|'))
      const numArray = numbers.split(regex).map(Number)
  
      let negativeNums = numArray.filter(num => num < 0);
      if (negativeNums.length) {
        throw new Error(`negatives not allowed: ${negativeNums.join(', ')}`)
      }
  
      return numArray.filter(num => num <= 1000).reduce((sum, num) => sum + num, 0);
    }
  }
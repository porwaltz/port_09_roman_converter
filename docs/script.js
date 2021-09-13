function convertToRoman() {
    const numCont = document.getElementById("number-container").value
    let num = parseInt(numCont, 10)
    
    let roman = ""
    const rom = document.getElementById("roman-container")
    if(num > 3999){
        rom.value = "max value: 3999"
        return
    }
    const romanNum = ["M","CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    for(let i = 0; i < numbers.length; i++){
      while(num >= numbers[i]){
        roman += romanNum[i]
        num -= numbers[i]
      }
    }
    rom.value = roman
  }
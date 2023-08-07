const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let phrase = [];
    expr = expr.split("");
    while (expr.length > 0) {
        if (expr[0] !== "*") {
          let index = expr.indexOf("*") 
          if (index !== (-1)) {
           let word = expr.splice(0, index).join("")
           phrase.push(word) 
          } else {
            word = expr.join("")
            phrase.push(word)
            expr = []
          }
        } else {
            expr.shift()
        }
        
    }
    let cutZero = phrase.map (function (item) {
        let draft = [];
        item = item.split("")
        while (item.length > 0) {

            draft.push(item.splice(0, 10).join("").replace(/^0+/, ''));
        }
        return draft;
    })

    let morseValue = cutZero.map(function(array) {
        let arr = []
        for (let i = 0; i < array.length; i++) {
            let morseDraft = [];
            let morseString = array[i].split("")
            while (morseString.length >0) {
                let current = morseString.splice(0,2).join("")
            if (current === "10") {
                morseDraft.push(".") 
            } else {
                morseDraft.push("-")
            }   
            
            }
            arr.push(morseDraft.join(""))
            
        }
        return arr
    })
    let result  = morseValue.map(function(array) {
        let decodedValue = [];
        for (let a = 0; a < array.length; a++) {
            decodedValue.push(MORSE_TABLE[array[a]])
        }
        return decodedValue.join("")
    })
   return result.join(" ")


    
}

module.exports = {
    decode
}
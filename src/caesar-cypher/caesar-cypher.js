export default function encode(string, amount){
    
    const letters = string.split("");
    console.log(letters);

    return letters.map(letter =>{
        let letterValue = letter.charCodeAt(0) + amount;
        console.log(letterValue)
        if(letterValue > 90 && letterValue < 97 || letterValue > 122){
            letterValue = letterValue - 26
        }
        const encodedLetter = String.fromCharCode(letterValue);
        return encodedLetter;
    }).join("");
}
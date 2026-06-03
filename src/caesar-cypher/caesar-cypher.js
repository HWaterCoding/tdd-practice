export default function encode(string, amount){
    
    const convertedAmount = ((amount % 26) + 26) % 26;

    const letters = string.split("");
    console.log(letters);

    return letters.map(letter =>{
        let letterValue = letter.charCodeAt(0) + convertedAmount;
        console.log(letterValue)
        if(letterValue > 90 && letterValue < 97 || letterValue > 122){
            letterValue = letterValue - 26
        }
        const encodedLetter = String.fromCharCode(letterValue);
        return encodedLetter;
    }).join("");
}
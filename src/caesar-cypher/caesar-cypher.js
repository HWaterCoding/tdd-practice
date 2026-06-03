export default function encode(string, amount){

    if(typeof string !== "string" || string === ""){
        throw new Error("Please enter a string")
    }
    
    const convertedAmount = ((amount % 26) + 26) % 26;

    const letters = string.split("");
    console.log(letters);

    return letters.map(letter =>{
        const code = letter.charCodeAt(0);
        if(code < 65 || code > 90 && code < 96 || code > 122) {
            return letter;  
        };

        let letterValue = letter.charCodeAt(0) + convertedAmount;
        console.log(letterValue)
        if(letterValue > 90 && letterValue < 97 || letterValue > 122){
            letterValue = letterValue - 26
        }
        const encodedLetter = String.fromCharCode(letterValue);
        return encodedLetter;
    }).join("");
}
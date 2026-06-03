export default function analyzeArray(array){
    if(array.length === 0) throw new Error("Please enter at least one number");
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return {
        average: sum / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    };
}
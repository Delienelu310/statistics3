
export default function generateRandomPermutation(n){
    
    let result = [];
    let numbers = []
    for(let i = 1; i <= n; i++){
        numbers.push(i);
    }
    for(let i = 0; i < n; i++){

        let randomIndex = Math.floor(Math.random() * numbers.length);
        result.push(numbers[randomIndex]);
        numbers.splice(randomIndex, 1);
    }


    return result; 
}
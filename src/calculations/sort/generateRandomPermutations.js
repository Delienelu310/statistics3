
export default function generateRandomPermutation(n){
    
    let result = [];
    let used = [];
    for(let i = 0; i < n; i++){

        let randomIndex = Math.round(Math.random() * (n - 1) + 1);

        let j;
        for(j = 0; j < n && randomIndex > 0; j++){
            if(! used[j]) randomIndex--;
        }
        
        used[j] = true;
        result.push(j);
    }

    return result; 
}
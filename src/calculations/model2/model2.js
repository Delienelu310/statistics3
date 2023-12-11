
export default function runTheModel2(n, d){
    let spots = [];
    for(let i = 0; i < n; i++){
        spots.push(0);
    }

    let max = 0;
    for(let i = 0; i < n; i++){
        let indexMin = -1;
        for(let j = 0; j < d; j++){
            let randomIndex = Math.floor(Math.random() * n);
            if(indexMin == -1) indexMin = randomIndex;
            else if(spots[indexMin] > spots[randomIndex]) indexMin = randomIndex;
        }
        spots[indexMin]++;
        if(spots[indexMin] > max) max = spots[indexMin]
    }

    return max;
}
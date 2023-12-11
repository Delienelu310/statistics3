import generateRandomPermutation from "./generateRandomPermutations";
import insertSort from "./insertSort";

export default function prepareSortData(){

    let all_data = [];
    let key_data = [];
    let all_avg = [];
    let key_avg = [];

    let k = 20;
    for(let n = 100; n <= 10000; n+= 100 ){
        console.log(n);
        let s_keys = 0;
        let s_all = 0;
        for(let i = 0; i < k; i++){
            let arr = generateRandomPermutation(n);
            let stats = insertSort(arr);
            all_data.push({
                x: n,
                y: stats.stat_all
            });
            key_data.push({
                x: n,
                y: stats.stat_keys
            });
            s_keys += stats.stat_keys;
            s_all += stats.stat_all;
        }
        all_avg.push({
            x: n,
            y: s_all / k
        });
        key_avg.push({
            x: n,
            y: s_keys / k
        });
    }

    return {
        all: [all_data, all_avg],
        keys: [key_data, key_avg]
    }
}
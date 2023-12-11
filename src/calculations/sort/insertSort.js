export default function insertSort(arr){

    let stat_all = 0;
    let stat_keys = 1;

    for(let i = 1; i < arr.length; i++){
        let currentValue = arr[i];
        for(let j = i - 1; j >= 0; j--){
            stat_all++;
            if(arr[j] > currentValue){
                arr[j + 1] = arr[j];
            }else{
                arr[j + 1] = currentValue;
                stat_keys++;
                break;
            }
        }
    }

    return {
        n: arr.length,
        stat_all: stat_all,
        stat_keys: stat_keys
    };
}
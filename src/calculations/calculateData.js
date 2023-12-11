import calculatektimes from "./calculatektimes";
import { runTheModel2 } from "./model";

export default function calculateData(){

    let data = {
        b: [],
        u: [],
        c: [],
        d: [],
        cmd: []
    };

    let average = {
        b: [],
        u: [],
        c: [],
        d: [],
        cmd: []
    }

    let k = 50;
    for(let n = 1000; n <= 100000; n += 1000){
        let results = calculatektimes(k, n);
        let 
            bsum = 0,
            csum = 0,
            usum = 0,
            dsum = 0,
            cmdsum = 0;        

        for(let i = 0; i < k; i++){

            bsum += results[i].b;
            usum += results[i].u;
            csum += results[i].c;
            dsum += results[i].d;
            cmdsum += results[i].cmd;


            data.b.push({"x": n, "y": results[i].b}); 
            data.u.push({"x": n, "y": results[i].u}); 
            data.c.push({"x": n, "y": results[i].c}); 
            data.d.push({"x": n, "y": results[i].d}); 
            data.cmd.push({"x": n, "y": results[i].cmd}); 
        }
        let precision = 1000;
        average.b.push({"x": n, "y": Math.round(precision * bsum / k) / precision});
        average.u.push({"x": n, "y": Math.round(precision * usum / k) / precision});
        average.c.push({"x": n, "y": Math.round(precision * csum / k) / precision});
        average.d.push({"x": n, "y":  Math.round(precision * dsum / k) / precision});
        average.cmd.push({"x": n, "y":  Math.round(precision * cmdsum / k) / precision});
        console.log(n);
    }

    console.log([data, average]);
    return [data, average];
}

export function calculateData2(){


    let 
        data1 = [], 
        data2 = [],
        avg1 = [],
        avg2 = [];

    for(let n = 10000; n < 1000000; n += 10000){
        console.log(n);
        let s1 = 0;
        let s2 = 0;

        let k;
        for(k = 0; k < 50; k++){
            let 
                l1 = runTheModel2(n, 1),
                l2 = runTheModel2(n, 2);
            data1.push({
                'x': n,
                'y': l1
            });
            data2.push({
                'x': n,
                'y': l2
            });
            s1 += l1;
            s2 += l2;
        }
        avg1.push({
            'x': n,
            'y': s1 / k
        });
        avg2.push({
            'x': n,
            'y': s2 / k
        });
    }

    return {
        l1: [data1, avg1],
        l2: [data2, avg2]
    };
}
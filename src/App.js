import { useEffect, useState } from "react";
import Graph from "./components/Graph";
import {calculateData2} from "./calculations/calculateData";
import generateAvgFuncData from "./calculations/averageFunctions";
import prepareSortData from "./calculations/sort/prepareSortData";
function App() {

  const [calculatedData, setCalculatedData] = useState();
  const [calculatedData2, setCalculatedData2] = useState();
  const [calculatedSortData, setCalculatedSortData] = useState();

  useEffect(() => {

    console.log("Data calculation process started...");
    // setCalculatedData2(calculateData2());
    // console.log(calculatedData2);

    setCalculatedSortData(prepareSortData);
    console.log(calculatedSortData);

  }, []);

  return (
    <div className="App">
      
      {
        calculatedData && <Graph options={[
          {label: "b", data: [calculatedData[0].b, calculatedData[1].b]},
          {label: "u", data: [calculatedData[0].u, calculatedData[1].u]},
          {label: "c", data: [calculatedData[0].c, calculatedData[1].c]},
          {label: "d", data: [calculatedData[0].d, calculatedData[1].d]},
          {label: "d - c", data: [calculatedData[0].cmd, calculatedData[1].cmd]},

          //A
          {label: "Bn / n", data: [[], generateAvgFuncData((avg, n) => avg / n, calculatedData[1].b)]},
          {label: "Bn / n**0.5", data: [[], generateAvgFuncData((avg, n) => avg / n**0.5, calculatedData[1].b)]},
          //B
          {label: "Un / n", data: [[], generateAvgFuncData((avg, n) => avg / n, calculatedData[1].u)]},
          //C
          {label: "Cn / n", data: [[], generateAvgFuncData((avg, n) => avg / n, calculatedData[1].c)]},
          {label: "Cn / n**2", data: [[], generateAvgFuncData((avg, n) => avg / n**2, calculatedData[1].c)]},
          {label: "Cn / nln(n)", data: [[], generateAvgFuncData((avg, n) => avg / n / Math.log(n), calculatedData[1].c)]},

          //D
          {label: "Dn / n", data: [[], generateAvgFuncData((avg, n) => avg / n, calculatedData[1].d)]},
          {label: "Dn / n**2", data: [[], generateAvgFuncData((avg, n) => avg / n**2, calculatedData[1].d)]},
          {label: "Dn / nln(n)", data: [[], generateAvgFuncData((avg, n) => avg / n / Math.log(n), calculatedData[1].d)]},

          //E
          {label: "(Dn - Cn) / n", data: [[], generateAvgFuncData((avg, n) => avg / n, calculatedData[1].cmd)]},
          {label: "(Dn - Cn) / nln(n)", data: [[], generateAvgFuncData((avg, n) => avg / n / Math.log(n), calculatedData[1].cmd)]},
          {label: "(Dn - Cn) / nln(ln(n))", data: [[], generateAvgFuncData((avg, n) => avg / n / Math.log(Math.log(n)), calculatedData[1].cmd)]},
        ]}></Graph> 
      }

      {
        calculatedData2 && <Graph options={[
          {label: "l1", data: [calculatedData2.l1[0], calculatedData2.l1[1]]},
          {label: "l2", data: [calculatedData2.l2[0], calculatedData2.l2[1]]},

          {label: "l1 / f1", data: [[], generateAvgFuncData((avg, n) => avg * Math.log(Math.log(n)) / Math.log(n) , calculatedData2.l1[1])]},
          {label: "l2 / f2", data: [[], generateAvgFuncData((avg, n) => avg * Math.log(2) / Math.log(Math.log(n)), calculatedData2.l2[1])]},
          
        ]}></Graph> 
      }

      {
        calculatedSortData && <Graph options={[
          //a
          {label: "cmp(n)", data: [calculatedSortData.all[0], calculatedSortData.all[1]]},
          //b
          {label: "s(n)", data:  [calculatedSortData.keys[0], calculatedSortData.keys[1]]},
          //c
          {label: "cmp(n)/n", data: [[], generateAvgFuncData((avg, n) => avg / n , calculatedSortData.all[1])]},
          {label: "cmp(n)/n^2", data: [[], generateAvgFuncData((avg, n) => avg / n / n , calculatedSortData.all[1])]},
          //d
          {label: "s(n)/n", data: [[], generateAvgFuncData((avg, n) => avg / n , calculatedSortData.keys[1])]},
          {label: "s(n)/n^2", data: [[], generateAvgFuncData((avg, n) => avg / n / n , calculatedSortData.keys[1])]},
          
        ]}></Graph> 
      }
      
    </div>
  );
}

export default App;

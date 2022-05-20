import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) =>{

    return(
    <div className="chart">
        {props.dataPoints.map(
            dataPoint=> 
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value}  
                    maxValue={null}/>
            )
        }
    </div>
    );

};

export default Chart;
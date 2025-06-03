import { React, useState } from 'react';
import "../../assets/scss/custom.scss";
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
//import { data } from 'react-router-dom';

const Home = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);     

    const getVirtualData = (year, month) => {
        const startDate = +echarts.time.parse(`${year}-${month}-01`);
        const endDate = +echarts.time.parse(
            `${year}-${(parseInt(month) + 1).toString().padStart(2,'0')}-01`
        );
        const dayTime = 3600 * 24 * 1000;
        const data = [];
        for (let time = startDate; time < endDate; time += dayTime) {
            data.push([
                echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
                Math.floor(Math.random() * 1000)
            ]);
        }
        return data;
    }

    const links = graphData.map((item, idx) => ({
        source: idx,
        target: idx + 1
    }));
    links.pop();

    const optionC = {
        tooltip: {
            position: 'top'
        },
        visualMap: {
            min: 0,
            max: 1000,
            calculable: true,
            orient: 'horizontal',      
            left: 100,
            bottom: 10     
        },
        calendar: {
            range: '2025-06',
            orient: 'vertical',
            cellSize: [50, 50],         
            yearLabel: { show: false },
            monthLabel: {
                nameMap: 'cn'
            },
            dayLabel: {
                firstDay: 1,
                nameMap: 'cn'
            },
            left: 100,
            width: 450
        },
        series: [
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: getVirtualData('2025', '06'), 
            },
            {
                type: 'graph',
                coordinateSystem: 'calendar',
                links: links,
                symbolSize: 10,
                data: graphData
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                symbolSize: val => val[1] / 60,
                data: getVirtualData('2025', '06')
            },
            {
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: val => val[1] / 60,
                data: getVirtualData('2025', '06')
            }
        ]
    };

    const optionCM = {
        tooltip: {
            position: 'top'
        },
        visualMap: {
            min: 0,
            max: 1000,
            calculable: true,
            orient: 'horizontal',      
            left: 100,
            bottom: 10     
        },
        calendar: {
            range: '2025-06',
            orient: 'vertical',
            cellSize: [50, 50],         
            yearLabel: { show: false },
            monthLabel: {
                nameMap: 'cn'
            },
            dayLabel: {
                firstDay: 1,
                nameMap: 'cn'
            },
            left: 25,
            width: 270
        },
        series: [
            {
                type: 'heatmap',
                coordinateSystem: 'calendar',
                data: getVirtualData('2025', '06'), 
            },
            {
                type: 'graph',
                coordinateSystem: 'calendar',
                links: links,
                symbolSize: 10,
                data: graphData
            },
            {
                type: 'effectScatter',
                coordinateSystem: 'calendar',
                symbolSize: val => val[1] / 60,
                data: getVirtualData('2025', '06')
            },
            {
                type: 'scatter',
                coordinateSystem: 'calendar',
                symbolSize: val => val[1] / 60,
                data: getVirtualData('2025', '06')
            }
        ]
    };

    const optionT = {
        series: [
            {
            type: 'treemap',
            data: [
                {
                name: 'nodeA',
                value: 10,
                children: [
                    {
                    name: 'nodeAa',
                    value: 4
                    },
                    {
                    name: 'nodeAb',
                    value: 6
                    }
                ]
                },
                {
                name: 'nodeB',
                value: 20,
                children: [
                    {
                    name: 'nodeBa',
                    value: 20,
                    children: [
                        {
                        name: 'nodeBa1',
                        value: 20
                        }
                    ]
                    }
                ]
                }
            ]
            }
        ]
    };

    return (        
        <div className="wrapper">     
           <div class="container text-center"  style={{maxHeight: '90vh', overflowY: 'auto', padding: '12px' }}>
                <div className="row">
                     <div className="col-12 col-md-12 mb-3"><h2>Welcome</h2></div>                    
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        {!isMobile ? 
                        <ReactECharts
                            option={optionC}
                            style={{height: '450px', width: '100%'}}
                        />
                        :
                         <ReactECharts
                            option={optionCM}
                            style={{height: '450px', width: '100%'}}
                        />
                        }
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                       <ReactECharts
                            option={optionT}
                            style={{height: '450px', width: '100%'}}
                        />
                    </div>
                </div>                
            </div>
            </div>
       
    )
}


const graphData = [
['2025-06-01', 260],
['2025-06-04', 200],
['2025-06-09', 279],
['2025-06-13', 847],
['2025-06-18', 241],
['2025-06-23', 411],
['2025-06-27', 985]
];

export default Home;

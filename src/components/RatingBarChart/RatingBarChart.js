import React from 'react';
import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import './RatingBarChart.css';

const RatingBarChart = ({data, ...other}) => {
    return (
        <div {...other}>
            <BarChart width={450} height={350} data={data}>
                <XAxis dataKey='name'/>
                <YAxis allowDecimals={false}/>
                <Tooltip/>
                <Bar dataKey='people' fill='#ffd700'/>
            </BarChart>
        </div>
    );
};

export default RatingBarChart;
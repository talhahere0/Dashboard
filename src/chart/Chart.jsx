import React from 'react'
import { LineChart,  XAxis, Line, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Chart.css'

const Chart = () => {

    const data = [
        {
          name: 'Jan',
          uv: 4000,
        },
        {
            name: 'Feb',
            uv: 3000,
          },
          {
            name: 'Mar',
            uv: 2500,
          },
          {
            name: 'Apr',
            uv: 1900,
          },
          {
            name: 'May',
            uv: 1200,
          },
          {
            name: 'Jun',
            uv: 1800,
          },
          {
            name: 'Jul',
            uv: 8000,
          },
          {
            name: 'Aug',
            uv: 1000,
          },
          {
            name: 'Sep',
            uv: 3200,
          },
          {
            name: 'Oct',
            uv: 9000,
          },
          {
            name: 'Nov',
            uv: 5000,
          },
          {
            name: 'Dec',
            uv: 6000,
          },
        
        
      ];


    return (
        <>
          <div className="chart">
              <h3 className="charTitle">Sales Analytics</h3>
              <ResponsiveContainer width='100%' aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd' />
          <Line dataKey="uv" stroke='#5550bd'  /> 
          <Tooltip/>
          <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5'/>
          
        </LineChart>
      </ResponsiveContainer>
              </div>  
        </>
    )
}

export default Chart

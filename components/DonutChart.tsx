"use client"
import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ accounts}: DoughnutChartProps) => {
    const accountNames = accounts.map((a) => a.name)
    const accountBalances = accounts.map((a) => a.currentBalance)

    const data = {
        datasets: [
            {
                label: "Banks",
                data: accountBalances,
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            },
        ],        
        labels: accountNames
    }
  return <Doughnut 
            options={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }} 
            data={data} />
}

export default DonutChart
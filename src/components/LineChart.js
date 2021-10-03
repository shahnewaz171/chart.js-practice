import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const options = {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
        <div>
            <Line
                data={{
                    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DIC'],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [205, 190, 270, 305, 270, 180, 270, 340, 396, 260, 310, 310],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: 'rgb(75, 192, 192)',
                            borderWidth: 1,
                            pointBorderWidth: 4,
                            pointBorderColor: ["red", "blue", "yellow", "green", "purple", "orange"],
                        }
                    ]
                }}
                height={400}
                width={600}
                options={options}
            />
        </div>
    );
};

export default LineChart;
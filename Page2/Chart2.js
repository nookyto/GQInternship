

const votesGraphData = {
    labels:[
        new Date('2021-12-01T00:00:00'),
        new Date('2021-12-01T01:00:00'),
        new Date('2021-12-01T02:00:00'),
        new Date('2021-12-01T03:00:00'),
        new Date('2021-12-01T04:00:00'),
        new Date('2021-12-01T05:00:00'),
        new Date('2021-12-01T06:00:00'),
        new Date('2021-12-01T07:00:00'),
        new Date('2021-12-01T08:00:00'),
        new Date('2021-12-01T09:00:00'),
        new Date('2021-12-01T10:00:00'),
        new Date('2021-12-01T11:00:00'),
        new Date('2021-12-01T12:00:00'),
        new Date('2021-12-01T13:00:00'),
        new Date('2021-12-01T14:00:00'),
        new Date('2021-12-01T15:00:00'),
        new Date('2021-12-01T16:00:00'),
        new Date('2021-12-01T17:00:00'),
        new Date('2021-12-01T18:00:00'),
        new Date('2021-12-01T19:00:00'),
        new Date('2021-12-01T20:00:00'),
        new Date('2021-12-01T21:00:00'),
        new Date('2021-12-01T22:00:00'),
        new Date('2021-12-01T23:00:00'),
        new Date('2021-12-01T24:00:00'),
    ],
    datasets: [{
        data: VoteTimeData[0],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[1],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[2],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[3],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[4],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[5],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[6],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[7],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[8],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[9],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    {
        data: VoteTimeData[10],
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        tension: tension
    },
    
]
};

const config1 = 
{
    type: 'line',
    data: votesGraphData , 
    options: 
    {
        plugins:
        {
            legend:
            {
                display: false
            },
        },
        scales: 
        {
            x:
            {
                type: 'time',
                ticks: {
                    major: {
                        enabled: true
                    }
                }
            },
            y:
            {
                beginAtZero: true
            }
        },
        maintainAspectRatio: false
    }

};


const chart1 = new Chart(
    document.getElementById('votesGraph'),
    config1
);
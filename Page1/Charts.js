const tension = 0.1;

const DailyVoteData = {
    datasets: [{
        data: DailyVote,
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        fill: true,
        backgroundColor: 'rgba('+red+', '+green+', '+blue+', 0.3)',
        tension: tension
    }]
};

const DailyUserData = {
    datasets: [{
        data: DailyUser,
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        fill: true,
        backgroundColor: 'rgba('+red+', '+green+', '+blue+', 0.3)',
        tension: tension
    }]
};

const DailySharesData = {
    datasets: [{
        data: DailyShares,
        borderColor:'rgba('+red+', '+green+', '+blue+', 1)',
        fill: true,
        backgroundColor: 'rgba('+red+', '+green+', '+blue+', 0.3)',
        tension: tension
    }]
};

const config = 
{
    type: 'line',
    data: DailyVoteData , 
    borderColor:  'rgb(205, 242, 56)',
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
                time:{
                    unit: 'day'
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
    document.getElementById('DailyVoteChart'),
    config
);

const chart2 = new Chart(
    document.getElementById('DailyUserChart'),
    config
);

const chart3 = new Chart(
    document.getElementById('DailySharesChart'),
    config
);
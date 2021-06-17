export const CHART_BACKGROUND_COLOR = [
    'rgba(255, 99, 132)',
    'rgba(54, 162, 235)',
    'rgba(255, 206, 86)',
    'rgba(75, 192, 192)',
    'rgba(153, 102, 255)',
    'rgba(255, 159, 64)',
];

export const CHART_OPTION = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }],
        xAxes: [{
            barPercentage: 0.4
        }]
    }
};

export const CONSTRUCTION_MATERIAL_TITLE = '# of Ramps per construction material';

export const CATEGORY_TITLE = '# of Ramps per size category';
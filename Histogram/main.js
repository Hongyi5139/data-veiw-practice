d3.csv('train_data_titanic.csv').then(
    res => {
        console.log('Local CSV:', res);
        drawBarChart(res);
    }
);
function drawBarChart(res) {
    let myGraph = document.getElementById('myGraph');

    let trace1 = {};
    trace1.type = "histogram";
    let ageArray = [];

    for (let i = 0; i < res.length; i++) {
        ageArray.push(res[i].Age);
    }
    trace1.x = ageArray;
    trace1.xbins = {
        size: 10,
        start: 0,
    };
    trace1.opacity = 0.5;
    trace1.marker = {
        color: 'green'
    };

    let data = [];
    data.push(trace1);

    let layout = {
        margin: {
            t: 100
        },
        title: 'Titanic 年齡分布'
    };

    Plotly.newPlot(myGraph, data, layout);
};
let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "markers+text+lines";
trace1.type = "scatter";
trace1.name = "Team A";
trace1.x = [];
trace1.y = [];
trace1.text = [];
trace1.textposition = "bottom center";
trace1.textfont = {
    family: "Raleway, sans-serif",
    size: 10
};
trace1.visible = true;

for (let i = 0; i < set106.length; i++) {
    trace1.x[i] = set106[i][0];
    trace1.y[i] = set106[i][1];
    trace1.text[i] = set106[i][2];
}

let trace2 = {};
trace2.mode = "lines+text";
trace2.type = "scatter";
trace2.name = "Team B";
trace2.x = [];
trace2.y = [];
trace2.text = [];
trace2.visible = false;
trace2.line = {
    color: 'red'
};
trace2.textfont = {
    family: "Raleway, sans-serif",
    size: 10
};

for (let i = 0; i < set107.length; i++) {
    trace2.x[i] = set107[i][0];
    trace2.y[i] = set107[i][1];
    trace2.text[i] = set107[i][2];
}

let trace3 = {};
trace3.mode = "lines+markers+text";
trace3.type = "scatter";
trace3.name = "Team C";
trace3.marker = {
    size: 5
};
trace3.x = [];
trace3.y = [];
trace3.text = [];
trace3.visible = false;
trace3.line = {
    color: 'green'
};
trace3.textfont = {
    family: "Raleway, sans-serif",
    size: 10
};

for (let i = 0; i < set108.length; i++) {
    trace3.x[i] = set108[i][0];
    trace3.y[i] = set108[i][1];
    trace3.text[i] = set108[i][2];
}


let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin: {
        t: 50
    },
    xaxis: {
        range: [0, 5]
    },
    yaxis: {
        range: [8000, 13000]
    },
    title: '106-108年新竹市觀光旅館住宿量',
    updatemenus: [
        {
            y: 1.2,
            x: 0.1,
            yanchor: 'top',
            buttons: [
                {
                    method: 'restyle',
                    args: ['visible', [true, false, false]],
                    label: "106年"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, true, false]],
                    label: "107年"
                },
                {
                    method: 'restyle',
                    args: ['visible', [false, false, true]],
                    label: "108年"
                },
                {
                    method: 'restyle',
                    args: ['visible', [true, true, true]],
                    label: "三年"
                }
            ]
        }
    ]
};

Plotly.newPlot(myGraph, data, layout);
let myGraph = document.getElementById('myGraph');
let trace1 = {};
trace1.type = "bar";
trace1.name = "Taipei";
trace1.x = [];
trace1.y = [];
trace1.x[0] = "公立";
trace1.y[0] = public[0]['count'];
trace1.x[1] = "私立";
trace1.y[1] = private[0]['count'];
trace1.text = trace1.y;
trace1.textfont = {
    color: 'yellow',
    size: 20
};
trace1.marker = {
    color: 'blue'
};

let trace2 = {};
trace2.type = "bar";
trace2.name = "Xinbei";
trace2.x = [];
trace2.y = [];
trace2.x[0] = "公立";
trace2.y[0] = public[1]['count'];
trace2.x[1] = "私立";
trace2.y[1] = private[1]['count'];
trace2.text = trace2.y;
trace2.textfont = {
    color: 'yellow',
    size: 20
};
trace2.marker = {
    color: 'purple'
};

let trace3 = {};
trace3.type = "bar";
trace3.name = "Taichung";
trace3.x = [];
trace3.y = [];
trace3.x[0] = "公立";
trace3.y[0] = public[2]['count'];
trace3.x[1] = "私立";
trace3.y[1] = private[2]['count'];
trace3.text = trace3.y;
trace3.textfont = {
    color: 'yellow',
    size: 20
};
trace3.marker = {
    color: 'green'
};

let trace4 = {};
trace4.type = "bar";
trace4.name = "Kaohsiung";
trace4.x = [];
trace4.y = [];
trace4.x[0] = "公立";
trace4.y[0] = public[3]['count'];
trace4.x[1] = "私立";
trace4.y[1] = private[3]['count'];
trace4.text = trace4.y;
trace4.textfont = {
    color: 'yellow',
    size: 20
};
trace3.marker = {
    color: 'red'
};


let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);
let layout = {
    title: '111高級中等學校概況—按學校所在縣市別分',
    margin: {
        t: 50
    },
    barmode: 'stack'

};

Plotly.newPlot(myGraph, data, layout);
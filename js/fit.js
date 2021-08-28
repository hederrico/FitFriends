const labels = [
  '16/Mai',
  '17/Mai',
  '18/Mai',
  '19/Mai',
  '20/Mai',
  '21/Mai',
  '22/Mai',
  '23/Mai',
  '24/Mai',
  '25/Mai',
  '26/Mai',
  '27/Mai',
  '28/Mai',
  '29/Mai',
  '30/Mai',
  '31/Mai',

  '01/Jun',
  '02/Jun',
  '03/Jun',
  '04/Jun',
  '05/Jun',
  '06/Jun',
  '07/Jun',
  '08/Jun',
  '09/Jun',
  '10/Jun',
  '11/Jun',
  '12/Jun',
  '13/Jun',
  '14/Jun',
  '15/Jun',
  '16/Jun',
  '17/Jun',
  '18/Jun',
  '19/Jun',
  '20/Jun',
  '21/Jun',
  '22/Jun',
  '23/Jun',
  '24/Jun',
  '25/Jun',
  '26/Jun',
  '27/Jun',
  '28/Jun',
  '29/Jun',
  '30/Jun',

  '01/Jul',
  '02/Jul',
  '03/Jul',
  '04/Jul',
  '05/Jul',
  '06/Jul',
  '07/Jul',
  '08/Jul',
  '09/Jul',
  '10/Jul',
  '11/Jul',
  '12/Jul',
  '13/Jul',
  '14/Jul',
  '15/Jul',
  '16/Jul',
  '17/Jul',
  '18/Jul',
  '19/Jul',
  '20/Jul',
  '21/Jul',
  '22/Jul',
  '23/Jul',
  '24/Jul',
  '25/Jul',
  '26/Jul',
  '27/Jul',
  '28/Jul',
  '29/Jul',
  '30/Jul',
  '31/Jul',

  '01/Ago',
  '02/Ago',
  '03/Ago',
  '04/Ago',
  '05/Ago',
  '06/Ago',
  '07/Ago',
  '08/Ago',
  '09/Ago',
  '10/Ago',
  '11/Ago',
  '12/Ago',
  '13/Ago',
  '14/Ago',
  '15/Ago',
  '16/Ago',
  '17/Ago',
  '18/Ago',
  '19/Ago',
  '20/Ago',
  '21/Ago',
  '22/Ago',
  '23/Ago',
  '24/Ago',
  '25/Ago',
  '26/Ago',
  '27/Ago',
  '28/Ago',
];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Boy',
      backgroundColor: 'rgb(0, 159, 0)',
      borderColor: 'rgb(0, 159, 0)',
      data: [
        80.45, 80.45, 78.60, 78.85, 78.70, 78.35, 78.80,
        79.25, 79.25, 78.90, 78.70, 78.60, 78.20, 78.20,
        78.70, 78.45, 78.00, 77.65, 77.65, 77.90, 77.55,
        77.65, 78.05, 77.85, 78.00, 77.30, 76.75, 76.75,
        76.75, 77.30, 76.70, 76.10, 76.60, 77.40, 76.65,
        76.70, 76.40, 76.05, 75.90, 75.80, 75.65, 74.95,
        76.00, 76.10, 76.20, 75.35, 75.55, 75.20, 74.55,
        75.20, 75.15, 74.75, 74.75, 74.45, 74.70, 74.70,
        74.80, 74.60, 74.85, 74.30, 74.20, 74.60, 74.15,
        74.15, 74.95, 74.15, 74.30, 74.45, 74.10, 74.10,
        74.45, 74.65, 74.65, 73.90, 73.80, 73.40, 73.70,
        74.05, 73.75, 73.75, 73.65, 73.70, 73.70, 74.20,
        74.15, 75.00, 74.05, 73.85, 73.55, 73.80, 73.40,
        73.85, 75.10, 74.55, 73.75
      ],
    },
    {
      label: 'Cebola',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [
        , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        , , , , , , , , , , , , ,
        73.1, 73.1, 73.7, 73.7, 73.3, 72.9, 72.4, 72.4, 72.4,
        72.4, 72.9, 72.9, 72.9, 72.4, 72.2, 72.4, 72.4, 72.5,
        72.5, 72.3, 72.6, 72.4, 72.4, 72.0, 72.0, 71.9, 71.9,
        71.6, 71.8, 71.9, 71.9, , 72.2, 71.8, 71.5, 71.6,
        71.5, 71.4
      ],
    },
    {
      label: 'Iaguin',
      backgroundColor: 'rgb(0, 99, 132)',
      borderColor: 'rgb(0, 99, 132)',
      data: [
        , , , , , , , , , , , , , , , , , , , , , , , , , , ,
        , , , , , , , , , , , , , , , , , ,
        109.0, 107.6, 107.0, 107.0, 107.0, 108.0, 107.8, 105.8,
        105.5, 106.7, 106.7, 106.7, 105.7, 106.0, 106.1, 105.8,
        106.4, 106.0, 106.0, 105.3, 105.6, 104.4, 104.4, 105.5,
        104.3, 104.3, 105.5, 105.0, 105.5, 104.6, 103.5, 103.8,
        103.8, 104.8, 104.8, 104.5, 104.3, 104.0, 104.0, 105.0,
        104.6, 104.0, 104.6, 103.8, 104.4, 104.4, 104.4, 105.0,
        103.8, , , , , , 105.2, , , 104.9, 105, 104.7,
      ],
    }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    interaction: {
      mode: 'index',
      intersect: false
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 15,
            family: 'Lato'
          }
        }
      },
      tooltip: {
        external: customTooltip
      }
    }

  }
};


var myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function customTooltip(context) {
  // Tooltip Element
  var tooltipEl = document.getElementById('chartjs-tooltip');

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'chartjs-tooltip';
    tooltipEl.innerHTML = '<table></table>';
    document.body.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  var tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set caret Position
  tooltipEl.classList.remove('above', 'below', 'no-transform');
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
    tooltipEl.classList.add('no-transform');
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }

  // Set Text
  if (tooltipModel.body) {
    var titleLines = tooltipModel.title || [];
    var bodyLines = tooltipModel.body.map(getBody);

    var innerHtml = '<thead>';

    titleLines.forEach(function (title) {
      innerHtml += '<tr><th>' + title + '</th></tr>';
    });
    innerHtml += '</thead><tbody>';

    bodyLines.forEach(function (body, i) {
      var colors = tooltipModel.labelColors[i];
      var style = 'background:' + colors.backgroundColor;
      style += '; border-color:' + colors.borderColor;
      style += '; border-width: 2px';
      var span = '<span style="' + style + '"></span>';
      innerHtml += '<tr><td>' + span + body + '</td></tr>';
    });
    innerHtml += '</tbody>';

    var tableRoot = tooltipEl.querySelector('table');
    tableRoot.innerHTML = innerHtml;
  }

  var position = context.chart.canvas.getBoundingClientRect();
  var bodyFont = Chart.helpers.toFont(tooltipModel.options.bodyFont);

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
  tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
  tooltipEl.style.font = bodyFont.string;
  tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
  tooltipEl.style.pointerEvents = 'none';

  console.log(tooltipEl);
}
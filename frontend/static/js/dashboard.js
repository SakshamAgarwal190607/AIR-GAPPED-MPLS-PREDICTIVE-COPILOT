const ctx = document.getElementById('cpuChart');

new Chart(ctx, {

type: 'line',

data: {

labels: [

'10:00',
'10:05',
'10:10',
'10:15',
'10:20',
'10:25',
'10:30',
'10:35'

],

datasets: [{

label: 'CPU Usage',

data: [

31,
35,
42,
55,
70,
82,
92,
97

]

}]

},

options: {

responsive:true

}

});
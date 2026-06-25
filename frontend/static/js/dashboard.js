const cpuChart = document.getElementById("cpuChart");

new Chart(cpuChart, {
    type: "line",
    data: {
        labels: ["1","2","3","4","5","6"],
        datasets: [{
            label: "CPU Usage",
            data: [50,60,70,75,80,90]
        }]
    }
});

const latencyChart = document.getElementById("latencyChart");

new Chart(latencyChart, {
    type: "line",
    data: {
        labels: ["1","2","3","4","5","6"],
        datasets: [{
            label: "Latency",
            data: [20,30,50,70,90,150]
        }]
    }
});
draw_graph = (data) => {
    display_graph()
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',

        // The data for our dataset
        data: {
            labels: data[0],
            datasets: [{
                label: 'My First dataset',
                //backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data[1]
            }]
        },

        // Configuration options go here
        options: {
            //responsive:true,
            //maintainAspectRatio: false
        }
    });
}
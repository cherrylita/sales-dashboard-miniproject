document.addEventListener('DOMContentLoaded', function() {

    /* Level Chart */

    const levelCtx = document.getElementById('levelChart').getContext('2d');
    new Chart(levelCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Volume',
            data: [30, 40, 35, 50, 45, 60, 70],
            backgroundColor: '#9CF2F2',
            borderRadius: 4,
            barThickness: 20,
          },
          {
            label: 'Service',
            data: [20, 25, 30, 20, 25, 30, 25],
            backgroundColor: '#2B2B36',
            borderRadius: 4,
            barThickness: 20,
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: '#aaa' }
          },
          y: {
            stacked: true,
            grid: { color: '#333' }, 
            ticks: {
              display: true,    
              color: '#aaa',
              stepSize: 20,      
              beginAtZero: true  
            }
          }
        }
      }
    });
  
    /* Customer Fulfillment */

    const fulfillmentCtx = document.getElementById('fulfillmentChart').getContext('2d');
    new Chart(fulfillmentCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Last Month',
            data: [3500, 3800, 4000, 4087],
            borderColor: '#A9DFD8',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0
          },
          {
            label: 'This Month',
            data: [4200, 4800, 5200, 5490],
            borderColor: '#20AEF3',
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#aaa' }
          },
          y: {
            grid: { color: '#2D2D3A' },
            ticks: { 
              color: '#aaa',
              callback: function(value) {
                return '$' + value.toLocaleString();
              }
            }
          }
        }
      }
    });
  
    /* Earnings Chart */

    const earningsCtx = document.getElementById('earningsChart').getContext('2d');
    new Chart(earningsCtx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [80, 20],
          backgroundColor: ['#A9DFD8', '#2D2D3A'],
          borderWidth: 0,
          cutout: '65%',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false },
        },
        rotation: -90,
        circumference: 180,
      }
    });
  
    const fulfillmentText = document.createElement('div');
    fulfillmentText.innerHTML = '80%';
    fulfillmentText.style.position = 'absolute';
    fulfillmentText.style.top = '80%';
    fulfillmentText.style.left = '45%';
    fulfillmentText.style.transform = 'translate(-50%, -50%)';
    fulfillmentText.style.fontSize = '24px';
    fulfillmentText.style.color = '#FFFFFF';
    fulfillmentText.style.fontWeight = 'bold';
    document.getElementById('earnings').appendChild(fulfillmentText);
  
    /* Top Products - Progress Bar */

    const progressData = [
        { id: 'progressFill1', percentage: 46, color: '#FEB95A' }, 
        { id: 'progressFill2', percentage: 17, color: '#A9DFD8' }, 
        { id: 'progressFill3', percentage: 19, color: '#F2C8ED' }, 
        { id: 'progressFill4', percentage: 29, color: '#20AEF3' } 
    ];
    
    progressData.forEach(item => {
        const progressFill = document.getElementById(item.id);
        if (progressFill) {
            progressFill.style.backgroundColor = item.color;
            
            let current = 0;
            function animateProgress() {
                if (current < item.percentage) {
                    current++;
                    progressFill.style.width = current + '%';
                    setTimeout(animateProgress, 10); 
                }
            }
            animateProgress();
        }
    });

  /* Visitor Insights */

  const ctx = document.getElementById('visitorChart').getContext('2d');

  new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'New Visitors',
      data: [30, 20, 90, 50, 120, 500, 400, 350, 370, 200, 100, 300], 
      borderColor: '#A9DFD8',
      backgroundColor: 'rgba(126, 226, 255, 0.2)',
      tension: 0.4, 
      pointBackgroundColor: '#FCB859',
      pointRadius: function(context) {
        return context.dataIndex === 5 ? 6 : 3; 
      },
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false 
      }
    },
    scales: {
      y: {
        min: 0,
        suggestedMax: 550,
        ticks: {
          stepSize: 100,
          beginAtZero: true,
        },
        grid: {
          color: '#333',
        }
      }
    }    
  }
});
});
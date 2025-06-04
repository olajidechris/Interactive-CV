document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('skillsChart').getContext('2d');
    
    const skillsData = {
        labels: [
            'Data Analysis & Interpretation', 
            'Technical Proficiencies (SQL, Python)', 
            'Business Analysis',
            'SEO & Keyword Strategy', 
            'Collaboration & Communication', 
            'IT Systems & Consulting'
        ],
        datasets: [{
            label: 'Proficiency Level',
            data: [90, 75, 85, 80, 95, 88],
            backgroundColor: 'rgba(163, 191, 178, 0.2)',
            borderColor: 'rgba(122, 163, 145, 1)',
            pointBackgroundColor: 'rgba(122, 163, 145, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(122, 163, 145, 1)'
        }]
    };

    const chartConfig = {
        type: 'radar',
        data: skillsData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.r !== null) {
                                label += context.parsed.r + '%';
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        },
                        color: '#333'
                    },
                    ticks: {
                        backdropColor: 'transparent',
                        stepSize: 25,
                        display: false
                    },
                    min: 0,
                    max: 100
                }
            }
        }
    };
    
    new Chart(ctx, chartConfig);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

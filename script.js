// Scroll to a specific section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Dynamic Chart using Chart.js
const ctx = document.getElementById('usdChart').getContext('2d');
const usdChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'DOGE Strength',
                data: [9000, 100000, 500000, 450000, 777777, 999999, 10000000],
                borderColor: '#28a745',
                backgroundColor: 'rgba(40, 167, 69, 0.2)',
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#155724',
                },
            },
        },
        scales: {
            x: {
                ticks: { color: '#155724' },
            },
            y: {
                ticks: { color: '#155724' },
                beginAtZero: true,
            },
        },
    },
});

<script>
    import { afterUpdate } from "svelte";

    let ctx;
    let myChart;
    // DATA //
    function createChart() {
        ctx = document.getElementById("primaryChart").getContext("2d");
        myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
                datasets: [
                    {
                        label: "",
                        data: [12, 19, 3, 5, 2, 3, 11],
                        backgroundColor: ["#E2E3F6"],
                        borderColor: ["#8184C4"],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: "Traffic",
                    fontSize: 18,
                },
                legend: {
                    display: false,
                },
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
                responsive: true,
                aspectRatio: 3,
            },
        });
    }
    afterUpdate(() => setTimeout(createChart, 1000));
</script>

<style>
    @media (min-width: 768px){
        canvas{
            width: 90% !important;
			height: 215px !important;
        }
    }
</style>


<canvas id="primaryChart" />
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
                devicePixelRatio: 1,
                title: {
                    display: true,
                    text: "Traffic",
                    fontSize: 18,
                },
                devicePixelRatio: 1,
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
            },
        });
    }
    afterUpdate(() => setTimeout(createChart, 1000));
</script>

<style>
</style>


<canvas id="primaryChart" width="5" height="1" />
<script>
    import { afterUpdate } from "svelte";

    let ctx1, chart1;
    function createSecond() {
        ctx1 = document.getElementById("secondaryChart1").getContext("2d");
        chart1 = new Chart(ctx1, {
            type: "bar",
            data: {
                labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
                datasets: [
                    {
                        label: "Visitors",
                        data: [12, 19, 3, 5, 2, 3, 7],
                        backgroundColor: [
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                        ],
                        borderColor: [
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                            "#8184C4",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                devicePixelRatio: 1,
                title: {
                    display: true,
                    text: "Daily Traffic",
                    fontSize: 18,
                },
                legend: {
                    display: false,
                },
                axes: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        });
    }
    afterUpdate(() => setTimeout(createSecond, 1000));
</script>

<style>
</style>

<canvas id="secondaryChart1" width="3" height="1" />

<script>
    import { afterUpdate } from "svelte";

    let ctx1, chart1;
    function createthird() {
        var ctx2 = document.getElementById("thirdChart").getContext("2d");
        var myChart = new Chart(ctx2, {
            type: "pie",
            data: {
                labels: ["Tablet", "Phone", "Desktop"],
                datasets: [
                    {
                        data: [12, 19, 3],
                        backgroundColor: ["#73B1BF", "#81C98F", "#7377BF"],
                        borderColor: ["#000", "#000", "#000"],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: "Mobile Traffic",
                    fontSize: 18,
                },
                legend: {
                    position: "right",
                    align: "left",
                    labels: {
                        boxWidth: 70,
                        boxHeight: 60,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                        },
                    ],
                },
            },
        });
    }
    afterUpdate(() => setTimeout(createthird, 1000));
</script>

<style>
       canvas{
        height: 150px !important;
    }

    @media (min-width: 768px){
        canvas{
            width: 87% !important;
			height: 170px !important;
        }
    }
</style>


<canvas id="thirdChart" />
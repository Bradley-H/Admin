<script>
	// COMPONENTS //
	import SecondaryChart from "./components/SecondaryChart.svelte";
	import PrimaryChart from "./components/PrimaryChart.svelte";
	import SocialCard from "./components/SocialCard.svelte";
	import ThirdChart from "./components/ThirdChart.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import Header from "./components/Header.svelte";
	import Alert from "./components/Alert.svelte";
	// SVELTE IMPORTS //
	import {fly} from 'svelte/transition'
	// STORES //
	import { global } from "./stores/globalStore.js";
	// CONSTANTS //
	import { social } from "./constants/social.js";
	// REACTIVE VALUES //
	$: testing = console.log($global.notificationActive)

	let innerWidth;
</script>


<style>
	main {
		margin-top: 3rem;
		padding-bottom: 3.5rem;
	}

	.social {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		padding: 0 0.8rem;
	}
	.social h3 {
		margin-bottom: 0.5rem;
	}

	.social-cards {
		display: flex;
	}

	h3 {
		text-align: center;
	}

	.second,
	.third {
		width: 90%;
		margin-top: 0.5rem;
	}

	.alerts,
	.primaryChart,
	.secondary {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.primaryChart {
		margin-top: 0.5rem;
		padding: 0.5rem;
	}
	@media (min-width: 768px) {
		main {
			margin-top: 3rem;
			margin-left: 4.5rem;
		}
		.alerts {
			margin-top: 0.25rem;
		}
		.secondary {
			flex-direction: row;
			margin: 0 0.5rem;
		}
		.primaryChart {
			margin: 0.8rem auto;
		}
	}
</style>

<svelte:window bind:innerWidth={innerWidth}/>

{#if $global.currentPage !== "Logout"}
<div out:fly={{y: -220, duration: 2500}}>
	<Header />
</div>
<div out:fly={{x: -220, duration: 2500}}>
	<Sidebar />
</div>
{/if}


<main>
	<!-- HOME PAGE -->
	{#if $global.currentPage === "Home"}
		<div class="alerts">
			<Alert />
		</div>
		<!-- PRIMARY DASHBOARD -->
		<div class="primaryChart">
			<PrimaryChart />
		</div>
		<!-- SECOND CHART -->
		<div class="secondary">
			<div class="second">
				<SecondaryChart />
			</div>
			<div class="third">
				<ThirdChart />
			</div>
		</div>
		<!-- SOCIAL MEDIA STATS -->
		<div class="social">
			<h3>Social Media Stats</h3>
			<div class="social-cards">
				{#each social as soc (soc.id)}
					<SocialCard {...soc} />
				{/each}
			</div>
		</div>
	{:else if $global.currentPage === "Messages"}
		<!--  -->
	{:else if $global.currentPage === "Settings"}
		<!--  -->
	{:else if $global.currentPage === "Logout"}
		<h3>Hello</h3>
	{/if}
</main>
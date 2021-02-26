<script>
	// COMPONENTS //
	import SecondaryChart from "./components/SecondaryChart.svelte";
	import PrimaryChart from "./components/PrimaryChart.svelte";
	import SocialCard from "./components/SocialCard.svelte";
	import ThirdChart from "./components/ThirdChart.svelte";
	import Activity from "./components/Activity.svelte";
	import Settings from "./components/Settings.svelte";
	import Messages from "./components/Messages.svelte";
	import Sidebar from "./components/Sidebar.svelte";
	import Members from "./components/Members.svelte";
	import Header from "./components/Header.svelte";
	import Alert from "./components/Alert.svelte";
	import Login from "./components/Login.svelte";
	import Msg from "./components/Msg.svelte";
	// SVELTE IMPORTS //
	import { fly} from "svelte/transition";
	// STORES //
	import { global } from "./stores/globalStore.js";
	// CONSTANTS //
	import { social } from "./constants/social.js";
	import { users } from "./constants/users.js";
	import { activities } from "./constants/activities.js";
	// REACTIVE VALUES //
</script>

<style>
	.login {
		position: absolute;
		min-height: 100%;
		min-width: 100%;
		background-image: url("/images/background.jpeg");
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.social {
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		padding: 0 0.8rem;
	}

	.social-cards {
		display: flex;
		margin-bottom: 4rem;
	}

	h3,
	h5 {
		text-align: center;
		margin: 0.5rem 0;
		font-family: var(--primaryFont);
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
		width: 90%;
	}

	.bottom {
		display: flex;
		margin: 1rem 1.1rem;
	}

	.row {
		display: flex;
		flex-direction: column;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin: 0 1rem;
	}

	.bottom .row {
		width: 49%;
	}
	@media (min-width: 768px) {
		main {
			margin-top: 3rem;
			margin-left: 4.5rem;
		}
		.alerts {
			margin-top: 0.25rem;
		}

		.login {
		margin-top: -3rem;
		margin-left: -5rem;
		}
		.secondary {
			flex-direction: row;
			margin: 0 2rem;
		}
		.primaryChart {
			margin: 0.8rem auto;
		}

		.grid {
			grid-template-columns: repeat(4, 1fr);
			margin-left: 0.2rem;
		}
	}
</style>



{#if $global.currentPage !== "Logout"}
	<div out:fly={{ y: -220, duration: 2500 }}>
		<Header />
	</div>
	<div out:fly={{ x: -220, duration: 2500 }}>
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

		<!-- MEMBERS -->
		<div class="row">
			<h5>Newest Members</h5>
			<div class="grid">
				{#each users as user}
					<Members {...user} />
				{/each}
			</div>
		</div>

		<div class="row">
			<h5>Recent Activities</h5>
			<div class="grid">
				{#each activities as act (act.id)}
					<Activity {...act} />
				{/each}
			</div>
		</div>

		<!-- QUICK MESSAGE -->
		<div class="bottom">
			<div class="row">
				<h5>Messages</h5>
				<Messages />
			</div>
			<div class="row">
				<h5>Settings</h5>
				<Settings />
			</div>
		</div>
		<Msg/>
	{:else if $global.currentPage === "Logout"}
		<div class="login">
			<Login/>
		</div>
	{/if}
</main>
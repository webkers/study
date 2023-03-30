<script>
		import { pageData } from '$lib/store/page.js'

		console.log($pageData);
</script>

<div class="container">
	<div class="link-list">
		{#each $pageData as page}
		<a href={`/page/${page.page}`}>{page.page} ({page.type}) -  <span>{page.title}</span></a>
		{/each}
	</div>
</div>

<style>
	.link-list {
		display: flex;
		flex-direction: column;
		gap:10px;
	}
	.link-list a {
		border: 1px solid #dedede;
		background-color: #333333;
		color:#FFFFFF;
		padding: 10px;
	}
	.link-list a span {
		font-size:12px;
	}
</style>


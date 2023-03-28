<script>
// @ts-nocheck

	import { pageData } from '$lib/store/page.js'
	import Click from '$lib/components/Click.svelte'
	import Drag from '$lib/components/Drag.svelte'
	import Movie from '$lib/components/Movie.svelte'
	import { onMount } from 'svelte'

  export let data;

	let pageNo = data.pageNo;
	let innerWidth;
	let width = 1280;
	let height = 720;

	let widthScale = 1;
	let contents = null;

	setPageNo (pageNo)

	function setPageNo (no) {
		pageNo = no;
		contents = $pageData.find( arrData => arrData.page === pageNo)
	}

	function onResize() {
		widthScale = innerWidth / width; 
	}

	onMount( () => {
		innerWidth = window.innerWidth;
		onResize();
	})

</script>

<svelte:window 
	on:resize={onResize} 
	bind:innerWidth
/>

<div class="wrap">
	<div style={`transform: scale(${widthScale}, ${widthScale})`}>
		{#if contents?.type} 
			{#if contents.type === "movie"} 
				<Movie {setPageNo} />
			{/if}
			{#if contents.type === "click"} 
				<Click {contents} {setPageNo} />
			{/if}
			{#if contents.type === "drag"} 
				<Drag {contents} {setPageNo} />
			{/if}
		{/if}
	</div>
</div>



